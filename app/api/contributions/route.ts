import { NextResponse } from 'next/server'

const USERNAME = 'DDooTTaa'
const GITHUB_HEADERS = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'who-is-jinyong-portfolio',
}

type Level = 0 | 1 | 2 | 3 | 4

type ContributionDay = {
  date: string
  count: number
  level: Level
}

export const revalidate = 300

function toLevel(count: number, fallback: Level = 0): Level {
  if (count <= 0) return 0
  if (fallback > 0) return fallback
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 9) return 3
  return 4
}

function parseTooltipCount(text: string) {
  const normalized = text.trim()
  if (/^No contributions/i.test(normalized)) return 0
  const match = normalized.match(/^([\d,]+)\s+contribution/i)
  return match ? Number(match[1].replace(/,/g, '')) : 0
}

function parseContributionHtml(html: string): ContributionDay[] {
  const cells = Array.from(
    html.matchAll(
      /<td\b([^>]*\bContributionCalendar-day\b[^>]*)>[\s\S]*?<tool-tip[^>]*>([^<]*)<\/tool-tip>/g
    )
  )

  const days = cells.flatMap(([, attrs, tooltip]) => {
    const date = attrs.match(/data-date="(\d{4}-\d{2}-\d{2})"/)?.[1]
    if (!date) return []
    const parsedLevel = Number(attrs.match(/data-level="(\d+)"/)?.[1] ?? 0)
    const level = (parsedLevel >= 0 && parsedLevel <= 4 ? parsedLevel : 0) as Level
    const count = parseTooltipCount(tooltip)
    return [{ date, count, level: count === 0 ? 0 : toLevel(count, level) }]
  })

  return days.sort((a, b) => a.date.localeCompare(b.date))
}

async function fetchFromGitHub(): Promise<ContributionDay[] | null> {
  const res = await fetch(`https://github.com/users/${USERNAME}/contributions`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 who-is-jinyong-portfolio',
      Accept: 'text/html',
    },
    next: { revalidate: 300 },
  })

  if (!res.ok) return null
  const days = parseContributionHtml(await res.text())
  return days.length >= 300 ? days : null
}

async function fetchFromJogruber(): Promise<ContributionDay[] | null> {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`, {
    next: { revalidate: 300 },
  })
  if (!res.ok) return null
  const data = await res.json()
  return Array.isArray(data.contributions) ? data.contributions : null
}

async function fetchOwnedRepoCreatedDates() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
  const headers: Record<string, string> = { ...GITHUB_HEADERS }
  if (token) headers.Authorization = `Bearer ${token}`

  const dates = new Set<string>()
  let page = 1

  while (page <= 5) {
    const url = token
      ? `https://api.github.com/user/repos?affiliation=owner&per_page=100&page=${page}`
      : `https://api.github.com/users/${USERNAME}/repos?type=owner&per_page=100&page=${page}`

    const res = await fetch(url, { headers, next: { revalidate: 300 } })
    if (!res.ok) break

    const repos = (await res.json()) as { created_at?: string }[]
    if (!Array.isArray(repos) || repos.length === 0) break

    for (const repo of repos) {
      if (repo.created_at) dates.add(repo.created_at.slice(0, 10))
    }

    if (repos.length < 100) break
    page += 1
  }

  return dates
}

function applyRepoCreations(days: ContributionDay[], createdDates: Set<string>) {
  let extra = 0
  const contributions = days.map((day) => {
    if (!createdDates.has(day.date) || day.count > 0) return day
    extra += 1
    return { date: day.date, count: 1, level: 1 as Level }
  })

  return { contributions, extra }
}

export async function GET() {
  try {
    const days = (await fetchFromGitHub()) ?? (await fetchFromJogruber())
    if (!days) {
      return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 502 })
    }

    const createdDates = await fetchOwnedRepoCreatedDates()
    const { contributions } = applyRepoCreations(days, createdDates)
    const total = contributions.reduce((sum, day) => sum + day.count, 0)

    return NextResponse.json({
      username: USERNAME,
      total,
      contributions,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 502 })
  }
}

'use client'

import { useEffect, useMemo, useState } from 'react'

const GITHUB_USER = 'DDooTTaa'
const MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
const DAY_LABELS = ['', '월', '', '수', '', '금', '']
const LEVEL_COLORS = [
  'var(--contrib-0)',
  'var(--contrib-1)',
  'var(--contrib-2)',
  'var(--contrib-3)',
  'var(--contrib-4)',
]

type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type ContributionResponse = {
  username: string
  total: number
  contributions: ContributionDay[]
}

function toDate(value: string) {
  return new Date(`${value}T00:00:00`)
}

function buildWeeks(days: ContributionDay[]) {
  if (days.length === 0) return [] as (ContributionDay | null)[][]

  const pad = toDate(days[0].date).getDay()
  const cells: (ContributionDay | null)[] = [...Array(pad).fill(null), ...days]
  const weeks: (ContributionDay | null)[][] = []

  for (let i = 0; i < cells.length; i += 7) {
    const week = cells.slice(i, i + 7)
    while (week.length < 7) week.push(null)
    weeks.push(week)
  }

  return weeks
}

function formatContributionLabel(day: ContributionDay) {
  const formatted = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(toDate(day.date))

  if (day.count === 0) return `${formatted}, 기여 없음`
  return `${formatted}, ${day.count}개의 기여`
}

const ContributionGraph = () => {
  const [data, setData] = useState<ContributionResponse | null>(null)
  const [error, setError] = useState(false)
  const [hovered, setHovered] = useState<ContributionDay | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch('/api/contributions')
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed')
        return res.json()
      })
      .then((json: ContributionResponse) => {
        if (!cancelled) setData(json)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const weeks = useMemo(() => buildWeeks(data?.contributions ?? []), [data])

  const monthLabels = useMemo(() => {
    return weeks.map((week, index) => {
      const first = week.find((day) => day)
      if (!first) return ''
      const current = toDate(first.date)
      if (index === 0) return MONTHS[current.getMonth()]
      const prev = weeks[index - 1].find((day) => day)
      if (!prev) return MONTHS[current.getMonth()]
      return toDate(prev.date).getMonth() === current.getMonth() ? '' : MONTHS[current.getMonth()]
    })
  }, [weeks])

  return (
    <div className="gh-card mt-4 p-4">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-normal text-fg">
          {data ? (
            <>
              <strong className="font-semibold">{data.total.toLocaleString('ko-KR')}</strong>
              {' '}contributions in the last year
            </>
          ) : (
            'Contributions'
          )}
        </h3>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-accent hover:underline"
        >
          @{GITHUB_USER}
        </a>
      </div>

      {error && (
        <p className="text-sm text-fg-muted">GitHub 기여 내역을 불러오지 못했습니다.</p>
      )}

      {!error && !data && (
        <div className="h-[130px] animate-pulse rounded-gh bg-canvas-subtle" />
      )}

      {data && (
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div
              className="mb-1 grid"
              style={{
                gridTemplateColumns: `28px repeat(${weeks.length}, 11px)`,
                columnGap: '3px',
              }}
            >
              <span />
              {monthLabels.map((label, index) => (
                <span key={`${label}-${index}`} className="whitespace-nowrap text-[10px] leading-4 text-fg-muted">
                  {label}
                </span>
              ))}
            </div>

            <div className="flex gap-[3px]">
              <div className="flex w-7 shrink-0 flex-col gap-[3px] pt-px">
                {DAY_LABELS.map((label, index) => (
                  <span
                    key={`${label}-${index}`}
                    className="h-[11px] text-[10px] leading-[11px] text-fg-muted"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex gap-[3px]">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.map((day, dayIndex) => {
                      if (!day) {
                        return <span key={`empty-${weekIndex}-${dayIndex}`} className="h-[11px] w-[11px]" />
                      }

                      return (
                        <span
                          key={day.date}
                          title={formatContributionLabel(day)}
                          onMouseEnter={() => setHovered(day)}
                          onMouseLeave={() => setHovered(null)}
                          className="block h-[11px] w-[11px] rounded-[2px] outline-offset-1 hover:outline hover:outline-1 hover:outline-fg-muted"
                          style={{ background: LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0] }}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-fg-muted">
              <span className="min-h-[16px]">
                {hovered ? formatContributionLabel(hovered) : 'GitHub 기여 활동'}
              </span>
              <div className="flex items-center gap-1">
                <span>Less</span>
                {LEVEL_COLORS.map((color) => (
                  <span
                    key={color}
                    className="h-[11px] w-[11px] rounded-[2px]"
                    style={{ background: color }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContributionGraph

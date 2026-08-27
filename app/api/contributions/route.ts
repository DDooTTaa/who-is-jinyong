import { NextResponse } from 'next/server'

const USERNAME = 'DDooTTaa'

export const revalidate = 3600

export async function GET() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 502 })
    }

    const data = await res.json()

    return NextResponse.json({
      username: USERNAME,
      total: data.total?.lastYear ?? 0,
      contributions: data.contributions ?? [],
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 502 })
  }
}

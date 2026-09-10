import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0d1117',
          color: '#e6edf3',
        }}
      >
        <div style={{ fontSize: 28, color: '#8b949e', marginBottom: 20 }}>Portfolio</div>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1.5 }}>Gong Jinyong</div>
        <div style={{ fontSize: 36, color: '#2f81f7', marginTop: 12 }}>{site.jobTitle}</div>
        <div style={{ fontSize: 28, color: '#8b949e', marginTop: 36, maxWidth: 900 }}>
          AI-first product engineer building web products fast.
        </div>
      </div>
    ),
    { ...size }
  )
}

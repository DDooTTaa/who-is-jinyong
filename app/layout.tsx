import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import BackgroundEffects from '@/components/BackgroundEffects'

export const metadata: Metadata = {
  title: '공진용 포트폴리오',
  description: '좋은 문장이 될 개발자,공진용',
  keywords: ['포트폴리오', '개발자', '공진용', 'Next.js', 'React'],
  authors: [{ name: '공진용' }],
  openGraph: {
    title: '공진용 포트폴리오',
    description: '좋은 문장이 될 개발자,공진용',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="mystical-bg min-h-screen">
        <BackgroundEffects />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}



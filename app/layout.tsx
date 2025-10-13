import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import BackgroundEffects from '@/components/BackgroundEffects'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Who is Jinyong? | 공진용 포트폴리오',
  description: '공진용의 신비로운 디지털 포트폴리오 - 개발자, 창작자, 꿈꾸는 사람',
  keywords: ['포트폴리오', '개발자', '공진용', 'Next.js', 'React'],
  authors: [{ name: '공진용' }],
  openGraph: {
    title: 'Who is Jinyong? | 공진용 포트폴리오',
    description: '공진용의 신비로운 디지털 포트폴리오',
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
      <body className={`${inter.className} mystical-bg min-h-screen`}>
        <BackgroundEffects />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}



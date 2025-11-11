import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import BackgroundEffects from '@/components/BackgroundEffects'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '공진용 포트폴리오',
  description: '좋은 문장이 될 개발자, 꿈꾸는 사람, 공진용',
  keywords: ['포트폴리오', '개발자', '공진용', 'Next.js', 'React'],
  authors: [{ name: '공진용' }],
  openGraph: {
    title: '공진용 포트폴리오',
    description: '좋은 문장이 될 개발자, 꿈꾸는 사람, 공진용',
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



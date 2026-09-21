import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import Thinking from '@/components/Thinking'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: '일하는 방식',
  description:
    '버린 기능, 스스로 정의한 문제, 싼 검증, 성공 지표, AI 레버리지. 공진용이 제품을 만드는 기준입니다.',
  alternates: {
    canonical: '/thinking',
  },
  openGraph: {
    title: '일하는 방식 | 공진용',
    description:
      '버린 기능, 스스로 정의한 문제, 싼 검증, 성공 지표, AI 레버리지. 공진용이 제품을 만드는 기준입니다.',
    url: `${site.url}/thinking`,
  },
  twitter: {
    card: 'summary_large_image',
    title: '일하는 방식 | 공진용',
    description:
      '버린 기능, 스스로 정의한 문제, 싼 검증, 성공 지표, AI 레버리지. 공진용이 제품을 만드는 기준입니다.',
  },
}

export default function ThinkingPage() {
  return (
    <SiteShell>
      <Thinking />
    </SiteShell>
  )
}

import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import Thinking from '@/components/Thinking'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: '생각',
  description:
    '굳이 문제를 찾는 지원자 공진용. 직무 밖까지 찾아 다닌 경험과 아정당에 지원하는 이유입니다.',
  alternates: {
    canonical: '/thinking',
  },
  openGraph: {
    title: '생각 | 공진용',
    description:
      '굳이 문제를 찾는 지원자 공진용. 직무 밖까지 찾아 다닌 경험과 아정당에 지원하는 이유입니다.',
    url: `${site.url}/thinking`,
  },
  twitter: {
    card: 'summary_large_image',
    title: '생각 | 공진용',
    description:
      '굳이 문제를 찾는 지원자 공진용. 직무 밖까지 찾아 다닌 경험과 아정당에 지원하는 이유입니다.',
  },
}

export default function ThinkingPage() {
  return (
    <SiteShell>
      <Thinking />
    </SiteShell>
  )
}

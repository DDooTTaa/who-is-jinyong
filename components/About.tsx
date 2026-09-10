'use client'

import { BookMarked, Heart, Sparkles, Users } from 'lucide-react'
import ContributionGraph from '@/components/ContributionGraph'
import PersonalProjects from '@/components/Pinned'

const values = [
  {
    icon: Sparkles,
    title: 'AI 활용',
    description: 'AI를 통해 기획·디자인·개발·검증 과정을 신속하게 진행합니다.',
  },
  {
    icon: Heart,
    title: '메모하는 습관',
    description: '불필요한 리소스를 줄이기 위해 AI를 활용해 업무일지를 꼼꼼히 작성합니다.',
  },
  {
    icon: Users,
    title: '협업의 자세',
    description: '성장을 위해 겸손한 자세로 타 직군과 적극적으로 논의합니다.',
  },
]

const About = () => {
  return (
    <section id="about" className="mb-6">
      <article className="gh-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-border bg-canvas-subtle px-4 py-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-fg">
            <BookMarked size={16} className="text-fg-muted" />
            <span className="font-mono text-[13px]">jinyong / README.md</span>
          </div>
        </div>

        <div className="px-4 py-6 sm:px-8">
          <h2 className="mb-3 border-b border-border pb-2 text-[24px] font-semibold">
            About Me
          </h2>
          <p className="mb-3 text-[16px] leading-7 text-fg">
            2021년부터 FE 개발자로 일했고, 26년 초부터는 AI를 사용한 기획, 디자인, FE(웹/앱), 백엔드
            역할을 수행하며 개발을 진행하고 있습니다.
          </p>
          <p className="mb-3 text-[16px] leading-7 text-fg">
            5,000개 이상 매장에서 쓰는 서비스를 운영하고, 사용자가 가게의 매출 데이터를 차트나 표로 볼 수
            있는 AWS 기반 LLM 서비스를 개발했습니다. 보안이나 SEO, 데이터 수집 같은 디테일을 중요하게
            생각합니다.
          </p>
          <p className="mb-0 text-[16px] leading-7 text-fg">
            짧은 주기로 아이디어를 검증하고 개발합니다. 항상 배우는 자세로 두려워하지 않고 탐구하며, 겸손한
            자세로 팀원들과 소통합니다.
          </p>
        </div>
      </article>

      <PersonalProjects />

      <ContributionGraph />

      <article className="gh-card mt-4 overflow-hidden">
        <div className="px-4 py-6 sm:px-8">
          <h3 className="mb-3 border-b border-border pb-2 text-[20px] font-semibold">Values</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-gh border border-border p-4">
                <div className="mb-2 flex items-center gap-2">
                  <value.icon size={16} className="text-fg-muted" />
                  <h4 className="text-sm font-semibold">{value.title}</h4>
                </div>
                <p className="text-sm leading-6 text-fg-muted">
                  {value.title === '메모하는 습관' ? (
                    <>
                      불필요한 리소스를 줄이기 위해{' '}
                      <a
                        href="https://www.notion.so/shorthaired-circle-c672/8-fff922a4999481d2bbf5f7c4c63ccafc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        업무일지
                      </a>
                      를 꼼꼼히 작성합니다.
                    </>
                  ) : (
                    value.description
                  )}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mb-3 mt-8 border-b border-border pb-2 text-[20px] font-semibold">주요 성과</h3>
          <div className="space-y-5 text-sm leading-6">
            <div>
              <h4 className="mb-1 font-semibold text-fg">메뉴잇 (2024.04 ~ 재직중)</h4>
              <ul className="list-disc space-y-1 pl-5 text-fg-muted">
                <li><strong className="text-fg">채널톡 자체 AI 솔루션</strong> — AWS EventBridge Scheduler·Lambda·Bedrock으로 단독 개발</li>
                <li><strong className="text-fg">AWS 기반 LLM 서비스</strong> — 가게 매출 데이터를 차트·표로 조회할 수 있게 개발</li>
                <li><strong className="text-fg">페이플 결제 연동</strong> — 심사 요청부터 백엔드·DB까지 전 과정 참여</li>
                <li><strong className="text-fg">CS 인원 50% 감축</strong>에 따른 고객 문의 자동화 서비스 기획·디자인·개발</li>
                <li><strong className="text-fg">컴포넌트 공통화</strong>로 30,000줄 이상의 코드 감축 및 유지보수 효율성 향상</li>
                <li><strong className="text-fg">i18n 도입</strong>으로 서비스 전체 다국어 처리 (한국어, 영어) 구현</li>
                <li>25개 이상의 Feature 개발과 500개 이상의 BugFix 수행</li>
                <li><strong className="text-fg">AI</strong>를 활용하여 대표님의 아이디어를 신속하게 개발 및 검증</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-fg">패스트뷰 (2022.05 ~ 2023.03)</h4>
              <ul className="list-disc space-y-1 pl-5 text-fg-muted">
                <li><strong className="text-fg">운영팀의 업무 효율 50% 이상 향상</strong> - CMS 및 광고 관리 서비스 개발</li>
                <li><strong className="text-fg">ITwizard(몽골) 개발팀의 리더</strong>로서 Git-flow 기반 협업 프로세스 정착</li>
                <li>API 표준화 가이드라인 수립 및 백엔드 팀과의 협업으로 구조 통합</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-fg">트럼피아 (2021.11 ~ 2022.04)</h4>
              <ul className="list-disc space-y-1 pl-5 text-fg-muted">
                <li>Vue 기반 SMS 투표 자동화 서비스 운영 및 개선</li>
                <li>100개 이상의 버그 픽스 및 레거시 코드 리팩토링</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default About

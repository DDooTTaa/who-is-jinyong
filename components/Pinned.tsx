'use client'

import { useEffect, useState, type ElementType } from 'react'
import { BarChart2, Book, Database, ExternalLink, FolderGit2, X } from 'lucide-react'
import { SiDart, SiFirebase, SiFlutter, SiGoogletagmanager, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel, SiVite } from 'react-icons/si'

type TechIcon = {
  tooltip: string
  icon: ElementType
  className: string
}

type Project = {
  name: string
  href: string
  description: string
  language: string
  languageColor: string
  visibility: 'Public' | 'Private'
  topic?: string
  role: string
  challenges: string
  solutions: string
  learnings: string
  icons: TechIcon[]
}

const projects: Project[] = [
  {
    name: 'HOLO CARD',
    href: 'https://holo-card-nine.vercel.app',
    description: '포인터 움직임에 맞춰 틸트·글레어·홀로그램 질감이 동시에 반응하는 카드 UI 생성기입니다. 3D 모델링 없이 CSS만 사용하여 보더와 광택을 실시간으로 움직이도록 설계했습니다.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    visibility: 'Public',
    role: '기획 / 디자인 / FE',
    challenges: '포인터 움직임에 맞춰 틸트·글레어·홀로그램 질감이 동시에 반응해야 해서, CSS만으로 자연스러운 깊이감을 만들기 어려웠습니다.',
    solutions: '포인터 좌표를 CSS 변수로 넘겨 보더와 광택을 실시간으로 움직이게 하고, 펄스 글로우로 카드가 살아 있는 느낌을 더했습니다.',
    learnings: '미세한 모션은 프레임 단위보다 빛·질감·속도의 균형이 더 중요하다는 점을 배웠습니다.',
    icons: [
      { tooltip: 'React', icon: SiReact, className: 'text-[#61dafb]' },
      { tooltip: 'Vercel', icon: SiVercel, className: '' },
      { tooltip: 'Tailwind', icon: SiTailwindcss, className: 'text-[#06b6d4]' },
    ],
  },
  {
    name: 'itTest',
    href: 'https://test-it-chi-five.vercel.app/login',
    description: '결제 데이터 운영 관리 서비스.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    visibility: 'Private',
    role: '기획 / 프론트엔드 개발',
    challenges: '결제 데이터를 운영자가 빠르게 확인하고 처리할 수 있어야 해서, 인증·권한과 상태 흐름을 처음부터 맞춰야 했습니다.',
    solutions: '로그인 기반 접근 구조를 만들고, 결제 데이터를 조회·관리하는 화면과 운영 플로우를 서비스 형태로 구현했습니다.',
    learnings: '결제 운영 도구는 화면보다 권한, 상태, 실수 방지 UX가 먼저라는 점을 체감했습니다.',
    icons: [
      { tooltip: 'React', icon: SiReact, className: 'text-[#61dafb]' },
      { tooltip: 'Next.js', icon: SiNextdotjs, className: '' },
      { tooltip: 'Vercel', icon: SiVercel, className: '' },
    ],
  },
  {
    name: 'ShippingSearch',
    href: 'https://shipping-search.vercel.app/',
    description: '운송장 번호만 입력하면 국내 주요 택배사를 자동 감지해 배송 이력을 조회하는 웹 서비스입니다. 택배사마다 조회 방식과 번호 형식이 달라 패턴으로 후보를 좁힌 뒤 병렬 조회하도록 만들었고, CJ·우체국·한진·롯데·로젠·경동·합동을 지원하는 기능을 만들어 배포했습니다.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    visibility: 'Private',
    role: '기획 / 디자인 / FE',
    challenges: '택배사마다 조회 방식과 운송장 형식이 달라, 번호만으로 정확한 결과를 내기가 어려웠습니다. 12자리처럼 여러 택배사가 겹치는 경우도 있었습니다.',
    solutions: '운송장 패턴으로 후보 택배사를 좁힌 뒤, 필요하면 병렬 조회해 실제 배송 이력이 있는 결과를 반환하도록 만들었습니다. CJ·우체국·한진·롯데·로젠·경동·합동을 지원합니다.',
    learnings: '외부 사이트 연동은 단일 API보다, 형식 감지·실패 처리·결과 정규화가 서비스 품질을 가른다는 점을 배웠습니다.',
    icons: [
      { tooltip: 'TypeScript', icon: SiTypescript, className: 'text-[#3178c6]' },
      { tooltip: 'Node.js', icon: SiNodedotjs, className: 'text-[#339933]' },
      { tooltip: 'Vercel', icon: SiVercel, className: '' },
    ],
  },
  {
    name: 'rotape',
    href: 'https://rotape.site/',
    description: '로테이션 소개팅 웹 서비스. 자기 소개와 매칭 플로우, 인증·저장·공유, 유저 관리를 위한 어드민 페이지까지 한 서비스로 만들었습니다. Next.js, TypeScript, Tailwind로 프론트를 구현하고 Firebase Auth·Firestore·Storage를 연동해 Vercel에 배포했습니다.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    topic: 'AI First',
    visibility: 'Public',
    role: '기획 / 디자인 / FE / BE',
    challenges: '인연을 남기는 서비스라 감성적인 UX와 실제 저장·공유 흐름을 동시에 맞춰야 했습니다.',
    solutions: 'AI를 활용해 기획부터 구현까지 빠르게 반복하고, Firebase로 인증·데이터·스토리지를 연결해 서비스를 배포했습니다.',
    learnings: '감성 서비스도 데이터 구조와 공유 플로우가 명확해야 경험이 살아난다는 점을 배웠습니다.',
    icons: [
      { tooltip: 'React 19', icon: SiReact, className: 'text-[#61dafb]' },
      { tooltip: 'Next.js', icon: SiNextdotjs, className: '' },
      { tooltip: 'Vite 7', icon: SiVite, className: 'text-[#646cff]' },
      { tooltip: 'Recharts', icon: BarChart2, className: 'text-[#8884d8]' },
      { tooltip: 'Firebase (Auth, Firestore)', icon: SiFirebase, className: 'text-[#ffca28]' },
      { tooltip: 'Firebase Storage', icon: Database, className: 'text-accent' },
      { tooltip: 'GTM', icon: SiGoogletagmanager, className: 'text-[#e37400]' },
      { tooltip: 'Tailwind', icon: SiTailwindcss, className: 'text-[#06b6d4]' },
      { tooltip: 'Vercel', icon: SiVercel, className: '' },
    ],
  },
  {
    name: 'bizblah',
    href: 'https://bizblah.com/',
    description: '프랜차이즈 점주 익명 커뮤니티. 익명성을 중시하며 기획·디자인·프론트·백엔드를 한 흐름으로 설계했습니다. AI를 활용해 3일 안에 Next.js, TypeScript, Tailwind, Firebase(Auth/Firestore)로 핵심 기능을 구현하고 Vercel에 배포했습니다.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    topic: 'AI First',
    visibility: 'Public',
    role: '기획 / 디자인 / FE / BE',
    challenges: '익명성과 신뢰가 동시에 필요한 커뮤니티라, 짧은 일정 안에 기획·디자인·개발을 모두 맞춰야 했습니다.',
    solutions: 'AI를 활용해 3일 안에 프론트·백엔드·디자인·기획·데이터 수집까지 구현하고 서비스를 배포했습니다.',
    learnings: '범위를 빠르게 자르고 핵심 흐름만 먼저 만들면, 완성도 있는 서비스를 짧은 시간에 낼 수 있다는 확신을 얻었습니다.',
    icons: [
      { tooltip: 'React 19', icon: SiReact, className: 'text-[#61dafb]' },
      { tooltip: 'Next.js', icon: SiNextdotjs, className: '' },
      { tooltip: 'Vite 7', icon: SiVite, className: 'text-[#646cff]' },
      { tooltip: 'Recharts', icon: BarChart2, className: 'text-[#8884d8]' },
      { tooltip: 'Firebase (Auth, Firestore)', icon: SiFirebase, className: 'text-[#ffca28]' },
      { tooltip: 'GTM', icon: SiGoogletagmanager, className: 'text-[#e37400]' },
      { tooltip: 'Tailwind', icon: SiTailwindcss, className: 'text-[#06b6d4]' },
      { tooltip: 'Vercel', icon: SiVercel, className: '' },
    ],
  },
  {
    name: 'grand-festival',
    href: 'https://github.com/sonyong4013/grandFestival/tree/main/grand_festival',
    description: '큰고모 칠순 축하 프로젝트',
    language: 'Dart',
    languageColor: '#00B4AB',
    visibility: 'Public',
    role: '디자인 / Flutter 개발',
    challenges: '가족과 함께 쓰는 축하 서비스라 기술보다 누구나 쉽게 보고 남길 수 있는 흐름이 중요했습니다.',
    solutions: 'Flutter로 모바일 중심 화면을 만들고, 축하 메시지를 남기고 볼 수 있는 간단한 흐름으로 구성했습니다.',
    learnings: '실제 사용자가 가까운 사람일수록, 화려한 기능보다 따뜻한 사용성이 먼저라는 점을 배웠습니다.',
    icons: [
      { tooltip: 'Dart', icon: SiDart, className: 'text-[#0175C2]' },
      { tooltip: 'Flutter', icon: SiFlutter, className: 'text-[#02569B]' },
      { tooltip: 'Vercel', icon: SiVercel, className: '' },
    ],
  },
  {
    name: 'enjoy-rectangle',
    href: 'https://enjoy-rectangle.vercel.app/puzzle',
    description: '4x4 회전 퍼즐 게임 - 색을 칠하고 뒤집고 회전해 보세요!',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    visibility: 'Public',
    role: '기획 / 프론트엔드 개발',
    challenges: '색칠·뒤집기·회전이 한 보드에서 겹치다 보니, 상태 관리가 조금만 꼬여도 퍼즐이 깨졌습니다.',
    solutions: '보드 상태를 규칙 단위로 나눠 처리하고, 바로 플레이할 수 있게 웹으로 배포했습니다.',
    learnings: '작은 인터랙션 게임일수록 상태 전이를 단순하게 설계해야 재미가 살아난다는 점을 배웠습니다.',
    icons: [
      { tooltip: 'React', icon: SiReact, className: 'text-[#61dafb]' },
      { tooltip: 'Vite', icon: SiVite, className: 'text-[#646cff]' },
      { tooltip: 'Vercel', icon: SiVercel, className: '' },
    ],
  },
]

const featuredOrder = ['bizblah', 'rotape', 'HOLO CARD', 'ShippingSearch']
const orderedProjects = [
  ...featuredOrder.flatMap((name) => projects.filter((project) => project.name === name)),
  ...projects.filter((project) => !featuredOrder.includes(project.name)),
]

const PersonalProjects = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <section id="pinned" className="mt-4">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="gh-card flex w-full items-center justify-between gap-4 px-6 py-7 text-left hover:bg-canvas-subtle"
      >
        <span className="flex min-w-0 items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-gh border border-border bg-canvas-subtle">
            <FolderGit2 size={22} className="text-fg-muted" />
          </span>
          <span>
            <span className="block text-xl font-semibold text-fg">개인 프로젝트</span>
          </span>
        </span>
        <span className="gh-btn gh-btn-primary shrink-0">목록 보기</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            aria-label="팝업 닫기"
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="personal-projects-title"
            className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-border bg-canvas shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border bg-canvas-subtle px-5 py-3">
              <div className="flex min-w-0 items-center gap-2">
                <FolderGit2 size={18} className="text-fg-muted" />
                <h2 id="personal-projects-title" className="truncate text-base font-semibold">
                  개인 프로젝트
                </h2>
                <span className="rounded-full border border-border px-2 text-[12px] text-fg-muted">
                  {orderedProjects.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="gh-btn h-8 w-8 p-0"
                aria-label="닫기"
              >
                <X size={16} />
              </button>
            </div>

            <div className="overflow-y-auto p-5">
              <div className="grid gap-4 md:grid-cols-2">
                {orderedProjects.map((project) => {
                  const hasPulseBorder =
                    project.name === 'HOLO CARD' ||
                    project.name === 'bizblah' ||
                    project.name === 'rotape'
                  const card = (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`gh-card flex h-full w-full flex-col p-5 text-left hover:bg-canvas-subtle${
                        hasPulseBorder ? ' holo-pulse-border-inner' : ''
                      }`}
                    >
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Book size={16} className="text-fg-muted" />
                        <span className="text-base font-semibold text-accent">{project.name}</span>
                        <span className="rounded-full border border-border px-2 text-[12px] text-fg-muted">
                          {project.visibility}
                        </span>
                        <span className="text-[12px] text-fg-muted">{project.role}</span>
                      </div>
                      <p className="mb-4 flex-1 text-sm leading-6 text-fg-muted">{project.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.icons.map((item) => (
                          <span
                            key={item.tooltip}
                            className="tech-icon-tooltip inline-flex cursor-help"
                            data-tooltip={item.tooltip}
                          >
                            <item.icon size={18} className={item.className} />
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between gap-3 text-xs text-fg-muted">
                        <span className="inline-flex items-center gap-1">
                          <span
                            className="h-3 w-3 rounded-full"
                            style={{ background: project.languageColor }}
                          />
                          {project.language}
                        </span>
                        <span className="inline-flex items-center gap-1 text-accent">
                          <ExternalLink size={12} />
                          사이트 보기
                        </span>
                      </div>
                    </a>
                  )

                  if (hasPulseBorder) {
                    return (
                      <div key={project.name} className="holo-pulse-border">
                        {card}
                      </div>
                    )
                  }

                  return <div key={project.name}>{card}</div>
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PersonalProjects

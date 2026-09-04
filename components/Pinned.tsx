'use client'

import { useEffect, useState, type ComponentType } from 'react'
import { BarChart2, Book, ChevronLeft, Database, ExternalLink, FolderGit2, X } from 'lucide-react'
import { SiDart, SiFirebase, SiFlutter, SiGoogletagmanager, SiNextdotjs, SiReact, SiTailwindcss, SiVercel, SiVite } from 'react-icons/si'

type TechIcon = {
  tooltip: string
  icon: ComponentType<{ size?: number; className?: string }>
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
    name: 'holo-card',
    href: 'https://holo-card-nine.vercel.app',
    description: '홀로그램 카드 인터랙션을 구현한 UI 컴포넌트 실험 프로젝트.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    visibility: 'Public',
    role: '기획 / 디자인 / 프론트엔드 개발',
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
    name: 'rotape',
    href: 'https://rotape.site/',
    description: 'Rotape - 한 컷의 테이프처럼 영원할 당신의 인연.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    topic: 'AI First',
    visibility: 'Public',
    role: '기획 / 디자인 / 프론트엔드 개발',
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
    description: '프랜차이즈 점주 익명 커뮤니티. AI를 활용해 3일 안에 FE·BE·디자인·기획·데이터 수집 구현.',
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

const PersonalProjects = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)

  const closeModal = () => {
    setOpen(false)
    setSelected(null)
  }

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (selected) {
        setSelected(null)
        return
      }
      closeModal()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, selected])

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
            onClick={closeModal}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="personal-projects-title"
            className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-border bg-canvas shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border bg-canvas-subtle px-5 py-3">
              <div className="flex min-w-0 items-center gap-2">
                {selected ? (
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="gh-btn h-8 gap-1 px-2"
                    aria-label="목록으로"
                  >
                    <ChevronLeft size={16} />
                    목록
                  </button>
                ) : (
                  <FolderGit2 size={18} className="text-fg-muted" />
                )}
                <h2 id="personal-projects-title" className="truncate text-base font-semibold">
                  {selected ? selected.name : '개인 프로젝트'}
                </h2>
                {!selected && (
                  <span className="rounded-full border border-border px-2 text-[12px] text-fg-muted">
                    {projects.length}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="gh-btn h-8 w-8 p-0"
                aria-label="닫기"
              >
                <X size={16} />
              </button>
            </div>

            <div className="overflow-y-auto p-5">
              {selected ? (
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Book size={16} className="text-fg-muted" />
                    <span className="text-lg font-semibold text-fg">{selected.name}</span>
                    <span className="rounded-full border border-border px-2 text-[12px] text-fg-muted">
                      {selected.visibility}
                    </span>
                    <span className="rounded-full border border-border px-2 text-[12px] text-fg-muted">
                      {selected.role}
                    </span>
                    {selected.topic && <span className="gh-topic">{selected.topic}</span>}
                  </div>

                  <p className="text-sm leading-6 text-fg">{selected.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {selected.icons.map((item) => (
                      <span
                        key={item.tooltip}
                        className="tech-icon-tooltip inline-flex cursor-help"
                        data-tooltip={item.tooltip}
                      >
                        <item.icon size={18} className={item.className} />
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 rounded-gh border border-border bg-canvas-subtle p-4 text-sm leading-6">
                    <div>
                      <h3 className="mb-1 font-semibold text-danger">어려웠던 점</h3>
                      <p className="text-fg-muted">{selected.challenges}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-success">해결 방법</h3>
                      <p className="text-fg-muted">{selected.solutions}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-accent">배운 점</h3>
                      <p className="text-fg-muted">{selected.learnings}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-xs text-fg-muted">
                    <span className="inline-flex items-center gap-1">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ background: selected.languageColor }}
                      />
                      {selected.language}
                    </span>
                    <a
                      href={selected.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gh-btn gh-btn-primary h-8 text-xs"
                    >
                      <ExternalLink size={12} />
                      사이트 보기
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {projects.map((project) => {
                    const hasPulseBorder = project.name === 'holo-card' || project.name === 'bizblah'
                    const card = (
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        className={`gh-card flex h-full w-full flex-col p-5 text-left hover:bg-canvas-subtle${
                          hasPulseBorder ? ' holo-pulse-border-inner' : ''
                        }`}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <Book size={16} className="text-fg-muted" />
                          <span className="text-base font-semibold text-accent">{project.name}</span>
                          <span className="rounded-full border border-border px-2 text-[12px] text-fg-muted">
                            {project.visibility}
                          </span>
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
                          <span className="text-accent">상세 보기</span>
                        </div>
                      </button>
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
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PersonalProjects

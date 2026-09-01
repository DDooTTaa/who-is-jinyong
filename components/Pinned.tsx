'use client'

import { useEffect, useState } from 'react'
import { BarChart2, Book, Database, ExternalLink, FolderGit2, X } from 'lucide-react'
import { SiDart, SiFirebase, SiFlutter, SiGoogletagmanager, SiNextdotjs, SiReact, SiTailwindcss, SiVercel, SiVite } from 'react-icons/si'

const projects = [
  {
    name: 'holo-card',
    href: 'https://holo-card-nine.vercel.app',
    description: '홀로그램 카드 인터랙션을 구현한 UI 컴포넌트 실험 프로젝트.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    visibility: 'Public',
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
    icons: [
      { tooltip: 'React', icon: SiReact, className: 'text-[#61dafb]' },
      { tooltip: 'Vite', icon: SiVite, className: 'text-[#646cff]' },
      { tooltip: 'Vercel', icon: SiVercel, className: '' },
    ],
  },
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
        <span className="gh-btn gh-btn-primary shrink-0">열기</span>
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
              <div className="flex items-center gap-2">
                <FolderGit2 size={18} className="text-fg-muted" />
                <h2 id="personal-projects-title" className="text-base font-semibold">
                  개인 프로젝트
                </h2>
                <span className="rounded-full border border-border px-2 text-[12px] text-fg-muted">
                  {projects.length}
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
                {projects.map((project) => {
                  const isHoloCard = project.name === 'holo-card'
                  const card = (
                    <div
                      className={`gh-card flex flex-col p-5 hover:bg-canvas-subtle${
                        isHoloCard ? ' holo-pulse-border-inner' : ''
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
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:underline"
                        >
                          <ExternalLink size={12} />
                          열기
                        </a>
                      </div>
                    </div>
                  )

                  if (isHoloCard) {
                    return (
                      <div key={project.name} className="holo-pulse-border">
                        {card}
                      </div>
                    )
                  }

                  return (
                    <div key={project.name}>
                      {card}
                    </div>
                  )
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

'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import { BookMarked, BookOpen, Briefcase, GraduationCap, LayoutDashboard, Mail, Moon, Package, Sun, Users } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const tabs = [
  { name: 'Overview', href: '#home', icon: LayoutDashboard },
  { name: 'README', href: '#about', icon: BookOpen },
  { name: 'Skills', href: '#skills', icon: Package },
  { name: 'Repositories', href: '#projects', icon: Briefcase },
  { name: 'Papers', href: '#patent', icon: BookMarked },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Community', href: '#community', icon: Users },
  { name: 'Contact', href: '#contact', icon: Mail },
]

const ProfileTabs = () => {
  const [active, setActive] = useState('#home')
  const { theme, toggle, mounted } = useTheme()

  useEffect(() => {
    const ids = tabs.map((tab) => tab.href.slice(1)).filter((id) => id !== 'home')
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 80) {
          setActive('#home')
          return
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.3, 0.6] }
    )

    elements.forEach((el) => observer.observe(el))

    const onScroll = () => {
      if (window.scrollY < 80) setActive('#home')
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleTabClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href !== '#home') return

    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActive('#home')
    history.replaceState(null, '', '#home')
  }

  return (
    <div className="sticky top-0 z-40 -mx-4 mb-6 border-b border-border bg-canvas px-4">
      <div className="flex items-center gap-2">
        <nav aria-label="페이지 섹션" className="flex min-w-0 flex-1 gap-0 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = active === tab.href
            return (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => handleTabClick(event, tab.href)}
                className={`relative flex shrink-0 items-center gap-2 px-4 py-3 text-sm whitespace-nowrap ${
                  isActive ? 'font-semibold text-fg' : 'font-medium text-fg-muted hover:text-fg'
                }`}
              >
                <tab.icon size={16} />
                {tab.name}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-[-1px] h-[2px] rounded-t bg-[#fd8c73]" />
                )}
              </a>
            )
          })}
        </nav>
        <button
          type="button"
          onClick={toggle}
          className="gh-btn mb-1 h-8 w-8 shrink-0 p-0"
          aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
        >
          {mounted && theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </div>
  )
}

export default ProfileTabs

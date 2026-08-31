'use client'

import { useEffect, useState } from 'react'
import { BookOpen, Briefcase, LayoutDashboard, Mail, Moon, Package, Sun, Users } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const tabs = [
  { name: 'Overview', href: '#home', icon: LayoutDashboard },
  { name: 'README', href: '#about', icon: BookOpen },
  { name: 'Skills', href: '#skills', icon: Package },
  { name: 'Repositories', href: '#projects', icon: Briefcase },
  { name: 'Community', href: '#community', icon: Users },
  { name: 'Contact', href: '#contact', icon: Mail },
]

const ProfileTabs = () => {
  const [active, setActive] = useState('#home')
  const { theme, toggle, mounted } = useTheme()

  useEffect(() => {
    const ids = tabs.map((tab) => tab.href.slice(1))
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
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
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-0 z-40 -mx-4 mb-6 border-b border-border bg-canvas px-4">
      <div className="flex items-center gap-2">
        <nav className="flex min-w-0 flex-1 gap-0 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = active === tab.href
            return (
              <a
                key={tab.name}
                href={tab.href}
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

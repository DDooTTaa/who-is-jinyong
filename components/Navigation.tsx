'use client'

import { useState } from 'react'
import { BookOpen, Briefcase, LayoutDashboard, Mail, Menu, Moon, Sun, Users, X } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const navItems = [
  { name: 'Overview', href: '#home', icon: LayoutDashboard },
  { name: 'README', href: '#about', icon: BookOpen },
  { name: 'Repositories', href: '#projects', icon: Briefcase },
  { name: 'Community', href: '#community', icon: Users },
  { name: 'Contact', href: '#contact', icon: Mail },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggle, mounted } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-header/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-4 px-4">
        <a href="#home" className="flex shrink-0 items-center gap-2 text-fg">
          <svg viewBox="0 0 16 16" width="32" height="32" aria-hidden="true" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          <span className="text-[16px] font-semibold tracking-tight">공진용</span>
        </a>

        <nav className="hidden min-w-0 flex-1 items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-md px-2 py-1 text-sm font-medium text-fg-muted hover:bg-canvas-subtle hover:text-fg"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="gh-btn h-8 w-8 p-0"
            aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {mounted && theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="gh-btn h-8 w-8 p-0 md:hidden"
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-header px-4 py-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-fg hover:bg-canvas-subtle"
            >
              <item.icon size={16} className="text-fg-muted" />
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navigation

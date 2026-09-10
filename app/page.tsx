'use client'

import ProfileSidebar from '@/components/ProfileSidebar'
import ProfileTabs from '@/components/ProfileTabs'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Community from '@/components/Community'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <div id="home" className="h-px w-full scroll-mt-0" aria-hidden="true" />
      <main>
        <div className="mx-auto max-w-[1280px] px-4 py-6 md:flex md:gap-6">
          <div className="mb-6 md:mb-0 md:w-[296px] md:shrink-0">
            <ProfileSidebar />
          </div>

          <div className="min-w-0 flex-1">
            <ProfileTabs />
            <About />
            <Skills />
            <Projects />
            <Community />
            <Contact />
          </div>
        </div>
      </main>

      <footer className="mt-8 border-t border-border">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-8 text-xs text-fg-muted sm:flex-row">
          <p>© {new Date().getFullYear()} 공진용. Creating is my way of leaving a small mark on the world.</p>
          <a href="https://github.com/DDooTTaa" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

'use client'

import Image from 'next/image'
import { BookOpen, Briefcase, Building2, Link as LinkIcon, Mail, MapPin, Phone, Users } from 'lucide-react'

const ProfileSidebar = () => {
  return (
    <aside className="md:sticky md:top-12">
      <div className="flex items-start gap-4 md:block">
        <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border border-border md:mb-4 md:h-[296px] md:w-full md:max-w-[296px]">
          <Image
            src="/profile.png"
            alt="AI First Product Engineer 공진용 프로필 사진"
            fill
            className="object-cover scale-125"
            style={{ objectPosition: 'center center' }}
            priority
            sizes="(max-width: 768px) 88px, 296px"
          />
        </div>

        <div className="min-w-0 pt-1 md:pt-0">
          <h1 className="text-[26px] font-semibold leading-tight text-fg">공진용</h1>
          <p className="text-[20px] font-light leading-tight text-fg-muted">AI First Front Engineer · Product Engineer</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-fg">
        기획·디자인·백엔드까지 직접 만드는 것에 자신이 있으며, 피드백과 검증을 통한 빠른 개발을 지향합니다.
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <a href="#contact" className="gh-btn gh-btn-primary w-full">
          Contact
        </a>
        <a
          href="https://github.com/DDooTTaa"
          target="_blank"
          rel="noopener noreferrer"
          className="gh-btn w-full"
        >
          Follow on GitHub
        </a>
      </div>

      <ul className="mt-4 space-y-1.5 text-sm text-fg">
        <li className="flex items-center gap-2">
          <Building2 size={16} className="text-fg-muted" />
          <span>메뉴잇 · FrontEnd Engineer</span>
        </li>
        <li className="flex items-center gap-2">
          <MapPin size={16} className="text-fg-muted" />
          <span>South Korea</span>
        </li>
        <li className="flex items-center gap-2">
          <LinkIcon size={16} className="text-fg-muted" />
          <a href="https://ddoottaa.tistory.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            ddoottaa.tistory.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Mail size={16} className="text-fg-muted" />
          <a href="mailto:wlswls8783@gmail.com" className="text-accent hover:underline">
            wlswls8783@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone size={16} className="text-fg-muted" />
          <a href="tel:+821089811131" className="hover:text-accent">
            010-8981-1131
          </a>
        </li>
      </ul>

      <div className="mt-4 flex items-center gap-3 border-t border-border pt-4 text-sm">
        <span className="inline-flex items-center gap-1 text-fg">
          <Users size={16} className="text-fg-muted" />
          <strong>3</strong>
          <span className="text-fg-muted">companies</span>
        </span>
        <span className="text-fg-muted">·</span>
        <span className="inline-flex items-center gap-1 text-fg">
          <Briefcase size={16} className="text-fg-muted" />
          <strong>4+</strong>
          <span className="text-fg-muted">years</span>
        </span>
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <h2 className="mb-2 text-sm font-semibold">Achievements</h2>
        <div className="flex flex-wrap gap-2">
          <span className="gh-topic">AI First</span>
          <span className="gh-topic">FrontEnd</span>
          <span className="gh-topic">TypeScript</span>
          <span className="inline-flex items-center gap-1 gh-topic">
            <BookOpen size={12} />
            글또 10기
          </span>
        </div>
      </div>
    </aside>
  )
}

export default ProfileSidebar

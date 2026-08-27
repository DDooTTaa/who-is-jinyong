'use client'

import {
  FaAws,
  FaBolt,
  FaCode,
  FaGithub,
  FaGitAlt,
  FaJs,
  FaLayerGroup,
  FaPalette,
  FaReact,
} from 'react-icons/fa'
import {
  SiFirebase,
  SiFlutter,
  SiGoogletagmanager,
  SiJira,
  SiNotion,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { HiChartBar } from 'react-icons/hi'

const skillCategories = [
  {
    title: 'Frontend',
    icon: FaCode,
    skills: [
      { name: 'React', level: 90, icon: FaReact, color: '#61dafb' },
      { name: 'Vue.js', level: 85, icon: SiVuedotjs, color: '#42b883' },
      { name: 'TypeScript', level: 85, icon: SiTypescript, color: '#3178c6' },
      { name: 'JavaScript', level: 90, icon: FaJs, color: '#f1e05a' },
      { name: 'Flutter', level: 70, icon: SiFlutter, color: '#02569B' },
    ],
  },
  {
    title: 'State & Style',
    icon: FaPalette,
    skills: [
      { name: 'Redux-saga', level: 85, icon: SiRedux, color: '#764abc' },
      { name: 'VueX', level: 80, icon: FaLayerGroup, color: '#42b883' },
      { name: 'Redux-Thunk', level: 80, icon: SiRedux, color: '#764abc' },
      { name: 'Styled-Component', level: 85, icon: SiStyledcomponents, color: '#db7093' },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'SCSS', level: 85, icon: SiSass, color: '#c69' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: FaBolt,
    skills: [
      { name: 'Git', level: 90, icon: FaGitAlt, color: '#f05032' },
      { name: 'GitHub Actions', level: 80, icon: FaGithub, color: 'currentColor' },
      { name: 'AWS CloudFront', level: 75, icon: FaAws, color: '#ff9900' },
      { name: 'Firebase', level: 80, icon: SiFirebase, color: '#ffca28' },
      { name: 'Jira', level: 85, icon: SiJira, color: '#0052cc' },
      { name: 'Notion', level: 90, icon: SiNotion, color: 'currentColor' },
      { name: 'Amplitude', level: 80, icon: HiChartBar, color: '#1f883d' },
      { name: 'GTM', level: 75, icon: SiGoogletagmanager, color: '#246fdb' },
    ],
  },
]

const languageBar = [
  { name: 'TypeScript', pct: 38, color: '#3178c6' },
  { name: 'JavaScript', pct: 22, color: '#f1e05a' },
  { name: 'React / Vue', pct: 20, color: '#61dafb' },
  { name: 'Flutter / Dart', pct: 12, color: '#02569B' },
  { name: 'Other', pct: 8, color: '#8b949e' },
]

const Skills = () => {
  return (
    <section id="skills" className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-normal text-fg">
          Skills <span className="text-fg-muted">· languages & tools</span>
        </h2>
      </div>

      <div className="gh-card p-4">
        <p className="mb-4 text-sm text-fg-muted">
          AI 도구를 활용해 기획·개발 속도를 높이고, 품질을 유지합니다.
        </p>

        <div className="mb-2 flex h-2 overflow-hidden rounded-full">
          {languageBar.map((lang) => (
            <div
              key={lang.name}
              className="h-full"
              style={{ width: `${lang.pct}%`, background: lang.color }}
              title={`${lang.name} ${lang.pct}%`}
            />
          ))}
        </div>
        <ul className="mb-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-fg">
          {languageBar.map((lang) => (
            <li key={lang.name} className="inline-flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: lang.color }} />
              <span className="font-semibold">{lang.name}</span>
              <span className="text-fg-muted">{lang.pct}%</span>
            </li>
          ))}
        </ul>

        <div className="grid gap-4 md:grid-cols-3">
          {skillCategories.map((category) => {
            const SkillIcon = category.icon
            return (
              <div key={category.title}>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <SkillIcon className="text-fg-muted" size={14} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="gh-topic gap-1">
                      <skill.icon size={12} style={{ color: skill.color }} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-6 border-t border-border pt-4 text-sm leading-6 text-fg-muted">
          <strong className="text-fg">React, Vue, TypeScript</strong>를 활용한 웹 서비스 개발과{' '}
          <strong className="text-fg">Flutter</strong>를 이용한 앱 개발 경험이 있습니다.{' '}
          <strong className="text-fg">Redux-saga, VueX</strong>를 통한 전역 상태 관리와{' '}
          <strong className="text-fg">GitHub Actions, AWS CloudFront</strong>를 활용한 CI/CD 구현 경험을
          보유하고 있습니다.
        </p>
      </div>
    </section>
  )
}

export default Skills

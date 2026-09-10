'use client'

import { BookOpen, Calendar, MessageSquare } from 'lucide-react'

const activities = [
  {
    title: '글또 10기',
    period: '2024',
    description: '기술 블로그 작성 및 지식 공유',
    details: [
      '정기적으로 기술 블로그 포스팅 작성',
      '커뮤니티 멤버들과의 네트워킹',
      '함께 자라기 위한 지식 공유',
    ],
  },
]

const Community = () => {
  return (
    <section id="community" className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-normal text-fg">
          Community <span className="text-fg-muted">· 커뮤니티 활동</span>
        </h2>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <article key={activity.title} className="gh-card p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas-subtle text-fg-muted">
                <BookOpen size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-accent">{activity.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-fg-muted">
                    <Calendar size={12} />
                    {activity.period}
                  </span>
                </div>
                <p className="mb-3 text-sm text-fg-muted">{activity.description}</p>
                <h4 className="mb-2 text-xs font-semibold text-fg">주요 활동</h4>
                <ul className="space-y-1.5">
                  {activity.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-fg">
                      <MessageSquare size={14} className="mt-0.5 text-fg-muted" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Community

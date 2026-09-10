'use client'

import { BookMarked, GraduationCap } from 'lucide-react'

const PATENT_URL = 'https://doi.org/10.8080/1020240103284'

export const Patent = () => {
  return (
    <section id="patent" className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-normal text-fg">
          Patent <span className="text-fg-muted">· 특허</span>
        </h2>
      </div>

      <article className="gh-card flex items-center justify-between gap-4 p-4">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <BookMarked size={16} className="text-fg-muted" />
            <h3 className="text-sm font-semibold">
              <a href={PATENT_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                선결제 관리 방법, 장치 및 컴퓨터 프로그램
              </a>
            </h3>
          </div>
          <p className="text-sm text-fg-muted">
            출원번호{' '}
            <a href={PATENT_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              10-2024-0103284
            </a>
            {' '}· 출원일 2024.08.02 · 출원인 (주)메뉴잇 · 발명자 공진용
          </p>
        </div>
        <a href={PATENT_URL} target="_blank" rel="noopener noreferrer" className="shrink-0" aria-label="특허 원문 QR">
          <img src="/patent-qr.png" alt="선결제 관리 특허 QR 코드" className="h-16 w-16" />
        </a>
      </article>
    </section>
  )
}

export const Education = () => {
  return (
    <section id="education" className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-normal text-fg">
          Education <span className="text-fg-muted">· 학력</span>
        </h2>
      </div>

      <article className="gh-card flex items-start gap-3 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas-subtle text-fg-muted">
          <GraduationCap size={18} />
        </div>
        <div>
          <h3 className="text-sm font-semibold">인하공업전문대학</h3>
          <p className="text-sm text-fg-muted">컴퓨터시스템과 · 3년제</p>
        </div>
      </article>
    </section>
  )
}

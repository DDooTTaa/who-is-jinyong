'use client'

import { useState } from 'react'
import { CheckCircle, Github, Loader2, Mail, MessageCircle, Phone, Send, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: MessageCircle,
    title: 'Blog',
    value: 'https://ddoottaa.tistory.com/',
    link: 'https://ddoottaa.tistory.com/',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'wlswls8783@gmail.com',
    link: 'mailto:wlswls8783@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '010-8981-1131',
    link: 'tel:+821089811131',
  },
]

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/DDooTTaa',
  },
  {
    icon: MessageCircle,
    name: 'Blog',
    url: 'https://ddoottaa.tistory.com/',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS 환경 변수가 설정되지 않았습니다.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )

      setSubmitStatus('success')
      setStatusMessage('메시지가 성공적으로 전송되었습니다!')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 3000)
    } catch (error: unknown) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')

      const err = error as { text?: string }
      if (err?.text?.includes('insufficient authentication scopes') || err?.text?.includes('Gmail_API')) {
        setStatusMessage('Gmail 인증 오류: EmailJS 대시보드에서 Gmail 서비스를 재연동해주세요.')
      } else if (err?.text) {
        setStatusMessage(`전송 실패: ${err.text}`)
      } else {
        setStatusMessage('메시지 전송에 실패했습니다. 다시 시도해주세요.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-normal text-fg">
          Contact <span className="text-fg-muted">· 연락하기</span>
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <div className="gh-card p-4">
            <h3 className="mb-3 text-sm font-semibold">연락처 정보</h3>
            <div className="space-y-1">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  {...(info.link.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex items-center gap-3 rounded-gh px-2 py-2 hover:bg-canvas-subtle"
                >
                  <info.icon size={16} className="text-fg-muted" />
                  <div>
                    <p className="text-xs text-fg-muted">{info.title}</p>
                    <p className="text-sm text-accent">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="gh-card p-4">
            <h3 className="mb-3 text-sm font-semibold">소셜 미디어</h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-btn"
                >
                  <social.icon size={16} />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="gh-card p-4">
          <h3 className="mb-4 text-sm font-semibold">New issue</h3>
          <div className="space-y-3">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="gh-input"
                placeholder="이름을 입력해주세요"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="gh-input"
                placeholder="이메일을 입력해주세요"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="gh-input resize-y"
                placeholder="메시지를 입력해주세요"
              />
            </div>

            {submitStatus !== 'idle' && (
              <div
                className={`flex items-center gap-2 rounded-gh border px-3 py-2 text-sm ${
                  submitStatus === 'success'
                    ? 'border-success bg-canvas-subtle text-success'
                    : 'border-danger bg-canvas-subtle text-danger'
                }`}
              >
                {submitStatus === 'success' ? <CheckCircle size={16} /> : <XCircle size={16} />}
                {statusMessage}
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="gh-btn gh-btn-primary">
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  전송 중...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Submit new issue
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Users, Sparkles } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const values = [
    {
      icon: Sparkles,
      title: 'AI 활용',
      description: 'AI를 통해 기획·디자인·개발·검증 과정을 신속하게 진행합니다.',
      color: 'text-violet-400',
    },
    {
      icon: Heart,
      title: '메모하는 습관',
      description: '불필요한 리소스를 줄이기 위해 AI를 활용해 업무일지를 꼼꼼히 작성합니다.',
      color: 'text-red-400',
    },
    {
      icon: Users,
      title: '협업의 자세',
      description: '성장을 위해 겸손한 자세로 타 직군과 적극적으로 논의합니다.',
      color: 'text-blue-400',
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-glow text-purple-400">
              About Me.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            안녕하세요! <span className="text-cosmic-300 font-semibold">FE </span>공진용입니다.
            기록을 중요하게 생각하며, <br />
            고객에 알맞는 UI/UX를 고민하고, 겸손한 자세로 다른 직군과 소통합니다.{' '}
            <span className="text-mystic-300">AI를 적극 활용해 기획부터 구현까지 빠르게 만드는 것</span>을 지향합니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-stretch mb-12"
        >
          <motion.div variants={itemVariants} className="h-full">
            <div className="relative h-full">
              <div className="glass-effect p-8 rounded-2xl h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-cosmic-300">Introduction</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  2021년부터 프론트엔드 개발자로 활동하며, 3개의 회사에서
                  다양한 프로젝트를 경험했습니다. 5000개 이상의 매장에서 사용하는 서비스를 개발하고,
                  서비스 배포, B2B 서비스 확대와 글로벌라이즈를 위한 i18n 도입 등 다양한 도전을 해왔습니다.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <span className="text-mystic-300 font-medium">AI First</span>로 기획·디자인·백엔드까지 직접 만드는 것을 즐기며,
                  품질을 유지하며 빠르게 프로젝트를 만드는 개발자 공진용입니다
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <div className="relative h-full">
              <div className="glass-effect p-8 rounded-2xl h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-cosmic-300">Values</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`p-2 rounded-lg bg-white/10 ${value.color}`}>
                        <value.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                        <p className="text-gray-300 text-sm">
                          {value.title === 'AI 활용' ? (
                            <>
                              <span className="relative inline-block font-semibold">
                                <span className="relative z-10">AI</span>
                                <span
                                  className="absolute bottom-0 left-0 right-0 h-3 bg-violet-400 opacity-60 -rotate-1 transform"
                                  style={{
                                    width: 'calc(100% + 4px)',
                                    left: '-2px',
                                    bottom: '2px'
                                  }}
                                />
                              </span>
                              를 통해 기획·디자인·개발·검증 과정을 신속하게 진행합니다.
                            </>
                          ) : value.title === '메모하는 습관' ? (
                            <>
                              불필요한 리소스를 줄이기 위해{' '}
                              <a
                                href="https://www.notion.so/shorthaired-circle-c672/8-fff922a4999481d2bbf5f7c4c63ccafc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-block font-semibold hover:opacity-90 transition-opacity"
                              >
                                <span className="relative z-10">업무일지</span>
                                <span
                                  className="absolute bottom-0 left-0 right-0 h-3 bg-pink-400 opacity-60 -rotate-1 transform"
                                  style={{
                                    width: 'calc(100% + 4px)',
                                    left: '-2px',
                                    bottom: '2px'
                                  }}
                                />
                              </a>를 꼼꼼히 작성합니다.
                            </>
                          ) : (
                            value.description
                          )}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6 text-glow">주요 성과</h3>
            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-lg font-semibold text-cosmic-300 mb-2">메뉴잇 (2024.04 ~ 재직중)</h4>
                <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                  <li>• <span className="font-semibold">CS 인원 50% 감축</span>에 따른 고객 문의 자동화 서비스 기획·디자인·개발</li>
                  <li>• <span className="font-semibold">컴포넌트 공통화</span>로 30,000줄 이상의 코드 감축 및 유지보수 효율성 향상</li>
                  <li>• <span className="font-semibold">i18n 도입</span>으로 서비스 전체 다국어 처리 (한국어, 영어) 구현</li>
                  <li>• 25개 이상의 Feature 개발과 500개 이상의 BugFix 수행</li>
                  <li>• <span className="font-semibold">AI</span>를 활용하여 대표님의 아이디어를 신속하게 개발 및 검증</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-mystic-300 mb-2">패스트뷰 (2022.05 ~ 2023.03)</h4>
                <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                  <li>• <span className="font-semibold">운영팀의 업무 효율 50% 이상 향상</span> - CMS 및 광고 관리 서비스 개발</li>
                  <li>• <span className="font-semibold">ITwizard(몽골) 개발팀의 리더</span>로서 Git-flow 기반 협업 프로세스 정착</li>
                  <li>• API 표준화 가이드라인 수립 및 백엔드 팀과의 협업으로 구조 통합</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-violet-400 mb-2">트럼피아 (2021.11 ~ 2022.04)</h4>
                <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                  <li>• Vue 기반 SMS 투표 자동화 서비스 운영 및 개선</li>
                  <li>• 100개 이상의 버그 픽스 및 레거시 코드 리팩토링</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


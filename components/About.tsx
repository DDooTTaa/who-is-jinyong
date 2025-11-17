'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, Lightbulb, Target, Users, X, ChevronLeft, ChevronRight } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showRuleModal, setShowRuleModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    {
      src: '/꾸준함.png',
      alt: '주간 플래너',
      title: '주간 플래너',
      description: '매주 꾸준한 일정 관리',
    },
    {
      src: '/점수표.png',
      alt: '자체 포인트 제도',
      title: '자체 포인트 제도',
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

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
      icon: Heart,
      title: '메모하는 습관',
      description: '불필요한 리소스를 줄이기 위해 업무일지를 꼼꼼히 작성하려고 노력합니다.',
      color: 'text-red-400',
    },
    {
      icon: Users,
      title: '협업의 자세',
      description: '성장을 위해 겸손한 자세로 타 직군과 적극적으로 논의합니다.',
      color: 'text-blue-400',
    },
    {
      icon: Lightbulb,
      title: '꾸준함',
      description: '관성을 잃지 않고 꾸준함을 잃지 않으려고 합니다.',
      color: 'text-yellow-400',
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
            고객에 알맞는 UI/UX를 고민하고, 겸손한 자세로 다른 직군과 소통합니다.
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
                <p className="text-gray-300 leading-relaxed">
                  CS 인원 50% 감축에 따른 고객 문의 자동화 서비스를 기획·디자인·개발하는 등
                  문제를 파악하고 해결하는 과정에서 보람을 느낍니다.
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
                          {value.title === '메모하는 습관' ? (
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
                          ) : value.title === '꾸준함' ? (
                            <>
                              관성을 잃지 않고{' '}
                              <button
                                onClick={() => setShowRuleModal(true)}
                                className="relative inline-block font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                              >
                                <span className="relative z-10">규칙적이고</span>
                                <span
                                  className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400 opacity-60 -rotate-1 transform"
                                  style={{
                                    width: 'calc(100% + 4px)',
                                    left: '-2px',
                                    bottom: '2px'
                                  }}
                                />
                              </button>{' '}
                              꾸준함을 잃지 않으려고 합니다.
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
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">트럼피아 (2021.11 ~ 2022.04)</h4>
                <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                  <li>• Vue 기반 SMS 투표 자동화 서비스 운영 및 개선</li>
                  <li>• 100개 이상의 버그 픽스 및 레거시 코드 리팩토링</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 규칙적으로 팝업 모달 */}
      <AnimatePresence>
        {showRuleModal && (
          <>
            {/* 배경 오버레이 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRuleModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* 모달 컨텐츠 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-effect rounded-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                {/* 닫기 버튼 */}
                <button
                  onClick={() => setShowRuleModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 z-10"
                >
                  <X size={24} />
                </button>

                {/* 이미지 캐러셀 */}
                <div className="relative w-full">
                  {/* 캐러셀 컨테이너 */}
                  <div className="relative overflow-hidden rounded-xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                      >
                        <div className="relative bg-white/5 rounded-xl p-4 border border-white/10">
                          <img 
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt}
                            className="w-full h-auto object-contain rounded-lg shadow-2xl mx-auto"
                            style={{ minHeight: '500px', maxHeight: '600px' }}
                          />
                          <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                            <p className="text-white text-lg font-semibold text-center">
                              {images[currentImageIndex].title}
                            </p>
                            <p className="text-gray-300 text-sm text-center mt-1">
                              {images[currentImageIndex].description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* 이전 버튼 */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
                      aria-label="이전 이미지"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    {/* 다음 버튼 */}
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
                      aria-label="다음 이미지"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* 인디케이터 */}
                  <div className="flex justify-center gap-2 mt-6">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-purple-500 w-8'
                            : 'bg-purple-500/30 w-2 hover:bg-purple-500/50'
                        }`}
                        aria-label={`이미지 ${index + 1}로 이동`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default About



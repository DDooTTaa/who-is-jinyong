'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, ChevronDown, Building2 } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null)

  const companyGroups = [
    {
      company: '메뉴잇',
      period: '2024.04 ~ 재직중',
      description: '5000개 이상 매장에서 사용하는 다목적 관리 & 운영 서비스',
      color: 'from-purple-500 to-blue-500',
      projects: [
        {
          title: '매장 운영 관리 서비스',
          description: '5000개 이상 매장에서 사용하는 다목적 관리 & 운영 서비스. QA 인원 50% 감축에 따른 고객 문의 자동화 서비스 기획·디자인·개발, B2B 서비스 확대를 위한 컴포넌트 공통화, i18n 도입으로 다국어 처리(한국어, 영어) 구현. 컴포넌트 공통화로 6,000줄 이상의 코드 감축.',
          technologies: ['React', 'TypeScript', 'Redux-saga', 'Styled-Component', 'i18n'],
          live: 'https://www.menuit.io/',
          category: 'Web Service',
        },
        {
          title: '부자재 몰 (이커머스)',
          description: '부자재 몰 페이지 기획 및 디자인, 개발. 이커머스 솔루션을 활용한 쇼핑몰 서비스 구축.',
          technologies: ['React', 'TypeScript', 'Redux-saga'],
          live: '#',
          category: 'E-Commerce',
        },
        {
          title: '서비스 글로벌라이즈(i18n)',
          description: '서비스 전체 다국어 처리 (한국어, 영어) 구현',
          technologies: ['React', 'TypeScript', 'i18n'],
          live: 'https://www.menuit.io/en',
          category: 'Globalization',
        },
        {
          title: '메뉴관리 & 카테고리 관리 서비스 개편',
          description: '메뉴 및 카테고리 관리 기능 개편 및 최적화',
          technologies: ['React', 'TypeScript', 'Redux-saga'],
          live: '#',
          category: 'Service Improvement',
        },
        {
          title: 'B2B 대응 화이트 라벨링',
          description: 'B2B 서비스 확대를 위한 화이트 라벨링 기능 구현',
          technologies: ['React', 'TypeScript', 'Styled-Component'],
          live: '#',
          category: 'B2B Service',
        },
      ]
    },
    {
      company: '패스트뷰',
      period: '2022.05 ~ 2023.03',
      description: '350개 이상의 파트너사의 콘텐츠에 대한 광고, 트래픽 분석을 제공하는 솔루션',
      color: 'from-blue-500 to-cyan-500',
      projects: [
        {
          title: 'ViewUs - 광고 관리 서비스',
          description: '광고에 따른 수익과 조회수, 클릭수에 대한 인사이트를 시각화하여 전달하는 CP 관리자 구현. 계약한 회사가 원하는 콘텐츠와 광고를 원하는 플랫폼에 게시하는 서비스 개발로 운영팀의 업무 효율 50% 이상 향상.',
          technologies: ['React', 'TypeScript', 'Redux-saga'],
          live: '#',
          category: 'Admin Service',
        },
        {
          title: 'ViewUs - CMS',
          description: '콘텐츠 관리 시스템 구축 및 운영',
          technologies: ['React', 'TypeScript', 'Redux-saga'],
          live: '#',
          category: 'CMS',
        },
        {
          title: 'Sellermill - 이커머스 솔루션',
          description: '기업의 이커머스에 필요한 솔루션과 인프라를 제공하는 B2B 서비스. 파트너사가 운영하는 쇼핑몰에 상품과 배너를 자유롭게 배치할 수 있는 진열 관리 페이지 구축.',
          technologies: ['React', 'TypeScript', 'Redux-saga'],
          live: 'https://www.sellermill.kr/',
          category: 'B2B Service',
        },
      ]
    },
    {
      company: '트럼피아',
      period: '2021.11 ~ 2022.04',
      description: '미국의 SMS, 이메일, 메시지 자동 관리 & 운영 B2B 솔루션 서비스',
      color: 'from-green-500 to-emerald-500',
      projects: [
        {
          title: 'SMS 투표 자동화',
          description: 'Vue를 사용한 SMS 투표 자동화 페이지 운영 및 개선, 100개 이상의 버그 픽스 수행.',
          technologies: ['Vue.js', 'VueX', 'JavaScript'],
          live: 'http://www.trumpia.co.kr/views/',
          category: 'B2B Service',
        },
      ]
    }
  ]

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

  return (
    <section id="projects" className="py-20 px-4">
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
            <span className="text-glow bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            메뉴잇, 패스트뷰, 트럼피아에서 진행한 다양한 프로젝트 경험을 소개합니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {companyGroups.map((group, groupIndex) => {
            const isExpanded = expandedCompany === group.company
            
            return (
              <motion.div
                key={group.company}
                variants={itemVariants}
                className="glass-effect rounded-2xl overflow-hidden"
              >
                {/* Company Header - Clickable */}
                <motion.button
                  onClick={() => setExpandedCompany(isExpanded ? null : group.company)}
                  className="w-full p-6 text-left"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${group.color}`}>
                        <Building2 className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{group.company}</h3>
                        <p className="text-gray-400 text-sm">{group.period}</p>
                        <p className="text-gray-300 text-sm mt-1">{group.description}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400" size={24} />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Expanded Projects List */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4 border-t border-white/10 pt-6">
                        {group.projects.map((project, projectIndex) => (
                          <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: projectIndex * 0.1 }}
                            className="glass-effect p-5 rounded-xl hover:bg-white/5 transition-colors"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <span className="text-xs text-cosmic-400 font-medium bg-white/10 px-2 py-1 rounded">
                                    {project.category}
                                  </span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {project.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>

                                {project.live && project.live !== '#' && (
                                  <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                                  >
                                    <ExternalLink size={16} />
                                    <span className="text-sm">Live Demo</span>
                                  </motion.a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-glow">프로젝트 경험</h3>
            <p className="text-gray-300 leading-relaxed">
              메뉴잇에서 <span className="text-cosmic-300 font-semibold">25개 이상의 Feature 개발과 500개 이상의 BugFix</span>를 수행했으며, 
              패스트뷰에서는 <span className="text-mystic-300 font-semibold">운영팀의 업무 효율을 50% 이상 향상</span>시켰습니다. 
              컴포넌트 공통화와 자동화 서비스를 통해 개발 효율성과 사용자 경험을 지속적으로 개선해왔습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects



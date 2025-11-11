'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Lightbulb, Target, Users } from 'lucide-react'

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
      icon: Heart,
      title: '기록의 습관',
      description: '협업 과정에 필요없는 리소스를 줄이기 위해 메모하는 습관을 항상 노력합니다.',
      color: 'text-red-400',
    },
    {
      icon: Lightbulb,
      title: 'UI/UX 고민',
      description: '실제 사용자의 입장에서 서비스를 생각하며 더 보완할 수 있는 방법을 고민합니다.',
      color: 'text-yellow-400',
    },
    {
      icon: Users,
      title: '협업의 자세',
      description: '서비스의 성장을 위해 겸손한 자세로 타 직군과 적극적으로 논의합니다.',
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
            <span className="text-glow bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            안녕하세요! 저는 <span className="text-cosmic-300 font-semibold">공진용</span>입니다. 
            기록을 중요하게 생각하며, 고객에 알맞는 UI/UX를 고민하고 협업의 자세로 다른 직군과 소통합니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-cosmic-300">나의 이야기</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                2021년부터 프론트엔드 개발자로 활동하며, 메뉴잇, 패스트뷰, 트럼피아에서 
                다양한 프로젝트를 경험했습니다. 5000개 이상의 매장에서 사용하는 서비스를 개발하고, 
                B2B 서비스 확대와 글로벌라이즈를 위한 i18n 도입 등 다양한 도전을 해왔습니다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                컴포넌트 공통화로 6,000줄 이상의 코드를 감축하고, QA 인원 50% 감축에 따른 
                고객 문의 자동화 서비스를 기획·디자인·개발하는 등 효율적인 개발을 추구합니다.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-mystic-300">핵심 가치</h3>
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
                        <p className="text-gray-300 text-sm">{value.description}</p>
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
            className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-glow">주요 성과</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              메뉴잇에서 25개 이상의 Feature 개발과 500개 이상의 BugFix를 수행했으며, 
              패스트뷰에서는 운영팀의 업무 효율을 50% 이상 향상시켰습니다. 
              컴포넌트 공통화와 자동화 서비스를 통해 개발 효율성과 사용자 경험을 지속적으로 개선해왔습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About



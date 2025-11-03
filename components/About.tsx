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
      title: '열정',
      description: '코딩에 대한 진정한 열정으로 매일 새로운 것을 배우고 성장합니다.',
      color: 'text-red-400',
    },
    // {
    //   icon: Lightbulb,
    //   title: '창의성',
    //   description: '독창적인 아이디어로 문제를 해결하고 혁신적인 솔루션을 만듭니다.',
    //   color: 'text-yellow-400',
    // },
    // {
    //   icon: Target,
    //   title: '목표지향',
    //   description: '명확한 목표를 설정하고 체계적으로 접근하여 성과를 달성합니다.',
    //   color: 'text-green-400',
    // },
    // {
    //   icon: Users,
    //   title: '협업',
    //   description: '팀워크를 중시하며 함께 성장할 수 있는 환경을 만들어갑니다.',
    //   color: 'text-blue-400',
    // },
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
            기술과 창의성을 결합하여 의미 있는 디지털 경험을 만드는 것을 목표로 합니다.
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
                개발의 세계에 입문한 지 얼마 되지 않았지만, 매일 새로운 기술을 배우고 
                프로젝트를 통해 성장해나가고 있습니다. 사용자 중심의 사고와 
                아름다운 디자인에 대한 열정을 가지고 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                단순히 코드를 작성하는 것을 넘어서, 사람들의 삶을 더 나아지게 만드는 
                서비스를 개발하고 싶습니다. 기술과 예술의 경계에서 새로운 가능성을 
                탐구하는 것이 저의 목표입니다.
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
            <h3 className="text-2xl font-bold mb-6 text-glow">미래의 비전</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              앞으로 더 많은 사람들과 함께 의미 있는 프로젝트를 진행하고, 
              기술을 통해 세상을 조금 더 아름답고 편리한 곳으로 만들어가고 싶습니다. 
              지속적인 학습과 성장을 통해 더 나은 개발자가 되어가겠습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About



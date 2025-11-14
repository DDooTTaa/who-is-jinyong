'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, BookOpen } from 'lucide-react'

const Community = () => {
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

  const activities = [
    {
      title: '글또 10기',
      period: '2024',
      description: '개발자 글쓰기 커뮤니티 글또 10기 활동',
      icon: BookOpen,
      color: 'bg-purple-500',
      details: [
        '정기적으로 기술 블로그 포스팅 작성',
        '커뮤니티 멤버들과의 네트워킹',
        '함께 자라기 위한 지식 공유'
      ],
    },
  ]

  return (
    <section id="community" className="py-20 px-4">
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
              Community.
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            개발자 커뮤니티 활동을 통해 함께 성장하고 지식을 나누는 경험을 기록합니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              variants={itemVariants}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-xl ${activity.color} flex-shrink-0`}>
                    <activity.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {activity.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <Calendar size={16} />
                          <span>{activity.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white mb-3">주요 활동</h4>
                      <ul className="space-y-2">
                        {activity.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="flex items-start space-x-3 text-gray-300"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Community


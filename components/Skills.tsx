'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  React,
  TypeScript,
  Node,
  Git
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'React', level: 90, icon: React },
        { name: 'Vue.js', level: 85, icon: Code2 },
        { name: 'TypeScript', level: 85, icon: TypeScript },
        { name: 'JavaScript', level: 90, icon: Code2 },
        { name: 'Flutter', level: 70, icon: Smartphone },
      ]
    },
    {
      title: 'State & Style',
      icon: Palette,
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Redux-saga', level: 85, icon: Code2 },
        { name: 'VueX', level: 80, icon: Code2 },
        { name: 'Redux-Thunk', level: 80, icon: Code2 },
        { name: 'Styled-Component', level: 85, icon: Palette },
        { name: 'Tailwind CSS', level: 90, icon: Palette },
        { name: 'SCSS', level: 85, icon: Palette },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Zap,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Git', level: 90, icon: Git },
        { name: 'GitHub Actions', level: 80, icon: Git },
        { name: 'AWS CloudFront', level: 75, icon: Globe },
        { name: 'Jira', level: 85, icon: Code2 },
        { name: 'Notion', level: 90, icon: Code2 },
        { name: 'Amplitude', level: 80, icon: Database },
        { name: 'GTM', level: 75, icon: Database },
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
    <section className="py-20 px-4">
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
              Skills & Technologies
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            웹/앱 서비스 개발과 운영 경험을 바탕으로 쌓아온 기술 스택을 소개합니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {skill.icon && <skill.icon size={16} className="text-gray-400" />}
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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
            <h3 className="text-2xl font-bold mb-4 text-glow">기술 경험</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-cosmic-300 font-semibold">React, Vue, TypeScript</span>를 활용한 웹 서비스 개발과 
              <span className="text-mystic-300 font-semibold">Flutter</span>를 이용한 앱 개발 경험이 있습니다. 
              <span className="text-cosmic-300 font-semibold">Redux-saga, VueX</span>를 통한 전역 상태 관리와 
              <span className="text-mystic-300 font-semibold">GitHub Actions, AWS CloudFront</span>를 활용한 CI/CD 구현 경험을 보유하고 있습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills



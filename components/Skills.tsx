'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaCode,
  FaPalette,
  FaBolt,
  FaLayerGroup,
  FaGitAlt,
  FaReact,
  FaJs,
  FaGithub,
  FaAws
} from 'react-icons/fa'
import {
  SiTypescript,
  SiFlutter,
  SiRedux,
  SiVuedotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiSass,
  SiJira,
  SiNotion,
  SiGoogletagmanager,
  SiFirebase
} from 'react-icons/si'
import { HiChartBar } from 'react-icons/hi'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaCode,
      color: 'bg-purple-500',
      iconColor: 'text-purple-400',
      skills: [
        { name: 'React', level: 90, icon: FaReact },
        { name: 'Vue.js', level: 85, icon: SiVuedotjs },
        { name: 'TypeScript', level: 85, icon: SiTypescript },
        { name: 'JavaScript', level: 90, icon: FaJs },
        { name: 'Flutter', level: 70, icon: SiFlutter },
      ]
    },
    {
      title: 'State & Style',
      icon: FaPalette,
      color: 'bg-blue-500',
      iconColor: 'text-blue-400',
      skills: [
        { name: 'Redux-saga', level: 85, icon: SiRedux },
        { name: 'VueX', level: 80, icon: FaLayerGroup },
        { name: 'Redux-Thunk', level: 80, icon: SiRedux },
        { name: 'Styled-Component', level: 85, icon: SiStyledcomponents },
        { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss },
        { name: 'SCSS', level: 85, icon: SiSass },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: FaBolt,
      color: 'bg-violet-400',
      iconColor: 'text-violet-400',
      skills: [
        { name: 'Git', level: 90, icon: FaGitAlt },
        { name: 'GitHub Actions', level: 80, icon: FaGithub },
        { name: 'AWS CloudFront', level: 75, icon: FaAws },
        { name: 'Firebase', level: 80, icon: SiFirebase },
        { name: 'Jira', level: 85, icon: SiJira },
        { name: 'Notion', level: 90, icon: SiNotion },
        { name: 'Amplitude', level: 80, icon: HiChartBar },
        { name: 'GTM', level: 75, icon: SiGoogletagmanager },
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
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-glow text-purple-400">
              Skills.
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            AI 도구를 활용해 기획·개발 속도를 높이고, 품질을 유지합니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
              const SkillIcon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl ${category.color} mr-4`}>
                    <SkillIcon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="relative group"
                    >
                      <div className={`
                      glass-effect px-4 py-2 rounded-full
                      flex items-center space-x-2
                      border border-white/10
                      hover:border-white/30 transition-all
                      cursor-default
                    `}>
                        {skill.icon && (
                          <skill.icon
                            size={16}
                            className={category.iconColor}
                          />
                        )}
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
            <h3 className="text-2xl font-bold mb-4 text-glow">기술 경험</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-cosmic-300 font-semibold">React, Vue, TypeScript</span>를 활용한 웹 서비스 개발과 
              <span className="text-mystic-300 font-semibold"> Flutter</span>를 이용한 앱 개발 경험이 있습니다.
              <span className="text-cosmic-300 font-semibold"> Redux-saga, VueX</span>를 통한 전역 상태 관리와
              <span className="text-mystic-300 font-semibold"> GitHub Actions, AWS CloudFront</span>를 활용한 CI/CD 구현 경험을 보유하고 있습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


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
        { name: 'React', level: 85, icon: React },
        { name: 'Next.js', level: 80, icon: Globe },
        { name: 'TypeScript', level: 75, icon: TypeScript },
        { name: 'Tailwind CSS', level: 90, icon: Palette },
        { name: 'Framer Motion', level: 70, icon: Zap },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', level: 75, icon: Node },
        { name: 'Express', level: 70, icon: Code2 },
        { name: 'MongoDB', level: 65, icon: Database },
        { name: 'PostgreSQL', level: 60, icon: Database },
        { name: 'REST API', level: 80, icon: Globe },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Zap,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Git', level: 85, icon: Git },
        { name: 'Docker', level: 60, icon: Code2 },
        { name: 'Vercel', level: 90, icon: Globe },
        { name: 'Figma', level: 70, icon: Palette },
        { name: 'Mobile Dev', level: 65, icon: Smartphone },
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
            지속적인 학습을 통해 쌓아온 기술 스택과 경험을 소개합니다.
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
            <h3 className="text-2xl font-bold mb-4 text-glow">학습 철학</h3>
            <p className="text-gray-300 leading-relaxed">
              기술은 빠르게 변화하지만, <span className="text-cosmic-300 font-semibold">근본적인 원리를 이해</span>하고 
              <span className="text-mystic-300 font-semibold">실제 프로젝트에 적용</span>하는 것이 중요하다고 생각합니다. 
              새로운 기술을 배울 때는 항상 '왜'와 '어떻게'를 함께 고민하며, 
              사용자 경험을 최우선으로 하는 개발을 지향합니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills



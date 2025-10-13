'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Eye, Code2, Palette, Zap } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Mystical Portfolio',
      description: '신비로운 디자인의 개인 포트폴리오 웹사이트. Next.js와 Framer Motion을 활용한 인터랙티브한 사용자 경험을 제공합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#',
      featured: true,
      category: 'Web Development'
    },
    {
      title: 'E-Commerce Platform',
      description: '모던한 디자인의 온라인 쇼핑몰 플랫폼. 반응형 디자인과 직관적인 사용자 인터페이스를 구현했습니다.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      featured: true,
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: '팀 협업을 위한 태스크 관리 애플리케이션. 실시간 업데이트와 드래그 앤 드롭 기능을 포함합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: false,
      category: 'Web App'
    },
    {
      title: 'Weather Dashboard',
      description: '실시간 날씨 정보를 제공하는 대시보드. 아름다운 차트와 애니메이션으로 데이터를 시각화합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      github: '#',
      live: '#',
      featured: false,
      category: 'Frontend'
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
            창의적이고 혁신적인 프로젝트들을 통해 기술과 디자인을 결합한 경험을 보여드립니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`glass-effect rounded-2xl overflow-hidden group ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Code2 size={48} className="text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-300">프로젝트 이미지</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-cosmic-400 font-medium">{project.category}</span>
                  {project.featured && (
                    <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Eye size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
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
            <h3 className="text-2xl font-bold mb-4 text-glow">프로젝트 철학</h3>
            <p className="text-gray-300 leading-relaxed">
              모든 프로젝트는 <span className="text-cosmic-300 font-semibold">사용자 중심의 사고</span>로 시작됩니다. 
              기술적 완성도와 아름다운 디자인을 동시에 추구하며, 
              <span className="text-mystic-300 font-semibold">실제 문제를 해결</span>하는 솔루션을 만드는 것이 목표입니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects



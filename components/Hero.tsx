'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Code2, Palette } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="w-36 h-36 mx-auto rounded-full bg-white-500 p-1">
                <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                  <Image
                    src="/공진용.png"
                    alt="공진용"
                    fill
                    className="object-cover rounded-full scale-125"
                    style={{ objectPosition: 'center center' }}
                    priority
                    sizes="144px"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-white-500"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-glow text-purple-400">
            공진용
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="text-cosmic-300">Front</span> Engineer,{' '}
          <span className="text-mystic-300">좋은 문장</span>이 {' '}
          <span className="text-glow">될 개발자</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center space-x-2 glass-effect px-6 py-3 rounded-full"
          >
            <Code2 className="text-mystic-400" size={20} />
            <span className="text-white">FrontEnd Engineer</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center space-x-2 glass-effect px-6 py-3 rounded-full"
          >
            <Sparkles className="text-yellow-400" size={20} />
            <span className="text-white">Innovation Seeker</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-300"
          >
            <span>더 알아보기</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero



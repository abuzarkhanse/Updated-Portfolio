'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { useState } from 'react'
import heroImage from '@/assets/me.jpg'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section
      id="Home"
      className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden px-4 md:px-30 pt-24"
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 sm:px-10 py-4 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
        <div className="text-2xl font-bold text-neon-purple tracking-wide cursor-pointer">Abuzar Khan</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white/80">
          {['Home','about','projects','experience','education','blog','contact'].map((id) => (
            <li
              key={id}
              className="hover:text-neon-cyan hover:scale-110 transition-all duration-300 cursor-pointer"
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded relative w-10 h-10 flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-white rounded"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-white rounded my-1"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-white rounded"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center space-y-8 z-40 md:hidden"
        >
          {['Home','about','projects','experience','education','blog','contact'].map((id) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.1, color: "#00ffff" }}
              className="text-2xl text-white/90 cursor-pointer list-none"
              onClick={() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                setMenuOpen(false)
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </motion.li>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl min-h-screen gap-10 px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-neon-purple tracking-wide mb-4 drop-shadow-neon">
            <TypeAnimation
              sequence={[
                "Hi, I'm Abuzar",
                2000,
                "I'm a Software Engineer",
                2000,
                "I Build Futuristic Web Apps",
                2000,
                "With React & Next.js",
                2000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
              cursor={true}
              className="inline-block"
            />
          </h1>

          <p className="text-lg sm:text-xl text-neon-cyan mb-6 leading-relaxed">
            Final year Software Engineering student building futuristic web experiences in
            <span className="text-white font-semibold"> MERN-Stack with Next.js and animations</span>.
            <br />
            Passionate about building futuristic software solutions that merge creativity with cutting-edge technology.
          </p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-neon-purple text-black px-6 py-3 rounded-full font-semibold shadow-neon hover:shadow-lg transition-all duration-300"
          >
            Explore
          </motion.a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-purple shadow-2xl shadow-neon">
            <Image
              src={heroImage}
              alt="Abuzar Khan"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-purple/40 to-neon-cyan/40 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

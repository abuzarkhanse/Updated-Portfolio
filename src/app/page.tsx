'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import heroImage from '@/assets/me.jpg'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)

  // detect scroll past hero for desktop nav only
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="Home"
      className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden px-4 md:px-30 pt-24"
    >
      {/* ================= DESKTOP NAV ================= */}
      {showNav && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            hidden md:flex   /* 🔥 only desktop */
            fixed top-4 left-1/2 -translate-x-1/2 z-50 
            items-center justify-between
            px-4 py-2
            bg-black/50 backdrop-blur-xl
            rounded-full shadow-lg border border-white/10
            w-auto max-w-[70%]"
        >
          {/* Logo */}
          <div className="text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple cursor-pointer whitespace-nowrap">
            Abuzar Khan
          </div>

          {/* Desktop Links */}
          <ul className="flex space-x-6">
            {['Home','about','projects', 'skills', 'experience','education','blog','contact'].map((id) => (
              <li
                key={id}
                className="relative group cursor-pointer text-white/70 font-medium text-sm tracking-wide hover:text-white"
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span className="
                  absolute left-0 bottom-0 w-0 h-[2px]
                  bg-gradient-to-r from-neon-cyan to-neon-purple
                  transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}

      {/* ================= MOBILE HAMBURGER BTN ================= */}
      <button
        className="fixed top-4 right-4 md:hidden p-2 rounded-full border border-white/20 hover:border-neon-cyan transition-all w-10 h-10 flex flex-col justify-center items-center bg-black/30 backdrop-blur-sm z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-6 h-0.5 bg-white rounded"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="block w-6 h-0.5 bg-white rounded my-1"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-6 h-0.5 bg-white rounded"
        />
      </button>

      {/* ================= MOBILE OVERLAY MENU ================= */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col justify-center items-center space-y-10 z-40 md:hidden"
        >
          {['Home','about','projects', 'skills', 'experience','education','blog','contact'].map((id, index) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: '#00ffff' }}
              className="text-3xl text-white font-semibold tracking-wide cursor-pointer list-none"
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

      {/* ================= HERO ================= */}
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

'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center sm:text-4xl mb-10"
      >
        About Me:
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-3xl text-center text-lg text-zinc-300 leading-relaxed"
      >
        I’m <span className="font-semibold text-white">Abuzar Khan</span>, a passionate 
        <span className="text-cyan-300"> Software Engineering student at PAF-IAST</span>, 
        specializing in <span className="text-white font-semibold">MERN Stack</span> and modern web technologies.  
        My journey started with <span className="text-white font-semibold">C++ and Object-Oriented Programming</span>, 
        evolving into <span className="text-white font-semibold">full-stack web development</span> using React, Next.js, Node.js, 
        and MySQL.  

        <br /><br />
        I’ve gained practical experience through internships at <span className="text-cyan-300">Sabzland</span>, 
        <span className="text-cyan-300"> Oasis Infobyte</span>, and <span className="text-cyan-300">Entechin</span>, 
        where I developed responsive websites and software solutions.  

        <br /><br />
        Beyond coding, I’m driven by <span className="text-purple-300">innovation, leadership, and community impact</span>, 
        striving to create <span className="text-cyan-300">futuristic digital experiences</span> that solve real-world problems 
        and inspire positive change.
      </motion.p>
    </SectionWrapper>
  )
}

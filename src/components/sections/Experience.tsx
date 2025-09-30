'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'

const experiences = [
  {
    title: "Moderen Web Developer",
    company: "TechTribe",
    period: "Summer 2025",
    desc: "Worked on MERN-Stack web applications with React, Next.js, and MySQL. Built reusable components and improved UI/UX consistency.",
  },
  {
    title: "Web Development Intern",
    company: "EntechIn",
    period: "Summer 2024",
    desc: "Developed responsive websites with HTML, CSS, JavaScript, and PHP. Learned project collaboration in an agile team.",
  },
  {
    title: "Social Media Director",
    company: "AI-Society PAF-IAST",
    period: "2023 – 2024",
    desc: "Managed digital campaigns and community outreach, increasing student engagement and strengthening the society’s online presence. Developed creative content strategies to highlight events, foster collaboration, and boost visibility across platforms.",
  },
  {
    title: "Web Development Intern",
    company: "Sabzland, PAF-IAST",
    period: "Summer 2023",
    desc: "Organized events, led media teams, and coordinated large-scale activities like Hult Prize and university photoshoots.",
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center sm:text-4xl mb-10"
      >
        Experience & Leadership
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 shadow-glass hover:shadow-neon-cyan transition-all hover:-translate-y-2 flex flex-col"
          >
            <h3 className="font-semibold text-lg text-white">{exp.title}</h3>
            <p className="text-sm text-cyan-300">{exp.company}</p>
            <p className="text-sm text-zinc-400 mb-2">{exp.period}</p>
            <p className="text-sm text-zinc-300">{exp.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

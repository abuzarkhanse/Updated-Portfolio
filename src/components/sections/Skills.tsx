'use client'
import { motion } from 'framer-motion'
import { Code2, Database, Globe, Settings } from 'lucide-react'
import SectionWrapper from '../SectionWrapper'

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
  },
  {
    category: "Backend",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    items: ["PHP", "Node.js", "Express.js"],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6 text-green-400" />,
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Others",
    icon: <Settings className="w-6 h-6 text-yellow-400" />,
    items: ["Git/GitHub", "Cisco Packet Tracer", "WordPress", "Plesk"],
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center sm:text-4xl mb-12"
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 shadow-glass hover:shadow-neon-purple transition-all hover:-translate-y-2 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
            </div>

            <ul className="flex flex-wrap gap-2 mt-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="text-sm px-3 py-1 bg-white/5 rounded-lg border border-white/10 hover:bg-purple-500/20 hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

'use client'
import { motion } from 'framer-motion'
import {
  Globe,
  Code2,
  Database,
  Settings,
  FileCode,
  Palette,
  Terminal,
  Type,
  Server,
  Box,
  FileJson,
  GitBranch,
  Wrench,
  Laptop
} from 'lucide-react'
import SectionWrapper from '../SectionWrapper'
import { JSX } from 'react'

// Icon map: use lucide icons where appropriate, emoji fallback for brand-y logos
const skillIcons: Record<string, JSX.Element> = {
  HTML: <FileCode className="w-7 h-7 text-orange-400" />,
  CSS: <Palette className="w-7 h-7 text-blue-400" />,
  JavaScript: <Terminal className="w-7 h-7 text-yellow-400" />,
  TypeScript: <Type className="w-7 h-7 text-sky-400" />,
  React: <span className="text-2xl">⚛️</span>, // emoji fallback (safe & compiles)
  'Next.js': <span className="text-lg font-semibold">Next</span>,
  TailwindCSS: <span className="text-2xl">💨</span>,
  PHP: <FileCode className="w-7 h-7 text-indigo-400" />,
  'Node.js': <Server className="w-7 h-7 text-green-500" />,
  'Express.js': <Box className="w-7 h-7 text-gray-300" />,
  MySQL: <Database className="w-7 h-7 text-orange-500" />,
  MongoDB: <span className="text-2xl">🍃</span>,
  'Git/GitHub': <GitBranch className="w-7 h-7 text-pink-500" />,
  'Cisco Packet Tracer': <Laptop className="w-7 h-7 text-yellow-500" />,
  WordPress: <Globe className="w-7 h-7 text-blue-500" />,
  Plesk: <Settings className="w-7 h-7 text-purple-400" />,
}

const skills = [
  {
    category: 'Frontend',
    icon: <Globe className="w-5 h-5 text-purple-400" />,
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS'],
  },
  {
    category: 'Backend',
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    items: ['PHP', 'Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    icon: <Database className="w-5 h-5 text-green-400" />,
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Others',
    icon: <Settings className="w-5 h-5 text-yellow-400" />,
    items: ['Git/GitHub', 'Cisco Packet Tracer', 'WordPress', 'Plesk'],
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
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 shadow-glass hover:shadow-neon-purple transition-all flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
            </div>

            <ul className="flex flex-wrap gap-3 mt-2">
              {skill.items.map((item, i) => (
                <li
                  key={item}
                  className="group relative w-20 h-20 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 cursor-pointer"
                >
                  {/* floating animation wrapper */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2 + i * 0.05, ease: 'easeInOut' }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* ICON: visible by default; fades out on hover */}
                    <div className="flex items-center justify-center">
                      <div className="transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                        {skillIcons[item] ?? <FileCode className="w-6 h-6 text-zinc-300" />}
                      </div>
                      {/* TEXT: hidden by default; appears on hover */}
                      <div className="absolute text-center px-1 text-xs text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {item}
                      </div>
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full mt-20 bg-gradient-to-br from-black via-gray-900 to-black border-t border-purple-500/30 rounded-t-[3rem] overflow-hidden">
      {/* animated glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#7c3aed_0%,_transparent_70%)] animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm text-zinc-400 tracking-wide"
        >
          © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Abuzar Khan</span>. All rights reserved.
        </motion.p>

        {/* Middle: Quick Nav */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          {[
            { name: 'Home', href: '#' },
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Blog', href: '#blog' },
            { name: 'Contact', href: '#contact' },
          ].map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-purple-400 hover:drop-shadow-[0_0_6px_#a78bfa] transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>

        {/* Right: Socials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-5"
        >
          {[
            {
              href: 'https://github.com/abuzarkhanse',
              icon: <Github size={22} />,
            },
            {
              href: 'https://linkedin.com/in/abuzarkhan-pakistan',
              icon: <Linkedin size={22} />,
            },
            {
              href: 'mailto:mrabuzar459@gmail.com',
              icon: <Mail size={22} />,
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-purple-400/20 hover:border-purple-400 hover:bg-purple-500/10 text-zinc-300 hover:text-purple-400 transition-all duration-300 shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_#a78bfa]"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}

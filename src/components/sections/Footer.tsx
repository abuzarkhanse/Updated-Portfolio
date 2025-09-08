'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full mt-20 bg-black/30 backdrop-blur border-t border-white/10 rounded-t-[2.5rem] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm text-zinc-400"
        >
          © {new Date().getFullYear()} Abuzar Khan. All rights reserved.
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
            { name: "Home", href: "#" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Blog", href: "#blog" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white transition"
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
          className="flex gap-4"
        >
          <a
            href="https://github.com/Abuzar-Khan2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/abuzar-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:abuzarkhan@example.com"
            className="text-zinc-400 hover:text-white transition"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

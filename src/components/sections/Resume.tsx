'use client'
import { motion } from 'framer-motion'
import { FileDown, Eye } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center sm:text-4xl"
      >
        Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-12 max-w-2xl mx-auto glass rounded-2xl shadow-glass p-8 text-center flex flex-col items-center gap-6"
      >
        <p className="text-zinc-300 text-lg">
          Download or view my latest resume to explore my education, experience, and skills in detail.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Download CV */}
          <a
            href="/AbuzarKhan-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-neon hover:shadow-lg transition"
          >
            <FileDown size={18} />
            Download CV
          </a>

          {/* View Online */}
          <a
            href="/AbuzarKhan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/40 hover:bg-white/5 transition"
          >
            <Eye size={18} />
            View Online
          </a>
        </div>
      </motion.div>
    </section>
  )
}

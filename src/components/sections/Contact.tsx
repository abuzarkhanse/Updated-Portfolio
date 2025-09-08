'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import SectionWrapper from '../SectionWrapper'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('Message sent successfully ✅')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Something went wrong ❌')
      }
    } catch (error) {
      console.error(error)
      setStatus('Error sending message ❌')
    }
  }

  return (
    <SectionWrapper id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center sm:text-4xl mb-12"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 shadow-glass flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 text-white"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-neon-purple transition"
          >
            Send Message
          </motion.button>
          {status && <p className="text-sm text-center mt-2">{status}</p>}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6"
        >
          <p className="text-lg text-zinc-300">
            I’m always open to new opportunities, collaborations, and exciting projects. 
            Feel free to drop me a message, or connect with me on my socials below.
          </p>

          <div className="flex gap-6 mt-4">
            <a href="mailto:mrabuzar459@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500 transition flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-400" />
            </a>
            <a href="https://github.com/abuzarkhanse" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500 transition flex items-center justify-center">
              <Github className="w-6 h-6 text-purple-400" />
            </a>
            <a href="https://linkedin.com/in/abuzarkhan-pakistan" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500 transition flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-purple-400" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

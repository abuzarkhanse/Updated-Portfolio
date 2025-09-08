'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'

const projects = [
  {
    title: "General Portfolio Web App",
    desc: "A General portfolio showcasing projects, skills and experiences. Built to highlight my expertise in React, Tailwind, Node.js, and Firebase.",
    link: "https://abuzarkhan-portfolio.vercel.app/",
    tags: ["React.js", "Tailwind", "Node.js", "Firebase"],
  },
  {
  title: "Honeypot Intrusion Detection System",
  desc: "A cybersecurity project that deploys honeypots to detect, log, and analyze malicious activities in real time. Designed to study attacker behavior, strengthen network defense, and support threat intelligence research.",
  link: "https://github.com/abuzarkhanse/Github-Snippets-Search-Engine-Java",
  tags: ["Python", "Networking", "Cybersecurity", "Intrusion Detection"],
  },
  {
  title: "GitHub Snippets Search Engine",
  desc: "A lightweight and efficient web application that allows developers to quickly find reusable code snippets from public GitHub repositories. Built in both Java and MERN Stack, it supports keyword-based search, programming language filters, and provides an intuitive interface for faster code discovery.",
  link: "https://github.com/Abuzar-Khan2023/Github-Snippets-Search-Engine",
  tags: ["Java", "MERN Stack", "React.js", "Node.js", "MongoDB", "Express"],
  },

  {
    title: "EarningInk Blog Platform",
    desc: "Earningink isn’t just another blogging platform. It’s a community where your voice matters, and your content can make a real impact. Whether you’re a seasoned writer or just starting, we provide you with the tools and opportunities to grow and monetize your passion.",
    link: "https://earningink.netlify.app/",
    tags: ["HTML, CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Word Pieas",
    desc: "World Peas is E-commerce website where people can buy every type of Fresh Vagitables with free delivery inside there city",
    link: "http://abuzarkhan.me/World-Peas/",
    tags: ["HTML, CSS", "JavaScript", "Tailwind", "MySQL", "PHP"],
  },
  {
    title: "OLX for PAF-IAST",
    desc: "This is e-commerce platform for university community to sell and buy products related to them.",
    link: "https://github.com/abuzarkhanse/OLX-PAFIAST",
    tags: ["HTML, CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Grocery Managmnet System",
    desc: "This is C++ based online shoping management system where have spacific login and sigin up for both user and admin. Admin can add, drop, or update product where User can select products from the list shown and can generate there invoice.",
    link: "https://github.com/abuzarkhanse/-Online-Shopping-System-Grocery-System-",
    tags: ["C++", "OOP", "DSA"],
  },
  {
    title: "Car Rent Managment system",
    desc: "This is C++ based Car rental management system...",
    link: "https://github.com/abuzarkhanse/Car-Rental-System",
    tags: ["C++"],
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center sm:text-4xl mb-10"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {projects.map((proj, idx) => (
          <motion.a
            key={proj.title}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 shadow-glass hover:-translate-y-2 hover:shadow-neon-purple transition-transform flex flex-col"
          >
            <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{proj.desc}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-lg bg-white/5 text-zinc-400 border border-white/10 hover:bg-purple-500/10 hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '../SectionWrapper'
import pythonArticle from '@/assets/python-article.webp'

const posts = [
  {
    title: "Mastering Python: A Comprehensive Guide to Learning, Scripting and Real-World Applications",
    excerpt: "Python is a beginner-friendly and versatile language used in web development, data science, and automation.",
    date: "July 17, 2025",
    image: pythonArticle,
    link: "https://medium.com/@abuzarkhanse/mastering-python-a-comprehensive-guide-to-learning-scripting-and-real-world-applications-3d8c1dd7c13c",
  },
];

export default function Blog() {
  return (
    <SectionWrapper id="blog">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center sm:text-4xl mb-12"
      >
        Articles & Blogs
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {posts.map((post, idx) => (
          <motion.a
            key={idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group glass rounded-2xl overflow-hidden shadow-glass hover:shadow-neon-purple transition transform hover:-translate-y-2 flex flex-col"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden rounded-t-2xl relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-sm text-zinc-400">{post.date}</div>
              <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-purple-400">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-300 flex-1">{post.excerpt}</p>
              <div className="mt-4 text-purple-400 text-sm font-medium group-hover:underline">
                Read More →
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

'use client'
import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  title?: string
}

export default function SectionWrapper({ children, id, title }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* subtle animated glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_#7c3aed_0%,_transparent_70%)] animate-pulse pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-20">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_0_8px_#a78bfa]">
            {title}
          </h2>
        )}
        <div className="flex flex-wrap gap-6 justify-center">{children}</div>
      </div>
    </section>
  )
}

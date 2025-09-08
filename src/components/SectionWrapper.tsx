'use client'
import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  title?: string
}

export default function SectionWrapper({ children, id, title }: SectionWrapperProps) {
  return (
    <section id={id} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-20">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            {title}
          </h2>
        )}
        <div className="flex flex-wrap gap-6 justify-center">
          {children}
        </div>
      </div>
    </section>
  )
}

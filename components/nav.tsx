'use client'

import { useEffect, useState } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 px-6 flex items-center justify-between bg-bg transition-colors ${
        scrolled ? 'border-b border-border' : ''
      }`}
    >
      <span className="text-primary font-medium text-sm">Mohammed Al Sarraj</span>
      <div className="flex gap-5 items-center">
        <a href="#projects" className="text-muted hover:text-primary text-sm transition-colors hidden sm:block">
          Work
        </a>
        <a href="#contact" className="text-muted hover:text-primary text-sm transition-colors hidden sm:block">
          Contact
        </a>
        <a
          href="/cv.pdf"
          download
          className="text-sm px-4 py-1.5 border border-border rounded-full text-primary hover:border-accent transition-colors"
        >
          CV ↓
        </a>
      </div>
    </nav>
  )
}

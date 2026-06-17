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
      className={`fixed top-0 left-0 right-0 z-50 h-12 px-6 flex items-center justify-between transition-colors ${
        scrolled ? 'bg-bg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="w-5 h-5 rounded flex items-center justify-center text-bg text-[10px] font-bold flex-shrink-0"
          style={{ background: '#f59e0b' }}
        >
          M
        </div>
        <span className="text-primary text-[13px] font-medium tracking-tight">moealsarraj</span>
      </div>

      <div className="flex gap-5 items-center">
        <a href="#projects" className="text-muted hover:text-primary text-[13px] transition-colors hidden sm:block">
          Work
        </a>
        <a href="#contact" className="text-muted hover:text-primary text-[13px] transition-colors hidden sm:block">
          Contact
        </a>
        <a
          href="/cv.pdf"
          download
          className="text-[13px] px-3.5 py-1.5 border border-border rounded text-primary hover:border-accent transition-colors"
        >
          CV ↓
        </a>
      </div>
    </nav>
  )
}

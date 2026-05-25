import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar({ onContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'border-b border-white/[0.06]'
          : 'border-b border-transparent'
      }`}
      style={{
        background: scrolled
          ? 'rgba(5, 9, 24, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2.5 select-none">
          <img src="/hapaii-emblem-wht.svg" alt="" aria-hidden="true" className="h-7 w-auto" />
          <span className="font-display font-extrabold text-2xl text-white tracking-tight">
            hap<span className="text-gradient-bright">ai</span>i
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={onContact}
            className="btn-glow bg-gradient-to-r from-accent-blue to-accent-sky text-white text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Book a Free Call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-b border-white/[0.06] px-6 py-5 flex flex-col gap-4"
          style={{ background: 'rgba(5, 9, 24, 0.95)', backdropFilter: 'blur(16px)' }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onContact() }}
            className="btn-glow bg-gradient-to-r from-accent-blue to-accent-sky text-white text-sm font-semibold px-5 py-2.5 rounded-full self-start mt-1"
          >
            Book a Free Call
          </button>
        </div>
      )}
    </header>
  )
}

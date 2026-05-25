import { useEffect, useRef } from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame } from 'framer-motion'

function GridPattern({ id, offsetX, offsetY }) {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={id}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#4F6EF7"
            strokeWidth="1"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

export default function Hero({ onContact }) {
  const containerRef = useRef(null)

  // Staggered reveal on mount
  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    const timer = setTimeout(() => {
      els.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 130)
      })
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  // Mouse tracking for reveal layer
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  function handleMouseLeave() {
    mouseX.set(-9999)
    mouseY.set(-9999)
  }

  // Infinite drift
  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.3) % 40)
    gridOffsetY.set((gridOffsetY.get() + 0.3) % 40)
  })

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Base grid — always visible, very dim */}
      <div aria-hidden="true" className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <GridPattern id="grid-base" offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Reveal grid — lights up indigo under cursor */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern id="grid-reveal" offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Radial glow — center top */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,110,247,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Radial glow — bottom left */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <div
            data-reveal
            className="reveal inline-flex items-center gap-2 border border-white/[0.1] rounded-full px-4 py-1.5 mb-8"
            style={{ background: 'rgba(79,110,247,0.08)' }}
          >
            <Zap size={12} className="text-accent-sky" />
            <span className="text-xs font-medium text-slate-300 tracking-wide">
              AI integration for entrepreneurs & small business
            </span>
          </div>

          {/* Headline */}
          <h1
            data-reveal
            className="reveal font-display font-extrabold text-white leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(42px, 7vw, 84px)', letterSpacing: '-0.03em' }}
          >
            Elevate your
            <br />
            <span className="text-gradient">business</span>
            <br />
            with AI.
          </h1>

          {/* Subheadline */}
          <p
            data-reveal
            className="reveal text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ fontWeight: 300 }}
          >
            We help entrepreneurs and small business owners put AI to work — practically, without the jargon, and with results you can measure.
          </p>

          {/* CTAs */}
          <div data-reveal className="reveal flex flex-wrap items-center gap-4 mb-16">
            <button
              onClick={onContact}
              className="btn-glow inline-flex items-center gap-2.5 bg-gradient-to-r from-accent-blue to-accent-sky text-white font-semibold text-sm px-8 py-4 rounded-full group"
            >
              Book a Free Call
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#process"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
            >
              See how it works
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform opacity-60" />
            </a>
          </div>

          {/* Stats */}
          <div
            data-reveal
            className="reveal flex flex-wrap items-center gap-8 pt-8 border-t border-white/[0.06]"
          >
            {[
              { value: '4 services', label: 'AI implementation areas' },
              { value: 'No jargon', label: 'plain-language guidance' },
              { value: 'SMB-first', label: 'built for business owners' },
            ].map(stat => (
              <div key={stat.value} className="flex flex-col gap-0.5">
                <span className="font-display font-bold text-white text-base">{stat.value}</span>
                <span className="text-xs text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating orb — decorative right side */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden lg:block"
          style={{
            background: 'radial-gradient(circle at center, rgba(79,110,247,0.07) 0%, rgba(56,189,248,0.04) 40%, transparent 70%)',
            filter: 'blur(1px)',
          }}
        >
          <div
            className="absolute inset-16 rounded-full border border-white/[0.04]"
            style={{ animation: 'float 8s ease-in-out infinite' }}
          />
          <div
            className="absolute inset-32 rounded-full border border-white/[0.06]"
            style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '-4s' }}
          />
        </div>
      </div>
    </section>
  )
}

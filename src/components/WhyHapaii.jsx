import { useEffect, useRef } from 'react'
import { MessageSquare, Wrench, Presentation, HeartHandshake } from 'lucide-react'

const DIFFERENTIATORS = [
  {
    icon: MessageSquare,
    title: 'We speak entrepreneur, not engineer.',
    body: 'No jargon, no acronyms. We explain everything in plain language and make sure you understand every step.',
  },
  {
    icon: Wrench,
    title: 'Practical AI, not hype.',
    body: "We focus on AI that works today, delivers measurable results, and fits your actual budget.",
  },
  {
    icon: Presentation,
    title: 'Hands-on implementation, not advice.',
    body: "We don't tell you what to do — we build it with you. Working systems, not PDFs.",
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing support as you grow.',
    body: 'AI needs change as your business grows. We stay with you — adjusting and building as your needs evolve.',
  },
]

export default function WhyHapaii() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-item]').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 110)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 relative bg-grid" ref={ref}
      style={{ background: 'linear-gradient(180deg, #080D24 0%, #050918 100%)' }}
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — brand story */}
          <div data-item className="reveal">
            <span className="section-label mb-4">Why Hapaii</span>
            <h2
              className="font-display font-extrabold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', letterSpacing: '-0.03em' }}
            >
              Human expertise
              <br />
              <span className="text-gradient">meets AI capability.</span>
            </h2>

            {/* Divider */}
            <div
              className="w-10 h-px mb-6"
              style={{ background: 'linear-gradient(90deg, #4F6EF7, transparent)' }}
            />

            <p className="text-slate-300 text-base leading-relaxed mb-4" style={{ fontWeight: 300 }}>
              The name Hapaii comes from the Hawaiian <em className="text-white not-italic font-medium">hāpai</em> — to lift, to carry forward. That's exactly what we do: carry your business forward using AI as the engine.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              <em className="text-slate-400 not-italic">Hapa</em> also means mixed — blended. We believe the best results come from blending human expertise with AI capability, not replacing one with the other.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Most small business owners know AI is important but don't know where to start. We make the whole thing approachable, practical, and worth your time.
            </p>
          </div>

          {/* Right — differentiators */}
          <div className="flex flex-col gap-3">
            {DIFFERENTIATORS.map(item => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  data-item
                  className="reveal card rounded-2xl p-5 flex gap-4"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.15)' }}
                  >
                    <Icon size={16} className="text-accent-sky" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

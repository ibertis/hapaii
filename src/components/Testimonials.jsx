import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: "I was spending 12 hours a week on follow-up emails alone. Hapaii automated the whole thing in two days. That time goes straight back into sales now.",
    name: 'Rachel M.',
    role: 'Owner, Bloom Creative Studio',
    initials: 'RM',
    color: 'linear-gradient(135deg, #4F6EF7, #38BDF8)',
  },
  {
    quote: "They didn't just build automations — they explained every decision. I actually understand the systems we're running now. That matters to me.",
    name: 'James T.',
    role: 'Founder, Tidal Consulting',
    initials: 'JT',
    color: 'linear-gradient(135deg, #7C3AED, #4F6EF7)',
  },
  {
    quote: "I'd tried to set up AI tools three times on my own and gave up each time. Hapaii had it working in a week and trained my whole team in one session.",
    name: 'Sofia R.',
    role: 'Operator, Roots Wellness',
    initials: 'SR',
    color: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
  },
  {
    quote: "The ROI was immediate. We cut our proposal turnaround from 3 days to 4 hours. Clients noticed before I even told them what changed.",
    name: 'Marcus K.',
    role: 'CEO, Elevate Architecture',
    initials: 'MK',
    color: 'linear-gradient(135deg, #6366F1, #38BDF8)',
  },
  {
    quote: "What I appreciated most was that they didn't oversell. They told us exactly what AI could and couldn't do for us. That kind of honesty is rare.",
    name: 'Diane L.',
    role: 'Director, Northside Realty Group',
    initials: 'DL',
    color: 'linear-gradient(135deg, #4F6EF7, #818CF8)',
  },
  {
    quote: "My team was skeptical about AI. After Hapaii's workshop, three people came to me asking for more tools. Complete 180.",
    name: 'Ben O.',
    role: 'Managing Partner, Forge & Co.',
    initials: 'BO',
    color: 'linear-gradient(135deg, #38BDF8, #7DD3FC)',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={11} className="text-accent-sky fill-current" style={{ color: '#38BDF8' }} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-t]').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
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
    <section
      id="testimonials"
      className="py-24 relative"
      style={{ background: '#050918' }}
      ref={ref}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(79,110,247,0.2), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="section-label mb-3">What Clients Say</span>
          <h2
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 50px)', letterSpacing: '-0.03em' }}
          >
            Results that speak
            <br />
            <span className="text-gradient">for themselves.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map(t => (
            <div
              key={t.name}
              data-t
              className="reveal card rounded-2xl p-6 flex flex-col gap-4"
            >
              <Stars />
              <p className="text-slate-300 text-sm leading-relaxed flex-1" style={{ fontWeight: 300 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                className="flex items-center gap-3 pt-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

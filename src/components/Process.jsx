import { useEffect, useRef } from 'react'
import { Phone, Compass, Hammer, LifeBuoy } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Phone,
    title: 'Discovery Call',
    body: "We start by understanding your business, your goals, and where your biggest bottlenecks are. No pitch — just honest conversation.",
  },
  {
    number: '02',
    icon: Compass,
    title: 'AI Roadmap',
    body: "We map your highest-impact AI opportunities, prioritize by effort and return, and give you a clear plan before anything is built.",
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build & Integrate',
    body: "We build and connect the tools ourselves — hands-on. You don't need to manage developers or learn new software.",
  },
  {
    number: '04',
    icon: LifeBuoy,
    title: 'Train & Support',
    body: "We make sure your team is confident using everything we built. Then we stay close — available for questions and next phases.",
  },
]

export default function Process() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-step]').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 130)
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
      id="process"
      className="py-24 relative"
      style={{ background: '#050918' }}
      ref={ref}
    >
      {/* Horizontal glow line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(79,110,247,0.2), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="section-label mb-3">How We Work</span>
          <h2
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 50px)', letterSpacing: '-0.03em' }}
          >
            From conversation
            <br />
            to <span className="text-gradient">results</span>.
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mt-4">
            Four steps. No unnecessary complexity. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-9 left-[13%] right-[13%] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(79,110,247,0.15), rgba(56,189,248,0.15))' }}
          />

          {STEPS.map(step => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                data-step
                className="reveal flex flex-col items-center text-center relative"
              >
                {/* Circle */}
                <div className="relative mb-6 z-10">
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(79,110,247,0.08)',
                      border: '1px solid rgba(79,110,247,0.2)',
                      boxShadow: '0 0 20px rgba(79,110,247,0.1)',
                    }}
                  >
                    <Icon size={22} className="text-accent-sky" />
                  </div>
                  <span
                    className="absolute -top-1.5 -right-1.5 font-display font-black text-white rounded-full w-5 h-5 flex items-center justify-center leading-none"
                    style={{
                      fontSize: '8px',
                      background: 'linear-gradient(135deg, #4F6EF7, #38BDF8)',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-base leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

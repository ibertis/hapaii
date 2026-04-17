import { useEffect, useRef } from 'react'
import { Plug, Zap, Map, GraduationCap } from 'lucide-react'

const SERVICES = [
  {
    icon: Plug,
    title: 'AI Integration',
    description: 'We connect the right AI tools into your existing workflows — CRM, email, scheduling, customer service — so AI works with how you already operate.',
    tag: 'Most popular',
    accent: true,
  },
  {
    icon: Zap,
    title: 'Automation Setup',
    description: 'Every hour spent on repetitive tasks is an hour not spent growing. We identify, build, and launch automations that give you that time back.',
    tag: null,
    accent: false,
  },
  {
    icon: Map,
    title: 'AI Strategy & Consulting',
    description: "Not sure where to start? We map your business, find the highest-impact AI opportunities, and give you a clear, prioritized roadmap.",
    tag: null,
    accent: false,
  },
  {
    icon: GraduationCap,
    title: 'Training & Workshops',
    description: 'Your team learns how to use AI confidently and correctly — hands-on workshops tailored to your business, your tools, and your goals.',
    tag: null,
    accent: false,
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-card]').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
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
      id="services"
      className="py-24 relative"
      style={{ background: 'linear-gradient(180deg, #050918 0%, #080D24 100%)' }}
      ref={ref}
    >
      {/* Top separator glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(79,110,247,0.3))' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="section-label mb-3">What We Do</span>
          <h2
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(34px, 5vw, 52px)', letterSpacing: '-0.03em' }}
          >
            Four ways we put
            <br />
            <span className="text-gradient">AI to work</span> for you.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map(service => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                data-card
                className={`reveal card rounded-2xl p-6 flex flex-col gap-4 relative ${
                  service.accent ? 'gradient-border' : ''
                }`}
              >
                {service.tag && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-0.5"
                    style={{
                      background: 'rgba(79,110,247,0.15)',
                      border: '1px solid rgba(79,110,247,0.3)',
                      color: '#818CF8',
                    }}
                  >
                    {service.tag}
                  </span>
                )}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(79,110,247,0.12)', border: '1px solid rgba(79,110,247,0.2)' }}
                >
                  <Icon size={18} className="text-accent-sky" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

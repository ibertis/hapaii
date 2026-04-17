import { useEffect, useRef } from 'react'
import { User, Briefcase, Users, ArrowRight } from 'lucide-react'

const PERSONAS = [
  {
    icon: User,
    type: 'Solopreneurs',
    tagline: 'Do more with less.',
    bullets: [
      'Automate client onboarding & follow-ups',
      'AI-assisted content creation',
      'Reclaim 5–10 hours per week',
    ],
  },
  {
    icon: Briefcase,
    type: 'Service Businesses',
    tagline: 'Deliver faster. Scale smarter.',
    bullets: [
      'Streamline proposals, invoicing & scheduling',
      'Customer service automations that never sleep',
      'AI tools trained to your specific workflows',
    ],
    featured: true,
  },
  {
    icon: Users,
    type: 'Growing Teams',
    tagline: 'Grow without growing overhead.',
    bullets: [
      'Onboard AI tools across your whole team',
      'Custom workshops for your use cases',
      'Strategy for scaling AI as you hire',
    ],
  },
]

export default function ForWho({ onContact }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-persona]').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
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
      id="for-who"
      className="py-24 relative"
      style={{ background: 'linear-gradient(180deg, #050918 0%, #080D24 100%)' }}
      ref={ref}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.15), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="section-label mb-3">Who We Serve</span>
          <h2
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 50px)', letterSpacing: '-0.03em' }}
          >
            Built for business owners,
            <br />
            <span className="text-gradient">not IT departments.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {PERSONAS.map(persona => {
            const Icon = persona.icon
            return (
              <div
                key={persona.type}
                data-persona
                className={`reveal rounded-2xl p-7 flex flex-col gap-5 ${
                  persona.featured ? 'gradient-border' : 'card'
                }`}
                style={persona.featured ? {
                  background: 'linear-gradient(135deg, rgba(79,110,247,0.12) 0%, rgba(56,189,248,0.06) 100%)',
                } : {}}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={
                    persona.featured
                      ? { background: 'rgba(79,110,247,0.2)', border: '1px solid rgba(79,110,247,0.3)' }
                      : { background: 'rgba(79,110,247,0.08)', border: '1px solid rgba(79,110,247,0.15)' }
                  }
                >
                  <Icon size={20} className={persona.featured ? 'text-accent-sky' : 'text-accent-sky'} />
                </div>

                <div>
                  <h3 className="font-display font-bold text-white text-xl leading-snug mb-1">
                    {persona.type}
                  </h3>
                  <p className="text-sm font-medium text-gradient">{persona.tagline}</p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {persona.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ background: 'linear-gradient(135deg, #4F6EF7, #38BDF8)' }}
                      />
                      <span className="text-sm text-slate-400 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm mb-4">Not sure which fits? Let's find out together.</p>
          <button
            onClick={onContact}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
          >
            Book a free discovery call
            <ArrowRight size={14} className="text-accent-sky group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

const SERVICES = ['AI Integration', 'Automation Setup', 'AI Strategy & Consulting', 'Training & Workshops']
const COMPANY = ['About', 'How We Work', 'Testimonials', 'Contact']

export default function Footer({ onContact }) {
  return (
    <footer
      style={{ background: '#02040F', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-display font-extrabold text-white text-2xl tracking-tight block mb-3">
              hap<span className="text-gradient-bright">ai</span>i
            </span>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-5" style={{ fontWeight: 300 }}>
              AI integration & consulting for entrepreneurs and small business owners. Human expertise meets AI capability.
            </p>
            <a
              href="mailto:hello@hapaii.com"
              className="text-sm font-medium transition-colors"
              style={{ color: '#38BDF8' }}
              onMouseEnter={e => e.target.style.color = '#7DD3FC'}
              onMouseLeave={e => e.target.style.color = '#38BDF8'}
            >
              hello@hapaii.com
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map(s => (
                <li key={s}>
                  <a href="#services" className="text-sm text-slate-500 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map(item => (
                <li key={item}>
                  {item === 'Contact' ? (
                    <button
                      onClick={onContact}
                      className="text-sm text-slate-500 hover:text-white transition-colors text-left"
                    >
                      {item}
                    </button>
                  ) : (
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-slate-500 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} Hapaii. All rights reserved.
          </p>
          <p className="text-xs text-slate-700 font-display italic">
            human + AI, carried forward.
          </p>
        </div>
      </div>
    </footer>
  )
}

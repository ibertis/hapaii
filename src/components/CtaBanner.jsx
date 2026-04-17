import { ArrowRight } from 'lucide-react'

export default function CtaBanner({ onContact }) {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080D24 0%, #050918 100%)' }}
    >
      {/* Center glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(79,110,247,0.14) 0%, transparent 70%)',
        }}
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-grid opacity-40"
      />

      {/* Horizontal glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(79,110,247,0.25), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.15), transparent)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <span className="section-label mb-5 justify-center flex">Ready to start?</span>
        <h2
          className="font-display font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.03em' }}
        >
          Let's lift your
          <br />
          <span className="text-gradient">business together.</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto mb-10" style={{ fontWeight: 300 }}>
          Book a free 30-minute discovery call. No sales pitch — just an honest conversation about where AI can help your business.
        </p>
        <button
          onClick={onContact}
          className="btn-glow inline-flex items-center gap-2.5 bg-gradient-to-r from-accent-blue to-accent-sky text-white font-semibold text-sm px-9 py-4 rounded-full group"
        >
          Book a Free Discovery Call
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  )
}

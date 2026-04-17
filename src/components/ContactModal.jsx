import { useState, useEffect } from 'react'
import { X, CheckCircle, ArrowRight } from 'lucide-react'

const BIZ_TYPES = [
  'Solopreneur / Freelancer',
  'Service Business (1–10 employees)',
  'Growing Team (10–50 employees)',
  'Other',
]

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', bizType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setForm({ name: '', email: '', bizType: '', message: '' })
        setSubmitted(false)
      }, 300)
    }
  }, [open])

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Hapaii inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness type: ${form.bizType}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:hello@hapaii.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{ background: 'rgba(2, 4, 15, 0.8)', backdropFilter: 'blur(8px)' }}
    >
      <div
        className="w-full max-w-md rounded-2xl relative"
        style={{
          background: '#080D24',
          border: '1px solid rgba(79,110,247,0.2)',
          boxShadow: '0 0 60px rgba(79,110,247,0.12), 0 24px 80px rgba(0,0,0,0.5)',
          animation: 'fadeUp 0.25s ease forwards',
        }}
      >
        {/* Gradient top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{ background: 'linear-gradient(90deg, rgba(79,110,247,0.4), rgba(56,189,248,0.3), transparent)' }}
        />

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <h2 className="font-display font-bold text-white text-xl leading-tight">
              Book a Free Call
            </h2>
            <p className="text-sm text-slate-400 mt-1" style={{ fontWeight: 300 }}>
              We'll reach out within 1 business day to schedule.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-white transition-colors rounded-lg"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 pt-8 flex flex-col items-center text-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(79,110,247,0.12)', border: '1px solid rgba(79,110,247,0.2)' }}
            >
              <CheckCircle size={26} className="text-accent-sky" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg mb-1">You're on the list!</h3>
              <p className="text-sm text-slate-400 leading-relaxed" style={{ fontWeight: 300 }}>
                Check your email — we've opened a draft for you. Send it and we'll be in touch within 1 business day.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-2 text-sm font-medium text-slate-500 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 pt-5 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-500">Your name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className="rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(79,110,247,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-500">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@co.com"
                  className="rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(79,110,247,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-500">Business type</label>
              <select
                name="bizType"
                value={form.bizType}
                onChange={handleChange}
                className="rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition appearance-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: form.bizType ? 'white' : '#475569',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(79,110,247,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <option value="" style={{ background: '#080D24' }}>Select one...</option>
                {BIZ_TYPES.map(t => (
                  <option key={t} value={t} style={{ background: '#080D24' }}>{t}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-500">What would you like to talk about?</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us a bit about your business and what you're hoping AI can help with..."
                className="rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition resize-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(79,110,247,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>

            <button
              type="submit"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-blue to-accent-sky text-white font-semibold text-sm py-3 rounded-full group mt-1"
            >
              Send & Schedule a Call
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <p className="text-center text-xs text-slate-600">
              No spam, ever. We'll only use this to reach out about your inquiry.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

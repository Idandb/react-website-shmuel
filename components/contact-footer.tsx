'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { Send, CheckCircle, Lock, Accessibility } from 'lucide-react'

const metalTypes = ['ברזל', 'אלומיניום', 'נחושת', 'נירוסטה', 'עופרת', 'אבץ', 'אחר']

export default function ContactFooter() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', phone: '', metalType: '', agree: false })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <footer
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#1c1c1c]"
    >
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="reveal text-center mb-10">
          <h2 className="text-[2.4rem] md:text-5xl font-extrabold text-white mb-3 leading-tight">
            צרו קשר
          </h2>
          <div className="w-16 h-1 bg-[#f0a500] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* ── Form ── */}
          <div className="reveal delay-200">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <CheckCircle size={64} className="text-[#f0a500]" strokeWidth={1.2} />
                <p className="text-white text-2xl font-bold text-center">
                  תודה! נציגנו יצור עמך קשר בקרוב.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="שם"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border border-[#444] text-white placeholder-[#777] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="טלפון"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-transparent border border-[#444] text-white placeholder-[#777] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] transition-colors"
                  />
                </div>

                <select
                  value={form.metalType}
                  onChange={(e) => setForm({ ...form, metalType: e.target.value })}
                  className="bg-[#2a2a2a] border border-[#444] text-[#aaa] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] transition-colors appearance-none"
                >
                  <option value="">סוג המתכת</option>
                  {metalTypes.map((t) => (
                    <option key={t} value={t} className="text-white bg-[#2a2a2a]">
                      {t}
                    </option>
                  ))}
                </select>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                      className="sr-only"
                      required
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                        form.agree
                          ? 'bg-[#f0a500] border-[#f0a500]'
                          : 'border-[#555] bg-transparent'
                      }`}
                      onClick={() => setForm({ ...form, agree: !form.agree })}
                    >
                      {form.agree && (
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                          <path d="M1 4L4 7L10 1" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-[#999] text-xs leading-relaxed">
                    מילוי פרטיך מהווה הסכמה לנציג מטעם החברה ליצור עמך קשר באמצעות הטלפון / SMS /
                    וואטסאפ, על מנת להעניק לך שירות
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-[#f0a500] hover:bg-[#c98a00] active:scale-[0.97] disabled:opacity-70 text-[#1c1c1c] font-extrabold text-lg py-3.5 rounded-xl transition-all duration-200"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                  ) : (
                    <Send size={18} />
                  )}
                  <span>{loading ? 'שולח...' : 'שליחה'}</span>
                </button>
              </form>
            )}
          </div>

          {/* ── Map ── */}
          <div className="reveal delay-300 rounded-xl overflow-hidden" style={{ height: '300px' }}>
            <iframe
              title="מיקום חבל הארץ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.8!2d34.5714!3d31.6683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQwJzA2LjAiTiAzNMKwMzQnMTcuMCJF!5e0!3m2!1siw!2sil!4v1620000000000!5m2!1siw!2sil"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#2e2e2e] py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 text-[#666] text-sm">
          <a href="#" className="flex items-center gap-1.5 hover:text-[#f0a500] transition-colors">
            <Lock size={13} />
            <span>מדיניות פרטיות</span>
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-[#f0a500] transition-colors">
            <Accessibility size={13} />
            <span>הצהרת נגישות</span>
          </a>
        </div>
        <p className="text-center text-[#444] text-xs mt-3">
          Made with{' '}
          <span className="text-red-500">♥</span>
          {' '}by{' '}
          <a href="#" className="text-[#f0a500] hover:underline">
            Astrateg
          </a>
        </p>
      </div>
    </footer>
  )
}

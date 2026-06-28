'use client'

import { useState } from 'react'

const metalTypes = ['מתכת', 'ברזל', 'אלומיניום', 'נחושת', 'נירוסטה', 'אחר']

export default function ContactFooter() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    metalType: '',
    agree: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer className="bg-[#1c1c1c]" id="contact">
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-[#f0a500] text-2xl font-bold">תודה! נציגנו יצור עמך קשר בקרוב.</p>
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
                    className="bg-transparent border border-[#555] text-white placeholder-[#aaa] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="טלפון"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-transparent border border-[#555] text-white placeholder-[#aaa] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] transition-colors"
                  />
                </div>
                <select
                  value={form.metalType}
                  onChange={(e) => setForm({ ...form, metalType: e.target.value })}
                  className="bg-[#2a2a2a] border border-[#555] text-[#aaa] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#f0a500] transition-colors"
                >
                  <option value="">סוג המתכת</option>
                  {metalTypes.map((t) => (
                    <option key={t} value={t} className="text-white bg-[#2a2a2a]">
                      {t}
                    </option>
                  ))}
                </select>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                    className="mt-1 accent-[#f0a500] shrink-0"
                    required
                  />
                  <span className="text-[#aaa] text-xs leading-relaxed">
                    מילוי פרטיך מהווה הסכמה לנציג מטעם החברה ליצור עמך קשר באמצעות הטלפון / SMS /
                    וואטסאפ, על מנת להעניק לך שירות
                  </span>
                </label>
                <button
                  type="submit"
                  className="bg-[#f0a500] hover:bg-[#c98a00] text-[#1c1c1c] font-extrabold text-lg py-3 rounded transition-colors"
                >
                  שליחה
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden h-64 md:h-full min-h-52">
            <iframe
              title="מיקום חבל הארץ - בלפור 2 אשקלון"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.8!2d34.5714!3d31.6683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQwJzA2LjAiTiAzNMKwMzQnMTcuMCJF!5e0!3m2!1siw!2sil!4v1620000000000!5m2!1siw!2sil"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '220px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#333] py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-[#888] text-sm">
          <a href="#" className="hover:text-[#f0a500] transition-colors flex items-center gap-1">
            <span>🔒</span> מדיניות פרטיות
          </a>
          <a href="#" className="hover:text-[#f0a500] transition-colors flex items-center gap-1">
            <span>♿</span> הצהרת נגישות
          </a>
        </div>
        <p className="text-center text-[#555] text-xs mt-3">
          Made with ❤️ by{' '}
          <a href="#" className="text-[#f0a500] hover:underline">
            Astrateg
          </a>
        </p>
      </div>
    </footer>
  )
}

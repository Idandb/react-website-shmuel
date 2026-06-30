'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { Phone } from 'lucide-react'
import { WhatsappIcon } from '@/components/floating-contact'

const WHATSAPP = '972537380382' // wa.me — דורש קידומת בינ״ל

export default function ContactFooter() {
  const ref = useReveal()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = ['שלום, הגעתי דרך האתר ואשמח לפרטים:']
    if (name.trim()) lines.push(`שם: ${name.trim()}`)
    if (phone.trim()) lines.push(`טלפון: ${phone.trim()}`)
    if (message.trim()) lines.push(`הודעה: ${message.trim()}`)
    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer')
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
          {/* ── WhatsApp form ── */}
          <form
            onSubmit={handleSubmit}
            className="reveal delay-100 flex flex-col gap-4 bg-[#242424] border border-[#333] rounded-2xl p-6"
          >
            <p className="text-white font-bold text-lg text-right">השאירו פרטים ונחזור אליכם בוואטספ</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="שם (לא חובה)"
              className="w-full rounded-xl bg-[#1c1c1c] border border-[#3a3a3a] text-white placeholder:text-[#777] px-4 py-3 text-right focus:outline-none focus:border-[#f0a500] transition-colors"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="טלפון (לא חובה)"
              dir="rtl"
              className="w-full rounded-xl bg-[#1c1c1c] border border-[#3a3a3a] text-white placeholder:text-[#777] px-4 py-3 text-right focus:outline-none focus:border-[#f0a500] transition-colors"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="הודעה (לא חובה)"
              rows={3}
              className="w-full rounded-xl bg-[#1c1c1c] border border-[#3a3a3a] text-white placeholder:text-[#777] px-4 py-3 text-right resize-none focus:outline-none focus:border-[#f0a500] transition-colors"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] active:scale-95 text-white font-extrabold text-lg py-3.5 px-6 rounded-xl transition-all duration-200"
            >
              <WhatsappIcon size={22} />
              <span>שליחה בוואטספ</span>
            </button>
            <p className="text-[#666] text-xs text-center">בלחיצה ייפתח וואטספ עם הפרטים מוכנים לשליחה</p>
          </form>

          {/* ── Phone + Map ── */}
          <div className="flex flex-col gap-6">
            <div className="reveal delay-200 flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0a500]/10 border border-[#f0a500]/30 flex items-center justify-center">
                <Phone size={30} className="text-[#f0a500]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[#aaa] text-sm mb-2">או חייגו אלינו</p>
                <a
                  href="tel:0537380382"
                  className="text-white font-extrabold text-3xl md:text-4xl tracking-wide hover:text-[#f0a500] transition-colors"
                  dir="ltr"
                >
                  053-7380382
                </a>
              </div>
              <p className="text-[#666] text-sm">ראשון–שישי | 07:00–18:00</p>
            </div>

            <div className="reveal delay-300 rounded-xl overflow-hidden" style={{ height: '220px' }}>
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
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#2e2e2e] py-5 px-4">
        <p className="text-center text-[#666] text-xs">
          © {new Date().getFullYear()} חבל הארץ אחזקות בע״מ — כל הזכויות שמורות
        </p>
      </div>
    </footer>
  )
}

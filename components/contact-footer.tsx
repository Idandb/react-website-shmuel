'use client'

import { useReveal } from '@/hooks/use-reveal'
import { Phone } from 'lucide-react'

export default function ContactFooter() {
  const ref = useReveal()

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* ── Phone ── */}
          <div className="reveal delay-200 flex flex-col items-center gap-5 text-center">
            <div className="w-20 h-20 rounded-full bg-[#f0a500]/10 border border-[#f0a500]/30 flex items-center justify-center">
              <Phone size={36} className="text-[#f0a500]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[#aaa] text-sm mb-2">התקשרו אלינו</p>
              <a
                href="tel:0537380382"
                className="text-white font-extrabold text-4xl md:text-5xl tracking-wide hover:text-[#f0a500] transition-colors"
                dir="ltr"
              >
                053-7380382
              </a>
            </div>
            <p className="text-[#666] text-sm">ראשון–שישי | 07:00–18:00</p>
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
        <p className="text-center text-[#666] text-xs">
          © {new Date().getFullYear()} חבל הארץ אחזקות בע״מ — כל הזכויות שמורות
        </p>
      </div>
    </footer>
  )
}

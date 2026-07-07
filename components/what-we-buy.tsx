'use client'

import { useReveal } from '@/hooks/use-reveal'
import { Phone, Cable, Layers, Wrench, CircleDot, Magnet, Cog } from 'lucide-react'
import { WhatsappIcon } from '@/components/floating-contact'
import { trackWhatsappClick, trackPhoneClick } from '@/lib/track'

const WHATSAPP = '972537380382'
const WHATSAPP_TEXT = encodeURIComponent('שלום, אשמח למחיר מעודכן להיום. אשלח תמונה של המתכות.')

const metals = [
  {
    icon: Cable,
    name: 'נחושת',
    examples: 'גרט נחושת, צנרת, נחושת מצופה',
  },
  {
    icon: Layers,
    name: 'אלומיניום',
    examples: 'אלומיניום נקי, יציקות, פרופילים',
  },
  {
    icon: Magnet,
    name: 'ברזל וגרט',
    examples: 'ברזל תעשייתי, גרוטאות, ציוד כבד',
  },
  {
    icon: CircleDot,
    name: 'נירוסטה',
    examples: 'נירוסטה תעשייתית ומטבחים',
  },
  {
    icon: Wrench,
    name: 'פליז',
    examples: 'ברזים, צנרת, גרט פליז',
  },
  {
    icon: Cog,
    name: 'כבלי חשמל',
    examples: 'כבלי נחושת ואלומיניום',
  },
]

export default function WhatWeBuy() {
  const ref = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="what-we-buy"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-[#fffbf2] py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-[#f0a500] font-bold text-sm uppercase tracking-widest text-center mb-3">
          קונים במזומן
        </p>
        <h2 className="reveal delay-100 text-[2.4rem] md:text-5xl font-extrabold text-[#1c1c1c] text-center mb-4 leading-tight">
          מה אנחנו קונים?
        </h2>
        <div className="reveal delay-200 gold-divider mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {metals.map((m, i) => {
            const Icon = m.icon
            return (
              <div
                key={m.name}
                className={`reveal delay-${Math.min((i + 1) * 100, 500)} feature-card bg-white border border-[#e8dcc0] rounded-2xl px-5 py-6 flex flex-col items-center text-center gap-3 cursor-default`}
              >
                <div className="text-[#f0a500] w-12 h-12 flex items-center justify-center rounded-full bg-[#f0a500]/10 shrink-0">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#1c1c1c] font-extrabold text-lg leading-snug">{m.name}</p>
                  <p className="text-[#777] text-xs leading-relaxed mt-1">{m.examples}</p>
                </div>
                <a
                  href="tel:0537380382"
                  onClick={() => trackPhoneClick('what-we-buy-card')}
                  className="text-[#f0a500] font-bold text-sm hover:text-[#c98a00] transition-colors"
                >
                  התקשרו למחיר ←
                </a>
              </div>
            )
          })}
        </div>

        <p className="reveal delay-300 text-center text-[#555] text-sm leading-relaxed max-w-2xl mx-auto mb-8">
          המחירים מתעדכנים מדי יום לפי בורסת המתכות בלונדון (LME) — לכן הדרך המדויקת ביותר
          היא להתקשר ולקבל <span className="font-bold text-[#1c1c1c]">מחיר מעודכן להיום</span>.
          שקילה במקום, תשלום הוגן <span className="font-bold text-[#1c1c1c]">במזומן</span> וללא התחייבות.
        </p>

        <div className="reveal delay-400 flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
          <a
            href="tel:0537380382"
            onClick={() => trackPhoneClick('what-we-buy')}
            className="btn-pulse flex-1 flex items-center justify-center gap-2 bg-[#f0a500] hover:bg-[#c98a00] active:scale-95 text-[#1c1c1c] font-extrabold text-lg py-3.5 px-6 rounded-2xl transition-all duration-200"
          >
            <Phone size={20} />
            <span>למחיר מעודכן להיום: 0537380382</span>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsappClick('what-we-buy')}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] active:scale-95 text-white font-bold text-lg py-3.5 px-6 rounded-2xl transition-all duration-200"
          >
            <WhatsappIcon size={20} />
            <span>שלחו תמונה בוואטסאפ</span>
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useReveal } from '@/hooks/use-reveal'
import { ScrollText, Scale, Banknote, ShieldCheck } from 'lucide-react'

const trustItems = [
  {
    icon: ScrollText,
    title: 'פועלים לפי חוק',
    desc: 'מתעדים כל עסקה בהתאם לחוק למניעת סחר בגרוטאות — כולל זיהוי המוכר ורישום מסודר. כך אתם מוכרים בראש שקט.',
  },
  {
    icon: Scale,
    title: 'שקילה שקופה במקום',
    desc: 'השקילה מתבצעת מולכם, במקום, ללא הפתעות — אתם רואים בדיוק על מה אתם מקבלים תשלום.',
  },
  {
    icon: Banknote,
    title: 'תשלום במזומן במקום',
    desc: 'מחיר הוגן ושקוף לפי מחירי השוק המעודכנים, ותשלום מיידי במזומן ברגע סיום השקילה.',
  },
  {
    icon: ShieldCheck,
    title: 'ותק של 12 שנים',
    desc: 'למעלה מעשור של אמינות ומקצועיות בקניית מתכות ופינוי גרוטאות — אלפי לקוחות מרוצים.',
  },
]

export default function TrustSection() {
  const ref = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="trust"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-white py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-[#f0a500] font-bold text-sm uppercase tracking-widest text-center mb-3">
          למה לסמוך עלינו
        </p>
        <h2 className="reveal delay-100 text-[2.4rem] md:text-5xl font-extrabold text-[#1c1c1c] text-center mb-4 leading-tight">
          מוכרים בראש שקט
        </h2>
        <div className="reveal delay-200 gold-divider mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`reveal delay-${(i + 1) * 100} feature-card border border-[#e2e2e2] rounded-2xl px-5 py-8 flex flex-col items-center text-center gap-4 bg-white cursor-default`}
              >
                <div className="text-[#f0a500] w-14 h-14 flex items-center justify-center rounded-full bg-[#f0a500]/10 shrink-0">
                  <Icon size={30} strokeWidth={1.4} />
                </div>
                <div>
                  <p className="text-[#1c1c1c] font-bold text-[15px] leading-snug mb-2">{item.title}</p>
                  <p className="text-[#777] text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="reveal delay-500 text-center text-[#555] text-sm leading-relaxed max-w-2xl mx-auto mt-10">
          חבל הארץ אחזקות בע״מ היא חברה רשומה הפועלת בהתאם לרגולציה בתחום סחר המתכות.
          אנו מקפידים על תיעוד מלא של כל עסקה — הדרך שלכם לדעת שאתם מוכרים לגורם מקצועי ואמין.
        </p>
      </div>
    </section>
  )
}

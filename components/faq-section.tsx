'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'אילו מתכות אתם קונים?',
    a: 'אנו קונים ברזל וגרט, נחושת, אלומיניום, נירוסטה, פליז ומתכות נוספות — מכל הסוגים ובכל כמות, הן מבתי עסק ומפעלים והן מלקוחות פרטיים.',
  },
  {
    q: 'כמה משלמים על ברזל ומתכות?',
    a: 'המחיר נקבע לפי סוג המתכת, הכמות והמשקל, ומתעדכן יומית לפי בורסת המתכות בלונדון. אנו משלמים מחיר הוגן ותחרותי במזומן במקום — חייגו 0537380382 לקבלת מחיר מעודכן להיום.',
  },
  {
    q: 'האם פינוי הגרוטאות בתשלום?',
    a: 'ברוב המקרים אנו רוכשים את המתכות ומבצעים את הפינוי ללא עלות עבורכם — אתם אלו שמקבלים תשלום, במזומן במקום. אנו מגיעים עם משאית מנוף לפינוי גרוטאות ופינוי ציוד כבד גם בכמויות גדולות.',
  },
  {
    q: 'באילו אזורים אתם נותנים שירות?',
    a: 'אנו פועלים בפריסה רחבה באזור המרכז, השפלה, הדרום, השרון וירושלים — וזמינים לפינוי מתכות וגרוטאות בעשרות ערים ויישובים.',
  },
  {
    q: 'מהם שעות וימי הפעילות?',
    a: 'אנו פעילים שישה ימים בשבוע, ראשון עד שישי, בין השעות 07:00 ל-18:00. מומלץ לתאם הגעה מראש בטלפון.',
  },
  {
    q: 'האם אתם מפנים ציוד כבד וכמויות גדולות?',
    a: 'כן. אנו מתמחים בפינוי מתכות וציוד כבד במשקל של מעל טון, ממפעלים, מוסכים, אתרי בנייה ועסקים, בעזרת צי משאיות עם מנוף הידראולי.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FaqSection() {
  const ref = useReveal()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-20 px-4"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <p className="reveal text-[#f0a500] font-bold text-sm uppercase tracking-widest text-center mb-3">
          שאלות נפוצות
        </p>
        <h2 className="reveal delay-100 text-[2.4rem] md:text-5xl font-extrabold text-[#1c1c1c] text-center mb-4 leading-tight">
          קונים ברזל ומתכות — כל מה שרציתם לדעת
        </h2>
        <div className="reveal delay-200 gold-divider mb-12" />

        <ul className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={i} className={`reveal delay-${Math.min((i + 1) * 100, 500)}`}>
                <div
                  className={`border rounded-2xl overflow-hidden transition-colors ${
                    isOpen ? 'border-[#f0a500] bg-[#fffbf2]' : 'border-[#e2e2e2] bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-3 text-right px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0a500] rounded-2xl"
                  >
                    <span className="font-bold text-[#1c1c1c] text-base md:text-lg">{f.q}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#f0a500] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-[#555] leading-[1.85] text-right">{f.a}</p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

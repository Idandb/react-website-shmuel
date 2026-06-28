'use client'

import { useReveal } from '@/hooks/use-reveal'
import { Tag, Star, Truck, Recycle } from 'lucide-react'

const features = [
  {
    icon: <Truck size={44} strokeWidth={1.4} className="text-[#f0a500]" />,
    title: 'משאיות עם מנוף',
    subtitle: 'לשירות מהיר',
  },
  {
    icon: <Star size={44} strokeWidth={1.4} className="text-[#f0a500]" />,
    title: 'אמינות, מקצועיות וניסיון מוכח',
    subtitle: 'ותק של 12 שנים',
  },
  {
    icon: <Recycle size={44} strokeWidth={1.4} className="text-[#f0a500]" />,
    title: 'פינוי מתכות וציוד כבד',
    subtitle: 'מעל 2 טון',
  },
  {
    icon: <Tag size={44} strokeWidth={1.4} className="text-[#f0a500]" />,
    title: 'הצעת מחיר הוגנת ומשתלמת',
    subtitle: 'באחריות',
  },
]

export default function AboutSection() {
  const aboutRef = useReveal() as React.RefObject<HTMLElement>
  const featRef  = useReveal() as React.RefObject<HTMLElement>
  const envRef   = useReveal() as React.RefObject<HTMLElement>

  return (
    <>
      {/* ── About ── */}
      <section
        id="about"
        ref={aboutRef as React.RefObject<HTMLDivElement>}
        className="bg-white py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="reveal text-[2.4rem] md:text-5xl font-extrabold text-[#1c1c1c] mb-4 leading-tight">
            קצת עלינו
          </h2>
          <div className="reveal delay-100 w-16 h-1 bg-[#f0a500] mx-auto mb-8 rounded-full" />
          <p className="reveal delay-200 text-[#444] text-lg leading-relaxed max-w-2xl mx-auto">
            אנו קונים ברזל ומתכות מכל הסוגים ומעניקים שירות פינוי מקצועי לעסקים וללקוחות פרטיים.
            משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים ושירות מהיר באזור המרכז,
            השפלה, הדרום והשרון.
          </p>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section
        ref={featRef as React.RefObject<HTMLDivElement>}
        className="bg-[#2a2a2a] py-14 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`reveal delay-${(i + 1) * 100} feature-card border border-[#f0a500]/50 rounded-xl px-4 py-8 flex flex-col items-center text-center gap-4 cursor-default`}
              >
                {feature.icon}
                <div>
                  <p className="text-white font-bold text-sm leading-snug">{feature.title}</p>
                  <p className="text-[#f0a500] font-semibold text-sm mt-1">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Environment paragraph ── */}
      <section
        ref={envRef as React.RefObject<HTMLDivElement>}
        className="bg-white py-14 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="reveal text-[#444] text-base leading-[1.9] text-balance">
            כחברה שקונה מתכות ומתייחסת לסביבה ברצינות, אנו שמים דגש על שירות מקצועי מותאם לקוח.
            כאשר אנו קונים ברזל, נחושת או כל מתכת אחרת, החומרים מועברים למתקנים ייעודיים למיון
            ודחיסה ואז למפעלי מחזור — חיסכון במשאבי טבע והפחתת זיהום. מתכות ללא טיפול מזהמות
            מים/אדמה/אוויר. כעסק שקונה ברזל ומתכות למחזור, אנו פועלים למנוע נזקים ולשמור על
            סביבה נקייה.
          </p>
        </div>
      </section>
    </>
  )
}

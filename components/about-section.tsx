'use client'

import { useEffect, useRef, useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { Truck, Medal, Recycle, BadgeDollarSign, Leaf, Users, Clock, MapPin } from 'lucide-react'

/* ─── Animated counter ──────────────────────────────────────── */
function Counter({ to, suffix = '', duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * to))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Data ──────────────────────────────────────────────────── */
const stats = [
  { icon: Clock,  iconClass: 'icon-spin',   value: 12, suffix: '+', label: 'שנות ניסיון' },
  { icon: Users,  iconClass: 'icon-bounce',  value: 5000, suffix: '+', label: 'לקוחות מרוצים' },
  { icon: Truck,  iconClass: 'icon-float',   value: 20, suffix: '+', label: 'משאיות פעילות' },
  { icon: MapPin, iconClass: 'icon-pulse',   value: 4,  suffix: '',  label: 'אזורי שירות' },
]

const features = [
  {
    icon: Truck,
    iconClass: 'icon-bounce',
    title: 'משאיות עם מנוף',
    subtitle: 'לשירות מהיר ויעיל',
    desc: 'צי משאיות מצויד במנופים הידראוליים לטיפול בחומרים כבדים',
  },
  {
    icon: Medal,
    iconClass: 'icon-float',
    title: 'אמינות ומקצועיות',
    subtitle: 'ותק של 12 שנים',
    desc: 'ניסיון של למעלה מעשור בתחום הגרוטאות ופינוי המתכות',
  },
  {
    icon: Recycle,
    iconClass: 'icon-spin',
    title: 'פינוי מתכות וציוד כבד',
    subtitle: 'מעל 2 טון',
    desc: 'מתמחים בפינוי כמויות גדולות ממפעלים, אתרי בנייה ועוד',
  },
  {
    icon: BadgeDollarSign,
    iconClass: 'icon-pulse',
    title: 'הצעת מחיר הוגנת',
    subtitle: 'תמיד משתלמת',
    desc: 'מחירים שקופים ותחרותיים — ללא הפתעות',
  },
]

export default function AboutSection() {
  const aboutRef  = useReveal() as React.RefObject<HTMLElement>
  const statsRef  = useReveal() as React.RefObject<HTMLElement>
  const featRef   = useReveal() as React.RefObject<HTMLElement>
  const envRef    = useReveal() as React.RefObject<HTMLElement>

  return (
    <>
      {/* ── About ── */}
      <section
        id="about"
        ref={aboutRef as React.RefObject<HTMLDivElement>}
        className="bg-white py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="reveal text-[#f0a500] font-bold text-sm uppercase tracking-widest mb-3">
            מי אנחנו
          </p>
          <h2 className="reveal delay-100 text-[2.4rem] md:text-5xl font-extrabold text-[#1c1c1c] mb-4 leading-tight text-balance">
            קצת עלינו
          </h2>
          <div className="reveal delay-200 gold-divider mb-8" />
          <p className="reveal delay-300 text-[#555] text-lg leading-[1.85] max-w-2xl mx-auto text-balance">
            אנו קונים ברזל ומתכות מכל הסוגים ומעניקים שירות פינוי מקצועי לעסקים וללקוחות פרטיים.
            משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים ושירות מהיר
            באזור המרכז, השפלה, הדרום והשרון.
          </p>
        </div>
      </section>

      {/* ── Stats row ── */}
      <section
        ref={statsRef as React.RefObject<HTMLDivElement>}
        className="bg-[#f0a500] py-12 px-4"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className={`reveal delay-${(i + 1) * 100} stat-card flex flex-col items-center gap-2 text-center`}
              >
                <div className={`${s.iconClass} text-[#1c1c1c]`}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <div className="text-4xl font-extrabold text-[#1c1c1c] leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[#1c1c1c]/80 font-semibold text-sm">{s.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section
        ref={featRef as React.RefObject<HTMLDivElement>}
        className="bg-[#1c1c1c] py-16 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="reveal text-3xl md:text-4xl font-extrabold text-white text-center mb-3">
            למה לבחור בנו?
          </h3>
          <div className="reveal delay-100 gold-divider mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div
                  key={i}
                  className={`reveal delay-${(i + 1) * 100} feature-card border border-[#f0a500]/40 rounded-2xl px-5 py-8 flex flex-col items-center text-center gap-4 bg-[#242424] cursor-default`}
                >
                  <div className={`${f.iconClass} text-[#f0a500] w-14 h-14 flex items-center justify-center rounded-full bg-[#f0a500]/10 shrink-0`}>
                    <Icon size={34} strokeWidth={1.4} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[15px] leading-snug mb-1">{f.title}</p>
                    <p className="text-[#f0a500] font-semibold text-sm mb-2">{f.subtitle}</p>
                    <p className="text-[#aaa] text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Environment ── */}
      <section
        ref={envRef as React.RefObject<HTMLDivElement>}
        className="bg-white py-16 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f0a500]/10 mb-5">
            <Leaf size={34} strokeWidth={1.4} className="icon-float text-[#f0a500]" />
          </div>
          <h3 className="reveal delay-100 text-2xl md:text-3xl font-extrabold text-[#1c1c1c] mb-4">
            מחויבות לסביבה
          </h3>
          <p className="reveal delay-200 text-[#555] text-base leading-[1.95] text-balance">
            כחברה שקונה מתכות ומתייחסת לסביבה ברצינות, אנו שמים דגש על שירות מקצועי מותאם לקוח.
            כאשר אנו קונים ברזל, נחושת או כל מתכת אחרת, החומרים מועברים למתקנים ייעודיים למיון
            ודחיסה ואז למפעלי מחזור — חיסכון במשאבי טבע והפחתת זיהום. מתכות ללא טיפול מזהמות
            מים, אדמה ואוויר. כעסק שקונה ברזל ומתכות למחזור, אנו פועלים למנוע נזקים ולשמור על
            סביבה נקייה לדורות הבאים.
          </p>
        </div>
      </section>
    </>
  )
}

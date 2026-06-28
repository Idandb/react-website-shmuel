import { Tag, Star, Truck, Recycle } from 'lucide-react'

const features = [
  {
    icon: <Tag size={40} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'הצעת מחיר הוגנת ומשתלמת',
    subtitle: 'באחריות',
  },
  {
    icon: <Star size={40} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'אמינות, מקצועיות וניסיון מוכח',
    subtitle: 'ותק של 12 שנים',
  },
  {
    icon: <Truck size={40} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'פינוי מתכות וציוד כבד',
    subtitle: 'מעל 2 טון',
  },
  {
    icon: <Recycle size={40} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'משאיות עם מנוף',
    subtitle: 'לשירות מהיר',
  },
]

export default function AboutSection() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#1c1c1c] mb-4">קצת עלינו</h2>
          <div className="w-16 h-1 bg-[#f0a500] mx-auto mb-8 rounded-full" />
          <p className="text-[#444444] text-lg leading-relaxed text-balance">
            אנו קונים ברזל ומתכות מכל הסוגים ומעניקים שירות פינוי מקצועי לעסקים וללקוחות פרטיים.
            משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים ושירות מהיר באזור המרכז,
            השפלה, הדרום והשרון.
          </p>
        </div>
      </section>

      {/* Features Dark Section */}
      <section className="bg-[#2a2a2a] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="border border-[#f0a500] rounded-lg px-4 py-8 flex flex-col items-center text-center gap-4"
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

      {/* Environment paragraph */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#444444] text-base leading-relaxed">
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

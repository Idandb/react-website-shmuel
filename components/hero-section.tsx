import { Phone, Star, Truck, Tag } from 'lucide-react'

const heroFeatures = [
  {
    icon: <Tag size={36} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'הצעת מחיר הטובה ביותר',
    subtitle: 'באחריות',
  },
  {
    icon: <Truck size={36} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'משאיות עם מנוף',
    subtitle: 'לשירות מהיר',
  },
  {
    icon: <Star size={36} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'אמינות ומקצועיות',
    subtitle: 'ותק של 12 שנים',
  },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-end pt-20"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-3xl mr-0 md:mr-12 px-4 py-16 text-right">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight text-balance">
          קונים ברזל ומתכות מכל הסוגים
        </h1>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {heroFeatures.map((feature, i) => (
            <div
              key={i}
              className="border border-[#f0a500] rounded-lg px-4 py-5 flex flex-col items-center gap-3 text-center bg-white/5 backdrop-blur-sm"
            >
              {feature.icon}
              <div>
                <p className="text-white font-bold text-sm leading-snug">{feature.title}</p>
                <p className="text-white/80 text-xs mt-0.5">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="tel:0723910351"
          className="inline-flex items-center justify-center gap-3 w-full bg-[#f0a500] hover:bg-[#c98a00] text-[#1c1c1c] font-extrabold text-xl py-4 px-8 rounded-lg transition-colors"
        >
          <Phone size={22} />
          <span>חייגו 072-3910351</span>
        </a>
      </div>
    </section>
  )
}

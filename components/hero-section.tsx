import { Phone, Star, Truck, Tag } from 'lucide-react'

const heroFeatures = [
  {
    icon: <Tag size={38} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'הצעת מחיר הטובה ביותר',
    subtitle: 'באחריות',
  },
  {
    icon: <Truck size={38} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'משאיות עם מנוף',
    subtitle: 'לשירות מהיר',
  },
  {
    icon: <Star size={38} strokeWidth={1.5} className="text-[#f0a500]" />,
    title: 'אמינות ומקצועיות',
    subtitle: 'ותק של 12 שנים',
  },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-end"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Dark overlay — darker on right where text sits */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/55 to-black/20" />

      <div className="relative z-10 w-full max-w-2xl mr-0 md:mr-16 px-5 pt-28 pb-20 text-right">
        <h1 className="hero-title text-5xl md:text-6xl font-extrabold text-white mb-8 leading-snug text-balance">
          קונים ברזל ומתכות מכל הסוגים
        </h1>

        {/* Feature cards */}
        <div className="hero-cards grid grid-cols-3 gap-3 mb-7">
          {heroFeatures.map((feature, i) => (
            <div
              key={i}
              className="feature-card border border-[#f0a500]/70 rounded-xl px-3 py-5 flex flex-col items-center gap-3 text-center bg-black/30 backdrop-blur-sm cursor-default"
            >
              {feature.icon}
              <div>
                <p className="text-white font-bold text-[13px] leading-snug">{feature.title}</p>
                <p className="text-[#f0a500] text-[12px] font-semibold mt-0.5">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="tel:0723910351"
          className="hero-cta btn-pulse inline-flex items-center justify-center gap-3 w-full bg-[#f0a500] hover:bg-[#c98a00] active:scale-95 text-[#1c1c1c] font-extrabold text-xl py-4 px-8 rounded-xl transition-all duration-200"
        >
          <Phone size={22} />
          <span>חייגו 072-3910351</span>
        </a>
      </div>
    </section>
  )
}

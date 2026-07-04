'use client'

import Image from 'next/image'
import { Phone, Banknote, Truck, Award } from 'lucide-react'
import { WhatsappIcon } from '@/components/floating-contact'
import { trackWhatsappClick } from '@/lib/track'

const WHATSAPP = '972537380382'
const WHATSAPP_TEXT = encodeURIComponent('שלום, אשמח להערכת מחיר למתכות. אשלח תמונה.')

const heroFeatures = [
  {
    icon: Banknote,
    iconClass: 'icon-pulse',
    title: 'תשלום במזומן במקום',
    subtitle: 'מחיר הוגן ושקוף',
  },
  {
    icon: Truck,
    iconClass: 'icon-bounce',
    title: 'משאיות עם מנוף',
    subtitle: 'לשירות מהיר',
  },
  {
    icon: Award,
    iconClass: 'icon-float',
    title: 'אמינות ומקצועיות',
    subtitle: 'ותק של 12 שנים',
  },
]

const particles = [
  { left: '10%', bottom: '20%', size: 5, duration: '4s', delay: '0s' },
  { left: '20%', bottom: '35%', size: 3, duration: '6s', delay: '1s' },
  { left: '35%', bottom: '15%', size: 4, duration: '5s', delay: '0.5s' },
  { left: '55%', bottom: '25%', size: 6, duration: '7s', delay: '2s' },
  { left: '70%', bottom: '40%', size: 3, duration: '4.5s', delay: '1.5s' },
  { left: '80%', bottom: '10%', size: 5, duration: '5.5s', delay: '0.8s' },
  { left: '90%', bottom: '30%', size: 4, duration: '6.5s', delay: '2.5s' },
  { left: '5%',  bottom: '50%', size: 3, duration: '5s',   delay: '3s' },
]

interface HeroSectionProps {
  pageTitle?: string
}

export default function HeroSection({ pageTitle }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-end overflow-hidden">
      {/* תמונת רקע כ-next/image עם priority — נטענת מוקדם ומכווצת אוטומטית */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-2xl mr-0 md:mr-16 px-5 pt-32 pb-20 text-right">

        <div className="hero-sub inline-flex items-center gap-2 bg-[#f0a500]/15 border border-[#f0a500]/40 text-[#f0a500] text-sm font-bold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#f0a500] animate-ping inline-block" />
          זמינים כעת
        </div>

        {pageTitle ? (
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 leading-tight tracking-tight">
            <span className="text-[#f0a500]">{pageTitle}</span>
          </h1>
        ) : (
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 leading-tight text-balance tracking-tight">
            קונים ברזל, נחושת<br />
            <span className="text-[#f0a500]">ומתכות</span> מכל הסוגים
          </h1>
        )}

        <p className="hero-sub text-white/70 text-lg mb-8 leading-relaxed max-w-md text-balance">
          פינוי גרוטאות מהיר לעסקים וללקוחות פרטיים — מגיעים אליכם עם מנוף •
          תשלום הוגן במזומן • מרכז, שפלה, דרום, שרון וירושלים
        </p>

        <div className="hero-cards grid grid-cols-3 gap-3 mb-7">
          {heroFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="feature-card border border-[#f0a500]/60 rounded-2xl px-3 py-5 flex flex-col items-center gap-3 text-center bg-black/35 backdrop-blur-sm cursor-default"
              >
                <div className={`${feature.iconClass} text-[#f0a500]`}>
                  <Icon size={40} strokeWidth={1.4} />
                </div>
                <div>
                  <p className="text-white font-bold text-[13px] leading-snug">{feature.title}</p>
                  <p className="text-[#f0a500] text-[12px] font-semibold mt-0.5">{feature.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>

        <a
          href="tel:0537380382"
          className="hero-cta btn-pulse flex items-center justify-center gap-3 w-full bg-[#f0a500] hover:bg-[#c98a00] active:scale-95 text-[#1c1c1c] font-extrabold text-xl py-4 px-8 rounded-2xl transition-all duration-200"
        >
          <Phone size={22} />
          <span>חייגו עכשיו להצעת מחיר — 0537380382</span>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('hero')}
          className="hero-cta mt-3 flex items-center justify-center gap-3 w-full bg-transparent border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white active:scale-95 font-bold text-lg py-3.5 px-8 rounded-2xl transition-all duration-200"
        >
          <WhatsappIcon size={22} />
          <span>שלחו תמונה בוואטסאפ וקבלו הערכת מחיר</span>
        </a>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import WhatWeBuy from '@/components/what-we-buy'
import AboutSection from '@/components/about-section'
import GallerySection from '@/components/gallery-section'
import FaqSection from '@/components/faq-section'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'חבל הארץ אחזקות בע"מ',
  description:
    'קונים ברזל, נחושת, אלומיניום, נירוסטה ופליז במחיר הוגן ובתשלום מזומן במקום, ומעניקים שירותי פינוי גרוטאות ופינוי מתכות מקצועי לעסקים וללקוחות פרטיים. משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים.',
  telephone: '+972-53-7380382',
  url: 'https://hevelhaaretz.co.il',
  priceRange: '₪₪',
  areaServed: ['המרכז', 'השפלה', 'הדרום', 'השרון', 'ירושלים'],
  knowsAbout: ['ברזל', 'נחושת', 'אלומיניום', 'נירוסטה', 'פליז', 'פינוי גרוטאות', 'מחזור מתכות'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '18:00',
  },
  makesOffer: {
    '@type': 'Offer',
    name: 'קניית ברזל ומתכות ופינוי גרוטאות',
    itemOffered: {
      '@type': 'Service',
      name: 'קניית ברזל, נחושת, אלומיניום ומתכות + פינוי גרוטאות עם מנוף',
    },
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <WhatWeBuy />
      <AboutSection />
      <GallerySection />
      <FaqSection />
    </>
  )
}

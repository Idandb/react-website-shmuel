import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import WhatWeBuy from '@/components/what-we-buy'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'פינוי גרוטאות ומתכות עם מנוף | חבל הארץ אחזקות בע״מ',
  description:
    'פינוי גרוטאות, פינוי מתכות ופינוי ברזל עם משאית מנוף — מגיעים אליכם, שוקלים במקום ומשלמים במזומן. פינוי ציוד כבד מעל 2 טון לעסקים וללקוחות פרטיים במרכז, בשפלה, בדרום, בשרון ובירושלים.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'פינוי גרוטאות ומתכות עם מנוף',
  provider: { '@type': 'LocalBusiness', name: 'חבל הארץ אחזקות בע"מ', telephone: '+972-53-7380382' },
  areaServed: ['המרכז', 'השפלה', 'הדרום', 'השרון', 'ירושלים'],
  url: 'https://hevelhaaretz.co.il/pinui-grutaot',
}

const pageText = (
  <div className="reveal delay-300 text-[#555] text-lg leading-[1.85] max-w-3xl mx-auto space-y-5 text-right">
    <p>
      צריכים פינוי גרוטאות או פינוי מתכות? אנחנו מגיעים אליכם עם משאית מנוף, מעמיסים הכל —
      ובמקום לשלם על פינוי, אתם מקבלים כסף: אנו קונים את המתכות ומשלמים{' '}
      <span className="text-[#1c1c1c] font-semibold">במזומן במקום</span>, לפי שקילה ומחיר הוגן ושקוף.
    </p>
    <p>
      אנו מבצעים פינוי ברזל ופינוי פסולת מתכת מכל סוג: גרוטאות ביתיות, ציוד כבד מעל 2 טון,
      מכונות ישנות, צנרת, פרופילים, שערים, סורגים, דודי שמש, מבני פח ועוד. השירות ניתן לעסקים,
      מפעלים, מוסכים, אתרי בנייה וללקוחות פרטיים —{' '}
      <span className="text-[#1c1c1c] font-semibold">
        במרכז, בשפלה, בדרום, בשרון ובירושלים.
      </span>
    </p>
    <p>
      עם ותק של 12 שנים וצי משאיות מנוף, הפינוי מתבצע במהירות, בבטיחות וללא כאב ראש.
      חייגו עכשיו לתיאום פינוי גרוטאות וקבלת הצעת מחיר מיידית בטלפון.
    </p>
  </div>
)

export default function PinuiGrutaotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection pageTitle="פינוי גרוטאות ומתכות עם מנוף" />
      <AboutSection areaTitle="פינוי גרוטאות ומתכות" areaText={pageText} />
      <WhatWeBuy />
      <GallerySection />
    </>
  )
}

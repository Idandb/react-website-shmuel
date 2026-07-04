import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import WhatWeBuy from '@/components/what-we-buy'
import GallerySection from '@/components/gallery-section'
import { serviceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'קונה נחושת ואלומיניום — מחיר מעודכן להיום | חבל הארץ אחזקות בע״מ',
  description:
    'קניית נחושת, אלומיניום, כבלים, נירוסטה ופליז במחיר הוגן — שקילה במקום ותשלום במזומן. מחיר נחושת ואלומיניום לקילו מתעדכן יומית לפי בורסת לונדון — חייגו למחיר מעודכן להיום.',
}

const jsonLd = serviceJsonLd('קניית נחושת ואלומיניום', '/nechoshet-aluminium')

const pageText = (
  <div className="reveal delay-300 text-[#555] text-lg leading-[1.85] max-w-3xl mx-auto space-y-5 text-right">
    <p>
      מחזיקים נחושת, אלומיניום, כבלים או פליז? אלו המתכות המשתלמות ביותר למכירה — ואנחנו
      קונים אותן <span className="text-[#1c1c1c] font-semibold">במחיר הוגן ובתשלום מזומן במקום</span>.
      גרט נחושת, צנרת נחושת, כבלי חשמל, אלומיניום נקי, יציקות, פרופילים, נירוסטה ופליז — בכל כמות.
    </p>
    <p>
      כמה שווה נחושת לקילו? כמה משלמים על אלומיניום? המחירים מתעדכנים מדי יום לפי בורסת
      המתכות בלונדון (LME), ולכן הדרך המדויקת לקבל מחיר היא להתקשר:{' '}
      <span className="text-[#1c1c1c] font-semibold">
        חייגו 0537380382 וקבלו מחיר מעודכן להיום — או שלחו תמונה בוואטסאפ להערכה מיידית.
      </span>
    </p>
    <p>
      אנו פועלים לפי חוק ומתעדים כל עסקה, שוקלים בשקיפות מלאה מול הלקוח ומשלמים במקום.
      איסוף מהיר עם משאית מנוף במרכז, בשפלה, בדרום, בשרון ובירושלים — גם כמויות גדולות ממפעלים ועסקים.
    </p>
  </div>
)

export default function NechoshetAluminiumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection pageTitle="קונה נחושת ואלומיניום במחיר הוגן" />
      <AboutSection areaTitle="קניית נחושת ואלומיניום" areaText={pageText} />
      <WhatWeBuy />
      <GallerySection />
    </>
  )
}

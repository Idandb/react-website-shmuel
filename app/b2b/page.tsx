import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import WhatWeBuy from '@/components/what-we-buy'
import GallerySection from '@/components/gallery-section'
import { serviceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'פינוי מתכות לעסקים ומפעלים | חבל הארץ אחזקות בע״מ',
  description:
    'פינוי פסולת מתכת לעסקים, פינוי מפעלים, פירוק מפעלים ופינוי פסולת תעשייתית — קונים את המתכת ומשלמים במזומן. משאיות מנוף לציוד כבד מעל 2 טון, שירות מהיר במרכז, בשפלה, בדרום, בשרון ובירושלים.',
  alternates: { canonical: '/b2b' },
}

const jsonLd = serviceJsonLd('פינוי מתכות לעסקים ומפעלים', '/b2b')

const pageText = (
  <div className="reveal delay-300 text-[#555] text-lg leading-[1.85] max-w-3xl mx-auto space-y-5 text-right">
    <p>
      לעסק או למפעל שלכם מצטברת פסולת מתכת? במקום לשלם על פינוי — קבלו עליה כסף.
      אנו מתמחים בפינוי פסולת מתכת לעסקים: מפעלים, מוסכים, מסגריות, אתרי בנייה, מחסנים
      וחברות תשתית. קונים את המתכת לפי שקילה ומשלמים{' '}
      <span className="text-[#1c1c1c] font-semibold">במזומן או בהעברה — לפי נוחות העסק</span>.
    </p>
    <p>
      השירותים שלנו לעסקים: פינוי מפעלים ופירוק מפעלים (כולל פירוק קווי ייצור ומכונות),
      פינוי פסולת תעשייתית, פינוי מחסנים, פינוי ציוד כבד מעל 2 טון עם משאית מנוף,
      והצבת פתרון קבוע לפינוי שוטף של פסולת המתכת מהעסק.
    </p>
    <p>
      אנו פועלים לפי חוק ומתעדים כל עסקה — חשוב במיוחד לעסקים שדורשים תיעוד מסודר.
      ותק של 12 שנים, זמינות מהירה במרכז, בשפלה, בדרום, בשרון ובירושלים.
      חייגו לתיאום סיור והצעת מחיר לעסק שלכם.
    </p>
  </div>
)

export default function B2BPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection pageTitle="פינוי מתכות לעסקים ומפעלים" />
      <AboutSection areaTitle="פינוי מתכות לעסקים ומפעלים" areaText={pageText} />
      <WhatWeBuy />
      <GallerySection />
    </>
  )
}

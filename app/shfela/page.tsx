import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import WhatWeBuy from '@/components/what-we-buy'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'קונים ברזל ומתכות באזור השפלה | חבל הארץ אחזקות בע״מ',
  description: 'רכישת ברזל ומתכות ופינוי מקצועי באזור השפלה – לוד, רמלה, רחובות, נס ציונה, יבנה, מודיעין ועוד.',
  alternates: { canonical: '/shfela' },
}

const shfelaText = (
  <div className="reveal delay-300 text-[#555] text-lg leading-[1.85] max-w-3xl mx-auto space-y-5 text-right">
    <p>
      אנו קונים מתכות מכל הסוגים ומתמחים באיסוף מקצועי הן מבתי עסק והן מלקוחות פרטיים.
      אם יש לכם פסולת מתכת, אנחנו הכתובת הנכונה: אנו קונים ברזל, אלומיניום, נחושת, נירוסטה ועוד.
      המומחיות שלנו כוללת גם שירותי פינוי מתכות ופינוי ציוד כבד במשקל העולה על 1 טון.
    </p>
    <p>
      אנו מספקים שירותי קנייה ופינוי מתכות בפריסה רחבה בכל הארץ וגם באזור השפלה,
      וזמינים עבורכם בשפלה בין היתר בערים:{' '}
      <span className="text-[#1c1c1c] font-semibold">
        לוד, רמלה, מודיעין-מכבים-רעות, רחובות, נס ציונה, יבנה, גדרה, באר יעקב,
        מזכרת בתיה, קריית מלאכי, קריית עקרון, גן יבנה.
      </span>
    </p>
    <p>
      קונים ברזל וגרט, נחושת, אלומיניום, נירוסטה ופליז במחיר הוגן בשפלה, עם משאית מנוף
      לפינוי גרוטאות ופינוי פסולת מתכת ממפעלים, מוסכים ואתרי בנייה. חייגו וקבלו הצעת מחיר לברזל עוד היום.
    </p>
  </div>
)

export default function ShfelaPage() {
  return (
    <>
      <HeroSection pageTitle="קונים ברזל ומתכות באזור השפלה" />
      <AboutSection areaTitle="אזור השפלה" areaText={shfelaText} />
      <WhatWeBuy />
      <GallerySection />
    </>
  )
}

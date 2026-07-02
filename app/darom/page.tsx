import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import WhatWeBuy from '@/components/what-we-buy'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'קונים ברזל ומתכות בדרום | חבל הארץ אחזקות בע״מ',
  description: 'רכישת ברזל ומתכות ופינוי מקצועי באזור הדרום – באר שבע, אשדוד, אשקלון, קריית גת, נתיבות ועוד.',
}

const daromText = (
  <div className="reveal delay-300 text-[#555] text-lg leading-[1.85] max-w-3xl mx-auto space-y-5 text-right">
    <p>
      אנו קונים מתכות מכל הסוגים ומתמחים באיסוף מקצועי הן מבתי עסק והן מלקוחות פרטיים.
      אם יש לכם פסולת מתכת, אנחנו הכתובת הנכונה: אנו קונים ברזל, אלומיניום, נחושת, נירוסטה ועוד.
      המומחיות שלנו כוללת גם שירותי פינוי מתכות ופינוי ציוד כבד במשקל העולה על 1 טון.
    </p>
    <p>
      אנו מספקים שירותי קנייה ופינוי מתכות בפריסה רחבה בכל הארץ וגם באזור הדרום,
      וזמינים עבורכם בדרום בין היתר בערים:{' '}
      <span className="text-[#1c1c1c] font-semibold">
        באר שבע, אשדוד, אשקלון, נתיבות, אופקים, קריית גת, רהט, דימונה, ערד, שדרות, ירוחם, מצפה רמון.
      </span>
    </p>
    <p>
      קונים ברזל וגרט, נחושת, אלומיניום, נירוסטה ופליז במחיר הוגן בדרום, עם משאית מנוף
      לפינוי גרוטאות ופינוי פסולת מתכת ממפעלים, מוסכים ואתרי בנייה. חייגו וקבלו הצעת מחיר לברזל עוד היום.
    </p>
  </div>
)

export default function DaromPage() {
  return (
    <>
      <HeroSection pageTitle="קונים ברזל ומתכות בדרום" />
      <AboutSection areaTitle="אזור הדרום" areaText={daromText} />
      <WhatWeBuy />
      <GallerySection />
    </>
  )
}

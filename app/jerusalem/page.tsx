import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import WhatWeBuy from '@/components/what-we-buy'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'קונים ברזל ומתכות בירושלים | חבל הארץ אחזקות בע״מ',
  description:
    'קונה ברזל בירושלים, קניית מתכות ופינוי גרוטאות בירושלים והסביבה — מבשרת ציון, מעלה אדומים, בית שמש ועוד. משאית מנוף, שקילה במקום ותשלום במזומן.',
}

const jerusalemText = (
  <div className="reveal delay-300 text-[#555] text-lg leading-[1.85] max-w-3xl mx-auto space-y-5 text-right">
    <p>
      אנו קונים מתכות מכל הסוגים ומתמחים באיסוף מקצועי הן מבתי עסק והן מלקוחות פרטיים.
      אם יש לכם פסולת מתכת, אנחנו הכתובת הנכונה: אנו קונים ברזל, אלומיניום, נחושת, נירוסטה ועוד —
      ומשלמים במזומן במקום.
    </p>
    <p>
      אנו מספקים שירותי קנייה ופינוי מתכות בפריסה רחבה בכל הארץ וגם בירושלים והסביבה,
      וזמינים עבורכם בין היתר ביישובים:{' '}
      <span className="text-[#1c1c1c] font-semibold">
        ירושלים, מבשרת ציון, מעלה אדומים, גבעת זאב, הר אדר, אבו גוש, קריית יערים,
        צור הדסה, ביתר עילית, בית שמש, אפרת וגוש עציון.
      </span>
    </p>
    <p>
      קונים ברזל וגרט, נחושת, אלומיניום, נירוסטה ופליז במחיר הוגן בירושלים, עם משאית מנוף
      לפינוי גרוטאות ופינוי פסולת מתכת ממפעלים, מוסכים ואתרי בנייה. חייגו וקבלו הצעת מחיר לברזל עוד היום.
    </p>
  </div>
)

export default function JerusalemPage() {
  return (
    <>
      <HeroSection pageTitle="קונים ברזל ומתכות בירושלים" />
      <AboutSection areaTitle="ירושלים והסביבה" areaText={jerusalemText} />
      <WhatWeBuy />
      <GallerySection />
    </>
  )
}

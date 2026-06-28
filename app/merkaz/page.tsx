import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'קונים ברזל ומתכות באזור המרכז | חבל הארץ אחזקות בע״מ',
  description: 'רכישת ברזל ומתכות ופינוי מקצועי באזור המרכז – תל אביב, פתח תקווה, ראשון לציון, חולון, רחובות, בני ברק ועוד.',
}

const merkazText = (
  <div className="reveal delay-300 text-[#555] text-lg leading-[1.85] max-w-3xl mx-auto space-y-5 text-right">
    <p>
      אנו קונים מתכות מכל הסוגים ומתמחים באיסוף מקצועי הן מבתי עסק והן מלקוחות פרטיים.
      אם יש לכם פסולת מתכת, אנחנו הכתובת הנכונה: אנו קונים ברזל, אלומיניום, נחושת, נירוסטה ועוד.
      המומחיות שלנו כוללת גם שירותי פינוי מתכות ופינוי ציוד כבד במשקל העולה על 1 טון.
    </p>
    <p>
      אנו מספקים שירותי קנייה ופינוי מתכות בפריסה רחבה בכל הארץ ובאזור המרכז (כולל גוש דן והשפלה),
      וזמינים עבורכם במרכז בין היתר בערים:{' '}
      <span className="text-[#1c1c1c] font-semibold">
        תל אביב-יפו, פתח תקווה, ראשון לציון, חולון, רחובות, בני ברק, בת־ים, גבעתיים, הרצליה,
        קריית אונו, כפר סבא, רמת גן, רמת השרון, אור יהודה, אלעד, לוד, רמלה, מודיעין-מכבים-רעות,
        נס ציונה, יבנה, גדרה, באר יעקב, שוהם, ראש העין, אבן יהודה, כפר יונה, טייבה, קלנסווה,
        תל מונד, גבעת שמואל, אזור, גני תקווה, בית דגן, כוכב יאיר-צור יגאל.
      </span>
    </p>
  </div>
)

export default function MerkazPage() {
  return (
    <>
      <HeroSection pageTitle="קונים ברזל ומתכות באזור המרכז" />
      <AboutSection areaTitle="אזור המרכז" areaText={merkazText} />
      <GallerySection />
    </>
  )
}

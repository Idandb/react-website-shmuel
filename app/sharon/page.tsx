import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'קונים ברזל ומתכות באזור השרון | חבל הארץ אחזקות בע״מ',
  description: 'רכישת ברזל ומתכות ופינוי מקצועי באזור השרון – נתניה, הרצליה, כפר סבא, רעננה, חדרה ועוד.',
}

const sharonText = (
  <div className="reveal delay-300 text-[#555] text-lg leading-[1.85] max-w-3xl mx-auto space-y-5 text-right">
    <p>
      אנו קונים מתכות מכל הסוגים ומתמחים באיסוף מקצועי הן מבתי עסק והן מלקוחות פרטיים.
      אם יש לכם פסולת מתכת, אנחנו הכתובת הנכונה: אנו קונים ברזל, אלומיניום, נחושת, נירוסטה ועוד.
      המומחיות שלנו כוללת גם שירותי פינוי מתכות ופינוי ציוד כבד במשקל העולה על 2 טון.
    </p>
    <p>
      אנו מספקים שירותי קנייה ופינוי מתכות בפריסה רחבה בכל הארץ וגם באזור השרון,
      וזמינים עבורכם בשרון בין היתר בערים:{' '}
      <span className="text-[#1c1c1c] font-semibold">
        רמת השרון, הרצליה, כפר סבא, רעננה, הוד השרון, נתניה, חדרה, אור עקיבא, כפר יונה,
        אבן יהודה, טייבה, קלנסווה, תל מונד, פרדסיה.
      </span>
    </p>
  </div>
)

export default function SharonPage() {
  return (
    <>
      <HeroSection pageTitle="קונים ברזל ומתכות באזור השרון" />
      <AboutSection areaTitle="אזור השרון" areaText={sharonText} />
      <GallerySection />
    </>
  )
}

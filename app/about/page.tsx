import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import TrustSection from '@/components/trust-section'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'קצת עלינו | חבל הארץ אחזקות בע״מ',
  description:
    'חברת חבל הארץ אחזקות בע״מ – 12 שנות ניסיון ברכישת ברזל ומתכות ופינוי מקצועי עם מנוף. פועלים לפי חוק ומתעדים כל עסקה, שקילה שקופה ותשלום במזומן במקום.',
}

export default function AboutPage() {
  return (
    <>
      <HeroSection pageTitle="קצת עלינו" />
      <AboutSection />
      <TrustSection />
      <GallerySection />
    </>
  )
}

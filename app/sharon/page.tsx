import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'אזור השרון | חבל הארץ אחזקות בע״מ',
  description: 'רכישת ברזל ומתכות ופינוי מקצועי באזור השרון – נתניה, הרצליה, רעננה, כפר סבא, פתח תקווה ועוד.',
}

export default function SharonPage() {
  return (
    <>
      <HeroSection pageTitle="השרון" />
      <AboutSection />
      <GallerySection />
    </>
  )
}

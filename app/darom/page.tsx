import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'אזור הדרום | חבל הארץ אחזקות בע״מ',
  description: 'רכישת ברזל ומתכות ופינוי מקצועי באזור הדרום – באר שבע, אשדוד, אשקלון, קריית גת ועוד.',
}

export default function DaromPage() {
  return (
    <>
      <HeroSection pageTitle="הדרום" />
      <AboutSection />
      <GallerySection />
    </>
  )
}

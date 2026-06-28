import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'אזור השפלה | חבל הארץ אחזקות בע״מ',
  description: 'רכישת ברזל ומתכות ופינוי מקצועי באזור השפלה – רחובות, נס ציונה, לוד, רמלה, מודיעין ועוד.',
}

export default function ShfelaPage() {
  return (
    <>
      <HeroSection pageTitle="השפלה" />
      <AboutSection />
      <GallerySection />
    </>
  )
}

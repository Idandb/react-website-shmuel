import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'גלריה | חבל הארץ אחזקות בע״מ',
  description: 'גלריית תמונות של עבודות פינוי ברזל ומתכות – חבל הארץ אחזקות בע״מ.',
}

export default function GalleryPage() {
  return (
    <>
      <HeroSection pageTitle="גלריה" />
      <AboutSection />
      <GallerySection />
    </>
  )
}

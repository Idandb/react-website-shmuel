import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'אזור המרכז | חבל הארץ אחזקות בע״מ',
  description: 'רכישת ברזל ומתכות ופינוי מקצועי באזור המרכז – תל אביב, רמת גן, חולון, בת ים, ראשון לציון ועוד.',
}

export default function MerkazPage() {
  return (
    <>
      <HeroSection pageTitle="המרכז" />
      <AboutSection />
      <GallerySection />
    </>
  )
}

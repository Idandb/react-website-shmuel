import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import GallerySection from '@/components/gallery-section'
import ContactFooter from '@/components/contact-footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'חבל הארץ אחזקות בע"מ',
  description:
    'קונים ברזל ומתכות מכל הסוגים ומעניקים שירות פינוי מקצועי לעסקים וללקוחות פרטיים. משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים.',
  telephone: '+972-72-3910351',
  url: 'https://your-domain.com',
  areaServed: ['המרכז', 'השפלה', 'הדרום', 'השרון'],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactFooter />
      </main>
    </>
  )
}

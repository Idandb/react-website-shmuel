'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/use-reveal'

const galleryImages = [
  { src: '/gallery-1.png', alt: 'משאית מנוף לפינוי מתכות' },
  { src: '/gallery-2.png', alt: 'מתקן מיון מתכות' },
  { src: '/gallery-3.png', alt: 'ערמות גרוטאות מתכת' },
  { src: '/gallery-4.png', alt: 'עגורן הרמה לאיסוף ברזל' },
  { src: '/hero-bg.png',   alt: 'פינוי גרוטאות ברזל' },
  { src: '/gallery-2.png', alt: 'שירות פינוי מקצועי' },
]

export default function GallerySection() {
  const ref = useReveal()

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#1c1c1c] py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-[2.4rem] md:text-5xl font-extrabold text-white text-center mb-4 leading-tight">
          גלריה
        </h2>
        <div className="reveal delay-100 w-16 h-1 bg-[#f0a500] mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal delay-${Math.min((i + 1) * 100, 500)} gallery-item relative overflow-hidden rounded-xl aspect-video cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

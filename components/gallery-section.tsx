'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useReveal } from '@/hooks/use-reveal'
import { X, ZoomIn } from 'lucide-react'

const galleryImages = [
  { src: '/gallery-1.png', alt: 'משאית מנוף לפינוי מתכות' },
  { src: '/gallery-2.png', alt: 'מתקן מיון מתכות' },
  { src: '/gallery-3.png', alt: 'ערמות גרוטאות מתכת' },
  { src: '/gallery-4.png', alt: 'עגורן הרמה לאיסוף ברזל' },
  { src: '/hero-bg.png',   alt: 'פינוי גרוטאות ברזל' },
]

export default function GallerySection() {
  const ref = useReveal()
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <section
        id="gallery"
        ref={ref as React.RefObject<HTMLElement>}
        className="bg-[#1a1a1a] py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <p className="reveal text-[#f0a500] font-bold text-sm uppercase tracking-widest text-center mb-3">
            העבודה שלנו
          </p>
          <h2 className="reveal delay-100 text-[2.4rem] md:text-5xl font-extrabold text-white text-center mb-4 leading-tight">
            גלריה
          </h2>
          <div className="reveal delay-200 gold-divider mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`reveal delay-${Math.min((i + 1) * 100, 500)} gallery-item relative overflow-hidden rounded-2xl aspect-video cursor-pointer group`}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#f0a500] rounded-full p-3 shadow-xl">
                    <ZoomIn size={22} className="text-[#1c1c1c]" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-3 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          style={{ animation: 'fadeIn 0.2s ease forwards' }}
        >
          <button
            className="absolute top-5 left-5 text-white bg-[#f0a500] rounded-full p-2 hover:bg-[#c98a00] transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="סגור"
          >
            <X size={22} />
          </button>
          <div
            className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  )
}

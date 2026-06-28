import Image from 'next/image'

const galleryImages = [
  { src: '/gallery-1.png', alt: 'משאית מנוף לפינוי מתכות' },
  { src: '/gallery-2.png', alt: 'מתקן מיון מתכות' },
  { src: '/gallery-3.png', alt: 'ערמות גרוטאות מתכת' },
  { src: '/gallery-4.png', alt: 'עגורן הרמה לאיסוף ברזל' },
  { src: '/hero-bg.png', alt: 'פינוי גרוטאות ברזל' },
  { src: '/gallery-1.png', alt: 'שירות פינוי מקצועי' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#1c1c1c] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white text-center mb-4">גלריה</h2>
        <div className="w-16 h-1 bg-[#f0a500] mx-auto mb-10 rounded-full" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

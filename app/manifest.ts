import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'חבל הארץ אחזקות בע"מ',
    short_name: 'חבל הארץ',
    icons: [
      {
        src: '/logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
    theme_color: '#f0a500',
    background_color: '#ffffff',
    display: 'standalone',
  }
}

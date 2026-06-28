import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'חבל הארץ אחזקות בע"מ',
    short_name: 'חבל הארץ',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#f0a500',
    background_color: '#ffffff',
    display: 'standalone',
  }
}

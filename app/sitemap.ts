import type { MetadataRoute } from 'next'

const BASE = 'https://hevelhaaretz.co.il'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/gallery',
    '/pinui-grutaot',
    '/nechoshet-aluminium',
    '/b2b',
    '/merkaz',
    '/shfela',
    '/darom',
    '/sharon',
    '/jerusalem',
    '/privacy',
  ]
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : route === '/privacy' ? 0.3 : 0.8,
  }))
}

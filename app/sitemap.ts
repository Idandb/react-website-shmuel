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
  ]
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}

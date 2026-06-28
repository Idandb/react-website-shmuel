import type { MetadataRoute } from 'next'

const BASE = 'https://your-domain.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/gallery', '/merkaz', '/shfela', '/darom', '/sharon']
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}

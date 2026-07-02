const SITE_URL = 'https://hevelhaaretz.co.il'

/* בלוק JSON-LD מסוג Service המשותף לעמודי השירות — משתנים רק שם השירות והנתיב */
export function serviceJsonLd(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    provider: { '@type': 'LocalBusiness', name: 'חבל הארץ אחזקות בע"מ', telephone: '+972-53-7380382' },
    areaServed: ['המרכז', 'השפלה', 'הדרום', 'השרון', 'ירושלים'],
    url: `${SITE_URL}${path}`,
  }
}

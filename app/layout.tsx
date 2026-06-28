import type { Metadata, Viewport } from 'next'
import { Assistant } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '600', '700', '800'],
})

const SITE_URL = 'https://your-domain.com'
const TITLE = 'חבל הארץ אחזקות בע״מ – קונים ברזל ומתכות | פינוי מקצועי עם מנוף'
const DESCRIPTION =
  'אנו קונים ברזל ומתכות מכל הסוגים ומעניקים שירות פינוי מקצועי לעסקים וללקוחות פרטיים. משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/hero-bg.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/hero-bg.png`],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f0a500',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`bg-background ${assistant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

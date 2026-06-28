import type { Metadata, Viewport } from 'next'
import { Assistant } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'חבל הארץ אחזקות בע״מ – קונים ברזל ומתכות | פינוי מקצועי עם מנוף',
  description:
    'אנו קונים ברזל ומתכות מכל הסוגים ומעניקים שירות פינוי מקצועי לעסקים וללקוחות פרטיים. משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים.',
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

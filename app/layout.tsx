import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Assistant } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import ContactFooter from '@/components/contact-footer'
import A11yWidget from '@/components/a11y-widget'
import FloatingContact from '@/components/floating-contact'
import StickyCallBar from '@/components/sticky-call-bar'

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '600', '700', '800'],
})

const SITE_URL = 'https://hevelhaaretz.co.il'
const TITLE = 'חבל הארץ אחזקות בע״מ – קונים ברזל ומתכות וגרט | פינוי גרוטאות עם מנוף'
const DESCRIPTION =
  'קונים ברזל, נחושת, אלומיניום, נירוסטה ופליז במחיר הוגן ובתשלום מזומן במקום, ומעניקים שירותי פינוי גרוטאות ופינוי מתכות מקצועי לעסקים וללקוחות פרטיים. משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים, שירות במרכז, בשפלה, בדרום, בשרון ובירושלים.'
const KEYWORDS = [
  'קונים ברזל', 'קונה ברזל', 'קניית מתכות', 'קונים מתכות', 'פינוי גרוטאות', 'פינוי מתכות',
  'גרט ברזל', 'גרט', 'קונים נחושת', 'קונה נחושת', 'קניית נחושת', 'קונים אלומיניום',
  'קניית אלומיניום', 'נירוסטה', 'פליז', 'קניית כבלים', 'תשלום במזומן',
  'משאית מנוף', 'פינוי פסולת מתכת', 'מחזור מתכות', 'הצעת מחיר לברזל',
  'פינוי ציוד כבד', 'מחיר ברזל לקילו', 'מחיר נחושת לקילו', 'קונה ברזל ירושלים',
  'פינוי גרוטאות ירושלים', 'פינוי מתכות לעסקים', 'פינוי מפעלים', 'חבל הארץ אחזקות',
]

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P84LZ7T3');`,
          }}
        />
        {/* Google tag (gtag.js) — Google Ads AW-18289458338 */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18289458338"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18289458338');
gtag('config', 'AW-18289458338/b2uaCPX-mckcEKL5i5FE', {
  'phone_conversion_number': '0537380382'
});`,
          }}
        />
        {/* Clixtell Tracking Code — click-fraud protection */}
        <Script
          id="clixtell"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var script=document.createElement('script');
var prefix=document.location.protocol;
script.async=true;script.type='text/javascript';
var target=prefix + '//scripts.clixtell.com/track.js';
script.src=target;var elem=document.head;
elem.appendChild(script);`,
          }}
        />
      </head>
      <body className="font-sans antialiased pb-[52px] md:pb-0">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P84LZ7T3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Clixtell (noscript) */}
        <noscript>
          <img src="//tracker.clixtell.com/track/t.gif" alt="" />
        </noscript>
        {/* FOUC bootstrap — reads localStorage before first paint and applies a11y classes */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=JSON.parse(localStorage.getItem('a11y-prefs')||'{}'),m={contrast:'a11y-contrast',textSize:'a11y-text-size',lineSpacing:'a11y-line-spacing',largeCursor:'a11y-large-cursor',reduceMotion:'a11y-reduce-motion'},e=document.documentElement;Object.keys(m).forEach(function(k){if(p[k]===true)e.classList.add(m[k])});}catch(e){}})();`,
          }}
        />
        <Navbar />
        {children}
        <ContactFooter />
        <FloatingContact />
        <StickyCallBar />
        <A11yWidget />
      </body>
    </html>
  )
}

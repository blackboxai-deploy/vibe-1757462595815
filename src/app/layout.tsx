import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'مزرعة أبو الذهب - أجواء ريفية ساحرة',
  description: 'مزرعة أبو الذهب في محافظة الزرقاء - مثالية للعائلات والمجموعات. مسبح، جلسات خارجية، مشاوي وأجواء عائلية مميزة',
  keywords: 'مزرعة، أبو الذهب، الزرقاء، بلعما، عائلية، مسبح، مشاوي، حجز، استراحة',
  authors: [{ name: 'مزرعة أبو الذهب' }],
  openGraph: {
    title: 'مزرعة أبو الذهب - أجواء ريفية ساحرة',
    description: 'استمتع بأجواء ريفية ساحرة في مزرعة أبو الذهب. مرافق متكاملة ومثالية للعائلات',
    locale: 'ar_JO',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body 
        className="font-arabic antialiased bg-gradient-to-br from-green-50 to-amber-50"
        style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
      >
        {children}
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '../globals.css'
import { i18n } from '../../i18n-config'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
})

import { ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = await params

  const title = lang === 'nl'
    ? 'PlantiPower - Natuurlijke kracht voor planten'
    : 'PlantiPower - Natural power for plants'

  const description = lang === 'nl'
    ? 'De beste natuurlijke plantenvoeding voor professionele teelt. Innovatie in vloeibare voeding.'
    : 'The best natural plant nutrition for professional cultivation. Innovation in liquid nutrition.'

  return {
    title: {
      default: title,
      template: '%s | PlantiPower'
    },
    description,
    metadataBase: new URL('https://plantipower.com'),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'nl-NL': '/nl',
        'en-US': '/en',
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/favicon.ico',
    },
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  return (
    <html lang={lang} className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased font-inter bg-[#02211b] text-white">
        {children}
      </body>
    </html>
  )
}

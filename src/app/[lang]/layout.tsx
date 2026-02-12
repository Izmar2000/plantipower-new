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
    ? 'PlantiPower – Efficiënte plantengroei & hogere opbrengst'
    : 'PlantiPower – Efficient Plant Growth & Higher Yields'

  const description = lang === 'nl'
    ? 'Boost je teelt met PlantiPower: een 100% natuurlijke voedingstransporteur voor minder verspilling, betere opname en een gezonder gewas.'
    : 'Boost your cultivation with PlantiPower: a 100% natural nutrient transporter to eliminate waste, ensure better uptake, and achieve healthier crops.'

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
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png' },
      ],
    },
    manifest: '/manifest.json',
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

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

export const metadata: Metadata = {
  title: 'PlantiPower - Natuurlijke kracht voor planten',
  description: 'De beste natuurlijke plantenvoeding.',
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

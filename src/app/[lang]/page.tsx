import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import ClientLayout from '@/components/ClientLayout'
import Hero from '@/components/Hero'
import GrowerFocus from '@/components/GrowerFocus'
import ProblemSection from '@/components/ProblemSection'
import CropResults from '@/components/CropResults'
import GlobalStandard from '@/components/GlobalStandard'
import Testimonials from '@/components/Testimonials'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  props: { params: Promise<{ lang: Locale }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang

  const title = lang === 'nl'
    ? 'PlantiPower – Efficiënte plantengroei & hogere opbrengst'
    : 'PlantiPower – Efficient Plant Growth & Higher Yields'

  const description = lang === 'nl'
    ? 'Boost je teelt met PlantiPower: een 100% natuurlijke voedingstransporteur voor minder verspilling, betere opname en een gezonder gewas.'
    : 'Boost your cultivation with PlantiPower: a 100% natural nutrient transporter to eliminate waste, ensure better uptake, and achieve healthier crops.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: 'PlantiPower',
      images: [
        {
          url: '/images/root-sketch.png',
          width: 1200,
          height: 630,
          alt: 'PlantiPower Technology',
        },
      ],
      locale: lang === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/root-sketch.png'],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <ClientLayout dict={dict} lang={lang}>
      <div className="bg-[#011410]">
        <Hero dict={dict} lang={lang} />
        <GrowerFocus dict={dict} />
        <ProblemSection dict={dict} />
        <CropResults dict={dict} />
        <GlobalStandard dict={dict} />
        <Testimonials dict={dict} />
      </div>
    </ClientLayout>
  )
}

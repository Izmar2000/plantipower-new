import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import ClientLayout from '@/components/ClientLayout'
import FAQ from '@/components/FAQ'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
    props: { params: Promise<{ lang: Locale }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const lang = params.lang
    const dict = await getDictionary(lang)

    return {
        title: dict.FAQ.metaTitle,
        description: dict.FAQ.metaDesc,
    }
}

export default async function FAQPage({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const content = dict.FAQ; // Header titles etc use same dict entries, wait, ContactPage used specialized text. FAQPage used specialized text too?
    // Checking original FAQPage content:
    // Title: "VEELGESTELDE VRAGEN" / "FREQUENTLY ASKED QUESTIONS"
    // This matches dict.FAQ.title & titleAccent.
    // So we can use dict.FAQ for the titles.

    return (
        <ClientLayout dict={dict} lang={lang}>
            <div className="relative pt-32 md:pt-40 pb-20 bg-[#011410]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-outfit">
                        {content.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">{content.titleAccent}</span>
                    </h1>
                </div>
                <FAQ dict={dict} hideTitle />
            </div>
        </ClientLayout>
    )
}

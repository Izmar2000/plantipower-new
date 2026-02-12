import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import ClientLayout from '@/components/ClientLayout'
import ContactForm from '@/components/ContactForm'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
    props: { params: Promise<{ lang: Locale }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const lang = params.lang
    const dict = await getDictionary(lang)

    return {
        title: dict.ContactPage.metaTitle,
        description: dict.ContactPage.metaDesc,
    }
}

export default async function ContactPage({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const content = dict.ContactPage;

    return (
        <ClientLayout dict={dict} lang={lang}>
            <div className="relative pt-32 md:pt-40 pb-20 bg-[#011410]">
                <div className="container mx-auto px-6 text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter font-outfit">
                        {content.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">{content.titleAccent}</span>
                    </h1>
                    <p className="text-emerald-100/70 max-w-2xl mx-auto text-lg">
                        {content.description}
                    </p>
                </div>
                <ContactForm dict={dict} lang={lang} />
            </div>
        </ClientLayout>
    )
}

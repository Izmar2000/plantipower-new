import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import ClientLayout from '@/components/ClientLayout'
import ContactForm from '@/components/ContactForm'
import { Metadata, ResolvingMetadata } from 'next'
import {
    Leaf,
    CheckCircle2,
    Target,
    Microscope,
    ShieldCheck,
    Zap
} from 'lucide-react';

// Client component for the visual parts to avoid passing too many props and keeping interactivity
// But the page is static mostly. Let's keep it server component for datafetching and use a Client Component for the render part if needed.
// Actually, since we need to map icons (functions) which are not serializable, we should probably do the icon mapping here or in a client component.
// Let's create a Client Component 'AboutContent' that takes dict and renders everything, similar to ClientLayout but for the page content.
// Or just inline it here if we don't need interactions.
// Wait, we have animations in the original About page?
// Original used `animate-reveal` css class but no framer-motion explicitly in the code I saw, except `MobileMenu`.
// Ah, `About.tsx` used `react-helmet-async` etc. 
// Just regular className animations. 

// To allow dynamic icon mapping based on string in json, we need to map string to component.
const iconMap: { [key: string]: any } = {
    Leaf,
    Zap,
    Target,
    ShieldCheck
};

export async function generateMetadata(
    props: { params: Promise<{ lang: Locale }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const lang = params.lang
    const dict = await getDictionary(lang)

    return {
        title: dict.About.metaTitle,
        description: dict.About.metaDesc,
    }
}

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const t = dict.About;

    return (
        <ClientLayout dict={dict} lang={lang}>
            <main className="bg-[#011410] relative">

                {/* HERO SECTION */}
                <div className="relative pt-32 md:pt-40 pb-20 md:pb-24">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-emerald-500/10 to-transparent opacity-50"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            <div className="max-w-4xl">
                                <div className="h-20 md:h-24 flex items-center mb-6">
                                    <div className="section-badge !mb-0 font-bold tracking-[0.2em]">{t.heroBadge}</div>
                                </div>

                                <div className="space-y-8">
                                    <h1 className="font-outfit font-bold uppercase text-[38px] md:text-[48px] lg:text-[60px] tracking-[0.04em] leading-[1.02] text-white text-left mb-4">
                                        {t.heroTitle}<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                                            {t.heroTitleAccent}
                                        </span>
                                    </h1>
                                    <p className="text-lg text-emerald-100/70 leading-relaxed font-medium max-w-2xl">
                                        {t.heroDesc}
                                    </p>
                                </div>
                            </div>

                            {/* Root Sketch Visual - High-end Calm Flow */}
                            <div className="hidden lg:block relative translate-y-12">
                                {/* Ambient Brand Glow - Stronger and larger */}
                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-lime-500/10 blur-[180px] h-[500px] w-[500px] left-1/2 -translate-x-1/2 rounded-full scale-150"></div>

                                <div className="relative z-10 animate-reveal pointer-events-none scale-125">
                                    {/* Base Layer - Now much more visible */}
                                    <img
                                        src="/images/root-sketch.png"
                                        alt="PlantiPower Root Technology Sketch"
                                        className="w-full max-w-[850px] mx-auto opacity-70 drop-shadow-[0_0_80px_rgba(132,204,22,0.15)]"
                                    />

                                    {/* Energy Layer - Permanently lit and bright */}
                                    <img
                                        src="/images/root-sketch.png"
                                        alt="Root Energy Flow"
                                        className="absolute top-0 left-0 w-full max-w-[850px] mx-auto brightness-[1.3] opacity-80"
                                        style={{ filter: 'drop-shadow(0 0 30px rgba(163, 230, 53, 0.2))' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophy Section - REDESIGNED */}
                <section className="pb-32 pt-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,rgba(132,204,22,0.04)_0%,transparent_50%)]"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <div className="section-badge !mx-auto">{t.visionBadge}</div>
                            <h2 className="section-title">
                                {t.visionTitle} <span className="text-lime-400">{t.visionTitleAccent}</span>
                            </h2>
                            <p className="text-xl text-emerald-100/60 leading-relaxed font-light">
                                {t.visionDesc}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
                            <div className="glass-panel p-10 md:p-12 rounded-[3rem] border-white/5 bg-white/[0.02] flex flex-col h-full">
                                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight font-outfit">{t.coreTitle}</h3>
                                <p className="text-lg text-emerald-100/70 leading-relaxed">
                                    {t.coreDesc}
                                </p>
                            </div>
                            <div className="glass-panel p-10 md:p-12 rounded-[3rem] border-white/5 bg-white/[0.02] flex flex-col h-full">
                                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight font-outfit">{t.approachTitle}</h3>
                                <p className="text-lg text-emerald-100/70 leading-relaxed">
                                    {t.approachDesc}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {t.values.map((item: any, idx: number) => {
                                const Icon = iconMap[item.icon] || Leaf;
                                return (
                                    <div key={idx} className="glass-panel p-10 rounded-3xl hover-lift border-white/5 bg-white/[0.03] flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 rounded-2xl bg-lime-500/10 flex items-center justify-center text-lime-400 mb-8 border border-lime-500/10 group-hover:scale-110 group-hover:bg-lime-500/20 transition-all duration-500">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight font-outfit">{item.title}</h3>
                                        <p className="text-emerald-100/50 text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-20 pt-16 border-t border-white/5 text-center">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="section-title">
                                    {t.whoWeAreTitle} <span className="text-lime-400">{t.whoWeAreAccent}</span>
                                </h2>
                                <p className="text-2xl text-emerald-100/70 font-light leading-relaxed italic">
                                    {t.whoWeAreDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Production Section */}
                <section className="py-24 relative overflow-hidden bg-white/[0.01]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <div className="section-badge mb-6 font-bold tracking-[0.2em]">{t.productionBadge}</div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                                {t.productionTitle}
                            </h2>
                            <p className="text-xl text-emerald-100/70 leading-relaxed">
                                {t.productionDesc}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {t.productionPoints.map((text: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <CheckCircle2 className="w-6 h-6 text-lime-400 shrink-0 mt-1" />
                                    <span className="text-white font-medium text-lg leading-snug">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Footer */}
                <section className="py-24 bg-white/[0.02]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-3xl bg-lime-500/10 flex items-center justify-center text-lime-400 mb-8 border border-lime-500/20">
                                <Microscope className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl font-black text-white mb-6">{t.missionTitle}</h2>
                            <p className="text-2xl text-emerald-100/80 leading-relaxed font-light italic">
                                {t.missionDesc}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form Integration */}
                <ContactForm dict={dict} lang={lang} />

            </main >
        </ClientLayout>
    )
}

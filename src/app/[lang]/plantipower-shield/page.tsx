
import React from 'react';
import {
    CheckCircle2,
    FileText,
    ArrowRight,
    ShieldCheck,
    Sprout,
    Activity,
    Download,
    Zap
} from 'lucide-react';
import ClientLayout from '@/components/ClientLayout';
import { Metadata, ResolvingMetadata } from 'next';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export async function generateMetadata(
    props: { params: Promise<{ lang: Locale }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const lang = params.lang;
    const isNL = lang === 'nl';

    return {
        title: isNL ? 'PlantiPower Shield | Onzichtbare Kracht & Weerbaarheid' : 'PlantiPower Shield | Invisible Force & Resilience',
        description: isNL ? 'Verhoog de natuurlijke weerbaarheid van je gewas met PlantiPower Shield. Biologische bescherming zonder residu.' : 'Increase the natural resilience of your crop with PlantiPower Shield. Organic protection without residue.',
        openGraph: {
            title: isNL ? 'PlantiPower Shield | Onzichtbare Kracht & Weerbaarheid' : 'PlantiPower Shield | Invisible Force & Resilience',
            description: isNL ? 'Natuurlijke bladvoeding voor maximale gewasbescherming.' : 'Natural foliar nutrition for maximum crop protection.',
            images: ['/images/products/plantipower-shield-transparant.png'],
        }
    }
}

export default async function ProductShield({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const isNL = lang === 'nl';

    const content = {
        title: isNL ? 'PlantiPower Shield | Onzichtbare Kracht & Natuurlijke Weerbaarheid' : 'PlantiPower Shield | Invisible Force & Natural Resilience',
        meta: isNL
            ? 'Verhoog de natuurlijke weerbaarheid van je gewas met PlantiPower Shield. Een geavanceerde barrière voor vitalere planten zonder residu.'
            : 'Increase the natural resilience of your crop with PlantiPower Shield. An advanced barrier for more vital plants without residue.',
        heroBadge: isNL ? 'Premium Beschermingssysteem' : 'Premium Protection System',
        heroTitle: <><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">SHIELD</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">INVISIBLE FORCE.</span></>,
        heroDesc: isNL
            ? 'Deze hoogwaardige bladvoeding wordt rechtstreeks op bladeren, stengels, bloemen en vruchten aangebracht, waardoor nutriënten snel en efficiënt worden opgenomen precies daar waar de plant ze het hardst nodig heeft.'
            : 'This high-quality foliar feed is applied directly to leaves, stems, flowers, and fruits, allowing nutrients to be absorbed quickly and efficiently exactly where the plant needs them most.',
        ctaDiscover: isNL ? 'ONTDEK MEER' : 'DISCOVER MORE',
        natural: isNL ? '100% NATUURLIJK' : '100% NATURAL',
        coreSystem: dict.Products.coreSystem,
        protectionTitle: isNL ? <>Ongekende <span className="text-cyan-400">bescherming.</span></> : <>Unprecedented <span className="text-cyan-400">protection.</span></>,
        cards: [
            {
                title: isNL ? "Natuurlijk beschermend schild" : "Natural protective shield",
                desc: isNL
                    ? "Na toepassing vormt zich een natuurlijke beschermlaag die als een onzichtbaar schild fungeert tegen externe stressfactoren."
                    : "After application, a natural protective layer forms that acts as an invisible shield against external stress factors."
            },
            {
                title: isNL ? "Geactiveerde groei en bloei" : "Activated growth and flowering",
                desc: isNL
                    ? "De plant wordt versterkt terwijl groei en bloei actief worden gestimuleerd voor een optimaal resultaat in elke fase."
                    : "The plant is strengthened while growth and flowering are actively stimulated for optimal results in every phase."
            },
            {
                title: isNL ? "Stressreductie bij hitte" : "Heat stress reduction",
                desc: isNL
                    ? "Vermindert direct de impact van extreme hitte en droogte, wat resulteert in weerbare planten mèt behoud van opbrengst."
                    : "Directly reduces the impact of extreme heat and drought, resulting in resilient plants while maintaining yield."
            }
        ],
        advantageBadge: dict.Products.advantageBadgeShield,
        advantageTitle: isNL ? <>Kracht van <br /><span className="text-cyan-400">binnenuit.</span></> : <>Strength from <br /><span className="text-cyan-400">within.</span></>,
        advantageDesc: isNL
            ? 'PlantiPower Shield werkt niet door de natuur te forceren, maar door haar eigen systemen te ondersteunen. Het resultaat is een gewas dat zichzelf kan verdedigen en optimaal kan profiteren van de aanwezige nutriënten.'
            : 'PlantiPower Shield does not work by forcing nature, but by supporting its own systems. The result is a crop that can defend itself and optimally benefit from available nutrients.',
        usps: isNL
            ? ["Optimale verdeling over het bladoppervlak", "Naadloze integratie in je voedingsschema's", "3 dagen veiligheidstermijn voor de oogst", "Speciaal ontwikkeld voor de professionele teelt"]
            : ["Optimal distribution over the leaf surface", "Seamless integration into your feeding schedules", "3-day pre-harvest safety interval", "Specially developed for professional cultivation"],
        compositionTitle: isNL ? 'Samenstelling' : 'Composition',
        baseTitle: isNL ? 'Basis' : 'Base',
        baseDesc: isNL ? 'Emulgator afkomstig van plantaardige olie' : 'Emulsifier derived from vegetable oil',
        mineralsTitle: isNL ? 'Mineralen' : 'Minerals',
        mineralsDesc: isNL ? 'Mineralen (>1% Calcium & >1% Magnesium)' : 'Minerals (>1% Calcium & >1% Magnesium)',
        tags: isNL ? 'MRL-vrij • Niet-toxisch • 100% Natuurlijk' : 'MRL-free • Non-toxic • 100% Natural',
        guideBadge: isNL ? 'Gebruikershandleiding' : 'User Guide',
        guideTitle: isNL ? <>Eenvoudige <br /><span className="text-cyan-400">toepassing.</span></> : <>Simple <br /><span className="text-cyan-400">application.</span></>,
        steps: [
            { step: "01", title: isNL ? "Goed schudden" : "Shake well", desc: isNL ? "Schud de fles gedurende 30 seconden voor gebruik om de mineralen optimaal te mengen." : "Shake the bottle for 30 seconds before use to mix the minerals optimally." },
            { step: "02", title: isNL ? "Juiste dosering" : "Correct dosage", desc: isNL ? "Doseer 15 ml PlantiPower Shield per 1 liter water voor een standaard mengverhouding." : "Dose 15 ml PlantiPower Shield per 1 liter of water for a standard mixing ratio." },
            { step: "03", title: isNL ? "Volledige bedekking" : "Full coverage", desc: isNL ? "Bespuit de volledige plant, inclusief de onderzijde van het blad voor maximale bescherming." : "Spray the entire plant, including the underside of the leaves, for maximum protection." }
        ],
        expertTitle: dict.Products.importantInstructions,
        expertItems: [
            { label: isNL ? 'Frequentie' : 'Frequency', text: isNL ? 'Gebruik Shield maximaal éénmaal per week voor een optimaal resultaat.' : 'Use Shield at most once a week for optimal results.' },
            { label: isNL ? 'Oogstfase' : 'Harvest phase', text: isNL ? 'Tot uiterlijk 3 dagen vóór de oogst toepassen.' : 'Apply no later than 3 days before harvest.' }
        ],
        disclaimer: isNL
            ? "Shield is veilig voor mens en milieu. Bewaar het product op een donkere plaats bij kamertemperatuur voor behoud van de actieve componenten."
            : "Shield is safe for humans and the environment. Store the product in a dark place at room temperature to preserve active components.",
        technicalTitle: dict.Products.technicalData,
        technicalDesc: isNL
            ? 'Toegang tot de officiële documentatie en specificaties van PlantiPower Shield.'
            : 'Access to the official documentation and specifications of PlantiPower Shield.',
        sdsLabel: isNL ? 'Veiligheidsblad' : 'Safety Data Sheet',
        sdsMeta: isNL ? 'SDS NL • pdf' : 'SDS EN • pdf',
        sdsLink: isNL ? '/docs/PlantiPower%20Shield%20SDS%20NL.pdf' : '/images/products/sds-shield.pdf',
        labelTitle: isNL ? 'Het Officiële Etiket' : 'Official Label',
        labelImage: '/images/products/label-shield-nl.png',
        heroImage: isNL ? '/images/products/label-shield-nl.png' : '/images/products/plantipower-shield-transparant.png'
    };

    return (
        <ClientLayout dict={dict} lang={lang}>
            <div className="bg-[#010816] min-h-screen text-white font-inter selection:bg-cyan-500/30">
                {/* HERO SECTION */}
                <div className="relative pt-24 md:pt-32 pb-16">
                    {/* ADVANCED BACKGROUND GRADIENTS */}
                    <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle,hsl(190,90%,50%,0.15)_0%,transparent_70%)] blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(220,80%,40%,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none"></div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute bg-cyan-400 rounded-full blur-[1px]"
                                style={{
                                    width: Math.random() * 4 + 2 + 'px',
                                    height: Math.random() * 4 + 2 + 'px',
                                    top: Math.random() * 100 + '%',
                                    left: Math.random() * 100 + '%',
                                    animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                                    animationDelay: `-${Math.random() * 10}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="animate-reveal">
                                {/* BADGE */}
                                <div className="mb-8">
                                    <div className="inline-flex items-center px-4 py-2 bg-[#0a1629] border border-blue-900/50 rounded-sm">
                                        <div className="w-2 h-2 rounded-full border border-cyan-400 mr-3"></div>
                                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-cyan-500 font-outfit">{content.heroBadge}</span>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h1 className="font-outfit font-bold uppercase text-[42px] md:text-[56px] lg:text-[68px] tracking-tight leading-[0.9] text-white text-left mb-6">
                                            {content.heroTitle}
                                        </h1>
                                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl font-light">
                                            {content.heroDesc}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <a href="#downloads" className="h-14 px-8 bg-cyan-500 hover:bg-cyan-400 text-[#010816] font-black tracking-widest uppercase text-xs rounded-sm transition-all flex items-center justify-center gap-2 group min-w-[180px]">
                                            {content.ctaDiscover}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                        <div className="h-14 px-8 border border-white/10 rounded-sm bg-[#0b1221] hover:bg-[#111a2d] transition-colors flex items-center justify-center gap-3 cursor-default min-w-[180px]">
                                            <Zap className="w-4 h-4 text-cyan-400" />
                                            <span className="text-white font-bold text-xs tracking-widest uppercase">{content.natural}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* IMPACT VISUAL */}
                            <div className="relative group animate-reveal [animation-delay:0.3s] flex items-center justify-center pt-20 lg:pt-0">
                                <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse-slow"></div>
                                <div className="relative z-10 floating">
                                    <img
                                        src={content.heroImage}
                                        alt="PlantiPower Shield Label"
                                        className="w-full h-auto object-contain max-h-[600px] drop-shadow-[0_40px_100px_rgba(6,182,212,0.4)] filter brightness-110 group-hover:brightness-125 transition-all duration-700 transform hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CORE SYSTEM SECTION */}
                <div className="py-24 bg-[#000b1a] relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)] pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <div className="mb-16 max-w-2xl">
                            <div className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">{content.coreSystem}</div>
                            <h2 className="section-title !text-4xl md:!text-5xl font-outfit">
                                {content.protectionTitle}
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {content.cards.map((benefit, i) => (
                                <div key={i} className="group glass-panel px-8 py-12 rounded-[2rem] hover-lift border-white/5 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.05]">
                                    <div className="mb-10 w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-all duration-500">
                                        {i === 0 && <ShieldCheck className="w-8 h-8 text-cyan-400" />}
                                        {i === 1 && <Sprout className="w-8 h-8 text-cyan-400" />}
                                        {i === 2 && <Activity className="w-8 h-8 text-cyan-400" />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed font-light">
                                        {benefit.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ADVANTAGE / COMPOSITION SECTION */}
                <div className="relative py-20 border-y border-white/5 bg-[#010816]">
                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-start">
                            {/* Left: Advantage */}
                            <div>
                                <div className="bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] inline-block mb-8 border border-cyan-500/20">
                                    {content.advantageBadge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-outfit leading-tight">
                                    {content.advantageTitle}
                                </h2>
                                <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-12">
                                    {content.advantageDesc}
                                </p>

                                <div className="space-y-6">
                                    {content.usps.map((item, i) => (
                                        <div key={i} className="flex items-center gap-5 group">
                                            <div className="w-8 h-8 rounded-full border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                                                <CheckCircle2 className="w-4 h-4 text-cyan-400 group-hover:text-slate-900" />
                                            </div>
                                            <span className="text-lg text-white font-medium tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Composition */}
                            <div className="relative">
                                <div className="glass-panel rounded-[2rem] p-10 bg-white/[0.02] border-white/5">
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-outfit mb-8">{content.compositionTitle}</h3>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-2">{content.baseTitle}</div>
                                            <p className="text-white text-lg">{content.baseDesc}</p>
                                        </div>
                                        <div>
                                            <div className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-2">{content.mineralsTitle}</div>
                                            <p className="text-white text-lg">{content.mineralsDesc}</p>
                                        </div>
                                    </div>
                                    <div className="pt-8 mt-8 border-t border-white/5">
                                        <p className="text-slate-400 text-sm font-medium">{content.tags}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GUIDE & INSTRUCTIONS */}
                <div className="py-24 bg-[#000b1a] relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                            <div className="glass-panel p-12 rounded-[3rem] bg-white/[0.02] border-white/5">
                                <div className="mb-10">
                                    <div className="bg-slate-800 text-slate-300 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest inline-block mb-6">
                                        {content.guideBadge}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white font-outfit leading-tight">
                                        {content.guideTitle}
                                    </h2>
                                </div>

                                <div className="space-y-10">
                                    {content.steps.map((item, i) => (
                                        <div key={i} className="group relative pl-16">
                                            <div className="absolute left-0 top-0 text-3xl font-black text-cyan-400 font-outfit">{item.step}</div>
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                                            <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="glass-panel p-10 rounded-[2rem] bg-cyan-900/10 border-cyan-500/20 flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-8 font-outfit">{content.expertTitle}</h3>
                                    <div className="space-y-6">
                                        {content.expertItems.map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold mt-1">!</div>
                                                <div>
                                                    <div className="text-white font-bold mb-1">{item.label}</div>
                                                    <p className="text-slate-400">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-panel p-8 rounded-[2rem] bg-white/[0.02] border-white/5">
                                    <p className="text-slate-500 text-sm italic leading-relaxed">
                                        "{content.disclaimer}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LABEL SPOTLIGHT */}
                {isNL && (
                    <div className="py-24 bg-[#010816] relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                            <div className="max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit uppercase tracking-tight">
                                    {content.labelTitle}
                                </h2>
                                <p className="text-slate-400 text-lg font-light leading-relaxed">
                                    Onze etiketten staan voor onzichtbare kracht, maximale weerbaarheid en 100% natuurlijke bescherming.
                                </p>
                            </div>

                            <div className="relative group max-w-2xl mx-auto">
                                <div className="absolute -inset-4 bg-cyan-500/20 blur-[40px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative glass-panel rounded-[2.5rem] p-4 bg-white/5 border-white/10 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                    <img
                                        src={content.labelImage}
                                        alt="PlantiPower Shield NL Etiket"
                                        className="w-full h-auto rounded-[1.5rem] shadow-inner"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* DOWNLOADS */}
                <div id="downloads" className="py-20 bg-[#010816] border-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-4 font-outfit">{content.technicalTitle}</h2>
                                <p className="text-slate-400 text-lg font-light">{content.technicalDesc}</p>
                            </div>
                            <a
                                href={content.sdsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 rounded-2xl p-6 transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                                            <FileText className="text-cyan-400 w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-outfit uppercase">{content.sdsLabel}</h4>
                                            <p className="text-xs text-slate-500 font-bold tracking-widest uppercase mt-1">{content.sdsMeta}</p>
                                        </div>
                                    </div>
                                    <Download className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </ClientLayout>
    );
};

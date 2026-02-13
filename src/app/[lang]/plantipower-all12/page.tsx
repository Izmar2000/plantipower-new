
// Product page for PlantiPower ALL12
import React from 'react';
import NutrientGrid from '@/components/NutrientGrid';
import {
    CheckCircle2,
    FileText,
    ArrowRight,
    Download,
    Zap,
    Shield,
    Cpu,
    Atom,
    Leaf
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
        title: isNL ? 'PlantiPower All12 | Professionele Nutriënt Transport' : 'PlantiPower All12 | Professional Nutrient Transport',
        description: isNL ? 'Ontdek PlantiPower All12 - de ultieme nutriënt transport technologie voor professionele kwekers.' : 'Discover PlantiPower All12 - the ultimate nutrient transport technology for professional growers.',
        openGraph: {
            title: isNL ? 'PlantiPower All12 | Professionele Nutriënt Transport' : 'PlantiPower All12 | Professional Nutrient Transport',
            description: isNL ? 'Maximale opname van alle 12 essentiële elementen.' : 'Maximum uptake of all 12 essential elements.',
            images: ['/images/products/plantipower-all12-transparant.png'],
        }
    }
}

export default async function ProductAll12({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const isNL = lang === 'nl';

    const content = {
        title: isNL ? 'PlantiPower All12 | Professionele Nutriënt Transport' : 'PlantiPower All12 | Professional Nutrient Transport',
        meta: isNL ? 'Ontdek PlantiPower All12 - de ultieme nutriënt transport technologie.' : 'Discover PlantiPower All12 - the ultimate nutrient transport technology.',
        heroBadge: isNL ? 'Biologische Innovatie' : 'Biological Innovation',
        heroTitle: isNL
            ? <><span className="text-white">ALL12</span><br /><span className="text-white">NUTRIËNTEN</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">TRANSPORTEUR</span></>
            : <><span className="text-white">ALL12</span><br /><span className="text-white">NUTRIENT</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">TRANSPORTER</span></>,
        heroDesc: isNL
            ? 'Doorbraak in passief transport. Waar fulvinezuren normaal stoppen bij 3 nutriënten, transporteert de ALL12 technologie het volledige spectrum.'
            : 'Breakthrough in passive transport. Where fulvic acids normally stop at 3 nutrients, ALL12 technology transports the full spectrum.',
        ctaDiscover: isNL ? 'ONTDEK DE KRACHT' : 'DISCOVER THE POWER',
        validated: isNL ? 'GEVALIDEERD' : 'VALIDATED',
        coreSystem: dict.Products.coreSystem,
        efficiencyTitle: isNL ? <>Maximale <span className="text-lime-400">efficiëntie</span></> : <>Maximum <span className="text-lime-400">efficiency</span></>,
        cards: [
            {
                title: isNL ? "Passief Transport" : "Passive Transport",
                desc: isNL
                    ? "PlantiPower maakt gebruik van organische nanotubes die zich hechten aan voedingsstoffen voor passieve opname zonder energieverlies."
                    : "PlantiPower uses organic nanotubes that attach to nutrients for passive uptake without energy loss."
            },
            {
                title: isNL ? "Moleculaire Precisie" : "Molecular Precision",
                desc: isNL
                    ? "Waar traditionele voeding faalt, houdt ALL12 de elementen stabiel en mobiel, ongeacht de pH-waarde of het substraat."
                    : "Where traditional nutrition fails, ALL12 keeps elements stable and mobile, regardless of pH value or substrate."
            },
            {
                title: isNL ? "Nul Verspilling" : "Zero Waste",
                desc: isNL
                    ? "Haal meer rendement uit elke druppel. Door de verbeterde opname-efficiëntie wordt verspilling tot een minimum beperkt."
                    : "Get more yield from every drop. Improved uptake efficiency minimizes waste."
            }
        ],
        spectrumBadge: dict.Products.spectrumBadge,
        spectrumTitle: isNL ? <>De kracht van <br /><span className="text-lime-500">twaalf elementen</span></> : <>The power of <br /><span className="text-lime-500">twelve elements</span></>,
        spectrumDesc: isNL
            ? 'ALL12 technologie zorgt ervoor dat niet alleen de basis, maar ook de meest kritische sporenelementen effectief worden gebonden en getransporteerd.'
            : 'ALL12 technology ensures that not only the basics, but also the most critical trace elements are effectively bound and transported.',
        elementsTotal: isNL ? 'Elementen Totaal' : 'Total Elements',
        advantageBadge: dict.Products.advantageBadgeAll12,
        advantageTitle: isNL ? <>Revolutionair <br /><span className="text-lime-500">transport</span></> : <>Revolutionary <br /><span className="text-lime-500">transport</span></>,
        advantageDesc: isNL
            ? 'PlantiPower All12 is niet zomaar een toevoeging; het is de motor achter je voedingsschema. Door gebruik te maken van nano-transport technologie worden blokkades in de bodem opgeheven en bereiken voedingsstoffen de plant sneller dan ooit tevoren.'
            : 'PlantiPower All12 is not just an additive; it is the engine behind your nutrition schedule. By using nano-transport technology, soil blockages are removed and nutrients reach the plant faster than ever before.',
        usps: isNL
            ? ["Maximale opname van alle 12 elementen", "Conditioneert en revitaliseert het substraat", "Verlaagt de EC-druk in de wortelzone", "Volledig biologisch en residu-vrij"]
            : ["Maximum uptake of all 12 elements", "Conditions and revitalizes the substrate", "Reduces EC pressure in the root zone", "Completely organic and residue-free"],
        compositionTitle: isNL ? 'Samenstelling' : 'Composition',
        humus: isNL ? 'Humuszuren' : 'Humic Acids',
        humusDesc: isNL ? '5% Actief extract' : '5% Active extract',
        fulvic: isNL ? 'Fulvinezuren' : 'Fulvic Acids',
        fulvicDesc: isNL ? '3% Geconcentreerd' : '3% Concentrated',
        tags: isNL ? 'Substraatconditioner • pH-Stabiel • Nano-Tech' : 'Substrate conditioner • pH-Stable • Nano-Tech',
        guideBadge: isNL ? 'Gebruikershandleiding' : 'User Guide',
        guideTitle: isNL ? <>Eenvoudige <br /><span className="text-lime-500">toepassing</span></> : <>Simple <br /><span className="text-lime-500">application</span></>,
        steps: [
            { step: "01", title: isNL ? "Goed schudden" : "Shake well", desc: isNL ? "Zorg voor een homogene menging door de jerrycan voor gebruik krachtig te schudden." : "Ensure homogeneous mixing by shaking the jerrycan vigorously before use." },
            { step: "02", title: isNL ? "Optimale dosering" : "Optimal dosage", desc: isNL ? "Gebruik 5 ml PlantiPower All12 per 1 liter voedingswater voor een maximaal effect." : "Use 5 ml PlantiPower All12 per 1 liter of nutrient water for maximum effect." },
            { step: "03", title: isNL ? "Maandelijkse boost" : "Monthly boost", desc: isNL ? "Pas het product éénmaal per maand toe als onderdeel van je reguliere bewateringsschema." : "Apply the product once a month as part of your regular watering schedule." }
        ],
        expertAdvice: dict.Products.expertAdvice,
        expertItems: [
            { label: isNL ? 'Synergie' : 'Synergy', text: isNL ? 'All12 werkt optimaal samen met zowel minerale als organische voeding.' : 'All12 works optimally with both mineral and organic nutrition.' },
            { label: 'EC-Check', text: isNL ? 'All12 verhoogt de opname, wat kan leiden tot een lagere benodigde basis-voedingsgift.' : 'All12 increases uptake, which can lead to a lower required base nutrient dose.' },
            { label: isNL ? 'Bewaaradvies' : 'Storage', text: isNL ? 'Bewaar op een koele plaats buiten direct zonlicht voor behoud van de nano-tubes.' : 'Store in a cool place out of direct sunlight to preserve the nano-tubes.' }
        ],
        disclaimer: isNL
            ? "PlantiPower All12 is geclassificeerd als niet-gevaarlijk en is 100% veilig bij correct gebruik in professionele kassen en landbouwomgevingen."
            : "PlantiPower All12 is classified as non-hazardous and is 100% safe when used correctly in professional greenhouses and agricultural environments.",
        technicalTitle: dict.Products.technicalData,
        technicalDesc: isNL
            ? 'Toegang tot de officiële documentatie en specificaties van PlantiPower All12.'
            : 'Access to official documentation and specifications of PlantiPower All12.',
        sdsLabel: isNL ? 'Veiligheidsblad' : 'Safety Data Sheet',
        sdsMeta: isNL ? 'SDS NL • pdf' : 'SDS EN • pdf',
        sdsLink: isNL ? '/docs/PlantiPower%20ALL12%20SDS%20NL.pdf' : '/images/products/sds-all12.pdf',
        labelTitle: isNL ? 'Het Officiële Etiket' : 'Official Label',
        labelImage: isNL ? '/images/products/all12-nl-trans.svg' : '/images/products/label-all12-nl.png',
        heroImage: isNL ? '/images/products/all12-nl-trans.svg' : '/images/products/plantipower-all12-transparant.png'
    };

    return (
        <ClientLayout dict={dict} lang={lang}>
            <div className="bg-[#011410] text-emerald-50 font-sans selection:bg-lime-500/30">
                {/* HERO SECTION */}
                <div className="relative pt-24 md:pt-32 pb-16">
                    <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle,hsl(84,100%,50%,0.13)_0%,transparent_70%)] blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(160,80%,40%,0.08)_0%,transparent_70%)] blur-[120px] pointer-events-none"></div>

                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute bg-lime-400 rounded-full blur-[1px]"
                                style={{
                                    width: Math.random() * 3 + 1 + 'px',
                                    height: Math.random() * 3 + 1 + 'px',
                                    top: Math.random() * 100 + '%',
                                    left: Math.random() * 100 + '%',
                                    animation: `float ${Math.random() * 12 + 8}s linear infinite`,
                                    animationDelay: `-${Math.random() * 10}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="animate-reveal lg:pt-6">
                                <div className="mb-8">
                                    <div className="inline-flex items-center px-4 py-2 bg-[#0d1f12] border border-lime-900/50 rounded-sm">
                                        <div className="w-2 h-2 rounded-full bg-lime-500 mr-3 animate-pulse"></div>
                                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-lime-500 font-outfit">{content.heroBadge}</span>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h1 className="font-outfit font-bold uppercase text-[42px] md:text-[56px] lg:text-[68px] tracking-tight leading-[0.9] text-white text-left mb-6">
                                            {content.heroTitle}
                                        </h1>
                                        <p className="text-lg md:text-xl text-emerald-100/60 leading-relaxed max-w-xl font-light">
                                            {content.heroDesc}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <a href="#downloads" className="h-14 px-8 bg-lime-500 hover:bg-lime-400 text-[#011a14] font-black tracking-widest uppercase text-xs rounded-sm transition-all flex items-center justify-center gap-2 group min-w-[180px]">
                                            {content.ctaDiscover}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                        <div className="h-14 px-8 border border-white/10 rounded-sm bg-[#061a12] hover:bg-[#0a261a] transition-colors flex items-center justify-center gap-3 cursor-default min-w-[180px]">
                                            <Shield className="w-4 h-4 text-lime-400" />
                                            <span className="text-white font-bold text-xs tracking-widest uppercase">{content.validated}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group animate-reveal [animation-delay:0.3s] flex items-center justify-center pt-20 lg:pt-0">
                                <div className="absolute inset-0 bg-lime-500/20 blur-[120px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse-slow"></div>
                                <div className="relative z-10 floating">
                                    <img
                                        src={content.heroImage}
                                        alt="PlantiPower All12 Label"
                                        className="w-full h-auto object-contain max-h-[600px] drop-shadow-[0_40px_100px_rgba(132,204,22,0.4)] filter brightness-110 group-hover:brightness-125 transition-all duration-700 transform hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CORE SYSTEM */}
                <div className="py-24 bg-[#011410] relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.03)_0%,transparent_70%)] pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="mb-16 max-w-2xl">
                            <div className="text-lime-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">{content.coreSystem}</div>
                            <h2 className="section-title !text-4xl md:!text-5xl font-outfit">
                                {content.efficiencyTitle}
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {content.cards.map((item, i) => (
                                <div key={i} className="group glass-panel px-8 py-12 rounded-[2rem] hover-lift border-white/5 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.05]">
                                    <div className="mb-10 w-16 h-16 rounded-xl bg-lime-500/10 flex items-center justify-center border border-lime-500/20 group-hover:scale-110 transition-all duration-500">
                                        {i === 0 ? <Cpu className="w-8 h-8 text-lime-400" /> : i === 1 ? <Atom className="w-8 h-8 text-lime-400" /> : <Leaf className="w-8 h-8 text-lime-400" />}
                                    </div>
                                    <h3 className="section-title !text-2xl mb-6 tracking-tight font-outfit text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-emerald-100/50 leading-relaxed font-light group-hover:text-emerald-100/70 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SPECTRUM & ADVANTAGE */}
                <div className="relative py-20 border-y border-white/5 bg-[#011a14]">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        {/* SPECTRUM SECTION */}
                        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
                            <div>
                                <div className="bg-lime-500/10 text-lime-400 px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] inline-block mb-8 border border-lime-500/20">
                                    {content.spectrumBadge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-outfit leading-tight">
                                    {content.spectrumTitle}
                                </h2>
                                <p className="text-emerald-100/60 text-lg md:text-xl font-light leading-relaxed">
                                    {content.spectrumDesc}
                                </p>
                            </div>
                            <div className="relative bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 pr-8 lg:pr-12">
                                <NutrientGrid dict={dict} />
                            </div>
                        </div>

                        {/* ADVANTAGE & COMPOSITION */}
                        <div className="grid lg:grid-cols-2 gap-24 items-start">
                            <div>
                                <div className="bg-lime-500/10 text-lime-400 px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] inline-block mb-8 border border-lime-500/20">
                                    {content.advantageBadge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-outfit leading-tight">
                                    {content.advantageTitle}
                                </h2>
                                <p className="text-emerald-100/60 text-lg md:text-xl font-light leading-relaxed mb-12">
                                    {content.advantageDesc}
                                </p>
                                <div className="space-y-6">
                                    {content.usps.map((item, i) => (
                                        <div key={i} className="flex items-center gap-5 group">
                                            <div className="w-8 h-8 rounded-full border border-lime-500/30 flex items-center justify-center group-hover:bg-lime-500 group-hover:border-lime-500 transition-all font-bold">
                                                <CheckCircle2 className="w-4 h-4 text-lime-400 group-hover:text-emerald-950" />
                                            </div>
                                            <span className="text-lg text-white font-medium tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-panel rounded-[2rem] p-10 bg-white/[0.02] border-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-lime-500/10 rounded-lg border border-lime-500/20 text-lime-400">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-outfit">{content.compositionTitle}</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-5 rounded-xl bg-emerald-900/30 border border-emerald-500/10 hover:border-lime-500/30 transition-colors">
                                        <div className="text-lime-400 text-xs font-black uppercase tracking-widest mb-1">{content.humus}</div>
                                        <p className="text-white font-medium text-lg">{content.humusDesc}</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-emerald-900/30 border border-emerald-500/10 hover:border-lime-500/30 transition-colors">
                                        <div className="text-lime-400 text-xs font-black uppercase tracking-widest mb-1">{content.fulvic}</div>
                                        <p className="text-white font-medium text-lg">{content.fulvicDesc}</p>
                                    </div>
                                </div>
                                <div className="pt-6 mt-6 border-t border-white/5">
                                    <div className="text-emerald-100/40 text-sm italic font-medium">
                                        {content.tags}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GUIDE & EXPERT ADVICE */}
                <div className="py-24 bg-[#011a14] relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                            <div className="glass-panel p-12 rounded-[3rem] bg-white/[0.02] border-white/5 overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 blur-[80px] rounded-full"></div>
                                <div className="relative z-10">
                                    <div className="mb-10">
                                        <div className="bg-emerald-900/50 text-emerald-200 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest inline-block mb-6 border border-white/10">
                                            {content.guideBadge}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-white font-outfit leading-tight">{content.guideTitle}</h2>
                                    </div>
                                    <div className="space-y-10">
                                        {content.steps.map((item, i) => (
                                            <div key={i} className="flex gap-6 group">
                                                <div className="text-4xl font-black text-lime-500 font-outfit">0{i + 1}</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                                    <p className="text-emerald-100/50 leading-relaxed font-medium">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="glass-panel p-10 rounded-[2rem] bg-lime-900/10 border-lime-500/20 flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-8 font-outfit">{content.expertAdvice}</h3>
                                    <div className="space-y-6">
                                        {content.expertItems.map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="w-6 h-6 rounded-full bg-lime-500/20 flex items-center justify-center shrink-0 mt-1">
                                                    <span className="text-lime-400 text-xs font-bold">!</span>
                                                </div>
                                                <p className="text-emerald-100/70 leading-relaxed">
                                                    <strong className="text-white">{item.label}:</strong> {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="glass-panel p-8 rounded-[2rem] bg-white/[0.02] border-white/5">
                                    <p className="text-emerald-100/40 text-sm leading-relaxed italic">
                                        "{content.disclaimer}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LABEL SPOTLIGHT */}
                {isNL && (
                    <div className="py-24 bg-[#011a14] relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                            <div className="max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit uppercase tracking-tight">
                                    {content.labelTitle}
                                </h2>
                                <p className="text-emerald-100/50 text-lg font-light leading-relaxed">
                                    Onze etiketten weerspiegelen onze belofte: pure kwaliteit, krachtige groei en 100% biologisch.
                                </p>
                            </div>

                            <div className="relative group max-w-2xl mx-auto">
                                <div className="absolute -inset-4 bg-lime-500/20 blur-[40px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative glass-panel rounded-[2.5rem] p-4 bg-white/5 border-white/10 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                    <img
                                        src={content.labelImage}
                                        alt="PlantiPower All12 NL Etiket"
                                        className="w-full h-auto rounded-[1.5rem] shadow-inner"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* DOWNLOADS */}
                <div id="downloads" className="py-20 bg-[#011410] border-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-4 font-outfit">{content.technicalTitle}</h2>
                                <p className="text-emerald-100/50 text-lg md:text-xl font-light leading-relaxed">
                                    {content.technicalDesc}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-1 gap-8">
                                <a
                                    href={content.sdsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group glass-panel p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-lime-500/40 transition-all duration-500 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-emerald-900/40 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                                            <FileText className="text-lime-400 w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors font-outfit uppercase tracking-tight">{content.sdsLabel}</h4>
                                            <p className="text-xs text-lime-500/50 font-black tracking-widest uppercase mt-1">{content.sdsMeta}</p>
                                        </div>
                                    </div>
                                    <Download className="w-6 h-6 text-emerald-100/20 group-hover:text-lime-400 transition-all transform group-hover:-translate-y-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
};

import React from 'react';
import { usePathname } from 'next/navigation';

const ScienceSection: React.FC = () => {
    const pathname = usePathname();
    const isNL = pathname?.startsWith('/nl');

    const content = {
        title: isNL ? "Gevalideerde Wetenschap." : "Validated Science.",
        description: isNL
            ? "PlantiPower is ontwikkeld in samenwerking met toonaangevende agronomen om de grenzen van traditionele teelt te doorbreken."
            : "PlantiPower was developed in collaboration with leading agronomists to break the boundaries of traditional cultivation.",
        badge: isNL ? "BEWEZEN RESULTATEN 2024" : "PROVEN RESULTS 2024",
        cards: isNL ? [
            {
                id: "01",
                badge: "BIO-SYNTHESE",
                title: "Moleculaire Precisie",
                text: "Fulvinezuren fungeren als natuurlijk transportmiddel, waardoor uw basisvoeding tot wel 100% wordt benut."
            },
            {
                id: "02",
                badge: "PLANTWEERBAARHEID",
                title: "Maximale Vitaliteit",
                text: "Versterkt de wortelzone en zorgt voor een krachtige start, ook na overpotten of snoeien."
            },
            {
                id: "03",
                badge: "BREDE TOEPASBAARHEID",
                title: "Elk Medium",
                text: "Perfect voor aarde, kokos en hydro. Werkt naadloos samen met elk bestaand voedingsschema."
            },
            {
                id: "04",
                badge: "RENDEMENT",
                title: "Hogere Opbrengst",
                text: "Haal meer uit uw huidige voeding. Minder verspilling, lagere kosten en een kwalitatief beter eindproduct."
            }
        ] : [
            {
                id: "01",
                badge: "BIO-SYNTHESIS",
                title: "Molecular Precision",
                text: "Fulvic acids act as a natural transport medium, allowing your base nutrients to be utilized up to 100%."
            },
            {
                id: "02",
                badge: "RESILIENCE",
                title: "Maximum Vitality",
                text: "Strengthens the root zone and ensures a powerful start, even after repotting or pruning."
            },
            {
                id: "03",
                badge: "VERSATILITY",
                title: "Any Medium",
                text: "Perfect for soil, coco, and hydro. Works seamlessly with any existing nutrient schedule."
            },
            {
                id: "04",
                badge: "EFFICIENCY",
                title: "Higher Yield",
                text: "Get more out of your current nutrients. Less waste, lower costs, and a higher quality end product."
            }
        ]
    };

    return (
        <section className="py-12 md:py-20 bg-emerald-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-none uppercase">
                        {content.title}
                    </h2>
                    <p className="text-lg text-emerald-100/60 leading-relaxed font-medium mb-6">
                        {content.description}
                    </p>
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-lime-500/5 border border-lime-500/10 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-mono text-lime-400 tracking-widest uppercase">{content.badge}</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {content.cards.map((card, i) => (
                        <div key={i} className="group relative bg-[#021814]/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:bg-[#021814] hover:border-lime-500/20 transition-all duration-300">
                            <div className="absolute top-4 right-4 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors leading-none tracking-tighter">
                                {card.id}
                            </div>
                            <div className="relative z-10">
                                <div className="inline-block px-2 py-0.5 rounded bg-lime-500/10 text-[9px] font-black tracking-widest text-lime-500 mb-4 border border-lime-500/20">
                                    {card.badge}
                                </div>
                                <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{card.title}</h3>
                                <p className="text-xs text-emerald-100/50 leading-relaxed">
                                    {card.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScienceSection;

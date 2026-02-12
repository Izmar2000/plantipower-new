import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ProblemSectionProps {
    dict?: any; // Marked optional to prevent breaking if not passed immediately, but intended to be required
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ dict }) => {
    // Fallback voor als dict (nog) niet doorgegeven wordt, voor veiligheid tijdens dev
    const t = dict?.ProblemSection || {
        badge: "DE UITDAGING",
        title: "Het probleem in",
        titleAccent: "de praktijk.",
        description: "In een perfecte wereld wordt elke gram voeding die je geeft, ook daadwerkelijk door de plant opgenomen. De realiteit is anders. Factoren zoals pH-schommelingen, koud water of een onbalans in de wortelzone zorgen vaak voor blokkades.",
        quote: "\"Dit zorgt voor ongebruikte voedingsstoffen die achterblijven in het substraat - zonde van de investering en belastend voor het gewas.\"",
        closing: "Door deze 'blockers' weg te nemen met PlantiPower, haal je het maximale uit je bestaande schema."
    };

    return (
        <section className="relative py-12 md:py-16 bg-[#021814] overflow-hidden">

            {/* Background: User's Premium Landscape */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/problem-bg-premium.png"
                    alt="Premium Greenhouse Background"
                    className="w-full h-full object-cover opacity-30 contrast-110 mix-blend-luminosity"
                />
                {/* Deep Gradient Overlay for text readability & mood */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#021814] via-[#021814]/90 to-[#021814]/70"></div>

                {/* Section Blending Gradients */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent opacity-50 z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-50 z-20"></div>
            </div>

            {/* Ambient Light Effect */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 blur-[150px] rounded-full z-0"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="section-badge">
                            <AlertCircle size={14} strokeWidth={2.5} />
                            {t.badge}
                        </div>

                        <h2 className="section-title">
                            {t.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">{t.titleAccent}</span>
                        </h2>

                        <div className="space-y-6 section-description">
                            <p>
                                {t.description}
                            </p>

                            <div className="pl-6 border-l-2 border-lime-500/50 py-1">
                                <p className="text-xl text-white font-bold">
                                    {t.quote}
                                </p>
                            </div>

                            <p>
                                {t.closing}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: High-End Laboratory/Science Visual */}
                    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end group">
                        {/* Glow effect */}
                        <div className="absolute bg-emerald-500/10 w-3/4 h-3/4 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/20 transition-all duration-700"></div>

                        {/* Science/Lab Image container with glass effect */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl group-hover:border-lime-500/30 transition-all duration-500">
                            <img
                                src="/images/nutrient-blockage-visual.png"
                                alt="Tomaat Teelt Analyse"
                                className="relative w-full aspect-square object-cover transform transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#021814] via-transparent to-transparent"></div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSection;

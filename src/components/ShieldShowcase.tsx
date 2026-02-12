'use client'; // Marking as client component to be safe

import { FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ShieldShowcase = () => {
    const pathname = usePathname();
    const isNL = pathname?.startsWith('/nl');
    const productLink = isNL ? '/nl/products/shield' : '/en/products/shield';

    return (
        <section className="py-24 relative overflow-hidden bg-[#020d1a]" id="shield">
            {/* Ambient background glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: Atmospheric Protection & Product */}
                    <div className="relative group order-2 lg:order-1">
                        <div className="absolute -inset-10 bg-cyan-500/5 blur-[100px] rounded-full opacity-60"></div>

                        <div className="relative rounded-[3.5rem] overflow-hidden border border-white/5 shadow-3xl bg-blue-950/20 backdrop-blur-md">
                            <div className="aspect-square relative flex items-center justify-center overflow-hidden">
                                {/* Background: Clean atmosphere visual with blue dome (no product in background) */}
                                <img
                                    src="/images/shield-atmosphere-clean.png"
                                    alt="Protection Atmosphere"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 mix-blend-screen"
                                />

                                {/* Foreground: The REAL Shield product jerseycan (the one from 'PlantiPower Shield.png') */}
                                <div className="relative z-10 p-12">
                                    <img
                                        src="/images/products/plantipower-shield-transparant.png"
                                        alt="PlantiPower Shield"
                                        className="w-full h-auto object-contain max-h-[480px] drop-shadow-[0_20px_60px_rgba(6,182,212,0.4)] transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Protection Pulse HUD */}
                                <div className="absolute top-10 right-10 bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 p-6 rounded-2xl animate-float">
                                    <svg viewBox="0 0 100 100" className="w-8 h-8 text-cyan-400 mb-2">
                                        <path d="M50 10 L90 30 V70 L50 90 L10 70 V30 Z" fill="none" stroke="currentColor" strokeWidth="8" />
                                        <circle cx="50" cy="50" r="15" fill="currentColor" />
                                    </svg>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-cyan-400 leading-none">Protection Active</div>
                                </div>
                            </div>
                        </div>

                        {/* Artistic reflection below */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-cyan-500/20 blur-[60px] rounded-full -z-10"></div>
                    </div>

                    {/* Right Column: Product Info */}
                    <div className="order-1 lg:order-2">
                        <div className="section-badge !bg-blue-500/10 !border-blue-500/20 !text-cyan-400">Advanced Bio-Protection</div>
                        <h2 className="section-title">
                            PlantiPower Shield <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Onzichtbare Kracht.</span>
                        </h2>

                        <p className="section-description mb-10">
                            Verhoog de natuurlijke weerbaarheid van je gewas met Shield. Een geavanceerde barrière die zorgt voor vitalere planten en een gezonde groei, zonder enig residu achter te laten.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            {[
                                {
                                    icon: (
                                        <svg viewBox="0 0 100 100" className="w-5 h-5 text-cyan-400">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="animate-spin-slow" />
                                            <rect x="35" y="35" width="30" height="30" fill="currentColor" />
                                        </svg>
                                    ),
                                    title: "Maximale Weerbaarheid",
                                    desc: "Versterkt het natuurlijke afweersysteem van de plant tegen externe factoren."
                                },
                                {
                                    icon: (
                                        <svg viewBox="0 0 100 100" className="w-5 h-5 text-blue-400">
                                            <path d="M20 50 Q50 20 80 50 Q50 80 20 50" fill="none" stroke="currentColor" strokeWidth="4" />
                                            <circle cx="50" cy="50" r="10" fill="currentColor" />
                                        </svg>
                                    ),
                                    title: "Residue-Vrij",
                                    desc: "Oogst met zekerheid; Shield laat absoluut geen schadelijke resten achter."
                                },
                                {
                                    icon: (
                                        <svg viewBox="0 0 100 100" className="w-5 h-5 text-emerald-400">
                                            <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M20 50 H80 M50 20 V80" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                                            <circle cx="50" cy="50" r="5" fill="currentColor" />
                                        </svg>
                                    ),
                                    title: "Natuurlijke Kracht",
                                    desc: "Een gezonde, duurzame basis voor elke professionele teler."
                                },
                                {
                                    icon: (
                                        <svg viewBox="0 0 100 100" className="w-5 h-5 text-cyan-500">
                                            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M50 20 V80 M20 50 H80" stroke="currentColor" strokeWidth="1" />
                                            <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="1" />
                                        </svg>
                                    ),
                                    title: "Optimale Plantgezondheid",
                                    desc: "Zorgt voor een vitaal gewas dat optimaal presteert in elke omgeving."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 group/item">
                                    <div className="mt-1 w-12 h-12 rounded-xl bg-blue-500/5 flex items-center justify-center border border-blue-500/10 group-hover/item:border-cyan-500/30 transition-all shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                                        <p className="text-blue-100/40 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href={productLink} className="group inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-blue-950 px-10 py-4 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-cyan-500/10 active:scale-95">
                                Ontdek de Kracht
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="/PP Shield info/Etiket 1Liter - PlantiPower_Shield_Label_250x130mm DE.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-blue-500/10 text-white border border-white/10 hover:border-blue-500/30 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all"
                            >
                                <FileText className="w-4 h-4" />
                                Bekijk Etiket
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShieldShowcase;

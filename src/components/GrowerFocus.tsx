'use client'

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface GrowerFocusProps {
    onOpenSample?: () => void;
    dict: any;
}

const GrowerFocus: React.FC<GrowerFocusProps> = ({ onOpenSample, dict }) => {
    const t = dict.GrowerFocus;

    return (
        <section className="py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column: Visual Impact */}
                    <div className="flex-1 relative group w-full">
                        <div className="absolute inset-0 bg-lime-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-square lg:aspect-[4/5]">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#011410] via-transparent to-transparent z-10 opacity-70"></div>
                            {/* Ensure image path matches Next.js public folder */}
                            <img
                                src="/images/grower-happy.jpg"
                                alt="Professional Grower"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />

                        </div>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <div className="section-badge">
                                <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
                                {t.badge}
                            </div>

                            <h2 className="section-title">
                                {t.title} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">{t.titleAccent}</span>
                            </h2>

                            <p className="section-description">
                                {t.description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {t.usps.map((item: any, i: number) => (
                                <div key={i} className="flex gap-4 group/item">
                                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-lime-400 border border-white/10 group-hover/item:border-lime-500/30 transition-all">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                                        <p className="text-emerald-100/50 text-base font-light leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <button
                                onClick={onOpenSample}
                                className="btn-standard bg-lime-500 hover:bg-lime-400 text-emerald-950 shadow-xl"
                            >
                                {t.cta}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GrowerFocus;

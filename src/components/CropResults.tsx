'use client'

import React from 'react';
import { Target, Sprout, TrendingUp } from 'lucide-react';

interface CropResultsProps {
    dict: any;
}

const CropResults: React.FC<CropResultsProps> = ({ dict }) => {
    const t = dict.CropResults;

    // We assume the structure matches the original array logic but populated via dict.
    // The dictionary structure has been flattened a bit for simplicity or we map it manually.
    // To keep it simple and safe, I reconstructed the 'crops' array using the dict data.

    const crops = [
        {
            name: t.crops[0].name,
            image: "/images/tomatoes-user.jpg",
            hasBadge: false,
            stats: [
                {
                    icon: Target,
                    title: t.crops[0].stats_0_title,
                    desc: t.crops[0].stats_0_desc,
                    badgeLabel: undefined
                },
                {
                    icon: TrendingUp,
                    title: t.crops[0].stats_1_title,
                    desc: t.crops[0].stats_1_desc,
                    badgeLabel: undefined
                }
            ]
        },
        {
            name: t.crops[1].name,
            image: "/images/cucumbers-user.jpg",
            hasBadge: true,
            stats: [
                {
                    icon: Sprout,
                    badgeLabel: t.crops[1].stats_0_badgeLabel,
                    title: t.crops[1].stats_0_title,
                    desc: t.crops[1].stats_0_desc
                },
                {
                    icon: TrendingUp,
                    title: t.crops[1].stats_1_title,
                    desc: t.crops[1].stats_1_desc,
                    badgeLabel: undefined
                }
            ]
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-[#011410]" id="crop-results">
            {/* Background Glow */}
            <div className="absolute top-0 center w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-500/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#0d2b24] border border-lime-500/20 mb-6">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-lime-500">
                            {t.badge}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-none font-outfit">
                        {t.title} <span className="text-lime-500">{t.titleHighlight}</span>
                    </h2>

                    <p className="text-lg text-emerald-100/60 leading-relaxed font-medium max-w-2xl mx-auto">
                        {t.description}
                    </p>
                </div>

                {/* Flexbox Layout for guaranteed gap */}
                <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center">
                    {crops.map((crop, i) => (
                        <div key={i} className="flex-1 w-full group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] md:min-h-[500px] bg-[#021814] border border-white/5 shadow-2xl">
                            {/* Top Right Validator Badge (For Cucumber) */}
                            {crop.hasBadge && (
                                <div className="absolute top-0 right-0 z-20 bg-white rounded-bl-[2.5rem] px-8 py-6 shadow-xl flex flex-col items-center">
                                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#011410]/40 mb-2">Gevalideerd</span>
                                    <div className="h-12 w-32 flex items-center justify-center">
                                        <img
                                            src="/images/vangog-logo.png"
                                            alt="Van Gog Kwekerijen"
                                            className="h-full w-full object-contain"
                                            onError={(e) => { (e.target as HTMLImageElement).style.visibility = 'hidden' }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={crop.image}
                                    alt={crop.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.visibility = 'hidden';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#011410] via-[#011410]/80 to-transparent opacity-90"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-10 md:p-12">
                                <div className="relative">
                                    <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-8 font-outfit">
                                        {crop.name}
                                        <div className="h-1.5 w-16 bg-lime-500 rounded-full mt-3"></div>
                                    </h3>

                                    <div className="space-y-6">
                                        {crop.stats.map((stat, j) => (
                                            <div key={j} className="flex items-start gap-5 group/stat">
                                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 shadow-lg ${stat.badgeLabel ? 'bg-lime-500 text-[#011410]' : 'bg-white/5 text-lime-500'}`}>
                                                    {stat.badgeLabel ? (
                                                        <span className="font-bold text-lg">{stat.badgeLabel}</span>
                                                    ) : (
                                                        <stat.icon className="w-6 h-6" />
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="text-xl font-bold text-white uppercase tracking-tight mb-1">{stat.title}</div>
                                                    <div className="text-base text-emerald-100/60 font-medium leading-relaxed">{stat.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CropResults;

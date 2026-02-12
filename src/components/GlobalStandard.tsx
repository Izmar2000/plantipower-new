'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Award } from 'lucide-react';

interface GlobalStandardProps {
    dict: any;
}

const GlobalStandard: React.FC<GlobalStandardProps> = ({ dict }) => {
    const t = dict.GlobalStandard;

    return (
        <section className="relative py-12 bg-[#021814] overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#021814] via-[#05201c] to-[#021814]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full"></div>

            {/* Transition Gradients */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent opacity-40 z-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-40 z-20"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="section-badge !bg-emerald-500/10 !border-emerald-500/20 !text-emerald-400"
                        >
                            <Globe2 className="w-3.5 h-3.5" />
                            {t.badge}
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="section-title"
                        >
                            {t.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                                {t.titleHighlight}
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="section-description mb-8"
                        >
                            {t.desc}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <Award className="w-6 h-6 text-lime-400" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">{t.dutchMade}</div>
                                    <div className="text-emerald-100/50 text-xs uppercase tracking-wider">{t.premiumQuality}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <Globe2 className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">{t.exportReady}</div>
                                    <div className="text-emerald-100/50 text-xs uppercase tracking-wider">{t.logistics}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: The World Tech Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        {/* Glow behind image */}
                        <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/images/plantipower-world-tech.png"
                                alt="PlantiPower Global Standard"
                                className="w-full h-auto object-cover transform transition-transform duration-[1.5s] group-hover:scale-105"
                            />
                            {/* Inner vignette */}
                            <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GlobalStandard;

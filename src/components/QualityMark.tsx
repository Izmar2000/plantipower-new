import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Leaf, Droplets } from 'lucide-react';

const QualityMark: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-black/40 border-y border-white/5">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.03)_0%,transparent_70%)]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Side: The Packaging */}
                    <div className="relative group order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[500px] aspect-square rounded-[4rem] glass-panel overflow-hidden border-white/10 flex items-center justify-center group-hover:border-lime-500/30 transition-all duration-700 p-8">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/5 to-transparent"></div>

                            {/* The Visual */}
                            <motion.div
                                initial={{ scale: 1, opacity: 1 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden flex items-center justify-center p-4"
                            >
                                <img
                                    src="/images/keurmerk-modern.png"
                                    alt="Gekweekt met PlantiPower Keurmerk"
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </motion.div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 glass-panel px-4 py-2 rounded-lg border-white/10 animate-float backdrop-blur-md">
                                <span className="text-[10px] font-bold text-lime-400 uppercase tracking-widest">Kwaliteit</span>
                            </div>
                            <div className="absolute -bottom-4 left-4 glass-panel px-4 py-2 rounded-lg border-white/10 animate-float-delayed backdrop-blur-md">
                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Expertise</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2 space-y-10 group">
                        <div>
                            <div className="section-badge !bg-lime-500/10 !border-lime-500/20 !text-lime-400">PlantiPower Keurmerk</div>
                            <h2 className="section-title">
                                Straal autoriteit uit met het <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">PlantiPower keurmerk.</span>
                            </h2>
                            <p className="section-description">
                                Laat uw klanten zien dat u kiest voor de hoogste standaard. Draag het "Gekweekt met PlantiPower" keurmerk op uw verpakkingen en laat de kwaliteit voor zich spreken.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: <Droplets className="w-5 h-5 text-lime-400" />,
                                    title: "Minder Verspilling",
                                    desc: "Maximale opname door de plant, minimale uitspoeling in het milieu."
                                },
                                {
                                    icon: <Zap className="w-5 h-5 text-emerald-400" />,
                                    title: "Beter Gewas",
                                    desc: "Zichtbaar vitalere planten met een hogere natuurlijke weerstand."
                                },
                                {
                                    icon: <Award className="w-5 h-5 text-lime-400" />,
                                    title: "Gegarandeerde Smaak",
                                    desc: "Optimale nutriëntenverwerking leidt tot een superieure productkwaliteit."
                                },
                                {
                                    icon: <Leaf className="w-5 h-5 text-emerald-400" />,
                                    title: "100% Natuurlijk",
                                    desc: "Gecertificeerde biostimulatie zonder chemische residuen."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-lime-500/20 transition-all shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1 tracking-tight">{item.title}</h4>
                                        <p className="text-emerald-100/40 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button className="btn-standard bg-white text-emerald-950 hover:bg-lime-500 shadow-2xl">
                                Keurmerk Richtlijnen Aanvragen
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QualityMark;

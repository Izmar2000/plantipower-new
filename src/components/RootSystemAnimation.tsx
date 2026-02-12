import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const RootSystemAnimation: React.FC = () => {
    const [step, setStep] = useState(0); // 0: Idle, 1: Glow, 2: Transport, 3: Growth
    const pathname = usePathname();
    const isNL = pathname?.startsWith('/nl');

    useEffect(() => {
        const cycle = async () => {
            setStep(0);
            await new Promise(r => setTimeout(r, 1000));
            setStep(1); // Nutrients Glow
            await new Promise(r => setTimeout(r, 2000));
            setStep(2); // Move to Roots
            await new Promise(r => setTimeout(r, 3000));
            setStep(3); // Plant Growth/Glow
            await new Promise(r => setTimeout(r, 4000));
            cycle();
        };
        cycle();
    }, []);

    const soilNutrients = [
        { id: 1, x: 20, y: 80, color: '#bef264' },
        { id: 2, x: 50, y: 85, color: '#10b981' },
        { id: 3, x: 80, y: 75, color: '#84cc16' },
        { id: 4, x: 30, y: 90, color: '#22c55e' },
        { id: 5, x: 70, y: 88, color: '#ca8a04' },
        { id: 6, x: 40, y: 78, color: '#65a30d' },
        { id: 7, x: 60, y: 82, color: '#059669' },
        { id: 8, x: 90, y: 92, color: '#facc15' },
    ];

    return (
        <div className="w-full h-full min-h-[500px] bg-[#021814] rounded-3xl overflow-hidden relative border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative w-full max-w-lg aspect-[4/5] p-10">
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M50 60 L50 80 M50 80 L30 95 M50 80 L70 95 M50 70 L20 85 M50 70 L80 85"
                        stroke="#3f6212"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2 }}
                    />
                    <motion.path d="M50 60 L50 20" stroke="#84cc16" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <motion.path d="M50 50 Q30 45 25 35" stroke="#4ade80" strokeWidth="1" fill="none" />
                    <motion.circle cx="25" cy="35" r="2" fill="#4ade80" animate={step === 3 ? { scale: [1, 1.5, 1], filter: "brightness(2)" } : {}} />
                    <motion.path d="M50 40 Q70 35 75 25" stroke="#4ade80" strokeWidth="1" fill="none" />
                    <motion.circle cx="75" cy="25" r="2" fill="#4ade80" animate={step === 3 ? { scale: [1, 1.5, 1], filter: "brightness(2)" } : {}} />
                    <motion.circle cx="50" cy="20" r="4" fill="#bef264" animate={step === 3 ? { scale: [1, 1.2, 1], filter: "brightness(2)" } : {}} />
                    {step === 3 && (
                        <motion.circle
                            cx="50" cy="20" r="20" stroke="#bef264" strokeWidth="0.5" fill="none" opacity="0.5"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    )}
                </svg>

                <AnimatePresence>
                    {soilNutrients.map((n, i) => (
                        <motion.div
                            key={n.id}
                            className="absolute w-4 h-4 rounded-full shadow-2xl z-20"
                            style={{ backgroundColor: n.color, left: `${n.x}%`, top: `${n.y}%`, opacity: 0.4 }}
                            animate={
                                step === 0 ? { opacity: 0.4, scale: 1 } :
                                    step === 1 ? { opacity: 1, scale: 1.5, boxShadow: `0 0 20px ${n.color}` } :
                                        step === 2 ? { left: "50%", top: "60%", scale: 0.2, opacity: 0, transition: { duration: 1.5, ease: "easeInOut", delay: i * 0.1 } } : {}
                            }
                        >
                            {step >= 1 && (<div className="absolute inset-0 animate-ping rounded-full bg-white opacity-30"></div>)}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {step >= 2 && (
                    [...Array(8)].map((_, i) => (
                        <motion.div
                            key={`steam-${i}`}
                            className="absolute w-2 h-2 bg-white rounded-full blur-[1px] z-10 shadow-[0_0_10px_white]"
                            initial={{ left: "50%", top: "60%", opacity: 1 }}
                            animate={{ top: "20%", opacity: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }}
                        />
                    ))
                )}

                <div className="absolute bottom-6 left-6 font-black text-[10px] text-lime-500/40 uppercase tracking-[0.3em]">
                    {isNL ? 'WORTELSYSTEEM: ' : 'ROOT SYSTEM: '} {step >= 1 ? (isNL ? 'ACTIEF' : 'ACTIVE') : (isNL ? 'STAND-BY' : 'IDLE')}
                </div>
                <div className="absolute top-6 right-6 font-black text-[10px] text-lime-500/40 uppercase tracking-[0.3em]">
                    {isNL ? 'GROEI: ' : 'GROWTH: '} {step === 3 ? (isNL ? 'OPTIMAAL' : 'OPTIMIZED') : (isNL ? 'WACHTEN' : 'WAITING')}
                </div>
            </div>
        </div>
    );
};

export default RootSystemAnimation;

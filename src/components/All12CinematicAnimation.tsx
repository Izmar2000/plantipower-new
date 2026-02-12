'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';

const All12CinematicAnimation = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [scene, setScene] = useState(0); // 0: Inefficiency, 1: Stalled, 2: Activation, 3: Full Unlock, 4: Proof
    const [meterValue, setMeterValue] = useState(25.0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="w-full max-w-[500px] aspect-square rounded-[2rem] bg-[#00100d] border border-white/5" />;

    // Timeline Management
    useEffect(() => {
        const sequence = [
            { time: 0, scene: 0, meter: 25.0 },     // Start: Inefficiency
            { time: 5000, scene: 1, meter: 25.0 },  // 5s: Stalled (Text emphasis)
            { time: 9000, scene: 2, meter: 50.0 },  // 9s: Activation (Core appears)
            { time: 13000, scene: 3, meter: 99.8 }, // 13s: Full Unlock (Network forms)
            { time: 17000, scene: 4, meter: 99.8 }, // 17s: Proof (Branding)
            { time: 24000, scene: 0, meter: 25.0 }  // 24s: Loop reset
        ];

        let timeouts: ReturnType<typeof setTimeout>[] = [];

        const runSequence = () => {
            // Reset for loop
            setScene(0);
            setMeterValue(25.0);

            // Schedule stages
            sequence.forEach((stage, index) => {
                if (index === 0) return; // Already set init
                const timeout = setTimeout(() => {
                    setScene(stage.scene);
                    setMeterValue(stage.meter);
                }, stage.time);
                timeouts.push(timeout);
            });
        };

        runSequence();

        // Loop trigger
        const loopInterval = setInterval(() => {
            runSequence();
        }, 24000);

        return () => {
            timeouts.forEach(clearTimeout);
            clearInterval(loopInterval);
        };
    }, []);

    // Nutrient Configuration
    const nutrients = [
        { id: 'N', type: 'macro', angle: 0 },
        { id: 'P', type: 'macro', angle: 30 },
        { id: 'K', type: 'macro', angle: 60 },
        { id: 'Ca', type: 'sec', angle: 90 },
        { id: 'Mg', type: 'sec', angle: 120 },
        { id: 'S', type: 'sec', angle: 150 },
        { id: 'Fe', type: 'micro', angle: 180 },
        { id: 'Mn', type: 'micro', angle: 210 },
        { id: 'Zn', type: 'micro', angle: 240 },
        { id: 'B', type: 'micro', angle: 270 },
        { id: 'Cu', type: 'micro', angle: 300 },
        { id: 'Mo', type: 'micro', angle: 330 },
    ];

    return (
        <div className="w-full max-w-[500px] aspect-square relative rounded-[2rem] overflow-hidden bg-[#00100d] border border-white/5 shadow-2xl">
            {/* 1. Technical Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#00100d_90%)] z-10 pointer-events-none"></div>

            {/* 2. Scene Content Container */}
            <div className="absolute inset-0 flex items-center justify-center z-20">

                {/* CENTRAL CORE (Appears Scene 2+) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: scene >= 2 ? 1 : 0,
                        scale: scene >= 2 ? 1 : 0.5
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute z-10"
                >
                    <div className="w-24 h-24 rounded-full border border-lime-500/30 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full border border-lime-500/10 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-2 rounded-full border border-lime-500/10 animate-[spin_8s_linear_infinite_reverse]"></div>
                        <div className="w-3 h-3 bg-lime-500 rounded-full shadow-[0_0_20px_rgba(132,204,22,0.8)]"></div>

                        {/* Connecting Lines to Plant (Scene 3+) */}
                        {scene >= 3 && (
                            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                                {nutrients.map((n, i) => (
                                    <motion.line
                                        key={`link-${i}`}
                                        x1="50%" y1="50%"
                                        x2={`${50 + Math.cos((n.angle * Math.PI) / 180) * 120}%`}
                                        y2={`${50 + Math.sin((n.angle * Math.PI) / 180) * 120}%`}
                                        stroke="rgba(132, 204, 22, 0.4)"
                                        strokeWidth="1"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                    />
                                ))}
                            </svg>
                        )}
                    </div>
                </motion.div>

                {/* BIOTECH PLANT SCHEMATIC (REALISTIC IMAGE) */}
                <motion.div
                    className="absolute bottom-0 w-3/4 h-[80%] flex items-end justify-center pointer-events-none"
                    animate={{
                        scale: scene >= 3 ? 1.05 : 1,
                    }}
                    transition={{ duration: 2 }}
                >
                    <motion.img
                        src="/images/plant_base_clean.png"
                        alt="Plant Physiology"
                        className="w-full h-full object-contain object-bottom mix-blend-screen"
                        animate={{
                            filter: scene >= 3
                                // Glowing Green Hologram / X-Ray Effect
                                ? 'grayscale(100%) contrast(1.5) invert(1) sepia(1) saturate(5) hue-rotate(90deg) brightness(1) drop-shadow(0 0 15px rgba(132,204,22,0.8))'
                                // Dormant / Ghostly
                                : 'grayscale(100%) brightness(0.3) contrast(1.2) blur(2px) drop-shadow(0 0 0px rgba(0,0,0,0))',
                            opacity: scene >= 3 ? 0.9 : 0.5
                        }}
                        transition={{ duration: 1.5 }}
                    />
                </motion.div>

                {/* NUTRIENTS LAYER */}
                {nutrients.map((n) => {
                    // Logic: 
                    // Scene 0/1: Drifting vaguely. 3 Macro close, others far.
                    // Scene 2/3+: Locking into perfect ring.
                    const isMacro = n.type === 'macro';
                    const angleRad = (n.angle * Math.PI) / 180;

                    // Inefficiency Positions (Scattered)
                    const scatterR = isMacro ? 60 + Math.random() * 20 : 120 + Math.random() * 40;
                    const scatterAngle = n.angle + (Math.random() * 40 - 20); // Jittery angle
                    const scatterX = Math.cos((scatterAngle * Math.PI) / 180) * scatterR;
                    const scatterY = Math.sin((scatterAngle * Math.PI) / 180) * scatterR;

                    // Locked Positions (Perfect Ring)
                    const lockR = 70; // Radius of the ring
                    const lockX = Math.cos(angleRad) * lockR;
                    const lockY = Math.sin(angleRad) * lockR;

                    return (
                        <motion.div
                            key={n.id}
                            className="absolute w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border backdrop-blur-md z-30 shadow-lg"
                            initial={{ x: scatterX, y: scatterY, opacity: 0 }}
                            animate={{
                                x: scene >= 2 ? lockX : scatterX,
                                y: scene >= 2 ? lockY : scatterY,
                                opacity: scene >= 2 ? 1 : (isMacro ? 0.6 : 0.2), // Dim others in ineffective state
                                scale: scene >= 2 ? 1 : 0.8,
                                borderColor: scene >= 3 ? "rgba(132, 204, 22, 0.8)" : "rgba(255, 255, 255, 0.1)",
                                backgroundColor: scene >= 3 ? "rgba(6, 78, 59, 0.9)" : "rgba(0,0,0,0.5)",
                                color: scene >= 3 ? "#ecfccb" : "#ffffff30"
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            {n.id}
                        </motion.div>
                    );
                })}

                {/* 3. TEXT OVERLAYS & UI */}
                <div className="absolute top-8 left-0 w-full text-center z-40">
                    <AnimatePresence mode="wait">
                        {scene === 0 && (
                            <motion.div
                                key="text1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-emerald-500/60 font-mono text-xs uppercase tracking-[0.2em]"
                            >
                                Status: Standard
                            </motion.div>
                        )}
                        {scene === 1 && (
                            <motion.div
                                key="text2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col gap-1"
                            >
                                <span className="text-white font-bold text-lg">Fertilizer is there.</span>
                                <span className="text-red-400 font-bold text-lg">Absorption is not.</span>
                            </motion.div>
                        )}
                        {scene === 2 && (
                            <motion.div
                                key="text3"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-lime-400 font-bold text-xl tracking-wide uppercase"
                            >
                                ACTIVATING ALL12
                            </motion.div>
                        )}
                        {scene === 3 && (
                            <motion.div
                                key="text4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col gap-1"
                            >
                                <span className="text-white font-bold text-xl">All Essentials</span>
                                <span className="text-lime-400 text-sm uppercase tracking-widest">Unlocked</span>
                            </motion.div>
                        )}
                        {scene === 4 && (
                            <motion.div
                                key="text5"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col gap-2"
                            >
                                <div className="inline-block px-3 py-1 rounded bg-white/10 text-[10px] border border-white/20 text-white uppercase tracking-widest">
                                    Laboratory Tested
                                </div>
                                <span className="text-emerald-100/60 text-xs font-mono">Produced in The Netherlands</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* ABSORPTION METER */}
                <div className="absolute bottom-8 w-64 bg-white/5 h-12 rounded-lg border border-white/10 backdrop-blur-sm flex items-center px-4 justify-between z-40">
                    <span className="text-[10px] text-emerald-100/40 uppercase font-black tracking-widest">Efficiency</span>
                    <div className="flex items-end gap-1">
                        <motion.span
                            className="text-2xl font-black text-white tabular-nums"
                            animate={{ color: scene >= 3 ? "#a3e635" : "#ffffff" }}
                        >
                            <CountingNumber value={meterValue} />
                        </motion.span>
                        <span className="text-xs text-lime-500 font-bold mb-1">%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 h-1 bg-lime-500" style={{ width: `${meterValue}%`, transition: 'width 2s ease-out' }}></div>
                </div>

            </div>
        </div>
    );
};

// Helper for number animation
const CountingNumber = ({ value }: { value: number }) => {
    const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => current.toFixed(1));

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return <motion.span>{display}</motion.span>;
};

export default All12CinematicAnimation;

'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const InteractivePlantHero = () => {
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Scrollytelling hook - Always call hooks at top level
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const scale = useTransform(smoothProgress, [0, 1], [1, 1.05]);
    const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div ref={containerRef} className="min-h-[600px] w-full flex items-center justify-center -mt-10 lg:-mt-20 pointer-events-none opacity-0" />; // Placeholder with ref to satisfy useScroll

    // CONFIGURATION
    // Calibrated Center Point (percentage of width)
    // 51% - Shifted slightly right as requested (was 50.5%)
    const STEM_CENTER_PCT = 51.0;
    const CONTAINER_WIDTH = 650;

    // Full 12 Elements Grid Configuration
    // Shifted all x-coordinates +0.5% right
    const nutrients = [
        // MACRO (The Big Ones - Neon Lime for Maximum Impact)
        { id: 'N', x: 25.5, y: 65, size: 60, color: '#a3e635', label: 'N', type: 'macro' },  // Lime-400 (Brighter)
        { id: 'P', x: 50.5, y: 85, size: 60, color: '#a3e635', label: 'P', type: 'macro' },  // Lime-400
        { id: 'K', x: 75.5, y: 65, size: 60, color: '#a3e635', label: 'K', type: 'macro' },  // Lime-400

        // SECONDARY (Medium size - Bright Emerald)
        { id: 'Ca', x: 35.5, y: 60, size: 45, color: '#34d399', label: 'Ca', type: 'secondary' }, // Emerald-400
        { id: 'Mg', x: 65.5, y: 60, size: 45, color: '#34d399', label: 'Mg', type: 'secondary' }, // Emerald-400
        { id: 'S', x: 50.5, y: 72, size: 45, color: '#34d399', label: 'S', type: 'secondary' },  // Emerald-400

        // MICRO (Smaller - Vivid Teal)
        { id: 'Fe', x: 20.5, y: 55, size: 35, color: '#2dd4bf', label: 'Fe', type: 'micro' }, // Teal-400
        { id: 'Mn', x: 80.5, y: 55, size: 35, color: '#2dd4bf', label: 'Mn', type: 'micro' }, // Teal-400
        { id: 'Zn', x: 25.5, y: 85, size: 35, color: '#2dd4bf', label: 'Zn', type: 'micro' }, // Teal-400
        { id: 'B', x: 75.5, y: 85, size: 35, color: '#2dd4bf', label: 'B', type: 'micro' },  // Teal-400
        { id: 'Cu', x: 40.5, y: 80, size: 30, color: '#14b8a6', label: 'Cu', type: 'micro' }, // Teal-500
        { id: 'Mo', x: 60.5, y: 80, size: 30, color: '#14b8a6', label: 'Mo', type: 'micro' }, // Teal-500
    ];

    // Create an expanded array of particles for a "fuller" but smoother flow
    // We duplicate the nutrient list to double the particle count, but randomize their timings
    const particles = [...nutrients, ...nutrients, ...nutrients.slice(0, 6)]; // ~2.5x particles

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full min-h-[600px] flex items-center justify-center -mt-10 lg:-mt-20"
        >

            {/* Background Image (Clean Base) */}
            <motion.div
                className="relative w-full max-w-[750px] aspect-[4/5]"
                style={{
                    scale,
                    opacity
                }}
                animate={{ y: [0, -10, 0] }} // Reduced float range for calmness
                transition={{
                    duration: 8, // Slower float (was 6)
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* 2. The Plant Itself with Depth & Natural Look */}
                <motion.img
                    src="/images/plant_base_clean.png"
                    alt="Plant Root System Base"
                    className="w-full h-full object-contain relative z-10"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.visibility = 'hidden';
                    }}
                />

                {/* Shadow separated for depth */}
                <motion.div
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
                    style={{
                        backgroundImage: 'url(/images/plant_base_clean.png)',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        filter: 'blur(20px) brightness(0)',
                        opacity: 0.3,
                        transform: "translateY(20px)"
                    }}
                />

                {/* VISUAL CONNECTORS (The "Web") */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-20">
                    <defs>
                        <radialGradient id="connection-grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    {nutrients.map((n, i) => (
                        // Draw lines to nearest neighbors or stem? For now, subtle connections to center
                        <motion.line
                            key={`line-${n.id}`}
                            x1={`${n.x}%`} y1={`${n.y}%`}
                            x2={`${STEM_CENTER_PCT}%`} y2="40%" // Dynamic center alignment
                            stroke="url(#connection-grad)"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: i * 0.1 }}
                        />
                    ))}
                </svg>

                {/* NUTRIENT NODES - POPPED OUT */}
                {nutrients.map((n) => (
                    <motion.div
                        key={n.id}
                        className="absolute rounded-full flex items-center justify-center z-50 shadow-lg"
                        style={{
                            left: `${n.x}%`,
                            top: `${n.y}%`,
                            width: n.size,
                            height: n.size,
                            marginLeft: -(n.size / 2), // Center alignment
                            marginTop: -(n.size / 2),
                            // Improved High-End Visibility: Gradient Background & Stronger Contrast
                            background: `linear-gradient(135deg, ${n.color}DD, ${n.color}80)`, // High opacity start, semi-transp end
                            border: `1px solid ${n.color}FF`, // Full opacity border for crisp edge
                            boxShadow: `0 8px 20px -5px ${n.color}80, inset 0 0 10px rgba(255,255,255,0.3)`, // Glow + Inner light
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + Math.random() * 0.5, type: 'spring' }}
                    >
                        {/* Core Element Symbol */}
                        <div className="relative z-10 font-black text-white drop-shadow-md flex flex-col items-center leading-none" style={{ fontSize: n.size * 0.35 }}>
                            {n.label}
                            {/* Orbital Electrons / Activity Animation */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-white/20"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: "linear" }} // Slower rotation
                                style={{ width: '140%', height: '140%', left: '-20%', top: '-20%', borderTopColor: 'white' }}
                            />
                        </div>

                        {/* Pulse Effect - Slower */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-white/30 z-0"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
                        />
                    </motion.div>
                ))}

                {/* FLOWING PARTICLES (The uptake animation) - MORE PARTICLES, SLOWER FLOW */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" viewBox={`0 0 ${CONTAINER_WIDTH} 813`} style={{ transform: "translateZ(30px)" }}>
                    {particles.map((n, i) => (
                        <motion.circle
                            key={`particle-${n.id}-${i}`}
                            r={n.type === 'macro' ? 5 : 3.5} // Increased size +1
                            fill={n.color}
                            filter="drop-shadow(0 0 4px rgba(255,255,255,0.8))" // Stronger glow
                        >
                            <animateMotion
                                dur={`${3.5 + Math.random() * 2}s`} // Slower duration (was 2+random)
                                repeatCount="indefinite"
                                // M = Start (scaled to container)
                                // Q = Bezier Control Point (x=stem, y=deep) -> End Point (x=stem, y=mid-stem)
                                path={`M ${n.x * (CONTAINER_WIDTH / 100)} ${n.y * 8} Q ${(STEM_CENTER_PCT / 100) * CONTAINER_WIDTH} 550 ${(STEM_CENTER_PCT / 100) * CONTAINER_WIDTH} 320`}
                                begin={`-${Math.random() * 5}s`} // Random offsets to distribute flow
                            />
                            <animate
                                attributeName="opacity"
                                values="0;0.8;0"
                                dur={`${3.5 + Math.random() * 2}s`} // Matching duration
                                repeatCount="indefinite"
                                begin={`-${Math.random() * 5}s`}
                            />
                        </motion.circle>
                    ))}
                </svg>

            </motion.div>
        </div>
    );
};

export default InteractivePlantHero;

import InteractivePlantHero from './InteractivePlantHero';

const HeroEN = () => {
    return (
        <section className="relative flex flex-col overflow-x-hidden pt-32 md:pt-40 pb-20 md:pb-28" id="home">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-emerald-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.15),transparent_50%)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Text Content */}
                    <div className="relative z-10 flex flex-col justify-center text-center lg:text-left pt-4 lg:pt-0 lg:-mt-14">
                        <h1 className="font-outfit font-bold uppercase text-[38px] md:text-[48px] lg:text-[60px] tracking-[0.04em] leading-[1.02] text-left mb-8">
                            <span className="text-emerald-400 block">BETTER UPTAKE</span>
                            <span className="text-white block">STRONGER ROOTS</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400 whitespace-nowrap block">
                                HIGHER YIELDS
                            </span>
                        </h1>

                        {/* USPs Line */}
                        <div className="flex items-center justify-start gap-4 mb-4">
                            <div className="flex items-center gap-3 py-2">
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-white/90 whitespace-nowrap">
                                    HIGHER YIELDS <span className="text-lime-500 mx-2">|</span> STRONGER ROOTS <span className="text-lime-500 mx-2">|</span> 100% NATURAL
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="relative py-2 text-left mb-12 max-w-xl mx-auto lg:mx-0">
                            <p className="text-lg text-emerald-100/80 leading-relaxed font-medium">
                                Part of the nutrition you apply always remains in the soil or substrate. Result: the plant doesn't use its full potential.<br /><br />
                                PlantiPower ALL12 transports all 12 essential nutrients to the root, making the plant more vital and growing more efficiently.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => window.location.href = '/plantipower-all12'}
                                className="btn-standard bg-lime-500 hover:bg-lime-400 text-emerald-950 shadow-[0_0_30px_rgba(132,204,22,0.4)] flex-col py-4 leading-tight !h-auto"
                            >
                                <span className="text-[10px] mb-1 opacity-70 font-black tracking-[0.3em]">More about</span>
                                <span className="text-sm">PlantiPower ALL12</span>
                            </button>
                            <button
                                onClick={() => document.getElementById('crop-results')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-standard bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm flex-col py-4 leading-tight !h-auto"
                            >
                                <span className="text-[10px] mb-1 opacity-70 font-black tracking-[0.3em]">View</span>
                                <span className="text-sm">Case Studies</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Interactive Plant Visual */}
                    <div className="relative flex justify-center items-center lg:justify-end lg:pl-10 pb-12 lg:pb-0 -mt-10 lg:-mt-32">
                        <div className="relative w-full max-w-[650px]">
                            <InteractivePlantHero />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroEN;

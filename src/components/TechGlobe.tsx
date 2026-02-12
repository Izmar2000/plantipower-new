

const TechGlobe = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 group">
            {/* Outer Atmosphere Glow */}
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[60px] animate-pulse-slow"></div>

            {/* The Globe Container */}
            <div className="relative w-full aspect-square rounded-full border-2 border-lime-500/20 shadow-[0_0_80px_rgba(16,185,129,0.2)] overflow-hidden bg-emerald-950/80 backdrop-blur-sm">

                {/* Interior Atmospheric Glows */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(132,204,22,0.15)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>

                {/* The World Map "Scroller" for Rotation Effect */}
                <div className="absolute inset-0 flex items-center">
                    <div className="flex animate-[scroll_30s_linear_infinite] opacity-40 grayscale sepia hue-rotate-[90deg] saturate-[2]">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                            alt=""
                            className="h-full w-auto min-w-[200%] object-cover opacity-60"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                            alt=""
                            className="h-full w-auto min-w-[200%] object-cover opacity-60"
                        />
                    </div>
                </div>

                {/* Technical HUD Overlays */}
                {/* Lat/Long Grid */}
                <div className="absolute inset-0 opacity-[0.15]">
                    <div className="absolute inset-0 border-[0.5px] border-lime-500/30 rounded-full"></div>
                    {[0, 30, 60, 90, 120, 150].map((deg) => (
                        <div
                            key={deg}
                            className="absolute inset-0 border-l-[0.5px] border-lime-500/30"
                            style={{ transform: `rotate(${deg}deg)` }}
                        ></div>
                    ))}
                    <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-lime-500/30"></div>
                    <div className="absolute top-1/4 left-0 w-full h-[0.5px] bg-lime-500/20"></div>
                    <div className="absolute top-3/4 left-0 w-full h-[0.5px] bg-lime-500/20"></div>
                </div>

                {/* Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-[scan_4s_ease-in-out_infinite] opacity-50"></div>

                {/* Data Points (Glowing Dots) */}
                <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-lime-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-lime-400 rounded-full animate-pulse"></div>
                <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse blur-[1px]"></div>

                {/* Glass Reflection */}
                <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full rotate-45 transform translate-x--10 translate-y--10"></div>
            </div>

            {/* Orbiting Satellite/Ring Effect */}
            <div className="absolute inset-4 border border-lime-500/10 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
            <div className="absolute inset-2 border border-emerald-500/5 rounded-full animate-[spin_45s_linear_infinite_reverse] border-dotted"></div>

            {/* Tailwind and Framer-like Animation injection */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          5% { opacity: 0.5; }
          50% { top: 100%; opacity: 0.5; }
          95% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
        </div>
    );
};

export default TechGlobe;

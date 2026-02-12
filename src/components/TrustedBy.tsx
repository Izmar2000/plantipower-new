const TrustedBy = () => {
    const logos = [
        { name: 'Gog', src: '/images/logo-gog.png' }
    ];

    // Repeat logos to fill the entire width to the edges
    const displayLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-16 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center gap-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-100/30 whitespace-nowrap px-8">TRUSTED BY PROFESSIONAL GROWERS</span>

                    <div className="w-full flex flex-wrap justify-center items-center gap-12 md:gap-14 opacity-50 grayscale hover:opacity-70 transition-opacity">
                        {displayLogos.map((logo, i) => (
                            <div key={i} className="h-10 md:h-12 flex items-center">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-full w-auto object-contain brightness-0 invert"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;

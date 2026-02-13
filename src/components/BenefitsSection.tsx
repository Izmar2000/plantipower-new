import { usePathname } from 'next/navigation';

const BenefitsSection = () => {
    const pathname = usePathname();
    const isNL = pathname?.startsWith('/nl');

    const nutrientCategories = isNL ? [
        { title: "Hoofdelementen", items: ["Stikstof (N)", "Fosfor (P)", "Kalium (K)"] },
        { title: "Secundaire Elementen", items: ["Calcium (Ca)", "Magnesium (Mg)", "Zwavel (S)"] },
        { title: "Sporenelementen", items: ["IJzer (Fe)", "Mangaan (Mn)", "Zink (Zn)", "Koper (Cu)", "Boor (B)", "Molybdeen (Mo)"] }
    ] : [
        { title: "Macro nutrients", items: ["Nitrogen (N)", "Phosphorus (P)", "Potassium (K)"] },
        { title: "Secondary Nutrients", items: ["Calcium (Ca)", "Magnesium (Mg)", "Sulfur (S)"] },
        { title: "Micro nutrients", items: ["Iron (Fe)", "Manganese (Mn)", "Zinc (Zn)", "Copper (Cu)", "Boron (B)", "Molybdenum (Mo)"] }
    ];

    const content = {
        badge: isNL ? "Innovatieve Transport Technologie" : "Innovative Transport Technology",
        title: isNL ? "Van " : "From ",
        titleAccent: isNL ? "3 naar 12" : "3 to 12",
        titleSuffix: isNL ? " Nutriënten. De kracht van ALL12." : " Nutrients. The power of ALL12.",
        desc: isNL
            ? "Normaal gesproken binden fulvinezuren slechts 3 nutriënten (calcium, magnesium en ijzer). PlantiPower gaat veel verder. Onze technologie transporteert niet alleen deze mineralen, maar bindt en levert een volledig spectrum van 12 essentiële nutriënten direct aan de wortels."
            : "Normally, fulvic acids bind only 3 nutrients (calcium, magnesium, and iron). PlantiPower goes much further. Our technology not only transports these minerals but binds and delivers a full spectrum of 12 essential nutrients directly to the roots.",
        labelBadge: isNL ? "Volledig Spectrum" : "Full Spectrum",
        labelVal: isNL ? "12 Nutriënten" : "12 Nutrients"
    };

    return (
        <section className="py-24 relative overflow-hidden" id="science">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-500/10 border border-lime-500/20 rounded-lg text-[10px] font-black uppercase tracking-widest text-lime-500 mb-8">
                            {content.badge}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-none tracking-tighter uppercase font-outfit">
                            {content.title}<span className="text-lime-500">{content.titleAccent}</span>{content.titleSuffix}
                        </h2>
                        <p className="text-xl text-emerald-100/60 mb-10 leading-relaxed font-medium italic border-l-4 border-lime-500/30 pl-6">
                            {content.desc}
                        </p>

                        <div className="grid sm:grid-cols-3 gap-8">
                            {nutrientCategories.map((cat, i) => (
                                <div key={i} className="space-y-4">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400 border-b border-lime-500/20 pb-2">
                                        {cat.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {cat.items.map((item, j) => (
                                            <li key={j} className="text-sm font-black text-white/90 flex items-center gap-2 uppercase tracking-tight">
                                                <div className="w-1.5 h-1.5 bg-lime-500 rounded-full shadow-[0_0_8px_rgba(132,204,22,0.6)]"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative group">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lime-500/20 blur-[100px] rounded-full opacity-60 group-hover:opacity-80 transition-all duration-1000 z-0"></div>

                            <div className="relative transform transition-all duration-700 hover:scale-[1.02] z-10 flex justify-center">
                                <img
                                    src="/images/products/plantipower-all12-transparant.png"
                                    alt="ALL12 Full Spectrum Technology"
                                    className="w-full max-w-[400px] h-auto object-contain drop-shadow-[0_20px_100px_rgba(132,204,22,0.4)] floating"
                                />

                                <div className="absolute -bottom-6 -right-6 bg-[#021814] border border-white/10 px-8 py-6 rounded-3xl z-30 shadow-2xl backdrop-blur-xl hidden md:block animate-float-delayed">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-lime-500 rounded-2xl p-3 shadow-[0_0_20px_rgba(132,204,22,0.4)]">
                                            <svg className="w-5 h-5 text-emerald-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-lime-400 uppercase tracking-widest mb-1">{content.labelBadge}</div>
                                            <div className="text-white font-black text-xl uppercase tracking-tight">{content.labelVal}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;

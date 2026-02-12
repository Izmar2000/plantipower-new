import {
    CheckCircle2, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ProductShowcase = () => {
    const pathname = usePathname();
    const isNL = pathname?.startsWith('/nl');

    const content = {
        badge: isNL ? "Opnameversterking" : "Absorption Enhancement",
        title1: isNL ? "PlantiPower " : "PlantiPower ",
        title1Small: "ALL12",
        title2: isNL ? " is geen voeding, " : " is not a nutrient, ",
        title3: isNL ? "maar een " : "but an ",
        titleAccent: isNL ? "opnameversterker." : "absorption booster.",
        description: isNL
            ? "ALL12 Technology zorgt ervoor dat planten meer halen uit de voeding die al wordt gegeven."
            : "ALL12 Technology ensures that plants get more out of the nutrients already being applied.",
        leftCardTitle: isNL ? "Kweken zonder ALL12" : "Growing without ALL12",
        leftCardDesc: isNL ? "Natuurlijke opnamebeperkingen" : "Natural absorption limits",
        leftFeatures: isNL ? [
            { title: "Passieve opname", desc: "Voeding moet zelf de wortel bereiken." },
            { title: "pH-afhankelijk", desc: "Opname varieert per medium en zuurgraad." },
            { title: "Verlies onderweg", desc: "Een deel van de voeding blijft onbenut." },
            { title: "Hogere energiebehoefte", desc: "De plant moet harder werken voor groei." }
        ] : [
            { title: "Passive absorption", desc: "Nutrients must reach the root on their own." },
            { title: "pH-dependent", desc: "Absorption varies by medium and acidity." },
            { title: "Loss in transit", desc: "Part of the nutrients remain unused." },
            { title: "Higher energy demand", desc: "The plant must work harder for growth." }
        ],
        rightCardTitle: isNL ? "Kweken met PlantiPower ALL12" : "Growing with PlantiPower ALL12",
        rightCardDesc: isNL ? "Versterkte opname van bestaande voeding" : "Enhanced absorption of existing nutrients",
        rightFeatures: isNL ? [
            { title: "Actief transport", desc: "Voeding wordt richting de cel gebracht." },
            { title: "pH-onafhankelijk", desc: "Stabiele opname in elk medium." },
            { title: "Maximale benutting", desc: "Meer effect uit dezelfde voeding." },
            { title: "Efficiëntere groei", desc: "Minder verspilling, meer resultaat." }
        ] : [
            { title: "Active transport", desc: "Nutrients are brought towards the cell." },
            { title: "pH-independent", desc: "Stable absorption in any medium." },
            { title: "Maximum utilization", desc: "More effect from the same nutrients." },
            { title: "Efficient growth", desc: "Less waste, more results." }
        ],
        btnLabel: isNL ? "Volledige ALL12 Specificaties" : "Full ALL12 Specifications",
        btnPath: isNL ? "/nl/products/all12" : "/en/products/all12"
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-lime-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <span className="text-sm font-bold tracking-[0.2em] uppercase text-lime-400 mb-4 block opacity-90">
                        {content.badge}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1] uppercase font-outfit">
                        {content.title1}<span className="text-lime-400 leading-none">{content.title1Small}</span>{content.title2} <br />
                        {content.title3}<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400 font-outfit">{content.titleAccent}</span>
                    </h2>
                    <p className="text-lg text-emerald-100/60 leading-relaxed font-medium">
                        {content.description}
                    </p>
                </div>

                {/* COMPARISON GRID */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch w-full mx-auto mb-20">

                    {/* Left: Neutral (No ALL12) */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col relative overflow-hidden hover:bg-white/[0.07] transition-colors duration-500">
                        <div className="mb-10">
                            <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight font-outfit">{content.leftCardTitle}</h3>
                            <p className="text-base font-bold text-emerald-100/40 uppercase tracking-wider">{content.leftCardDesc}</p>
                        </div>

                        <ul className="space-y-8 flex-grow">
                            {content.leftFeatures.map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="mt-2.5 w-2.5 h-2.5 rounded-full bg-white/20 shrink-0" />
                                    <div>
                                        <strong className="block text-white text-xl mb-1 uppercase tracking-tight font-outfit">{item.title}</strong>
                                        <p className="text-lg text-emerald-100/60 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: PlantiPower (With ALL12) */}
                    <div className="bg-emerald-900/20 border border-lime-500/20 rounded-3xl p-10 flex flex-col relative overflow-hidden">
                        {/* Soft highlight */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>

                        <div className="mb-10 relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight font-outfit">{content.rightCardTitle}</h3>
                            <p className="text-base font-bold text-lime-400 uppercase tracking-wider">{content.rightCardDesc}</p>
                        </div>

                        <ul className="space-y-8 flex-grow">
                            {content.rightFeatures.map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="mt-2 w-6 h-6 rounded-full bg-lime-500/10 flex items-center justify-center shrink-0 border border-lime-500/20 text-lime-400">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <strong className="block text-white text-xl mb-1 uppercase tracking-tight font-outfit">{item.title}</strong>
                                        <p className="text-lg text-emerald-100/80 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Link href={content.btnPath} className="group inline-flex items-center gap-3 bg-lime-500 text-emerald-950 px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95">
                        {content.btnLabel}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;

'use client'

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, HelpCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { getLocalizedPath, getPath } from '../utils/navigation';

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    onOpenSample: () => void;
    dict: any;
    lang: string;
}

const MobileMenu: FC<MobileMenuProps> = ({ open, onClose, onOpenSample, dict, lang }) => {
    const pathname = usePathname();
    const t = dict?.Header;
    const isNL = lang === 'nl';

    const isActive = (pathKey: string) => {
        if (pathKey === '/') return pathname === `/${lang}`;
        const targetPath = getPath(pathKey, lang);
        return pathname.startsWith(targetPath);
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[2000000] bg-[#01140f] flex flex-col pointer-events-auto overflow-hidden animate-fade-in"
            style={{
                height: '100dvh',
                WebkitTapHighlightColor: 'transparent'
            }}
        >
            {/* Simple Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/5 bg-[#01140f]">
                <Link href={`/${lang}`} onClick={onClose} className="h-8">
                    <img
                        src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png"
                        alt="PlantiPower"
                        className="h-full object-contain"
                    />
                </Link>
                <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 active:bg-white/20 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Content - Simple Scrollable List */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-10">
                {/* Main Links */}
                <div className="flex flex-col gap-2">
                    <Link
                        href={`/${lang}`}
                        onClick={onClose}
                        className={`text-3xl font-black uppercase tracking-tighter py-2 transition-colors ${isActive('/') ? 'text-lime-400' : 'text-white'}`}
                    >
                        {t?.home || "Home"}
                    </Link>
                    <Link
                        href={getPath('about', lang)}
                        onClick={onClose}
                        className={`text-3xl font-black uppercase tracking-tighter py-2 transition-colors ${isActive('about') ? 'text-lime-400' : 'text-white'}`}
                    >
                        {t?.about || "Over ons"}
                    </Link>
                </div>

                {/* Product Subsection */}
                <div className="flex flex-col gap-4">
                    <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Producten</div>
                    <Link
                        href={getPath('products/all12', lang)}
                        onClick={onClose}
                        className={`flex items-center justify-between p-5 rounded-xl border ${isActive('products/all12') ? 'bg-lime-500/10 border-lime-500/30 text-lime-400' : 'bg-white/5 border-white/5 text-white active:bg-white/10'}`}
                    >
                        <span className="text-xl font-bold uppercase tracking-widest">{t?.all12 || "PlantiPower All12"}</span>
                        <ChevronRight className="w-5 h-5 opacity-30" />
                    </Link>
                    <Link
                        href={getPath('products/shield', lang)}
                        onClick={onClose}
                        className={`flex items-center justify-between p-5 rounded-xl border ${isActive('products/shield') ? 'bg-blue-900/20 border-blue-500/30 text-blue-400' : 'bg-white/5 border-white/5 text-white active:bg-white/10'}`}
                    >
                        <span className="text-xl font-bold uppercase tracking-widest">{t?.shield || "PlantiPower Shield"}</span>
                        <ChevronRight className="w-5 h-5 opacity-30" />
                    </Link>
                </div>

                {/* Practical Links */}
                <div className="grid grid-cols-2 gap-4">
                    <Link
                        href={getPath('faq', lang)}
                        onClick={onClose}
                        className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-white/5 text-white active:bg-white/10"
                    >
                        <HelpCircle className="w-5 h-5 text-lime-500" />
                        <span className="text-[12px] font-black uppercase tracking-widest">{t?.faq || "FAQ"}</span>
                    </Link>
                    <Link
                        href={getPath('contact', lang)}
                        onClick={onClose}
                        className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-white/5 text-white active:bg-white/10"
                    >
                        <MessageSquare className="w-5 h-5 text-lime-500" />
                        <span className="text-[12px] font-black uppercase tracking-widest">{t?.contact || "Contact"}</span>
                    </Link>
                </div>

                {/* Footer Part in Menu */}
                <div className="mt-auto flex flex-col gap-6 pt-6 border-t border-white/5 pb-8">
                    <div className="flex items-center justify-between">
                        <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Language</span>
                        <div className="flex gap-4">
                            <Link href={getLocalizedPath(pathname, 'en')} onClick={onClose} className={`text-sm font-bold ${!isNL ? 'text-lime-400 underline underline-offset-4 decoration-lime-500/50' : 'text-white/40 hover:text-white'}`}>EN</Link>
                            <span className="text-white/10">|</span>
                            <Link href={getLocalizedPath(pathname, 'nl')} onClick={onClose} className={`text-sm font-bold ${isNL ? 'text-lime-400 underline underline-offset-4 decoration-lime-500/50' : 'text-white/40 hover:text-white'}`}>NL</Link>
                        </div>
                    </div>
                    <button
                        onClick={() => { onOpenSample(); onClose(); }}
                        className="w-full bg-lime-500 text-emerald-950 font-black py-5 rounded-xl text-center uppercase tracking-widest text-sm shadow-xl active:scale-[0.98] transition-all"
                    >
                        {t?.cta || "Sample Aanvragen"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;

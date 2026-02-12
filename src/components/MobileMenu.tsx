'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    onOpenSample: () => void;
    dict: any;
    lang: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose, onOpenSample, dict, lang }) => {
    const id = React.useId();
    const pathname = usePathname();
    const t = dict?.Header;
    const isNL = lang === 'nl';

    const getPath = (basePath: string) => `/${lang}${basePath === '/' ? '' : basePath}`;

    // Adjusted logic: if basePath is '/', standard isActive might match /nl/about because it starts with /nl
    // So for '/', we must check exact match with /{lang}
    const isActive = (path: string) => {
        const fullPath = getPath(path);
        if (path === '/') return pathname === fullPath;
        return pathname.startsWith(fullPath);
    };

    return (
        <>
            {open && (
                <div className="fixed inset-0 z-[9999999] bg-[#011410] overflow-y-auto custom-scrollbar">
                    <div className="flex flex-col min-h-full">
                        {/* Header in Menu */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                            <Link href={`/${lang}`} onClick={onClose} className="h-12 relative z-50">
                                <img
                                    src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png"
                                    alt="PlantiPower"
                                    className="h-full object-contain"
                                />
                            </Link>
                            <button onClick={onClose} className="p-2 text-white hover:text-lime-400 transition-colors relative z-50">
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="flex-1 flex flex-col justify-start pt-16 px-8 gap-10 pb-12">
                            <Link
                                href={getPath('/')}
                                onClick={onClose}
                                className={`text-2xl font-bold tracking-widest uppercase transition-colors ${isActive('/') ? 'text-lime-400' : 'text-white'}`}
                            >
                                {t?.home || "HOME"}
                            </Link>
                            <Link
                                href={getPath('/about')}
                                onClick={onClose}
                                className={`text-2xl font-bold tracking-widest uppercase transition-colors ${isActive('/about') ? 'text-lime-400' : 'text-white'}`}
                            >
                                {t?.about || "ABOUT"}
                            </Link>

                            <div className="flex flex-col gap-5 py-2 border-l border-white/10 pl-6">
                                <span className="text-white/40 text-sm font-black uppercase tracking-[0.4em] mb-2">{t?.products || "PRODUCTS"}</span>
                                <Link
                                    href={getPath('/products/all12')}
                                    onClick={onClose}
                                    className={`text-xl font-bold tracking-widest uppercase transition-colors ${isActive('/products/all12') ? 'text-lime-400' : 'text-white'}`}
                                >
                                    All12
                                </Link>
                                <Link
                                    href={getPath('/products/shield')}
                                    onClick={onClose}
                                    className={`text-xl font-bold tracking-widest uppercase transition-colors ${isActive('/products/shield') ? 'text-lime-400' : 'text-white'}`}
                                >
                                    Shield
                                </Link>
                            </div>

                            <Link
                                href={getPath('/faq')}
                                onClick={onClose}
                                className={`text-2xl font-bold tracking-widest uppercase transition-colors ${isActive('/faq') ? 'text-lime-400' : 'text-white'}`}
                            >
                                {t?.faq || "FAQ"}
                            </Link>
                            <Link
                                href={getPath('/contact')}
                                onClick={onClose}
                                className={`text-2xl font-bold tracking-widest uppercase transition-colors ${isActive('/contact') ? 'text-lime-400' : 'text-white'}`}
                            >
                                {t?.contact || "CONTACT"}
                            </Link>
                        </nav>

                        {/* Footer of Menu */}
                        <div className="p-8 border-t border-white/10 flex flex-col gap-6 bg-[#011410]">
                            <div className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase">
                                <Link href="/en" onClick={onClose} className={!isNL ? 'text-lime-400' : 'text-white/50'}>EN</Link>
                                <span className="text-white/20">|</span>
                                <Link href="/nl" onClick={onClose} className={isNL ? 'text-lime-400' : 'text-white/50'}>NL</Link>
                            </div>

                            <button
                                onClick={onOpenSample}
                                className="w-full bg-lime-500 text-emerald-950 font-bold py-4 px-5 rounded-2xl transition-all text-xs uppercase tracking-[0.2em] shadow-lg shadow-lime-500/10"
                            >
                                {t?.cta || "SAMPLE AANVRAGEN"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileMenu;

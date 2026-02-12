'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Info, ShoppingBag, MessageSquare, HelpCircle, ChevronRight, Globe } from 'lucide-react';
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

    const isActive = (path: string) => {
        const fullPath = getPath(path);
        if (path === '/') return pathname === fullPath;
        return pathname.startsWith(fullPath);
    };

    const navItems = [
        { name: t?.home || "HOME", path: '/', icon: Home },
        { name: t?.about || "ABOUT", path: '/about', icon: Info },
    ];

    const secondaryItems = [
        { name: t?.faq || "FAQ", path: '/faq', icon: HelpCircle },
        { name: t?.contact || "CONTACT", path: '/contact', icon: MessageSquare },
    ];

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed inset-0 z-[9999999] bg-[#011410] overflow-y-auto custom-scrollbar flex flex-col"
                >
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-lime-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0"></div>

                    {/* Header in Menu */}
                    <div className="flex justify-between items-center px-6 py-6 border-b border-white/5 relative z-50">
                        <Link href={`/${lang}`} className="h-10">
                            <img
                                src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png"
                                alt="PlantiPower"
                                className="h-full object-contain"
                            />
                        </Link>
                        <button
                            onClick={onClose}
                            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/10 active:scale-95"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Content Scrollable Area */}
                    <div className="flex-1 flex flex-col pt-8 pb-12 px-6 relative z-10">
                        {/* Primary Nav */}
                        <div className="grid grid-cols-1 gap-4 mb-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={getPath(item.path)}
                                    onClick={onClose}
                                    className={`flex items-center justify-between p-5 rounded-2xl transition-all border relative z-20 cursor-pointer active:scale-[0.98] ${isActive(item.path)
                                            ? 'bg-lime-500/10 border-lime-500/30 text-lime-400'
                                            : 'bg-white/5 border-white/5 text-white hover:border-white/20 active:bg-white/10'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-lime-400' : 'text-emerald-100/40'}`} />
                                        <span className="text-lg font-bold tracking-widest uppercase">{item.name}</span>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive(item.path) ? 'translate-x-1' : 'opacity-0'}`} />
                                </Link>
                            ))}
                        </div>

                        {/* Products Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-6 px-2">
                                <div className="w-1 h-4 bg-lime-500 rounded-full"></div>
                                <span className="text-white/40 text-xs font-black uppercase tracking-[0.4em]">{t?.products || "PRODUCTEN"}</span>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                <Link
                                    href={getPath('/products/all12')}
                                    onClick={onClose}
                                    className={`relative overflow-hidden p-6 rounded-2xl border transition-all group z-20 cursor-pointer active:scale-[0.98] ${isActive('/products/all12')
                                            ? 'bg-gradient-to-br from-emerald-900/50 to-emerald-950 border-lime-500/50'
                                            : 'bg-white/5 border-white/5 hover:border-white/20 active:bg-white/10'
                                        }`}
                                >
                                    <div className="relative z-10 flex flex-col">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xl font-black tracking-widest text-white uppercase group-hover:text-lime-400 transition-colors">All12</span>
                                            <ShoppingBag className="w-5 h-5 text-emerald-100/20 group-hover:text-lime-500/40 transition-colors" />
                                        </div>
                                        <span className="text-emerald-100/30 text-[10px] font-bold tracking-widest uppercase">Technology & Roots</span>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-lime-500/5 blur-2xl rounded-full translate-x-1/2 translate-y-1/2"></div>
                                </Link>

                                <Link
                                    href={getPath('/products/shield')}
                                    onClick={onClose}
                                    className={`relative overflow-hidden p-6 rounded-2xl border transition-all group z-20 cursor-pointer active:scale-[0.98] ${isActive('/products/shield')
                                            ? 'bg-gradient-to-br from-blue-900/40 to-emerald-950 border-blue-500/50'
                                            : 'bg-white/5 border-white/5 hover:border-white/20 active:bg-white/10'
                                        }`}
                                >
                                    <div className="relative z-10 flex flex-col">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xl font-black tracking-widest text-white uppercase group-hover:text-blue-400 transition-colors">Shield</span>
                                            <div className="w-5 h-5 text-emerald-100/20 group-hover:text-blue-500/40 transition-colors">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                            </div>
                                        </div>
                                        <span className="text-emerald-100/30 text-[10px] font-bold tracking-widest uppercase">Protection & Vitality</span>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full translate-x-1/2 translate-y-1/2"></div>
                                </Link>
                            </div>
                        </div>

                        {/* Secondary Nav Items */}
                        <div className="grid grid-cols-2 gap-3 mb-12">
                            {secondaryItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={getPath(item.path)}
                                    onClick={onClose}
                                    className={`flex flex-col gap-3 p-5 rounded-2xl transition-all border relative z-20 cursor-pointer active:scale-[0.98] ${isActive(item.path)
                                            ? 'bg-lime-500/10 border-lime-500/30 text-lime-400'
                                            : 'bg-white/5 border-white/5 text-white active:bg-white/10'
                                        }`}
                                >
                                    <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-lime-400' : 'text-white/20'}`} />
                                    <span className="text-[12px] font-black tracking-widest uppercase">{item.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Language & CTA */}
                        <div className="mt-auto flex flex-col gap-6 pt-6 border-t border-white/5">
                            <div className="flex items-center justify-between px-2">
                                <div className="flex items-center gap-3">
                                    <Globe className="w-4 h-4 text-white/20" />
                                    <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">Select Language</span>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-1 rounded-full border border-white/5 relative z-20">
                                    <Link
                                        href="/en"
                                        onClick={onClose}
                                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${!isNL ? 'bg-lime-500 text-emerald-950' : 'text-white/40 hover:text-white'}`}
                                    >
                                        EN
                                    </Link>
                                    <Link
                                        href="/nl"
                                        onClick={onClose}
                                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${isNL ? 'bg-lime-500 text-emerald-950' : 'text-white/40 hover:text-white'}`}
                                    >
                                        NL
                                    </Link>
                                </div>
                            </div>

                            <button
                                onClick={() => { onOpenSample(); onClose(); }}
                                className="w-full bg-lime-500 text-emerald-950 font-black py-5 px-5 rounded-2xl transition-all text-sm uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(132,204,22,0.2)] active:scale-[0.95] border-b-4 border-lime-700 relative z-20 cursor-pointer"
                            >
                                {t?.cta || "SAMPLE AANVRAGEN"}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;


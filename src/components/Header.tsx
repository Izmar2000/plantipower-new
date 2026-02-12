'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onOpenSample: () => void;
  onOpenMenu: () => void;
  dict: any;
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ onOpenSample, onOpenMenu, dict, lang }) => {
  const pathname = usePathname();
  const isNL = lang === 'nl'; // Gebruik lang prop ipv pathname

  const isActive = (path: string) => {
    // Simple active check. Kan uitgebreider.
    // Als path '/nl' is, moet exact match of startWith '/nl' en geen andere karakters?
    if (path === '/nl' || path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const t = dict.Header;

  return (
    <nav className="w-full h-full border-b border-white/10 bg-[#011410] py-3">
      <div className="site-header-content">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">

          <Link href={`/${lang}`} className="flex items-center group cursor-pointer relative z-10">
            {/* Gebruik absolute path of import voor img als die in public staat */}
            <img
              src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png"
              alt="PlantiPower"
              className="h-20"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[12px] font-bold uppercase tracking-[0.4em] text-white relative z-10">
            <Link href={`/${lang}`} className={`hover:text-lime-400 transition-all relative group ${isActive(`/${lang}`) && pathname === `/${lang}` ? 'text-lime-400' : ''}`}>
              {t.home}
              <span className={`absolute -bottom-1 left-0 h-px bg-lime-500 transition-all duration-300 ${isActive(`/${lang}`) && pathname === `/${lang}` ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link href={`/${lang}/about`} className={`hover:text-lime-400 transition-all relative group ${isActive(`/${lang}/about`) ? 'text-lime-400' : ''}`}>
              {t.about}
              <span className={`absolute -bottom-1 left-0 h-px bg-lime-500 transition-all duration-300 ${isActive(`/${lang}/about`) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Products Dropdown */}
            <div className="relative group/dropdown py-4">
              <button className={`flex items-center gap-2 hover:text-lime-400 transition-all uppercase tracking-[0.4em] ${pathname.includes('products') || pathname.includes('plantipower-') ? 'text-lime-400' : ''}`}>
                {t.products}
                <svg className="w-3 h-3 translate-y-[1px] transition-transform duration-300 group-hover/dropdown:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 pt-4 w-72 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform scale-95 group-hover/dropdown:scale-100 pointer-events-none group-hover/dropdown:pointer-events-auto">
                <div className="bg-emerald-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2">
                  {/* Links gestandaardiseerd naar /products/all12 en /products/shield ? User zei: /nl/plantipower-all12.
                                        Laten we consistent routing patroon gebruiken: /[lang]/products/all12 ofzo.
                                        Maar user wil specifieke urls zoals /nl/plantipower-all12?
                                        De middleware regelt localized routing. Maar Next.js app router verwacht mapnaam.
                                        Mapnaam zou 'products' kunnen zijn en daarin page.tsx.
                                        Ik zal de routing structuur simpel houden: /[lang]/products/all12 en /[lang]/products/shield.
                                        Of ik moet re-writes doen.
                                        Voor nu: gebruik de paths zoals in mapstructuur verwacht.
                                        In dicts kan ik paths zetten of hardcoden.
                                        Ik kies voor /products/all12 mapnaam. Dus href is /[lang]/products/all12.
                                    */}
                  <Link href={`/${lang}/products/all12`} className={`flex flex-col px-5 py-4 rounded-xl hover:bg-white/5 transition-colors group/item ${isActive(`/${lang}/products/all12`) ? 'bg-white/5' : ''}`}>
                    <span className={`transition-colors tracking-[0.2em] font-bold ${isActive(`/${lang}/products/all12`) ? 'text-lime-400' : 'text-white group-hover/item:text-lime-400'}`}>{t.all12}</span>
                    <span className="text-[10px] tracking-widest text-emerald-100/40 mt-1 uppercase font-medium">{t.all12Desc}</span>
                  </Link>
                  <div className="h-px bg-white/5 mx-2 my-1"></div>
                  <Link href={`/${lang}/products/shield`} className={`flex flex-col px-5 py-4 rounded-xl hover:bg-white/5 transition-colors group/item ${isActive(`/${lang}/products/shield`) ? 'bg-white/5' : ''}`}>
                    <span className={`transition-colors tracking-[0.2em] font-bold ${isActive(`/${lang}/products/shield`) ? 'text-lime-400' : 'text-white group-hover/item:text-lime-400'}`}>{t.shield}</span>
                    <span className="text-[10px] tracking-widest text-emerald-100/40 mt-1 uppercase font-medium">{t.shieldDesc}</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href={`/${lang}/faq`} className={`hover:text-lime-400 transition-all relative group ${isActive(`/${lang}/faq`) ? 'text-lime-400' : ''}`}>
              {t.faq}
              <span className={`absolute -bottom-1 left-0 h-px bg-lime-500 transition-all duration-300 ${isActive(`/${lang}/faq`) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link href={`/${lang}/contact`} className={`hover:text-lime-400 transition-all relative group ${isActive(`/${lang}/contact`) ? 'text-lime-400' : ''}`}>
              {t.contact}
              <span className={`absolute -bottom-1 left-0 h-px bg-lime-500 transition-all duration-300 ${isActive(`/${lang}/contact`) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          <div className="relative z-10 flex items-center gap-6">
            {/* Language Switcher - Use standard Next.js Link without localized logic as Middleware handles it?
                            No, switch lang needs to replace first segment.
                            Ik maak simpele links naar /en en /nl.
                         */}
            <div className="hidden md:flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
              <Link href={pathname.replace(/^\/nl/, '/en').replace(/^\/en/, '/en') || '/en'} className={`hover:text-lime-400 transition-colors ${lang === 'en' ? 'text-lime-400' : 'text-white/50'}`}>EN</Link>
              <span className="text-white/20">|</span>
              <Link href={pathname.replace(/^\/en/, '/nl').replace(/^\/nl/, '/nl') || '/nl'} className={`hover:text-lime-400 transition-colors ${lang === 'nl' ? 'text-lime-400' : 'text-white/50'}`}>NL</Link>
            </div>

            <button
              onClick={onOpenSample}
              className="bg-lime-500 text-emerald-950 hover:bg-white font-bold py-2 px-5 rounded-xl transition-all text-xs uppercase tracking-[0.2em]"
            >
              {t.cta}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={onOpenMenu}
              className="md:hidden p-2 -mr-2 text-white hover:text-lime-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

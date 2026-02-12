'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface FooterProps {
  dict: any;
  lang: string;
}

const Footer: React.FC<FooterProps> = ({ dict, lang }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const t = dict.Footer;

  const getPath = (path: string) => `/${lang}${path === '/' ? '' : path}`;

  return (
    <footer className="relative pt-32 pb-12 bg-gradient-to-b from-[#011410] to-[#000d0a] overflow-hidden">
      {/* Seamless transition glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-500/40 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          <div className="col-span-1">
            <div className="flex items-center mb-10">
              <img
                src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png"
                alt="PlantiPower"
                className="h-20 w-auto opacity-100"
              />
            </div>
            <p className="text-emerald-100/60 text-sm leading-relaxed mb-10 font-medium">
              {t.desc}
            </p>
          </div>

          <div>
            {/* Links */}
            <div className="space-y-6">
              <div className="text-[10px] font-black uppercase tracking-[0.4rem] text-lime-400">PlantiPower</div>
              <ul className="space-y-3">
                {[
                  { name: t.links.home, path: "/" },
                  { name: t.links.about, path: "/about" },
                  { name: t.links.products, path: "/products/all12" }, // Default to ALL12 for now
                  { name: t.links.faq, path: "/faq" },
                  { name: t.links.contact, path: "/contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={getPath(item.path)} className="text-emerald-50 hover:text-lime-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.6)]"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4rem] text-lime-400 mb-8">{t.contactTitle}</h4>
            <div className="space-y-4">
              <a href="tel:+31772058365" className="flex items-center gap-4 text-emerald-50 hover:text-lime-400 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-emerald-950 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium tracking-wide">+31 (0)77 205 8365</span>
              </a>
              <a href="mailto:info@plantipower.com" className="flex items-center gap-4 text-emerald-50 hover:text-lime-400 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-emerald-950 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium tracking-wide">info@plantipower.com</span>
              </a>
              <div className="flex items-start gap-4 text-emerald-50 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mt-1 group-hover:border-lime-500/20 transition-colors shrink-0 font-medium">
                  <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-emerald-100/60 text-sm leading-relaxed">
                  {t.address.line1}<br />
                  {t.address.line2}<br />
                  {t.address.country}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-emerald-100/40">
          <div className="text-emerald-100/60 font-medium">© 2026 {t.rights} | PlantiPower</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

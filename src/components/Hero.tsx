'use client'

import React from 'react';
import InteractivePlantHero from './InteractivePlantHero';
import Link from 'next/link';

interface HeroProps {
  dict: any;
  lang: string;
}

const Hero: React.FC<HeroProps> = ({ dict, lang }) => {
  const t = dict.Hero;

  return (
    <section className="relative flex flex-col overflow-x-hidden pt-24 md:pt-32 pb-16 md:pb-24" id="home">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-emerald-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="relative z-50 flex flex-col justify-center text-left pt-4 lg:pt-0 lg:-mt-14">
            <h1 className="font-outfit font-bold uppercase text-5xl sm:text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl tracking-[0.04em] leading-[1.02] text-left mb-8 md:mb-10 break-words">
              <span className="text-emerald-400 block">{t.titleLine1}</span>
              <span className="text-white block">{t.titleLine2}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400 block">
                {t.titleLine3}
              </span>
            </h1>

            {/* USPs Line */}
            <div className="flex items-center justify-start gap-4 mb-4">
              <div className="flex items-center gap-3 py-2">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-white/90 whitespace-nowrap">
                  {t.uspsPart1} <span className="text-lime-500 mx-2">|</span> {t.uspsPart2} <span className="text-lime-500 mx-2">|</span> {t.uspsPart3}
                </span>
              </div>
            </div>

            {/* Styled Description Paragraph */}
            <div className="relative py-2 text-left mb-12 max-w-xl lg:mx-0">
              <p
                className="text-lg text-emerald-100/80 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: t.description }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link
                href={`/${lang}/products/all12`}
                className="btn-standard bg-lime-500 hover:bg-lime-400 text-emerald-950 shadow-[0_0_30px_rgba(132,204,22,0.4)] flex-col py-4 leading-tight !h-auto text-center"
              >
                <span className="text-[10px] mb-1 opacity-70 font-black tracking-[0.3em]">{t.ctaMore}</span>
                <span className="text-sm">{t.ctaProduct}</span>
              </Link>
              <button
                onClick={() => document.getElementById('crop-results')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-standard bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm flex-col py-4 leading-tight !h-auto"
              >
                <span className="text-[10px] mb-1 opacity-70 font-black tracking-[0.3em]">{t.ctaView}</span>
                <span className="text-sm">{t.ctaCases}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="relative z-0 flex justify-center items-center lg:justify-end lg:pl-10 pb-12 lg:pb-0 -mt-10 lg:-mt-32">
            <div className="relative w-full max-w-[850px] lg:-mr-20">
              <InteractivePlantHero />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

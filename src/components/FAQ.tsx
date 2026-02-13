'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  hideTitle?: boolean;
  dict: any;
}

const FAQ: React.FC<FAQProps> = ({ hideTitle = false, dict }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = dict.FAQ;
  const faqs = content.items;

  // Split content for 2 columns roughly equal
  const midPoint = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, midPoint);
  const rightCol = faqs.slice(midPoint);

  return (
    <section
      className={`relative overflow-hidden ${hideTitle ? 'bg-transparent py-0' : 'bg-[#011410] py-24'}`}
      id="faq"
    >
      {/* Background Glow - only show if title is shown (main section usage), otherwise hide to avoid stacking glows */}
      {!hideTitle && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-lime-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      )}

      <div className={`max-w-7xl mx-auto px-6 relative z-10 ${hideTitle ? '' : ''}`}>
        {!hideTitle && (
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-24 tracking-tight uppercase font-outfit">
            {content.title}<span className="text-lime-500">{content.titleAccent}</span>
          </h2>
        )}

        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {leftCol.map((faq: any, i: number) => (
              <FAQItem key={i} faq={faq} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightCol.map((faq: any, i: number) => (
              <FAQItem key={i + midPoint} faq={faq} isOpen={openIndex === (i + midPoint)} onToggle={() => setOpenIndex(openIndex === (i + midPoint) ? null : (i + midPoint))} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen
      ? 'bg-[#052e24] border-lime-500/30'
      : 'bg-emerald-950/20 border-white/5 hover:border-white/10 hover:bg-emerald-900/30'
      }`}>
      <button
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
        onClick={onToggle}
      >
        <span className={`font-bold text-[15px] transition-colors uppercase tracking-wide pr-4 ${isOpen ? 'text-lime-500' : 'text-white group-hover:text-emerald-50'}`}>
          {faq.q}
        </span>
        <ChevronDown className={`w-5 h-5 text-lime-500 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 text-emerald-100/70 leading-relaxed text-sm font-medium border-t border-white/5 pt-4">
          {faq.a}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

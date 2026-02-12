'use client'

import React from 'react';

interface TestimonialsProps {
  dict: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ dict }) => {
  const t = dict.Testimonials;
  const reviews = t.reviews;

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 uppercase tracking-tight">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight font-outfit">
            {t.title}
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="flex gap-1 text-lime-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-emerald-100/60 text-[10px] font-bold tracking-[0.2em] ml-2">4.9/5 {t.average}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review: any, i: number) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[32px] relative group hover:border-lime-500/20 hover:bg-white/[0.08] transition-all duration-500 shadow-2xl">
              <p className="text-emerald-100/80 text-xl mb-10 italic leading-relaxed font-medium">"{review.text}"</p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-lime-500 flex items-center justify-center text-emerald-950 font-bold text-2xl shadow-[0_10px_30px_rgba(132,204,22,0.3)]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-xl uppercase tracking-tight">{review.name}</div>
                  <div className="text-[10px] text-lime-400 font-bold uppercase tracking-[0.2em] mt-1 opacity-70">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

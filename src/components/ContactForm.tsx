'use client'

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  dict: any;
  lang: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ dict, lang }) => {
  const t = dict.Contact;

  // NOTE: 'isNL' logic in original used location.pathname. 
  // Here we strictly follow the 'lang' prop, assuming 'nl' or 'en'.
  // If we wanted to check 'nl' specifically for the subject line etc:
  const isNL = lang === 'nl';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', company: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-transparent" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-emerald-900/40 border border-white/10 rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative backdrop-blur-xl shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500 rounded-full blur-[100px] opacity-10 -mr-32 -mt-32"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-none font-outfit">
                {t.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">{t.titleAccent}</span>
              </h2>
              <p className="text-emerald-100/60 text-lg mb-8 leading-relaxed font-medium">
                {t.desc}
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-lime-500/10 transition-all shadow-inner">📞</div>
                  <a href="tel:+31772058365" className="font-black text-xl tracking-tight hover:text-lime-400 transition-colors">+31 (0)77 205 8365</a>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-lime-500/10 transition-all shadow-inner">✉️</div>
                  <a href="mailto:info@plantipower.com" className="font-black text-xl tracking-tight hover:text-lime-400 transition-colors">info@plantipower.com</a>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-lime-500/10 transition-all shadow-inner shrink-0">📍</div>
                  <div className="text-emerald-100/70 leading-relaxed font-medium pt-1">
                    L.J. Costerstraat 48<br />
                    5916 PS Venlo<br />
                    {isNL ? 'Nederland' : 'The Netherlands'}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {isSuccess ? (
                <div className="bg-white/5 p-12 rounded-[32px] border border-lime-500/20 backdrop-blur-md text-center space-y-6 animate-reveal">
                  <div className="w-20 h-20 bg-lime-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(132,204,22,0.3)]">
                    <CheckCircle2 className="w-10 h-10 text-emerald-950" />
                  </div>
                  <h3 className="text-2xl font-bold font-outfit uppercase">{t.successTitle}</h3>
                  <p className="text-emerald-100/60">{t.successMsg}</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-lime-400 font-bold text-sm uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {t.newMsg}
                  </button>
                </div>
              ) : (
                <form className="bg-white/5 p-8 md:p-10 rounded-[40px] border border-white/10 backdrop-blur-md space-y-6 shadow-2xl" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-400 ml-2">{t.labelName}</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#011a14]/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-lime-500/50 text-white placeholder-emerald-700 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-400 ml-2">{t.labelCompany}</label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#011a14]/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-lime-500/50 text-white placeholder-emerald-700 transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-400 ml-2">{t.labelEmail}</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#011a14]/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-lime-500/50 text-white placeholder-emerald-700 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-400 ml-2">{t.labelMessage}</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#011a14]/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-lime-500/50 text-white placeholder-emerald-700 resize-none transition-all font-medium"
                    ></textarea>
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="w-full bg-lime-500 hover:bg-white text-emerald-950 font-black py-5 rounded-2xl transition-all shadow-2xl shadow-lime-500/20 transform active:scale-[0.98] uppercase tracking-widest text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? t.sending : t.btnSend}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

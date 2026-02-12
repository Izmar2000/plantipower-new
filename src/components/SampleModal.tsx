import React, { useState } from 'react';
import { X, Check, ChevronDown, FlaskConical, ShieldCheck } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SampleModal: React.FC<SampleModalProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const isNL = pathname?.startsWith('/nl') ?? false;

  const [formData, setFormData] = useState({
    products: ['all12', 'shield'], // Default both selected
    company: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    crop: '',
    otherCrop: '',
    comments: '',
    guidance: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const content = {
    title: isNL ? "BESTEL HIER UW PROEFPAKKET" : "ORDER YOUR SAMPLE PACK HERE",
    subtitle: isNL
      ? "U ontvangt 1x 1 liter PlantiPower All12 en 1x 60ml PlantiPower Shield voor €29,95 inclusief verzendkosten."
      : "You receive 1x 1 liter PlantiPower All12 and 1x 60ml PlantiPower Shield for €29.95 including shipping.",
    product1: {
      name: "PlantiPower All12 (1L)",
      sub: isNL ? "VOEDING TRANSPORTEREN" : "TRANSPORT NUTRIENTS",
      img: "https://plantipower.com/assets/product-all12.png"
    },
    product2: {
      name: "PlantiPower Shield (60ml)",
      sub: isNL ? "BETERE WEERBAARHEID" : "BETTER RESILIENCE",
      img: "https://plantipower.com/assets/product-shield.png"
    },
    bundleTitle: isNL ? "GESELECTEERDE TEST" : "SELECTED TEST",
    bundleSub: isNL ? "2X PRODUCTEN (ALL12 + SHIELD)" : "2X PRODUCTS (ALL12 + SHIELD)",
    price: "€29,95",
    shipping: isNL ? "INCL. VERZENDKOSTEN" : "INCL. SHIPPING",

    labelCompany: isNL ? "BEDRIJFSNAAM" : "COMPANY NAME",
    placeholderCompany: isNL ? "Uw Kwekerij" : "Your Nursery",

    labelName: isNL ? "CONTACTPERSOON" : "CONTACT PERSON",
    placeholderName: isNL ? "Naam" : "Name",

    labelEmail: isNL ? "EMAIL ADRES" : "EMAIL ADDRESS",
    placeholderEmail: "info@voorbeeld.nl",

    labelPhone: isNL ? "TELEFOONNUMMER" : "PHONE NUMBER",
    placeholderPhone: "+31 6 ...",

    labelAddress: isNL ? "STRAAT + HUISNUMMER" : "STREET + NUMBER",
    placeholderAddress: isNL ? "Straatnaam 123" : "Streetname 123",

    labelCity: isNL ? "POSTCODE + PLAATS" : "ZIP + CITY",
    placeholderCity: isNL ? "1234 AB Plaatsnaam" : "1234 AB City",

    labelCrop: isNL ? "TEELT / TYPE KWEKERIJ" : "CROP / NURSERY TYPE",
    placeholderCrop: isNL ? "Maak een keuze..." : "Make a choice...",

    labelComments: isNL ? "OPMERKINGEN OF SPECIFIEKE VRAGEN" : "COMMENTS OR SPECIFIC QUESTIONS",
    placeholderComments: isNL ? "Heeft u specifieke uitdagingen?" : "Do you have specific challenges?",

    cropChoices: isNL ? [
      { v: "groente", l: "Groenten" },
      { v: "fruit", l: "Fruit" },
      { v: "boomteelt", l: "Boomteelt" },
      { v: "sierteelt", l: "Sierteelt" },
      { v: "akkerbouw", l: "Akkerbouw" },
      { v: "anders", l: "Anders..." }
    ] : [
      { v: "groente", l: "Vegetables" },
      { v: "fruit", l: "Fruit" },
      { v: "boomteelt", l: "Arboriculture" },
      { v: "sierteelt", l: "Ornamentals" },
      { v: "akkerbouw", l: "Arable Farming" },
      { v: "anders", l: "Other..." }
    ],
    btnSubmit: isNL ? "Aanvragen" : "Request",
    footerNote: isNL ? "Factuur volgt na levering. Levertijd 1-2 werkdagen." : "Invoice follows delivery. Delivery 1-2 working days.",
    thankYou: isNL ? "Bedankt!" : "Thank You!",
    successMsg: isNL ? "Uw aanvraag is succesvol verzonden." : "Your request has been successfully sent."
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simplified submission logic
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-4 p-0">
      <div className="absolute inset-0 bg-[#011a14]/90 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#011410] md:rounded-[30px] rounded-t-[30px] shadow-2xl flex flex-col max-h-[90vh] md:max-h-[95vh] border border-[#0d2b24] mt-auto md:mt-0">

        {/* Sticky Header with Close Button for Mobile */}
        <div className="absolute top-0 right-0 p-4 z-50 bg-gradient-to-b from-[#011410] to-transparent w-full flex justify-end rounded-t-[30px] pointer-events-none">
          <button onClick={onClose} className="pointer-events-auto p-2 rounded-full bg-[#0d2b24] text-white/50 hover:text-white transition-colors shadow-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-20 text-center flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-[#011410]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{content.thankYou}</h2>
            <p className="text-white/70">{content.successMsg}</p>
          </div>
        ) : (
          <div className="overflow-y-auto custom-scrollbar pt-16 md:pt-10 pb-8 px-6 md:px-10">

            {/* Header */}
            <div className="mb-6 md:mb-8">
              <div className="inline-block px-3 py-1 rounded-md bg-[#0d2b24] border border-lime-500/30 text-lime-500 text-xs font-bold uppercase tracking-wider mb-4">
                {isNL ? "Proefpakket" : "Sample Pack"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-3">
                {content.title}
              </h2>
              <p className="text-lg text-emerald-100/70 font-medium">
                {content.subtitle}
              </p>
            </div>

            {/* Product Selection Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Product 1: All12 */}
              <div className="relative bg-[#0d2b24]/50 rounded-2xl p-4 md:p-6 border-2 border-lime-500/50 flex items-center gap-4 overflow-hidden">
                {/* Image / Icon */}
                <div className="w-12 h-16 bg-white/5 rounded-md flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-8 h-8 text-lime-500/50" />
                </div>
                <div className="flex-grow">
                  <div className="text-[10px] text-lime-500 font-bold uppercase tracking-wider mb-1">{content.product1.sub}</div>
                  <div className="text-lg md:text-xl font-bold text-white leading-tight">{content.product1.name}</div>
                </div>
                <div className="absolute right-4 top-4 text-lime-500">
                  <Check className="w-5 h-5" />
                </div>
              </div>

              {/* Product 2: Shield */}
              <div className="relative bg-[#0d2b24]/50 rounded-2xl p-4 md:p-6 border-2 border-cyan-500/50 flex items-center gap-4 overflow-hidden">
                {/* Image / Icon */}
                <div className="w-12 h-16 bg-white/5 rounded-md flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-8 h-8 text-cyan-500/50" />
                </div>
                <div className="flex-grow">
                  <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1">{content.product2.sub}</div>
                  <div className="text-lg md:text-xl font-bold text-white leading-tight">{content.product2.name}</div>
                </div>
                <div className="absolute right-4 top-4 text-cyan-500">
                  <Check className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Total Price Block */}
            <div className="bg-[#021814] rounded-2xl p-4 md:p-6 border border-white/5 flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0d2b24] flex items-center justify-center text-lime-500 shrink-0">
                  <Check className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-white font-bold uppercase tracking-wide text-sm md:text-base">{content.bundleTitle}</div>
                  <div className="text-emerald-100/50 text-[10px] md:text-xs font-bold uppercase tracking-wider">{content.bundleSub}</div>
                </div>
              </div>
              <div className="text-right whitespace-nowrap">
                <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">{content.price}</div>
                <div className="text-[10px] text-emerald-100/40 font-bold uppercase tracking-wider">{content.shipping}</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-6 gap-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelCompany}</label>
                <input type="text" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all placeholder:text-white/10" placeholder={content.placeholderCompany} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelName}</label>
                <input type="text" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all placeholder:text-white/10" placeholder={content.placeholderName} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelEmail}</label>
                <input type="email" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all placeholder:text-white/10" placeholder={content.placeholderEmail} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelPhone}</label>
                <input type="tel" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all placeholder:text-white/10" placeholder={content.placeholderPhone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelAddress}</label>
                <input type="text" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all placeholder:text-white/10" placeholder={content.placeholderAddress} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelCity}</label>
                <input type="text" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all placeholder:text-white/10" placeholder={content.placeholderCity} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelCrop}</label>
                <div className="relative">
                  <select className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-lime-500/50 transition-all cursor-pointer" onChange={(e) => setFormData({ ...formData, crop: e.target.value })} required>
                    <option value="">{content.placeholderCrop}</option>
                    {content.cropChoices.map(c => <option key={c.v} value={c.v}>{c.l}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-100/30 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelComments}</label>
                <textarea className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all placeholder:text-white/10 resize-none h-24" placeholder={content.placeholderComments} onChange={(e) => setFormData({ ...formData, comments: e.target.value })} />
              </div>

              <div className="md:col-span-2 mt-2">
                <button type="submit" disabled={isSubmitting} className="w-full bg-lime-500 hover:bg-lime-400 text-emerald-950 font-bold py-4 rounded-xl uppercase tracking-widest transition-all transform active:scale-95 shadow-lg shadow-lime-500/20">
                  {isSubmitting ? "..." : content.btnSubmit}
                </button>
                <div className="text-center mt-4">
                  <p className="text-[10px] text-emerald-100/30 uppercase tracking-widest">{content.footerNote}</p>
                </div>
              </div>
            </form>
          </div>
          </div>
        )}
    </div>
    </div >
  );
};

export default SampleModal;

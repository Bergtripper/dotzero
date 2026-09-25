import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, MapPin, Mail, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../translations';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT.contact;

  const categories = [
    { it: 'Identità di Sistema', de: 'Systemidentität', en: 'System Identity' },
    { it: 'Architettura Web & UI', de: 'Webarchitektur & UI', en: 'Web Architecture & UI' },
    { it: 'Tipografia Sperimentale', de: 'Experimentelle Typografie', en: 'Experimental Typography' },
    { it: 'Installazione Spaziale', de: 'Räumliche Installation', en: 'Spatial Installation' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: categories[0][language],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contatti" className="py-20 border-b-2 border-[#121212] bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2 border-[#121212] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#DE3831] uppercase tracking-[0.2em] font-bold mb-2">
              <span className="w-2.5 h-2.5 bg-[#DE3831] inline-block" />
              <span>{t.badge[language]}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-display tracking-tight text-[#121212]">
              {t.title[language]} <span className="text-[#DE3831]">·0</span>
            </h2>
          </div>
          <div className="font-mono text-xs max-w-sm text-zinc-700">
            {t.subtitle[language]}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 border-2 border-[#121212] bg-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_#121212]">
            {submitted ? (
              <div className="py-12 text-center space-y-4 font-mono">
                <div className="w-16 h-16 bg-[#DE3831] rounded-full border-2 border-[#121212] flex items-center justify-center mx-auto text-white">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#121212]">
                  {t.successTitle[language]}
                </h3>
                <p className="text-sm text-zinc-700 max-w-md mx-auto font-sans">
                  {t.successDesc(formData.name, formData.category, language)}
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        category: categories[0][language],
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-[#121212] text-white font-mono text-xs uppercase font-bold hover:bg-[#DE3831] transition-colors"
                  >
                    {t.sendAnother[language]}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase font-bold text-[#121212] mb-1.5"
                    >
                      {t.nameLabel[language]}
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Walter Gropius"
                      className="w-full px-3 py-2.5 border-2 border-[#121212] bg-[#FAF8F5] font-mono text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DE3831]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase font-bold text-[#121212] mb-1.5"
                    >
                      {t.emailLabel[language]}
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="gropius@bauhaus.de"
                      className="w-full px-3 py-2.5 border-2 border-[#121212] bg-[#FAF8F5] font-mono text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1350B0]"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-[#121212] mb-2">
                    {t.categoryLabel[language]}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {categories.map((catObj) => {
                      const catLabel = catObj[language];
                      const isSelected = formData.category === catLabel;
                      return (
                        <button
                          key={catLabel}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: catLabel })}
                          className={`px-3 py-2 border-2 border-[#121212] font-mono text-xs text-left uppercase transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#121212] text-white font-bold'
                              : 'bg-[#FAF8F5] hover:bg-white text-zinc-800'
                          }`}
                        >
                          <span>{catLabel}</span>
                          <span
                            className={`w-2 h-2 ${
                              isSelected ? 'bg-[#F7B801]' : 'bg-[#121212]'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Brief Notes */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase font-bold text-[#121212] mb-1.5"
                  >
                    {t.messageLabel[language]}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder[language]}
                    className="w-full px-3 py-2.5 border-2 border-[#121212] bg-[#FAF8F5] font-mono text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F7B801]"
                  />
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    id="submit-contact-form"
                    className="w-full py-3.5 bg-[#DE3831] text-white font-mono text-xs uppercase tracking-widest font-bold border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#121212] transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t.submitBtn[language]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Atelier Addresses & Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Atelier Locations Box */}
            <div className="border-2 border-[#121212] bg-white p-6 shadow-[6px_6px_0px_0px_#121212]">
              <div className="font-mono text-xs font-bold uppercase text-[#121212] pb-3 mb-4 border-b border-[#121212] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DE3831]" />
                <span>{t.locationsTitle[language]}</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 border border-[#121212] bg-[#FAF8F5]">
                  <div className="font-bold uppercase text-[#DE3831]">ATELIER WEIMAR</div>
                  <div className="text-zinc-600">Bauhausstraße 11, D-99423 Weimar</div>
                  <div className="text-[10px] text-zinc-500 mt-1">LAT 50.9744° N · LON 11.3292° E</div>
                </div>

                <div className="p-3 border border-[#121212] bg-[#FAF8F5]">
                  <div className="font-bold uppercase text-[#1350B0]">ATELIER DESSAU</div>
                  <div className="text-zinc-600">Gropiusallee 38, D-06846 Dessau-Roßlau</div>
                  <div className="text-[10px] text-zinc-500 mt-1">LAT 51.8398° N · LON 12.2269° E</div>
                </div>

                <div className="p-3 border border-[#121212] bg-[#FAF8F5]">
                  <div className="font-bold uppercase text-[#F7B801]">ATELIER MILANO</div>
                  <div className="text-zinc-600">Via Tortona 21, I-20144 Milano</div>
                  <div className="text-[10px] text-zinc-500 mt-1">LAT 45.4526° N · LON 9.1624° E</div>
                </div>
              </div>

              {/* Direct Channel */}
              <div className="mt-6 pt-4 border-t border-[#121212] space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#DE3831]" />
                  <span className="font-bold">atelier@dotzero.design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#1350B0]" />
                  <span>Protocollo PGP: 0xBAUHAUS2026</span>
                </div>
              </div>
            </div>

            {/* Geometric Philosophy Quote */}
            <div className="border-2 border-[#121212] bg-[#121212] text-white p-6 relative overflow-hidden">
              <div className="text-6xl font-display font-extrabold text-white/10 absolute -right-4 -bottom-4 select-none">
                ·0
              </div>
              <div className="font-mono text-[11px] text-[#F7B801] uppercase tracking-widest mb-2 font-bold">
                {t.quoteHeading[language]}
              </div>
              <p className="text-sm font-sans leading-relaxed text-zinc-200">
                {t.quoteBody[language]}
              </p>
              <div className="mt-3 font-mono text-xs text-zinc-400">
                {t.quoteAuthor[language]}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

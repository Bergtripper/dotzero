import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../translations';

interface FooterProps {
  onNavigateToModulor?: () => void;
  onNavigateToMusa?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToModulor, onNavigateToMusa }) => {
  const navigateToSubpage = onNavigateToModulor || onNavigateToMusa;
  const { language } = useLanguage();
  const t = UI_TEXT.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-[#121212] text-white pt-16 pb-12 border-t-4 border-[#DE3831]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Colophon Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800">
          
          {/* Logo & Statement (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#DE3831] inline-block border border-white" />
              <span className="w-4 h-4 bg-[#1350B0] inline-block border border-white" />
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#F7B801]" />
              <span className="text-3xl font-extrabold uppercase font-display tracking-tight text-white ml-2">
                dotzero<span className="text-[#DE3831]">.</span>
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-sm font-sans leading-relaxed">
              {t.desc[language]}
            </p>

            <div className="font-mono text-xs text-zinc-500 pt-2">
              {t.masters[language]}
            </div>

            {navigateToSubpage && (
              <div className="pt-2">
                <button
                  type="button"
                  id="footer-modulor-btn"
                  onClick={navigateToSubpage}
                  className="px-3 py-1.5 border border-zinc-700 bg-zinc-900 hover:bg-[#DE3831] hover:border-[#DE3831] font-mono text-xs text-zinc-300 hover:text-white uppercase flex items-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#F7B801]" />
                  <span>Modulor Studio Subpage →</span>
                </button>
              </div>
            )}
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 font-mono text-xs space-y-2">
            <div className="text-[#F7B801] font-bold uppercase tracking-widest mb-3">
              {t.modularIndex[language]}
            </div>
            <div>
              <a href="#hero-section" className="text-zinc-300 hover:text-[#DE3831] transition-colors">
                01 · Punto Zero
              </a>
            </div>
            <div>
              <a href="#manifesto" className="text-zinc-300 hover:text-[#DE3831] transition-colors">
                02 · Il Manifesto
              </a>
            </div>
            <div>
              <a href="#teoria" className="text-zinc-300 hover:text-[#DE3831] transition-colors">
                03 · Teoria Forma-Colore
              </a>
            </div>
            <div>
              <a href="#progetti" className="text-zinc-300 hover:text-[#DE3831] transition-colors">
                04 · Archivio Progetti
              </a>
            </div>
            <div>
              <a href="#laboratorio" className="text-zinc-300 hover:text-[#DE3831] transition-colors">
                05 · Laboratorio Geometrico
              </a>
            </div>
            <div>
              <a href="#contatti" className="text-zinc-300 hover:text-[#DE3831] transition-colors">
                06 · Commissioni
              </a>
            </div>
          </div>

          {/* Standards & Specs (4 cols) */}
          <div className="md:col-span-4 font-mono text-xs space-y-3">
            <div className="text-[#1350B0] font-bold uppercase tracking-widest mb-3">
              {t.constructiveStandards[language]}
            </div>
            <div className="p-3 bg-zinc-900 border border-zinc-800 space-y-1">
              <div className="text-zinc-400">CANONE: Costruttivismo Funzionale</div>
              <div className="text-zinc-400">PALETTE: Primaria Triadica (#DE3831, #1350B0, #F7B801)</div>
              <div className="text-zinc-400">TIPOGRAFIA: Space Grotesk / Syne</div>
              <div className="text-zinc-400">GRID ENGINE: CSS Grid 12 Colonne</div>
            </div>

            <button
              type="button"
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="mt-4 px-4 py-2 border border-zinc-700 bg-zinc-900 text-white hover:bg-[#DE3831] hover:border-[#DE3831] transition-all flex items-center gap-2 uppercase tracking-wider font-bold"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.backToZero[language]}</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            {t.copyright[language]}
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#DE3831]" />
              <span>PUNKT</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#1350B0]" />
              <span>LINIE</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-[#F7B801]" />
              <span>FLÄCHE</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
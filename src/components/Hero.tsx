import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, RotateCw, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../translations';

interface HeroProps {
  onNavigateToModulor?: () => void;
  onNavigateToMusa?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToModulor, onNavigateToMusa }) => {
  const navigateToSubpage = onNavigateToModulor || onNavigateToMusa;
  const { language } = useLanguage();
  const t = UI_TEXT.hero;
  const tModulor = UI_TEXT.modulorTeaser || UI_TEXT.musaTeaser;

  const [rotation, setRotation] = useState(0);
  const [sculptureState, setSculptureState] = useState(0);

  const rotateSculpture = () => {
    setRotation((prev) => prev + 45);
    setSculptureState((prev) => (prev + 1) % 4);
  };

  return (
    <section
      id="hero-section"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 border-b-2 border-[#121212] overflow-hidden"
    >
      {/* Structural constructivist corner tags */}
      <div className="absolute top-20 left-4 font-mono text-[10px] text-zinc-500 hidden sm:block">
        POS [0,0] · DESSAU PROTOCOL
      </div>
      <div className="absolute top-20 right-4 font-mono text-[10px] text-zinc-500 hidden sm:block">
        CANVAS W-100% · PHI 1.618
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modulor Studio Subpage Prominent Feature Banner */}
        {navigateToSubpage && (
          <div className="mb-8 border-2 border-[#121212] bg-[#07080C] text-white p-3 sm:p-4 shadow-[4px_4px_0px_0px_#DE3831] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#DE3831] animate-ping" />
              <div>
                <span className="text-[11px] font-mono text-[#F7B801] uppercase tracking-widest font-bold block">
                  {tModulor.badge[language]}
                </span>
                <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {tModulor.title[language]}
                </span>
              </div>
            </div>

            <button
              type="button"
              id="hero-modulor-banner-btn"
              onClick={navigateToSubpage}
              className="px-4 py-2 bg-[#DE3831] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#DE3831]/90 flex items-center justify-center gap-2 self-start sm:self-auto transition-all shadow-[2px_2px_0px_0px_#F7B801]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F7B801]" />
              <span>{tModulor.ctaOpen[language]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Monumental Bauhaus Typography & Stance (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Top Eyebrow in Bauhaus vernacular */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-4 h-4 bg-[#DE3831] border border-[#121212]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#121212]">
                {t.badge[language]}
              </span>
            </div>

            {/* Monumental Headline */}
            <h1
              id="hero-title"
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-[-0.06em] leading-[0.88] text-[#121212] font-display uppercase"
            >
              DOT<br />
              <span className="text-[#DE3831] relative inline-block">
                ZERO
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#F7B801] -z-10 transform skew-x-[-12deg]" />
              </span>
            </h1>

            {/* Subtitle statement */}
            <p className="mt-8 text-lg sm:text-xl text-[#222222] max-w-xl font-normal leading-relaxed">
              {t.subtitle[language]}
            </p>

            {/* Bauhaus Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#progetti"
                id="hero-cta-projects"
                className="px-6 py-3.5 bg-[#121212] text-white font-mono text-xs uppercase tracking-widest font-bold border-2 border-[#121212] shadow-[4px_4px_0px_0px_#DE3831] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#DE3831] transition-all flex items-center gap-2"
              >
                <span>{t.ctaProjects[language]}</span>
                <ArrowDownRight className="w-4 h-4 text-[#F7B801]" />
              </a>

              <a
                href="#laboratorio"
                id="hero-cta-lab"
                className="px-6 py-3.5 bg-white text-[#121212] font-mono text-xs uppercase tracking-widest font-bold border-2 border-[#121212] shadow-[4px_4px_0px_0px_#1350B0] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1350B0] transition-all flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#DE3831]" />
                <span>{t.ctaLab[language]}</span>
              </a>
            </div>

            {/* Bauhaus Technical Metric Bar */}
            <div className="mt-12 pt-6 border-t-2 border-[#121212] grid grid-cols-3 gap-4 font-mono">
              <div className="border-r border-[#121212] pr-2">
                <div className="text-2xl font-bold text-[#121212]">1919</div>
                <div className="text-[11px] text-zinc-600 uppercase tracking-wider">
                  {t.metricOriginLabel[language]}
                </div>
              </div>
              <div className="border-r border-[#121212] pr-2">
                <div className="text-2xl font-bold text-[#1350B0]">0.00%</div>
                <div className="text-[11px] text-zinc-600 uppercase tracking-wider">
                  {t.metricOrnamentLabel[language]}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#DE3831]">3 / 3</div>
                <div className="text-[11px] text-zinc-600 uppercase tracking-wider">
                  {t.metricColorsLabel[language]}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Kinetic Bauhaus Sculpture (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-white border-2 border-[#121212] p-5 shadow-[8px_8px_0px_0px_#121212] relative">
              
              {/* Sculpture Header Controls */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[#121212] font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DE3831]" />
                  <span className="font-bold">{t.sculptureTitle[language]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    id="btn-rotate-sculpture"
                    onClick={rotateSculpture}
                    className="p-1 border border-[#121212] hover:bg-[#F7B801] transition-colors flex items-center gap-1"
                    title="Ruota composizione"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>{rotation}°</span>
                  </button>
                </div>
              </div>

              {/* Bauhaus Canvas Viewer */}
              <div
                id="bauhaus-kinetic-stage"
                className="relative h-[340px] sm:h-[380px] bg-[#FAF8F5] border border-[#121212] overflow-hidden flex items-center justify-center cursor-crosshair select-none"
                onClick={rotateSculpture}
              >
                {/* Background constructivist grid guidelines */}
                <div className="absolute inset-0 bauhaus-grid-pattern opacity-60" />
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#121212]/20 border-dashed" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#121212]/20 border-dashed" />

                {/* Kinetic Motion Shapes */}
                <motion.div
                  className="relative w-64 h-64 flex items-center justify-center"
                  animate={{ rotate: rotation }}
                  transition={{ type: 'spring', stiffness: 80, damping: 14 }}
                >
                  {/* Primary 1: The Blue Square */}
                  <motion.div
                    className="absolute w-36 h-36 bg-[#1350B0] border-2 border-[#121212]"
                    animate={{
                      x: sculptureState === 1 ? -25 : sculptureState === 2 ? 15 : 0,
                      y: sculptureState === 3 ? 20 : -10,
                      rotate: sculptureState * 15,
                    }}
                    transition={{ type: 'spring', damping: 12 }}
                  />

                  {/* Primary 2: The Red Circle */}
                  <motion.div
                    className="absolute w-32 h-32 rounded-full bg-[#DE3831] border-2 border-[#121212] mix-blend-multiply"
                    animate={{
                      x: sculptureState === 0 ? 30 : sculptureState === 2 ? -25 : 10,
                      y: sculptureState === 1 ? -20 : 15,
                      scale: sculptureState === 2 ? 1.1 : 1.0,
                    }}
                    transition={{ type: 'spring', damping: 10 }}
                  />

                  {/* Primary 3: The Yellow Triangle */}
                  <motion.div
                    className="absolute z-10"
                    animate={{
                      x: sculptureState === 1 ? 20 : sculptureState === 3 ? -30 : -10,
                      y: sculptureState === 2 ? -35 : 10,
                      rotate: sculptureState * -45,
                    }}
                    transition={{ type: 'spring', damping: 14 }}
                  >
                    <svg width="110" height="110" viewBox="0 0 100 100">
                      <polygon
                        points="50,10 95,90 5,90"
                        fill="#F7B801"
                        stroke="#121212"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </motion.div>

                  {/* Constructivist Black Bar */}
                  <motion.div
                    className="absolute w-60 h-3 bg-[#121212] z-20"
                    animate={{
                      rotate: 45 + sculptureState * 90,
                      scaleX: sculptureState % 2 === 0 ? 1 : 1.15,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Precise Center Dot (Zero Anchor) */}
                  <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-[#121212] z-30 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-[#DE3831] rounded-full" />
                  </div>
                </motion.div>

                {/* Overlay Technical Labels */}
                <div className="absolute bottom-2 left-3 font-mono text-[10px] text-zinc-600 bg-white/80 px-1.5 py-0.5 border border-[#121212]">
                  {t.sculptureHint[language]}
                </div>
                <div className="absolute top-2 right-3 font-mono text-[10px] text-zinc-600 bg-white/80 px-1.5 py-0.5 border border-[#121212]">
                  {t.sculptureState[language]}: 0{sculptureState + 1} / 04
                </div>
              </div>

              {/* Bottom Interactive Primitives Palette */}
              <div className="mt-3 pt-3 border-t-2 border-[#121212] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-600">{t.pureElements[language]}</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setRotation((r) => r + 90)}
                    className="flex items-center gap-1 px-2 py-0.5 border border-[#121212] hover:bg-[#DE3831] hover:text-white transition-colors"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DE3831] inline-block border border-[#121212]" />
                    <span>{t.circle[language]}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRotation((r) => r + 180)}
                    className="flex items-center gap-1 px-2 py-0.5 border border-[#121212] hover:bg-[#1350B0] hover:text-white transition-colors"
                  >
                    <span className="w-2.5 h-2.5 bg-[#1350B0] inline-block border border-[#121212]" />
                    <span>{t.square[language]}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRotation((r) => r + 45)}
                    className="flex items-center gap-1 px-2 py-0.5 border border-[#121212] hover:bg-[#F7B801] transition-colors"
                  >
                    <span className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-[#F7B801] inline-block" />
                    <span>{t.triangle[language]}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

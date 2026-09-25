import React, { useState } from 'react';
import { MANIFESTO_PRINCIPLES } from '../data';
import { ManifestoPrinciple } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../translations';

export const Manifesto: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT.manifesto;

  const [selectedPrinciple, setSelectedPrinciple] = useState<ManifestoPrinciple>(
    MANIFESTO_PRINCIPLES[0]
  );

  return (
    <section id="manifesto" className="py-20 border-b-2 border-[var(--text)] bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2 border-[var(--text)] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] uppercase tracking-[0.2em] font-bold mb-2">
              <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
              <span>{t.badge[language]}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-display tracking-tight text-[var(--text)]">
              {t.title[language]} <span className="text-[var(--accent)]">·0</span>
            </h2>
          </div>
          <div className="font-mono text-xs max-w-sm text-zinc-700">
            {t.quote[language]}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MANIFESTO_PRINCIPLES.map((principle) => {
            const isSelected = selectedPrinciple.number === principle.number;
            return (
              <div
                key={principle.number}
                id={`manifesto-card-${principle.number}`}
                onClick={() => setSelectedPrinciple(principle)}
                className={`p-6 border-2 border-[var(--text)] bg-[var(--surface-raised)] transition-all cursor-pointer flex flex-col justify-between relative group ${
                  isSelected
                    ? 'shadow-[6px_6px_0px_0px_#121212] -translate-y-1'
                    : 'hover:shadow-[4px_4px_0px_0px_#121212] hover:-translate-y-0.5'
                }`}
              >
                {/* Top Number & Accent Shape */}
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text)]">
                      {principle.number}
                    </span>

                    {/* Geometric Shape Badge */}
                    <div className="w-10 h-10 border border-[var(--text)] flex items-center justify-center bg-[#FAF8F5]">
                      {principle.shape === 'circle' && (
                        <div
                          className="w-6 h-6 rounded-full border border-[var(--text)]"
                          style={{ backgroundColor: principle.color }}
                        />
                      )}
                      {principle.shape === 'square' && (
                        <div
                          className="w-6 h-6 border border-[var(--text)]"
                          style={{ backgroundColor: principle.color }}
                        />
                      )}
                      {principle.shape === 'triangle' && (
                        <div
                          className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px]"
                          style={{ borderBottomColor: principle.color }}
                        />
                      )}
                      {principle.shape === 'cross' && (
                        <div className="relative w-6 h-6 flex items-center justify-center">
                          <div className="w-6 h-1.5 bg-[var(--text)]" />
                          <div className="h-6 w-1.5 bg-[var(--text)] absolute" />
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--text)] mb-1">
                    {principle.title[language]}
                  </h3>
                  <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4 italic">
                    {principle.germanTitle}
                  </div>

                  <p className="text-sm text-zinc-700 leading-relaxed font-sans">
                    {principle.subtitle[language]}
                  </p>
                </div>

                {/* Bottom Status bar indicator */}
                <div className="mt-6 pt-4 border-t border-[var(--text)] flex items-center justify-between font-mono text-[11px]">
                  <span className="text-zinc-500">{t.activeLabel[language]}</span>
                  <span
                    className="w-3 h-1"
                    style={{ backgroundColor: isSelected ? principle.color : '#CCCCCC' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Principle Deep Dive Box */}
        <div className="border-2 border-[var(--text)] bg-[var(--surface-raised)] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#121212] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-3 h-3 border border-[var(--text)]"
                style={{ backgroundColor: selectedPrinciple.color }}
              />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text)]">
                {t.deepDiveBadge[language]} · {selectedPrinciple.number}
              </span>
            </div>
            <h4 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text)] mb-4">
              {selectedPrinciple.title[language]} — {selectedPrinciple.germanTitle}
            </h4>
            <p className="text-base sm:text-lg text-zinc-800 leading-relaxed max-w-3xl">
              {selectedPrinciple.description[language]}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="px-3 py-1 bg-[var(--bg)] border border-[var(--text)]">
                {t.tags.origin[language]}
              </span>
              <span className="px-3 py-1 bg-[var(--bg)] border border-[var(--text)]">
                {t.tags.canon[language]}
              </span>
              <span className="px-3 py-1 bg-[var(--bg)] border border-[var(--text)]">
                {t.tags.rigor[language]}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center p-6 bg-[#FAF8F5] border-2 border-[var(--text)]">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 bauhaus-grid-pattern opacity-40" />
              {selectedPrinciple.shape === 'circle' && (
                <div className="w-36 h-36 rounded-full border-4 border-[var(--text)] bg-[var(--accent)] flex items-center justify-center shadow-lg">
                  <span className="w-8 h-8 rounded-full bg-[var(--surface-raised)] border-2 border-[var(--text)]" />
                </div>
              )}
              {selectedPrinciple.shape === 'square' && (
                <div className="w-36 h-36 border-4 border-[var(--text)] bg-[var(--accent-secondary)] flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-white rotate-45" />
                </div>
              )}
              {selectedPrinciple.shape === 'triangle' && (
                <div className="flex items-center justify-center">
                  <svg width="150" height="150" viewBox="0 0 100 100">
                    <polygon
                      points="50,10 95,90 5,90"
                      fill="#F7B801"
                      stroke="#121212"
                      strokeWidth="4"
                    />
                    <circle cx="50" cy="60" r="10" fill="#121212" />
                  </svg>
                </div>
              )}
              {selectedPrinciple.shape === 'cross' && (
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <div className="w-36 h-8 bg-[var(--text)]" />
                  <div className="h-36 w-8 bg-[var(--text)] absolute" />
                  <div className="w-8 h-8 bg-[var(--accent)] absolute border border-white" />
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

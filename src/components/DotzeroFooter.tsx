import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DotMarker, SystemGlyph } from './GraphicSyntax';

const COPY = {
  it: 'Archivi · Sistemi · Cultura · Esperimenti',
  de: 'Archive · Systeme · Kultur · Experimente',
  en: 'Archives · Systems · Culture · Experiments',
};

export const DotzeroFooter: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="border-t dz-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 font-mono text-[10px] uppercase tracking-[0.14em] dz-text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <span className="inline-flex items-center gap-2"><DotMarker size="xs" />DOTZERO · NODE 00 · 2026</span>
        <span className="inline-flex items-center gap-2"><SystemGlyph size={18} />{COPY[language]}</span>
      </div>
    </footer>
  );
};

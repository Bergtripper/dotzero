import React, { useEffect, useState } from 'react';
import { Grid3X3, Moon, Sun } from 'lucide-react';
import { ColorMode, Language } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TypographySwitch } from './TypographySwitch';
import { DotzeroLogotype } from './DotzeroLogotype';
import { DotzeroMark } from './DotzeroMark';
import { DotMarker, FieldGlyph, SystemGlyph } from './GraphicSyntax';

const COPY = {
  it: {
    index: 'Indice',
    foundation: 'Foundation',
    identity: 'CD / CI',
    framework: 'Framework',
    about: 'Profilo',
    grid: 'Griglia',
    dark: 'Modalità scura',
    light: 'Modalità chiara',
    brandAria: 'DOTZERO — laboratorio personale di ricerca',
    signTitle: 'Segno DOTZERO',
  },
  de: {
    index: 'Index',
    foundation: 'Foundation',
    identity: 'CD / CI',
    framework: 'Framework',
    about: 'Profil',
    grid: 'Raster',
    dark: 'Dunkelmodus',
    light: 'Hellmodus',
    brandAria: 'DOTZERO — persönliches Forschungslabor',
    signTitle: 'DOTZERO Zeichen',
  },
  en: {
    index: 'Index',
    foundation: 'Foundation',
    identity: 'CD / CI',
    framework: 'Framework',
    about: 'About',
    grid: 'Grid',
    dark: 'Dark mode',
    light: 'Light mode',
    brandAria: 'DOTZERO — personal research lab',
    signTitle: 'DOTZERO sign',
  },
};

interface DotzeroHeaderProps {
  colorMode: ColorMode;
  onColorModeChange: (mode: ColorMode) => void;
  showGridLines: boolean;
  onToggleGridLines: () => void;
}

export const DotzeroHeader: React.FC<DotzeroHeaderProps> = ({
  colorMode,
  onColorModeChange,
  showGridLines,
  onToggleGridLines,
}) => {
  const { language, setLanguage } = useLanguage();
  const t = COPY[language];
  const [compactBrand, setCompactBrand] = useState(false);

  useEffect(() => {
    const syncBrandState = () => setCompactBrand(window.scrollY > 32);
    syncBrandState();
    window.addEventListener('scroll', syncBrandState, { passive: true });
    return () => window.removeEventListener('scroll', syncBrandState);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b dz-border bg-[color:var(--bg)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#index" className="dz-brand-lockup" aria-label={t.brandAria}>
          <span className="dz-brand-state" data-compact={compactBrand}>
            {compactBrand ? (
              <DotzeroMark
                key="sign"
                size={24}
                className="dz-brand-state__item dz-brand-state__mark"
                title={t.signTitle}
              />
            ) : (
              <DotzeroLogotype
                key="logotype"
                className="dz-brand-state__item w-[126px] sm:w-[148px]"
                title={t.brandAria}
              />
            )}
          </span>
        </a>

        <nav className="hidden items-center gap-6 font-mono text-[9px] uppercase tracking-[0.18em] md:flex">
          <a href="#projects" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-45"><DotMarker size="xs" />{t.index}</a>
          <a href="#foundation" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-45"><DotMarker size="xs" />{t.foundation}</a>
          <a href="#identity" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-45"><FieldGlyph size={8} />{t.identity}</a>
          <a href="#atlas-engine" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-45"><SystemGlyph size={14} />{t.framework}</a>
          <a href="#about" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-45"><DotMarker size="xs" />{t.about}</a>
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden xl:block">
            <TypographySwitch compact />
          </div>
          <div className="hidden border dz-border sm:flex">
            {(['it', 'de', 'en'] as Language[]).map((lng) => (
              <button
                key={lng}
                onClick={() => setLanguage(lng)}
                className={`px-2 py-1 font-mono text-[10px] font-bold uppercase ${
                  language === lng ? 'bg-[var(--text)] text-[var(--bg)]' : 'dz-surface-raised dz-text'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>

          <button
            onClick={onToggleGridLines}
            className={`border dz-border p-1.5 ${
              showGridLines ? 'bg-[var(--text)] text-[var(--bg)]' : 'dz-surface-raised dz-text'
            }`}
            title={t.grid}
          >
            <Grid3X3 className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => onColorModeChange(colorMode === 'light' ? 'dark' : 'light')}
            className="border dz-border dz-surface-raised dz-text p-1.5"
            title={colorMode === 'light' ? t.dark : t.light}
          >
            {colorMode === 'light' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

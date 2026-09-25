import React from 'react';
import { Grid3X3, Moon, Sun } from 'lucide-react';
import { ColorMode, Language } from '../types';
import { useLanguage } from '../context/LanguageContext';

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b dz-border bg-[color:var(--bg)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#index" className="font-display text-lg font-extrabold tracking-[-0.07em] uppercase sm:text-xl">
          dotzero<span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-7 font-mono text-[9px] uppercase tracking-[0.18em] md:flex">
          <a href="#projects" className="transition-opacity hover:opacity-45">Index</a>
          <a href="#method" className="transition-opacity hover:opacity-45">Method</a>
          <a href="#about" className="transition-opacity hover:opacity-45">About</a>
          <a href="#contact" className="transition-opacity hover:opacity-45">Contact</a>
        </nav>

        <div className="flex items-center gap-1.5">
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
            title="Grid"
          >
            <Grid3X3 className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => onColorModeChange(colorMode === 'light' ? 'dark' : 'light')}
            className="border dz-border dz-surface-raised dz-text p-1.5"
            title={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {colorMode === 'light' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

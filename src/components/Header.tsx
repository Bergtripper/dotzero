import React, { useState, useEffect } from 'react';
import { Grid3X3, Menu, X, Sparkles } from 'lucide-react';
import { ThemeVariant, Language } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../translations';

interface HeaderProps {
  currentTheme: ThemeVariant;
  onThemeChange: (theme: ThemeVariant) => void;
  showGridLines: boolean;
  onToggleGridLines: () => void;
  onNavigateToModulor?: () => void;
  onNavigateToMusa?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTheme,
  onThemeChange,
  showGridLines,
  onToggleGridLines,
  onNavigateToModulor,
  onNavigateToMusa,
}) => {
  const navigateToSubpage = onNavigateToModulor || onNavigateToMusa;
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  const t = UI_TEXT.header;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString(language === 'de' ? 'de-DE' : language === 'en' ? 'en-US' : 'it-IT', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.manifesto[language], href: '#manifesto', color: '#DE3831' },
    { label: t.nav.theory[language], href: '#teoria', color: '#F7B801' },
    { label: t.nav.projects[language], href: '#progetti', color: '#1350B0' },
    { label: t.nav.laboratory[language], href: '#laboratorio', color: '#121212' },
    { label: t.nav.contact[language], href: '#contatti', color: '#DE3831' },
  ];

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#F6F4EE]/95 backdrop-blur-sm border-[#121212] py-2'
          : 'bg-[#F6F4EE] border-[#121212] py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="dotzero home"
          >
            <div className="flex items-center space-x-1">
              <span className="w-5 h-5 rounded-full bg-[#DE3831] inline-block border border-[#121212] transition-transform duration-300 group-hover:scale-110" />
              <span className="w-4 h-4 bg-[#1350B0] inline-block border border-[#121212] transition-transform duration-300 group-hover:rotate-45" />
              <div className="w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[15px] border-b-[#F7B801] transition-transform duration-300 group-hover:-translate-y-0.5" />
            </div>
            <div className="flex items-baseline tracking-tighter">
              <span className="text-xl sm:text-2xl font-extrabold tracking-[-0.05em] uppercase font-display">
                dot
              </span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#DE3831]">
                zero
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#121212] ml-1 mb-1" />
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-4 text-xs font-mono border-l border-r border-[#121212] px-4 py-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#DE3831] rounded-full animate-ping" />
              <span>{t.origin[language]}</span>
            </span>
            <span className="text-zinc-400">/</span>
            <span>{t.gridStatus[language]}</span>
            <span className="text-zinc-400">/</span>
            <span className="font-semibold">{timeString} CET</span>
          </div>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${link.href.replace('#', '')}`}
                className="px-2.5 py-1.5 text-[#121212] hover:bg-[#121212] hover:text-white transition-colors duration-150 border border-transparent hover:border-[#121212] flex items-center gap-1.5 uppercase tracking-wider text-xs font-mono"
              >
                <span
                  className="w-1.5 h-1.5 inline-block"
                  style={{ backgroundColor: link.color }}
                />
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {navigateToSubpage && (
              <button
                type="button"
                id="btn-nav-modulor-studio"
                onClick={navigateToSubpage}
                className="px-3 py-1.5 bg-[#121212] text-white hover:bg-[#DE3831] font-mono text-xs uppercase tracking-wider font-bold border border-[#121212] shadow-[2px_2px_0px_0px_#DE3831] flex items-center gap-1.5 transition-all"
                title="Apri la sottopagina MODULOR STUDIO"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F7B801] animate-spin" style={{ animationDuration: '6s' }} />
                <span>MODULOR STUDIO</span>
              </button>
            )}

            <div
              id="language-switcher"
              className="flex items-center border border-[#121212] bg-white p-0.5"
              role="group"
              aria-label="Language Switcher"
            >
              {(['it', 'de', 'en'] as Language[]).map((lng) => (
                <button
                  key={lng}
                  type="button"
                  id={`lang-btn-${lng}`}
                  onClick={() => setLanguage(lng)}
                  className={`px-2 py-1 text-xs font-mono uppercase font-bold transition-colors ${
                    language === lng
                      ? 'bg-[#121212] text-white'
                      : 'text-[#121212] hover:bg-zinc-100'
                  }`}
                  aria-pressed={language === lng}
                  title={`Lingua / Sprache / Language: ${lng.toUpperCase()}`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              id="toggle-grid-lines"
              onClick={onToggleGridLines}
              className={`p-1.5 border border-[#121212] text-xs font-mono hidden sm:flex items-center gap-1 transition-all ${
                showGridLines
                  ? 'bg-[#121212] text-white'
                  : 'bg-white text-[#121212] hover:bg-[#ECE8DD]'
              }`}
              title={t.gridTooltip[language]}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>{t.gridButton[language]}</span>
            </button>

            <div className="hidden md:flex items-center border border-[#121212] bg-white p-0.5">
              <button
                type="button"
                id="theme-classic"
                onClick={() => onThemeChange('classic')}
                className={`px-2 py-1 text-xs font-mono uppercase transition-colors ${
                  currentTheme === 'classic'
                    ? 'bg-[#DE3831] text-white font-bold'
                    : 'text-[#121212] hover:bg-zinc-100'
                }`}
                title="Classico Bauhaus"
              >
                {t.themeBauhaus[language]}
              </button>
              <button
                type="button"
                id="theme-monochrome"
                onClick={() => onThemeChange('monochrome')}
                className={`px-2 py-1 text-xs font-mono uppercase transition-colors ${
                  currentTheme === 'monochrome'
                    ? 'bg-[#121212] text-white font-bold'
                    : 'text-[#121212] hover:bg-zinc-100'
                }`}
                title="Monocromo"
              >
                {t.themeMono[language]}
              </button>
              <button
                type="button"
                id="theme-destijl"
                onClick={() => onThemeChange('destijl')}
                className={`px-2 py-1 text-xs font-mono uppercase transition-colors ${
                  currentTheme === 'destijl'
                    ? 'bg-[#1350B0] text-white font-bold'
                    : 'text-[#121212] hover:bg-zinc-100'
                }`}
                title="De Stijl"
              >
                {t.themeDeStijl[language]}
              </button>
            </div>

            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 border border-[#121212] bg-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-dropdown"
            className="lg:hidden mt-3 pt-3 pb-2 border-t-2 border-[#121212] flex flex-col gap-2 bg-[#F6F4EE]"
          >
            {navigateToSubpage && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateToSubpage();
                }}
                className="py-2.5 px-3 border-2 border-[#DE3831] bg-[#121212] text-white font-mono text-xs uppercase flex items-center justify-between font-bold"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F7B801]" />
                  <span>MODULOR STUDIO</span>
                </span>
                <span className="text-[#DE3831] font-bold">→</span>
              </button>
            )}

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 border border-[#121212] bg-white text-[#121212] font-mono text-xs uppercase flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span
                  className="w-2.5 h-2.5 border border-[#121212]"
                  style={{ backgroundColor: link.color }}
                />
              </a>
            ))}

            <div className="flex gap-1 pt-2">
              <button
                type="button"
                onClick={() => {
                  onThemeChange('classic');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-1 text-center font-mono text-xs border border-[#121212] bg-[#DE3831] text-white font-bold"
              >
                Bauhaus
              </button>
              <button
                type="button"
                onClick={() => {
                  onThemeChange('monochrome');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-1 text-center font-mono text-xs border border-[#121212] bg-[#121212] text-white font-bold"
              >
                Mono
              </button>
              <button
                type="button"
                onClick={() => {
                  onThemeChange('destijl');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-1 text-center font-mono text-xs border border-[#121212] bg-[#1350B0] text-white font-bold"
              >
                De Stijl
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
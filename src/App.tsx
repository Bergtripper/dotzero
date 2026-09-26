/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ColorMode, ThemeVariant } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { TypographyProvider } from './context/TypographyContext';
import { Header } from './components/Header';
import { DotzeroHeader } from './components/DotzeroHeader';
import { DotzeroIndex } from './components/DotzeroIndex';
import { DotzeroFooter } from './components/DotzeroFooter';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { ColorShapeTheory } from './components/ColorShapeTheory';
import { ProjectsGallery } from './components/ProjectsGallery';
import { BauhausLaboratory } from './components/BauhausLaboratory';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ModulorStudio } from './components/ModulorStudio';
import { UniversalSystems } from './components/UniversalSystems';

function MainAppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'modulor' | 'bauhaus' | 'universal'>('home');
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>('classic');
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const [showGridLines, setShowGridLines] = useState<boolean>(true);

  // Sync hash routing if user comes with #modulor or #modulor-studio
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (
        hash === '#modulor' ||
        hash === '#modulor-studio' ||
        hash === '#modulor-fx' ||
        hash === '#musa' ||
        hash === '#musa-studio'
      ) {
        setCurrentPage('modulor');
      } else if (hash === '#bauhaus' || hash === '#bauhaus-laboratory') {
        setCurrentPage('bauhaus');
      } else if (
        hash === '#universal-systems' ||
        hash === '#universal-type' ||
        hash === '#universal-type-lab'
      ) {
        setCurrentPage('universal');
      } else if (hash === '#home' || hash === '#index' || hash === '') {
        setCurrentPage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToModulor = () => {
    setCurrentPage('modulor');
    window.location.hash = 'modulor-studio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = 'index';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic theme wrapper classes
  const themeClass =
    currentTheme === 'monochrome'
      ? 'theme-monochrome grayscale'
      : currentTheme === 'destijl'
      ? 'theme-destijl font-bold'
      : 'theme-classic';

  if (currentPage === 'modulor') {
    return <ModulorStudio onBack={navigateToHome} />;
  }

  if (currentPage === 'universal') {
    return <UniversalSystems onBack={navigateToHome} />;
  }

  if (currentPage === 'bauhaus') {
    return (
      <div data-color-mode={colorMode} className={`min-h-screen dz-bg dz-text relative ${themeClass}`}>
        {showGridLines && (
          <div
            id="architectural-grid-overlay"
            className="fixed inset-0 pointer-events-none z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-6 lg:grid-cols-12 opacity-10"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-full border-r dz-grid-line first:border-l" />
            ))}
          </div>
        )}

        <Header
          currentTheme={currentTheme}
          onThemeChange={setCurrentTheme}
          colorMode={colorMode}
          onColorModeChange={setColorMode}
          showGridLines={showGridLines}
          onToggleGridLines={() => setShowGridLines(!showGridLines)}
          onNavigateToModulor={navigateToModulor}
        />

        <main id="main-content">
          <Hero onNavigateToModulor={navigateToModulor} />
          <Manifesto />
          <ColorShapeTheory />
          <ProjectsGallery />
          <BauhausLaboratory />
          <ContactSection />
        </main>

        <Footer onNavigateToModulor={navigateToModulor} />
      </div>
    );
  }

  return (
    <div data-color-mode={colorMode} className="min-h-screen dz-bg dz-text relative">
      {showGridLines && (
        <div
          id="dotzero-grid-overlay"
          className="fixed inset-0 pointer-events-none z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-6 lg:grid-cols-12 opacity-100"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full border-r dz-grid-line first:border-l" />
          ))}
        </div>
      )}

      <DotzeroHeader
        colorMode={colorMode}
        onColorModeChange={setColorMode}
        showGridLines={showGridLines}
        onToggleGridLines={() => setShowGridLines(!showGridLines)}
      />

      <DotzeroIndex />

      <DotzeroFooter />
    </div>
  );
}

export default function App() {
  return (
    <TypographyProvider>
      <LanguageProvider>
        <MainAppContent />
      </LanguageProvider>
    </TypographyProvider>
  );
}

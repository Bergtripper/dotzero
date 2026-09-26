import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, CircleDot, Grid3X3, Type } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface UniversalTypeLabProps {
  onBack: () => void;
}

type LabSystem = 'custom' | 'estate';
type EstateFace = 'universal' | 'fonetik' | 'shadow';

const COPY = {
  it: {
    kicker: 'PROJECT 04 / TYPOGRAPHIC RESEARCH',
    title: 'UNIVERSAL TYPE LAB',
    intro: 'Un laboratorio per confrontare un sistema geometrico originale DOTZERO con le reinterpretazioni ufficiali autorizzate dall’Herbert Bayer Estate.',
    custom: 'CUSTOM SVG SYSTEM',
    estate: 'BAYER ESTATE SYSTEM',
    customDesc: 'Sette glifi costruiti da primitive condivise: cerchi, archi, aste e diagonali. Nessun font: ogni segno è un oggetto vettoriale.',
    estateDesc: 'Modalità predisposta per i webfont P22 Bauhaus autorizzati dall’Herbert Bayer Estate. Per il rendering autentico servono i file webfont licenziati.',
    loaded: 'OFFICIAL WEBFONT LOADED',
    missing: 'LICENSED WEBFONT FILE REQUIRED',
    back: 'BACK TO INDEX',
    construction: 'CONSTRUCTION',
    resolved: 'RESOLVED',
  },
  de: {
    kicker: 'PROJECT 04 / TYPOGRAPHIC RESEARCH',
    title: 'UNIVERSAL TYPE LAB',
    intro: 'Ein Labor zum Vergleich eines eigenen geometrischen DOTZERO-Systems mit den offiziell vom Herbert Bayer Estate autorisierten Interpretationen.',
    custom: 'CUSTOM SVG SYSTEM',
    estate: 'BAYER ESTATE SYSTEM',
    customDesc: 'Sieben Glyphen aus gemeinsamen geometrischen Grundformen: Kreise, Bögen, Stäbe und Diagonalen. Keine Schriftdatei – jedes Zeichen ist ein Vektorobjekt.',
    estateDesc: 'Vorbereitet für die von Herbert Bayer Estate autorisierten P22-Bauhaus-Webfonts. Für die authentische Darstellung sind lizenzierte Webfont-Dateien erforderlich.',
    loaded: 'OFFICIAL WEBFONT LOADED',
    missing: 'LICENSED WEBFONT FILE REQUIRED',
    back: 'BACK TO INDEX',
    construction: 'CONSTRUCTION',
    resolved: 'RESOLVED',
  },
  en: {
    kicker: 'PROJECT 04 / TYPOGRAPHIC RESEARCH',
    title: 'UNIVERSAL TYPE LAB',
    intro: 'A laboratory comparing an original DOTZERO geometric system with the official interpretations authorized by the Herbert Bayer Estate.',
    custom: 'CUSTOM SVG SYSTEM',
    estate: 'BAYER ESTATE SYSTEM',
    customDesc: 'Seven glyphs built from shared primitives: circles, arcs, stems and diagonals. No font file: every sign is a vector object.',
    estateDesc: 'Prepared for the P22 Bauhaus webfonts authorized by the Herbert Bayer Estate. Licensed webfont files are required for authentic rendering.',
    loaded: 'OFFICIAL WEBFONT LOADED',
    missing: 'LICENSED WEBFONT FILE REQUIRED',
    back: 'BACK TO INDEX',
    construction: 'CONSTRUCTION',
    resolved: 'RESOLVED',
  },
};

const ESTATE_FONTS: Record<EstateFace, { label: string; family: string }> = {
  universal: { label: 'UNIVERSAL', family: '"P22 Bauhaus Bayer Universal"' },
  fonetik: { label: 'FONETIK', family: '"P22 Bauhaus Bayer Fonetik"' },
  shadow: { label: 'SHADOW', family: '"P22 Bauhaus Bayer Shadow"' },
};

const glyphStroke = 'currentColor';
const strokeWidth = 12;

const CustomGlyph: React.FC<{ glyph: string }> = ({ glyph }) => {
  const common = { fill: 'none', stroke: glyphStroke, strokeWidth, strokeLinecap: 'butt' as const, strokeLinejoin: 'miter' as const };

  switch (glyph) {
    case 'd':
      return <g><circle cx="48" cy="58" r="28" {...common}/><line x1="76" y1="12" x2="76" y2="88" {...common}/></g>;
    case 'o':
      return <circle cx="50" cy="58" r="28" {...common}/>;
    case 't':
      return <g><line x1="50" y1="18" x2="50" y2="88" {...common}/><line x1="26" y1="36" x2="74" y2="36" {...common}/></g>;
    case 'z':
      return <g><line x1="22" y1="32" x2="78" y2="32" {...common}/><line x1="78" y1="32" x2="22" y2="84" {...common}/><line x1="22" y1="84" x2="78" y2="84" {...common}/></g>;
    case 'e':
      return <g><path d="M76 62 A28 28 0 1 0 70 77" {...common}/><line x1="23" y1="58" x2="76" y2="58" {...common}/></g>;
    case 'r':
      return <g><line x1="28" y1="32" x2="28" y2="88" {...common}/><path d="M28 56 A28 28 0 0 1 70 34" {...common}/></g>;
    case '.':
      return <circle cx="50" cy="80" r="7" fill="currentColor"/>;
    default:
      return null;
  }
};

const CUSTOM_WORD = ['d', 'o', 't', 'z', 'e', 'r', 'o', '.'];

export const UniversalTypeLab: React.FC<UniversalTypeLabProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const t = COPY[language];
  const [system, setSystem] = useState<LabSystem>('custom');
  const [estateFace, setEstateFace] = useState<EstateFace>('universal');
  const [resolved, setResolved] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  const estate = ESTATE_FONTS[estateFace];

  useEffect(() => {
    const check = () => {
      if (!document.fonts) return;
      setFontLoaded(document.fonts.check(`16px ${estate.family}`));
    };
    check();
    document.fonts?.ready.then(check).catch(() => undefined);
  }, [estate.family]);

  const constructionOffsets = useMemo(() => [
    { x: -12, y: 18, r: -4, s: 1.15 },
    { x: 6, y: -14, r: 3, s: 0.92 },
    { x: -4, y: 16, r: -3, s: 0.88 },
    { x: 10, y: -18, r: -5, s: 1.0 },
    { x: -8, y: 10, r: 4, s: 0.9 },
    { x: 8, y: 22, r: 6, s: 0.86 },
    { x: 14, y: -16, r: 0, s: 1.18 },
    { x: 8, y: 18, r: 0, s: 1.0 },
  ], []);

  return (
    <div className="min-h-screen dz-bg dz-text">
      <header className="sticky top-0 z-40 border-b dz-border bg-[var(--bg)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={onBack} className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em]">
            <ArrowLeft className="h-3.5 w-3.5" /> {t.back}
          </button>
          <div className="font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">DOTZERO / TYPE RESEARCH / 04</div>
        </div>
      </header>

      <main>
        <section className="border-b dz-border">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] dz-text-muted">{t.kicker}</div>
            <h1 className="dz-h1 mt-5 text-[clamp(3.5rem,10vw,9rem)] uppercase">{t.title}</h1>
            <p className="dz-body-strong mt-8 max-w-3xl">{t.intro}</p>
          </div>
        </section>

        <section className="border-b dz-border">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setSystem('custom')} className={`universal-tab ${system === 'custom' ? 'is-active' : ''}`}>
                <Grid3X3 className="h-3.5 w-3.5" /> {t.custom}
              </button>
              <button onClick={() => setSystem('estate')} className={`universal-tab ${system === 'estate' ? 'is-active' : ''}`}>
                <Type className="h-3.5 w-3.5" /> {t.estate}
              </button>
            </div>
          </div>
        </section>

        {system === 'custom' ? (
          <section>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <div className="font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">SYSTEM / CUSTOM</div>
                  <p className="dz-body mt-4 text-sm">{t.customDesc}</p>
                  <button onClick={() => setResolved((value) => !value)} className="universal-state-toggle mt-7">
                    <CircleDot className="h-3.5 w-3.5" />
                    {resolved ? t.construction : t.resolved}
                  </button>
                </div>

                <div className="lg:col-span-9">
                  <div className="universal-svg-stage">
                    <div className="universal-svg-grid" aria-hidden="true" />
                    <div className={`universal-svg-word ${resolved ? 'is-resolved' : 'is-construction'}`}>
                      {CUSTOM_WORD.map((glyph, index) => {
                        const offset = constructionOffsets[index];
                        return (
                          <svg
                            key={`${glyph}-${index}`}
                            viewBox="0 0 100 100"
                            className={`universal-svg-glyph ${index === 6 || glyph === '.' ? 'is-accent' : ''}`}
                            style={{
                              '--cx': `${offset.x}px`,
                              '--cy': `${offset.y}px`,
                              '--cr': `${offset.r}deg`,
                              '--cs': offset.s,
                            } as React.CSSProperties}
                            aria-hidden="true"
                          >
                            <CustomGlyph glyph={glyph} />
                          </svg>
                        );
                      })}
                    </div>
                    <div className="universal-svg-caption">8 GLYPHS / 6 UNIQUE FORMS / SHARED GEOMETRY</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <div className="font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">SYSTEM / BAYER ESTATE</div>
                  <p className="dz-body mt-4 text-sm">{t.estateDesc}</p>

                  <div className="mt-7 grid gap-2">
                    {(Object.keys(ESTATE_FONTS) as EstateFace[]).map((face) => (
                      <button
                        key={face}
                        onClick={() => setEstateFace(face)}
                        className={`universal-face-option ${estateFace === face ? 'is-active' : ''}`}
                      >
                        {ESTATE_FONTS[face].label}
                      </button>
                    ))}
                  </div>

                  <div className={`universal-font-status mt-6 ${fontLoaded ? 'is-loaded' : 'is-missing'}`}>
                    <span className="h-2 w-2 rounded-full bg-current" />
                    {fontLoaded ? t.loaded : t.missing}
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="universal-estate-stage">
                    <div className="font-mono text-[8px] uppercase tracking-[0.16em] dz-text-muted">P22 BAUHAUS BAYER / {estate.label}</div>
                    <div className="universal-estate-word" style={{ fontFamily: `${estate.family}, var(--font-display)` }}>
                      dotzero.
                    </div>
                    <div className="universal-estate-specimen" style={{ fontFamily: `${estate.family}, var(--font-display)` }}>
                      abcdefghijklmnopqrstuvwxyz 0123456789
                    </div>
                    {!fontLoaded && (
                      <div className="universal-license-note">
                        The interface is ready for the licensed P22 webfont. Until the WOFF/WOFF2 asset is supplied, this panel intentionally falls back to the active DOTZERO typeface.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

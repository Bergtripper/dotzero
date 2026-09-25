import React, { useState } from 'react';

interface GlyphSpec {
  char: string;
  key: string;
  framed?: boolean;
  accent?: boolean;
  construction: { x: number; y: number; size: number; rotate?: number };
  wordmark: { x: number; y: number; size: number; rotate?: number };
}

const GLYPHS: GlyphSpec[] = [
  {
    char: 'd',
    key: 'd',
    construction: { x: 2, y: 30, size: 31, rotate: -1 },
    wordmark: { x: 1, y: 37, size: 25 },
  },
  {
    char: 'o',
    key: 'o1',
    construction: { x: 18, y: 16, size: 24, rotate: 2 },
    wordmark: { x: 14, y: 37, size: 25 },
  },
  {
    char: 't',
    key: 't',
    framed: true,
    construction: { x: 34, y: 34, size: 24, rotate: -3 },
    wordmark: { x: 27, y: 37, size: 25 },
  },
  {
    char: 'z',
    key: 'z',
    construction: { x: 47, y: 10, size: 27, rotate: -5 },
    wordmark: { x: 40, y: 37, size: 25 },
  },
  {
    char: 'e',
    key: 'e',
    framed: true,
    construction: { x: 61, y: 30, size: 23, rotate: 3 },
    wordmark: { x: 53, y: 37, size: 25 },
  },
  {
    char: 'r',
    key: 'r',
    construction: { x: 73, y: 39, size: 22, rotate: 6 },
    wordmark: { x: 66, y: 37, size: 25 },
  },
  {
    char: 'o',
    key: 'zero',
    accent: true,
    construction: { x: 82, y: 9, size: 32, rotate: 0 },
    wordmark: { x: 77.5, y: 37, size: 25 },
  },
  {
    char: '.',
    key: 'period',
    accent: true,
    construction: { x: 94, y: 61, size: 10, rotate: 0 },
    wordmark: { x: 91.5, y: 52, size: 12 },
  },
];

export const DotzeroTypographicSpecimen: React.FC = () => {
  const [mode, setMode] = useState<'construction' | 'wordmark'>('construction');
  const [activeGlyph, setActiveGlyph] = useState<number | null>(null);

  const toggleMode = () => {
    setMode((current) => current === 'construction' ? 'wordmark' : 'construction');
    setActiveGlyph(null);
  };

  return (
    <section className={`dz-specimen-stage dz-specimen-stage--${mode}`} aria-label="DOTZERO typographic system">
      <div className="dz-specimen-stage__grid" aria-hidden="true" />
      <div className="dz-specimen-stage__meta dz-specimen-stage__meta--tl">
        STATE / {mode === 'construction' ? '01 CONSTRUCTION' : '02 WORDMARK'}
      </div>
      <div className="dz-specimen-stage__meta dz-specimen-stage__meta--tr">
        NODE 00 / TYPE SYSTEM
      </div>
      <div className="dz-specimen-stage__axis dz-specimen-stage__axis--x" aria-hidden="true" />
      <div className="dz-specimen-stage__axis dz-specimen-stage__axis--y" aria-hidden="true" />

      <h1 className="sr-only">dotzero.</h1>

      {GLYPHS.map((glyph, index) => {
        const position = mode === 'construction' ? glyph.construction : glyph.wordmark;
        const isZero = glyph.key === 'zero';

        return (
          <button
            key={glyph.key}
            type="button"
            className={[
              'dz-specimen-glyph-node',
              glyph.framed ? 'is-framed' : '',
              glyph.accent ? 'is-accent' : '',
              activeGlyph === index ? 'is-active' : '',
              isZero ? 'is-zero' : '',
            ].filter(Boolean).join(' ')}
            style={{
              '--x': `${position.x}%`,
              '--y': `${position.y}%`,
              '--size': `${position.size}%`,
              '--rotate': `${position.rotate ?? 0}deg`,
            } as React.CSSProperties}
            onMouseEnter={() => setActiveGlyph(index)}
            onMouseLeave={() => setActiveGlyph(null)}
            onFocus={() => setActiveGlyph(index)}
            onBlur={() => setActiveGlyph(null)}
            onClick={isZero ? toggleMode : undefined}
            aria-label={isZero ? `Toggle to ${mode === 'construction' ? 'wordmark' : 'construction'} state` : `Glyph ${glyph.key}`}
          >
            <span className="dz-specimen-glyph-node__char">{glyph.char}</span>
            <span className="dz-specimen-glyph-node__index">{String(index + 1).padStart(2, '0')}</span>
          </button>
        );
      })}

      <button type="button" className="dz-specimen-stage__toggle" onClick={toggleMode}>
        {mode === 'construction' ? 'ALIGN WORDMARK →' : '← OPEN SYSTEM'}
      </button>

      <div className="dz-specimen-stage__readout" aria-live="polite">
        <span>GRID / 12</span>
        <span>{activeGlyph === null ? 'GLYPH / IDLE' : `GLYPH / ${GLYPHS[activeGlyph].key.toUpperCase()}`}</span>
        <span>{mode === 'construction' ? 'SYSTEM / OPEN' : 'SYSTEM / ALIGNED'}</span>
      </div>
    </section>
  );
};

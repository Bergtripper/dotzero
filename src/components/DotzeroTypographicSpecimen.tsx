import React, { useLayoutEffect, useRef, useState } from 'react';

interface GlyphSpec {
  char: string;
  key: string;
  framed?: boolean;
  accent?: boolean;
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
}

const GLYPHS: GlyphSpec[] = [
  { char: 'd', key: 'd', x: -1, y: 5, scale: 1.34 },
  { char: 'o', key: 'o1', x: 1, y: -2, rotate: -2, scale: 0.92 },
  { char: 't', key: 't', x: 0, y: 8, rotate: 2, framed: true, scale: 0.86 },
  { char: 'z', key: 'z', x: 2, y: -7, rotate: -4, scale: 0.95 },
  { char: 'e', key: 'e', x: -1, y: 4, rotate: 2, framed: true, scale: 0.9 },
  { char: 'r', key: 'r', x: 1, y: 10, rotate: 5, scale: 0.83 },
  { char: 'o', key: 'zero', x: 4, y: -5, accent: true, scale: 1.48 },
];

export const DotzeroTypographicSpecimen: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);
  const [activeGlyph, setActiveGlyph] = useState<number | null>(null);
  const [mode, setMode] = useState<'construction' | 'wordmark'>('construction');

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const word = wordRef.current;
    if (!frame || !word) return;

    let raf = 0;

    const fit = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const available = frame.getBoundingClientRect().width;
        if (available <= 0) return;

        word.style.fontSize = '100px';
        const measured = word.getBoundingClientRect().width;
        if (measured <= 0) return;

        // Extra margin because construction mode intentionally breaks the baseline.
        const fitted = Math.max(1, (available / measured) * 83.5);
        word.style.fontSize = `${fitted}px`;
      });
    };

    const observer = new ResizeObserver(fit);
    observer.observe(frame);
    fit();
    document.fonts?.ready.then(fit).catch(() => undefined);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  const toggleMode = () => {
    setMode((current) => current === 'construction' ? 'wordmark' : 'construction');
    setActiveGlyph(null);
  };

  return (
    <div
      ref={frameRef}
      className={`dz-specimen dz-specimen--${mode}`}
      data-mode={mode}
      data-active-glyph={activeGlyph ?? 'none'}
      onMouseLeave={() => setActiveGlyph(null)}
    >
      <div className="dz-specimen-axis dz-specimen-axis--x" aria-hidden="true" />
      <div className="dz-specimen-axis dz-specimen-axis--y" aria-hidden="true" />
      <div className="dz-specimen-guide dz-specimen-guide--cap" aria-hidden="true" />
      <div className="dz-specimen-guide dz-specimen-guide--base" aria-hidden="true" />

      <div className="dz-specimen-meta dz-specimen-meta--left" aria-hidden="true">
        STATE / {mode === 'construction' ? '01 CONSTRUCTION' : '02 WORDMARK'}
      </div>
      <div className="dz-specimen-meta dz-specimen-meta--right" aria-hidden="true">
        TYPE SYSTEM / NODE 00
      </div>

      <h1 ref={wordRef} className="dz-specimen-word" aria-label="dotzero.">
        <span className="dz-specimen-glyphs" aria-hidden="true">
          {GLYPHS.map((glyph, index) => (
            <span
              key={glyph.key}
              className={[
                'dz-specimen-glyph',
                glyph.framed ? 'is-framed' : '',
                glyph.accent ? 'is-accent' : '',
                activeGlyph === index ? 'is-active' : '',
              ].filter(Boolean).join(' ')}
              data-glyph={glyph.key}
              data-index={index}
              onMouseEnter={() => setActiveGlyph(index)}
              onClick={glyph.key === 'zero' ? toggleMode : undefined}
              role={glyph.key === 'zero' ? 'button' : undefined}
              tabIndex={glyph.key === 'zero' ? 0 : undefined}
              onKeyDown={glyph.key === 'zero' ? (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  toggleMode();
                }
              } : undefined}
              style={{
                '--glyph-x': `${glyph.x ?? 0}%`,
                '--glyph-y': `${glyph.y ?? 0}%`,
                '--glyph-rotate': `${glyph.rotate ?? 0}deg`,
                '--glyph-scale': glyph.scale ?? 1,
              } as React.CSSProperties}
            >
              {glyph.char}
              <span className="dz-specimen-index">{String(index + 1).padStart(2, '0')}</span>
            </span>
          ))}
          <span className="dz-specimen-period" data-glyph="period">.</span>
        </span>
      </h1>

      <div className="dz-specimen-zero-callout" aria-hidden="true">
        ZERO / RESET
      </div>

      <div className="dz-specimen-readout" aria-live="polite">
        <span>NODE 00</span>
        <span>{activeGlyph === null ? 'GLYPH / IDLE' : `GLYPH / ${GLYPHS[activeGlyph].key.toUpperCase()}`}</span>
        <span>{mode === 'construction' ? 'SYSTEM / OPEN' : 'SYSTEM / ALIGNED'}</span>
      </div>
    </div>
  );
};

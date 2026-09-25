import React, { useLayoutEffect, useRef, useState } from 'react';

interface GlyphSpec {
  char: string;
  key: string;
  framed?: boolean;
  accent?: boolean;
  offsetY?: number;
  scale?: number;
}

const GLYPHS: GlyphSpec[] = [
  { char: 'd', key: 'd', scale: 1.03 },
  { char: 'o', key: 'o1', offsetY: 3 },
  { char: 't', key: 't', framed: true, offsetY: -2 },
  { char: 'z', key: 'z', offsetY: 4 },
  { char: 'e', key: 'e', framed: true, offsetY: -1 },
  { char: 'r', key: 'r', offsetY: 3 },
  { char: 'o', key: 'zero', accent: true, scale: 1.08, offsetY: -2 },
];

export const DotzeroTypographicSpecimen: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);
  const [activeGlyph, setActiveGlyph] = useState<number | null>(null);

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

        // Keep a deliberate editorial margin for transformed glyphs and frames.
        const fitted = Math.max(1, (available / measured) * 92.5);
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

  return (
    <div
      ref={frameRef}
      className="dz-specimen"
      data-active-glyph={activeGlyph ?? 'none'}
      onMouseLeave={() => setActiveGlyph(null)}
    >
      <div className="dz-specimen-guide dz-specimen-guide--cap" aria-hidden="true" />
      <div className="dz-specimen-guide dz-specimen-guide--base" aria-hidden="true" />

      <div className="dz-specimen-meta dz-specimen-meta--left" aria-hidden="true">
        TYPE SYSTEM / 01
      </div>
      <div className="dz-specimen-meta dz-specimen-meta--right" aria-hidden="true">
        LOWERCASE / GEOMETRIC
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
              style={{
                '--glyph-y': `${glyph.offsetY ?? 0}%`,
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

      <div className="dz-specimen-readout" aria-live="polite">
        <span>NODE 00</span>
        <span>{activeGlyph === null ? 'GLYPH / IDLE' : `GLYPH / ${GLYPHS[activeGlyph].key.toUpperCase()}`}</span>
        <span>GRID / 12</span>
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';

interface GlyphSpec {
  char: string;
  key: string;
  framed?: boolean;
  accent?: boolean;
  construction: { x: number; y: number; size: number; rotate?: number };
  wordmark: { x: number; y: number; size: number; rotate?: number };
  drift: number;
}

const GLYPHS: GlyphSpec[] = [
  { char: 'd', key: 'd', drift: 1.0, construction: { x: 7, y: 49, size: 29, rotate: -2 }, wordmark: { x: 7, y: 52, size: 23 } },
  { char: 'o', key: 'o1', drift: -0.8, construction: { x: 21, y: 31, size: 23, rotate: 2 }, wordmark: { x: 20, y: 52, size: 23 } },
  { char: 't', key: 't', drift: 1.35, framed: true, construction: { x: 35, y: 54, size: 22, rotate: -4 }, wordmark: { x: 33, y: 52, size: 23 } },
  { char: 'z', key: 'z', drift: -1.15, construction: { x: 49, y: 28, size: 25, rotate: -5 }, wordmark: { x: 46, y: 52, size: 23 } },
  { char: 'e', key: 'e', drift: 0.75, framed: true, construction: { x: 62, y: 49, size: 22, rotate: 3 }, wordmark: { x: 59, y: 52, size: 23 } },
  { char: 'r', key: 'r', drift: -1.3, construction: { x: 74, y: 58, size: 21, rotate: 6 }, wordmark: { x: 71.5, y: 52, size: 23 } },
  { char: 'o', key: 'zero', drift: 1.55, accent: true, construction: { x: 86, y: 31, size: 31, rotate: 0 }, wordmark: { x: 84, y: 52, size: 23 } },
  { char: '.', key: 'period', drift: -0.5, accent: true, construction: { x: 95, y: 66, size: 10, rotate: 0 }, wordmark: { x: 95, y: 60, size: 10 } },
];

export const DotzeroTypographicSpecimen: React.FC = () => {
  const stageRef = useRef<HTMLElement>(null);
  const [stageWidth, setStageWidth] = useState(1200);
  const [mode, setMode] = useState<'construction' | 'wordmark'>('construction');
  const [activeGlyph, setActiveGlyph] = useState<number | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const measure = () => setStageWidth(stage.getBoundingClientRect().width);
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    measure();

    return () => observer.disconnect();
  }, []);

  const toggleMode = () => {
    setMode((current) => current === 'construction' ? 'wordmark' : 'construction');
    setActiveGlyph(null);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    setPointer({ x, y });
  };

  const resetPointer = () => setPointer({ x: 0, y: 0 });

  return (
    <section
      ref={stageRef}
      className={`dz-specimen-stage dz-specimen-stage--${mode}`}
      aria-label="DOTZERO typographic system"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
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
        const fontSize = Math.max(
          glyph.key === 'period' ? 26 : 48,
          Math.min(glyph.key === 'period' ? 92 : 220, stageWidth * (position.size / 100) * 0.72)
        );
        const motionStrength = mode === 'construction' ? glyph.drift : glyph.drift * 0.24;
        const dx = pointer.x * 10 * motionStrength;
        const dy = pointer.y * 7 * motionStrength;

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
              '--rotate': `${position.rotate ?? 0}deg`,
              '--motion-x': `${dx}px`,
              '--motion-y': `${dy}px`,
              '--glyph-font-size': `${fontSize}px`,
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

import React, { useMemo, useState } from 'react';
import { BuiltGlyph } from './BuiltGlyph';
import { GlyphDesign, GlyphId } from './model';

interface TypeTesterProps {
  design: GlyphDesign;
}

const BUILT = new Set<GlyphId>(['d', 'o']);

export const TypeTester: React.FC<TypeTesterProps> = ({ design }) => {
  const [text, setText] = useState('do dotzero');
  const [size, setSize] = useState(88);
  const [tracking, setTracking] = useState(0);

  const builtCount = useMemo(
    () => [...text.toLowerCase()].filter((char) => BUILT.has(char as GlyphId)).length,
    [text]
  );

  const missing = useMemo(
    () => Array.from(new Set(
      [...text.toLowerCase()].filter(
        (char) => char.trim() && !BUILT.has(char as GlyphId)
      )
    )),
    [text]
  );

  return (
    <section className="tc-test-view">
      <div className="tc-test-head">
        <div>
          <div className="tc-label">TYPE TEST</div>
          <div className="tc-test-title">USE THE SYSTEM</div>
        </div>
        <div className="tc-test-status">BUILT GLYPHS / d o</div>
      </div>

      <div className="tc-test-controls">
        <label className="tc-test-input">
          <span>TEXT</span>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            spellCheck={false}
            aria-label="Type test text"
          />
        </label>

        <label>
          <span>SIZE</span>
          <input
            type="range"
            min="42"
            max="150"
            step="2"
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
          />
          <strong>{size}</strong>
        </label>

        <label>
          <span>TRACKING</span>
          <input
            type="range"
            min="-6"
            max="20"
            step="1"
            value={tracking}
            onChange={(event) => setTracking(Number(event.target.value))}
          />
          <strong>{tracking}</strong>
        </label>
      </div>

      <div
        className="tc-test-stage"
        style={{
          '--tc-test-size': `${size}px`,
          '--tc-test-tracking': `${tracking}px`,
        } as React.CSSProperties}
      >
        {[...text].map((char, index) => {
          const lower = char.toLowerCase();

          if (BUILT.has(lower as GlyphId)) {
            return (
              <span className="tc-test-char is-built" key={`${char}-${index}`}>
                <BuiltGlyph
                  glyph={lower as GlyphId}
                  design={design}
                  className="tc-test-built-glyph"
                />
              </span>
            );
          }

          if (char === ' ') {
            return <span className="tc-test-space" key={`space-${index}`} aria-hidden="true" />;
          }

          return (
            <span
              className="tc-test-char is-fallback"
              key={`${char}-${index}`}
              title="Fallback glyph — not built yet"
            >
              {char}
            </span>
          );
        })}
      </div>

      <div className="tc-test-report">
        <div>
          <span>BUILT INSTANCES</span>
          <strong>{String(builtCount).padStart(2, '0')}</strong>
        </div>
        <div>
          <span>MISSING GLYPHS</span>
          <strong>{missing.length ? missing.join(' ') : '—'}</strong>
        </div>
        <div>
          <span>COVERAGE</span>
          <strong>02 GLYPHS</strong>
        </div>
      </div>
    </section>
  );
};

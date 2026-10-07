import React, { useMemo, useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { UNIVERSAL_CORE_COPY } from './copy';
import { BuiltGlyph } from './BuiltGlyph';
import { GlyphDesign, GlyphId, KerningPair, getGlyphBounds, getKerningValue } from './model';
import { SpacingPanel } from './SpacingPanel';
import { KerningPanel } from './KerningPanel';

interface TypeTesterProps {
  design: GlyphDesign;
  onChange: (design: GlyphDesign) => void;
}

const BUILT = new Set<GlyphId>(['b', 'c', 'd', 'e', 'o', 'p', 'q']);

export const TypeTester: React.FC<TypeTesterProps> = ({ design, onChange }) => {
  const { language } = useLanguage();
  const t = UNIVERSAL_CORE_COPY[language];
  const [text, setText] = useState('code bed cope');
  const [size, setSize] = useState(88);
  const [tracking, setTracking] = useState(0);
  const [spacingGlyph, setSpacingGlyph] = useState<GlyphId>('d');
  const [kerningPair, setKerningPair] = useState<KerningPair>('do');

  const builtCount = useMemo(
    () => [...text].filter((char) => BUILT.has(char as GlyphId)).length,
    [text]
  );

  const missing = useMemo(
    () => Array.from(new Set(
      [...text].filter(
        (char) => char.trim() && !BUILT.has(char as GlyphId)
      )
    )),
    [text]
  );

  return (
    <section className="tc-test-view">
      <div className="tc-test-head">
        <div>
          <div className="tc-label">{t.typeTest}</div>
          <div className="tc-test-title">{t.useSystem}</div>
        </div>
        <div className="tc-test-status">{t.builtGlyphs} / b c d e o p q</div>
      </div>

      <div className="tc-test-controls">
        <label className="tc-test-input">
          <span>{t.text}</span>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            spellCheck={false}
            aria-label={t.typeTestText}
          />
        </label>

        <label>
          <span>{t.size}</span>
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
          <span>{t.tracking}</span>
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
          if (BUILT.has(char as GlyphId)) {
            const glyph = char as GlyphId;
            const advance = getGlyphBounds(design, glyph).advanceWidth;
            const kern = getKerningValue(design, char, text[index + 1]);
            return (
              <span
                className="tc-test-char is-built"
                key={`${char}-${index}`}
                style={{
                  '--tc-glyph-advance': `${advance / 100}em`,
                  '--tc-pair-kern': `${kern / 100}em`,
                } as React.CSSProperties}
              >
                <BuiltGlyph
                  glyph={glyph}
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
              title={t.fallbackGlyph}
            >
              {char}
            </span>
          );
        })}
      </div>

      <div className="tc-test-metric-panels">
        <SpacingPanel
          design={design}
          glyph={spacingGlyph}
          onGlyphChange={setSpacingGlyph}
          onChange={onChange}
        />
        <KerningPanel
          design={design}
          pair={kerningPair}
          onPairChange={setKerningPair}
          onChange={onChange}
        />
      </div>

      <div className="tc-test-report">
        <div>
          <span>{t.builtInstances}</span>
          <strong>{String(builtCount).padStart(2, '0')}</strong>
        </div>
        <div>
          <span>{t.missingGlyphs}</span>
          <strong>{missing.length ? missing.join(' ') : '—'}</strong>
        </div>
        <div>
          <span>{t.coverage}</span>
          <strong>07 {t.glyphs}</strong>
        </div>
      </div>
    </section>
  );
};

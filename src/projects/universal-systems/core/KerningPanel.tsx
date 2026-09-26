import React from 'react';
import { BuiltGlyph } from './BuiltGlyph';
import {
  GlyphDesign,
  GlyphId,
  KERNING_PAIRS,
  KerningPair,
  getGlyphBounds,
} from './model';

interface KerningPanelProps {
  design: GlyphDesign;
  pair: KerningPair;
  onPairChange: (pair: KerningPair) => void;
  onChange: (design: GlyphDesign) => void;
}

export const KerningPanel: React.FC<KerningPanelProps> = ({
  design,
  pair,
  onPairChange,
  onChange,
}) => {
  const left = pair[0] as GlyphId;
  const right = pair[1] as GlyphId;
  const value = design.kerning[pair];
  const leftAdvance = getGlyphBounds(design, left).advanceWidth;
  const rightAdvance = getGlyphBounds(design, right).advanceWidth;

  const updateKerning = (next: number) => {
    onChange({
      ...design,
      kerning: {
        ...design.kerning,
        [pair]: next,
      },
    });
  };

  return (
    <section className="tc-kerning-panel">
      <div className="tc-kerning-head">
        <div>
          <div className="tc-label">KERNING / PAIRS</div>
          <div className="tc-kerning-title">{pair}</div>
        </div>

        <div className="tc-kerning-pairs" aria-label="Kerning pair">
          {KERNING_PAIRS.map((id) => (
            <button
              type="button"
              key={id}
              className={pair === id ? 'is-active' : ''}
              onClick={() => onPairChange(id)}
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      <div className="tc-kerning-preview">
        <span
          className="tc-kerning-preview-glyph"
          style={{
            '--tc-preview-advance': `${leftAdvance / 100}em`,
            '--tc-preview-kern': `${value / 100}em`,
          } as React.CSSProperties}
        >
          <BuiltGlyph glyph={left} design={design} className="tc-kerning-built-glyph" />
        </span>
        <span
          className="tc-kerning-preview-glyph"
          style={{
            '--tc-preview-advance': `${rightAdvance / 100}em`,
          } as React.CSSProperties}
        >
          <BuiltGlyph glyph={right} design={design} className="tc-kerning-built-glyph" />
        </span>
      </div>

      <label className="tc-kerning-control">
        <span>PAIR VALUE</span>
        <input
          type="range"
          min="-30"
          max="30"
          step="1"
          value={value}
          onChange={(event) => updateKerning(Number(event.target.value))}
        />
        <strong>{value > 0 ? '+' : ''}{value}</strong>
      </label>

      <div className="tc-kerning-readout">
        <div>
          <span>PAIR</span>
          <strong>{pair}</strong>
        </div>
        <div>
          <span>LEFT ADVANCE</span>
          <strong>{leftAdvance.toFixed(1)}</strong>
        </div>
        <div>
          <span>RIGHT ADVANCE</span>
          <strong>{rightAdvance.toFixed(1)}</strong>
        </div>
        <div>
          <span>KERN</span>
          <strong>{value > 0 ? '+' : ''}{value}</strong>
        </div>
      </div>
    </section>
  );
};

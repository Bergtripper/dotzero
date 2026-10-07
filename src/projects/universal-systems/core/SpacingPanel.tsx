import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { UNIVERSAL_CORE_COPY } from './copy';
import { GlyphDesign, GlyphId, getGlyphBounds } from './model';

interface SpacingPanelProps {
  design: GlyphDesign;
  glyph: GlyphId;
  onGlyphChange: (glyph: GlyphId) => void;
  onChange: (design: GlyphDesign) => void;
}

export const SpacingPanel: React.FC<SpacingPanelProps> = ({
  design,
  glyph,
  onGlyphChange,
  onChange,
}) => {
  const { language } = useLanguage();
  const t = UNIVERSAL_CORE_COPY[language];
  const bounds = getGlyphBounds(design, glyph);
  const metrics = design.metrics[glyph];

  const updateMetric = (
    key: 'leftSideBearing' | 'rightSideBearing',
    value: number
  ) => {
    onChange({
      ...design,
      metrics: {
        ...design.metrics,
        [glyph]: {
          ...design.metrics[glyph],
          [key]: value,
        },
      },
    });
  };

  return (
    <section className="tc-spacing-panel">
      <div className="tc-spacing-head">
        <div>
          <div className="tc-label">{t.spacingMetrics}</div>
          <div className="tc-spacing-title">{t.glyph} {glyph}</div>
        </div>

        <div className="tc-spacing-glyph-switch" aria-label={t.spacingGlyph}>
          {(['b', 'c', 'd', 'e', 'o', 'p', 'q'] as GlyphId[]).map((id) => (
            <button
              type="button"
              key={id}
              className={glyph === id ? 'is-active' : ''}
              onClick={() => onGlyphChange(id)}
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      <div className="tc-spacing-controls">
        <label>
          <span>{t.leftSideBearing}</span>
          <input
            type="range"
            min="0"
            max="30"
            step="1"
            value={metrics.leftSideBearing}
            onChange={(event) =>
              updateMetric('leftSideBearing', Number(event.target.value))
            }
          />
          <strong>{metrics.leftSideBearing}</strong>
        </label>

        <label>
          <span>{t.rightSideBearing}</span>
          <input
            type="range"
            min="0"
            max="30"
            step="1"
            value={metrics.rightSideBearing}
            onChange={(event) =>
              updateMetric('rightSideBearing', Number(event.target.value))
            }
          />
          <strong>{metrics.rightSideBearing}</strong>
        </label>
      </div>

      <div className="tc-spacing-readout">
        <div>
          <span>{t.visualWidth}</span>
          <strong>{bounds.visualWidth.toFixed(1)}</strong>
        </div>
        <div>
          <span>{t.advanceWidth}</span>
          <strong>{bounds.advanceWidth.toFixed(1)}</strong>
        </div>
        <div>
          <span>LSB / RSB</span>
          <strong>{metrics.leftSideBearing} / {metrics.rightSideBearing}</strong>
        </div>
      </div>
    </section>
  );
};

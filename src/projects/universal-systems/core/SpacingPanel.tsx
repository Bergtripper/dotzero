import React from 'react';
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
          <div className="tc-label">SPACING / METRICS</div>
          <div className="tc-spacing-title">GLYPH {glyph}</div>
        </div>

        <div className="tc-spacing-glyph-switch" aria-label="Spacing glyph">
          {(['b', 'd', 'o', 'p', 'q'] as GlyphId[]).map((id) => (
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
          <span>LEFT SIDE BEARING</span>
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
          <span>RIGHT SIDE BEARING</span>
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
          <span>VISUAL WIDTH</span>
          <strong>{bounds.visualWidth.toFixed(1)}</strong>
        </div>
        <div>
          <span>ADVANCE WIDTH</span>
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

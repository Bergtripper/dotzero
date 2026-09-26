import React from 'react';
import {
  GlyphDesign,
  GlyphId,
  PartId,
  GUIDES,
  bowlOuterRy,
  isDescenderGlyph,
  isStemGlyph,
} from './model';

interface GlyphInspectorProps {
  design: GlyphDesign;
  selected: PartId;
  onChange: (design: GlyphDesign) => void;
  onSelect: (part: PartId) => void;
  glyph: GlyphId;
}

export const GlyphInspector: React.FC<GlyphInspectorProps> = ({
  design,
  selected,
  onChange,
  onSelect,
  glyph,
}) => {
  const joinStemToBowl = () => {
    onChange({
      ...design,
      stem: {
        ...design.stem,
        x: design.bowl.cx + design.bowl.rx,
        bottom: GUIDES.baseline,
      },
    });
    onSelect('stem');
  };

  const alignBowl = () => {
    onChange({
      ...design,
      bowl: {
        ...design.bowl,
        cy: (GUIDES.xHeight + GUIDES.baseline) / 2,
        ry: Math.max(18, (GUIDES.baseline - GUIDES.xHeight) / 2 - design.overshoot),
      },
      stem: {
        ...design.stem,
        x: design.bowl.cx + design.bowl.rx,
        bottom: GUIDES.baseline,
      },
    });
  };

  const crossbarSelected = glyph === 'e' && selected === 'crossbar';
  const bowlSelected = glyph === 'o' || selected === 'bowl';

  return (
    <aside className="tc-inspector">
      <div className="tc-label">GLYPH {glyph} / SELECTED {selected.toUpperCase()}</div>

      {crossbarSelected ? (
        <>
          <div className="tc-inspector-title">CROSSBAR</div>

          <label className="tc-semantic-control">
            <span>POSITION</span>
            <input
              type="range"
              min="-12"
              max="12"
              step="1"
              value={design.crossbar.yOffset}
              onChange={(e) =>
                onChange({
                  ...design,
                  crossbar: { ...design.crossbar, yOffset: Number(e.target.value) },
                })
              }
            />
            <strong>{design.crossbar.yOffset > 0 ? '+' : ''}{design.crossbar.yOffset}</strong>
          </label>

          <label className="tc-semantic-control">
            <span>APERTURE</span>
            <input
              type="range"
              min="6"
              max="30"
              step="1"
              value={design.crossbar.aperture}
              onChange={(e) =>
                onChange({
                  ...design,
                  crossbar: { ...design.crossbar, aperture: Number(e.target.value) },
                })
              }
            />
            <strong>{design.crossbar.aperture}</strong>
          </label>

          <label className="tc-semantic-control">
            <span>INSET</span>
            <input
              type="range"
              min="0"
              max="24"
              step="1"
              value={design.crossbar.inset}
              onChange={(e) =>
                onChange({
                  ...design,
                  crossbar: { ...design.crossbar, inset: Number(e.target.value) },
                })
              }
            />
            <strong>{design.crossbar.inset}</strong>
          </label>

          <button
            className="tc-semantic-action is-accent"
            onClick={() =>
              onChange({
                ...design,
                crossbar: { ...design.crossbar, yOffset: 0 },
              })
            }
          >
            CENTER CROSSBAR
          </button>

          <div className="tc-rule-note">
            OPEN BOWL / APERTURE {design.crossbar.aperture}
          </div>
        </>
      ) : bowlSelected ? (
        <>
          <div className="tc-inspector-title">BOWL</div>

          <label className="tc-semantic-control">
            <span>WIDTH</span>
            <input
              type="range"
              min="36"
              max="80"
              step="1"
              value={design.bowl.rx * 2}
              onChange={(e) =>
                onChange({
                  ...design,
                  bowl: { ...design.bowl, rx: Number(e.target.value) / 2 },
                })
              }
            />
            <strong>{Math.round(design.bowl.rx * 2)}</strong>
          </label>

          <label className="tc-semantic-control">
            <span>HEIGHT</span>
            <input
              type="range"
              min="36"
              max="72"
              step="1"
              value={design.bowl.ry * 2}
              onChange={(e) =>
                onChange({
                  ...design,
                  bowl: { ...design.bowl, ry: Number(e.target.value) / 2 },
                })
              }
            />
            <strong>{Math.round(design.bowl.ry * 2)}</strong>
          </label>

          <button className="tc-semantic-action is-accent" onClick={alignBowl}>
            FIT X-HEIGHT ↔ BASELINE
          </button>

          {isStemGlyph(glyph) && (
            <button
              className="tc-semantic-action"
              onClick={() =>
                onChange({
                  ...design,
                  bowl: {
                    ...design.bowl,
                    cx: design.stem.x - design.bowl.rx,
                  },
                })
              }
            >
              SNAP TANGENT TO STEM
            </button>
          )}

          {glyph === 'e' && (
            <button
              className="tc-semantic-action"
              onClick={() => onSelect('crossbar')}
            >
              EDIT CROSSBAR
            </button>
          )}
        </>
      ) : (
        <>
          <div className="tc-inspector-title">STEM</div>

          {isDescenderGlyph(glyph) ? (
            <>
              <label className="tc-semantic-control">
                <span>DESCENDER</span>
                <input
                  type="range"
                  min={GUIDES.baseline + 8}
                  max="138"
                  step="1"
                  value={design.descender}
                  onChange={(e) =>
                    onChange({
                      ...design,
                      descender: Number(e.target.value),
                    })
                  }
                />
                <strong>{Math.round(design.descender)}</strong>
              </label>
              <div className="tc-rule-note">
                STEM / X-HEIGHT {GUIDES.xHeight} → DESCENDER {Math.round(design.descender)}
              </div>
            </>
          ) : (
            <>
              <label className="tc-semantic-control">
                <span>ASCENDER</span>
                <input
                  type="range"
                  min="8"
                  max={design.stem.bottom - 18}
                  step="1"
                  value={design.stem.top}
                  onChange={(e) =>
                    onChange({
                      ...design,
                      stem: { ...design.stem, top: Number(e.target.value) },
                    })
                  }
                />
                <strong>{Math.round(design.stem.top)}</strong>
              </label>

              <button
                className="tc-semantic-action"
                onClick={() =>
                  onChange({
                    ...design,
                    stem: { ...design.stem, top: GUIDES.ascender },
                  })
                }
              >
                ANCHOR ASCENDER
              </button>
            </>
          )}

          <button className="tc-semantic-action is-accent" onClick={joinStemToBowl}>
            JOIN TANGENT TO BOWL
          </button>
        </>
      )}

      <div className="tc-inspector-section">
        <div className="tc-label">FAMILY RULES</div>

        <label className="tc-semantic-control">
          <span>STROKE</span>
          <input
            type="range"
            min="5"
            max="20"
            step="1"
            value={design.stroke}
            onChange={(e) =>
              onChange({ ...design, stroke: Number(e.target.value) })
            }
          />
          <strong>{design.stroke}</strong>
        </label>

        <label className="tc-semantic-control">
          <span>OVERSHOOT</span>
          <input
            type="range"
            min="0"
            max="6"
            step="0.5"
            value={design.overshoot}
            onChange={(e) =>
              onChange({ ...design, overshoot: Number(e.target.value) })
            }
          />
          <strong>{design.overshoot.toFixed(1)}</strong>
        </label>

        <div className="tc-rule-note">
          OUTER BOWL / {(bowlOuterRy(design) * 2).toFixed(1)}
        </div>
        <div className="tc-rule-note">
          DESCENDER / {Math.round(design.descender)}
        </div>
      </div>
    </aside>
  );
};

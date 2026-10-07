import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { UNIVERSAL_CORE_COPY } from './copy';
import {
  GlyphDesign,
  GlyphId,
  PartId,
  GUIDES,
  bowlOuterRy,
  isDescenderGlyph,
  isStemGlyph,
  isOpenBowlGlyph,
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
  const { language } = useLanguage();
  const t = UNIVERSAL_CORE_COPY[language];

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
      <div className="tc-label">{t.glyph} {glyph} / {t.selected} {selected.toUpperCase()}</div>

      {crossbarSelected ? (
        <>
          <div className="tc-inspector-title">{t.crossbar}</div>

          <label className="tc-semantic-control">
            <span>{t.position}</span>
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
            <span>{t.inset}</span>
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
            {t.centerCrossbar}
          </button>

          <div className="tc-rule-note">
            {t.openBowl} / {t.aperture} {design.crossbar.aperture}
          </div>
        </>
      ) : bowlSelected ? (
        <>
          <div className="tc-inspector-title">{t.bowl}</div>

          <label className="tc-semantic-control">
            <span>{t.width}</span>
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
            <span>{t.height}</span>
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

          {isOpenBowlGlyph(glyph) && (
            <label className="tc-semantic-control">
              <span>{t.aperture}</span>
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
          )}

          <button className="tc-semantic-action is-accent" onClick={alignBowl}>
            {t.fitXHeightBaseline}
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
              {t.snapTangentStem}
            </button>
          )}

          {glyph === 'e' && (
            <button
              className="tc-semantic-action"
              onClick={() => onSelect('crossbar')}
            >
              {t.editCrossbar}
            </button>
          )}
        </>
      ) : (
        <>
          <div className="tc-inspector-title">{t.stem}</div>

          {isDescenderGlyph(glyph) ? (
            <>
              <label className="tc-semantic-control">
                <span>{t.descender}</span>
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
                {t.stem} / X-HEIGHT {GUIDES.xHeight} → {t.descender} {Math.round(design.descender)}
              </div>
            </>
          ) : (
            <>
              <label className="tc-semantic-control">
                <span>{t.ascender}</span>
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
                {t.anchorAscender}
              </button>
            </>
          )}

          <button className="tc-semantic-action is-accent" onClick={joinStemToBowl}>
            {t.joinTangentBowl}
          </button>
        </>
      )}

      <div className="tc-inspector-section">
        <div className="tc-label">{t.familyRules}</div>

        <label className="tc-semantic-control">
          <span>{t.stroke}</span>
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
          <span>{t.overshoot}</span>
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
          {t.outerBowl} / {(bowlOuterRy(design) * 2).toFixed(1)}
        </div>
        <div className="tc-rule-note">
          {t.descender} / {Math.round(design.descender)}
        </div>
      </div>
    </aside>
  );
};

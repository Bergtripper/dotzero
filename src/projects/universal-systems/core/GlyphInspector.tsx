import React from 'react';
import { GlyphDesign, PartId, GUIDES } from './model';

interface GlyphInspectorProps {
  design: GlyphDesign;
  selected: PartId;
  onChange: (design: GlyphDesign) => void;
  onSelect: (part: PartId) => void;
}

export const GlyphInspector: React.FC<GlyphInspectorProps> = ({ design, selected, onChange, onSelect }) => {
  const joinStemToBowl = () => {
    onChange({
      ...design,
      stem: {
        ...design.stem,
        x: design.bowl.cx + design.bowl.radius,
        bottom: GUIDES.baseline,
      },
    });
    onSelect('stem');
  };

  return (
    <aside className="tc-inspector">
      <div className="tc-label">SELECTED / {selected.toUpperCase()}</div>

      {selected === 'bowl' ? (
        <>
          <div className="tc-inspector-title">BOWL</div>
          <label className="tc-semantic-control">
            <span>RADIUS</span>
            <input
              type="range"
              min="18"
              max="38"
              step="1"
              value={design.bowl.radius}
              onChange={(e) => onChange({ ...design, bowl: { ...design.bowl, radius: Number(e.target.value) } })}
            />
            <strong>{design.bowl.radius.toFixed(0)}</strong>
          </label>
          <button
            className="tc-semantic-action"
            onClick={() => onChange({
              ...design,
              bowl: {
                ...design.bowl,
                cy: GUIDES.baseline - design.bowl.radius,
              },
            })}
          >
            ALIGN TO BASELINE
          </button>
          <button
            className="tc-semantic-action"
            onClick={() => onChange({
              ...design,
              bowl: {
                ...design.bowl,
                cy: GUIDES.xHeight + design.bowl.radius,
              },
            })}
          >
            ALIGN TO X-HEIGHT
          </button>
        </>
      ) : (
        <>
          <div className="tc-inspector-title">STEM</div>
          <label className="tc-semantic-control">
            <span>TOP</span>
            <input
              type="range"
              min="8"
              max={design.stem.bottom - 18}
              step="1"
              value={design.stem.top}
              onChange={(e) => onChange({ ...design, stem: { ...design.stem, top: Number(e.target.value) } })}
            />
            <strong>{design.stem.top.toFixed(0)}</strong>
          </label>
          <button
            className="tc-semantic-action"
            onClick={() => onChange({ ...design, stem: { ...design.stem, top: GUIDES.ascender } })}
          >
            ANCHOR ASCENDER
          </button>
          <button className="tc-semantic-action is-accent" onClick={joinStemToBowl}>
            JOIN TO BOWL
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
            onChange={(e) => onChange({ ...design, stroke: Number(e.target.value) })}
          />
          <strong>{design.stroke}</strong>
        </label>
        <label className="tc-semantic-control">
          <span>OVERSHOOT</span>
          <input
            type="range"
            min="0"
            max="6"
            step="1"
            value={design.overshoot}
            onChange={(e) => onChange({ ...design, overshoot: Number(e.target.value) })}
          />
          <strong>{design.overshoot}</strong>
        </label>
      </div>
    </aside>
  );
};

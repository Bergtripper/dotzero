import React, { useRef, useState } from 'react';
import { EditorMode, GlyphDesign, GUIDES, PartId, clamp, magnetic } from './model';

interface GlyphCanvasProps {
  design: GlyphDesign;
  selected: PartId;
  mode: EditorMode;
  onSelect: (part: PartId) => void;
  onChange: (design: GlyphDesign) => void;
}

type DragTarget = 'bowl' | 'bowl-radius' | 'stem' | 'stem-top' | 'stem-bottom' | null;

export const GlyphCanvas: React.FC<GlyphCanvasProps> = ({ design, selected, mode, onSelect, onChange }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dragTarget, setDragTarget] = useState<DragTarget>(null);

  const pointFromEvent = (event: React.PointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 140,
    };
  };

  const updateFromPointer = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!dragTarget) return;
    const p = pointFromEvent(event);
    if (!p) return;

    if (dragTarget === 'bowl') {
      const cx = magnetic(clamp(p.x, 15, 80), [GUIDES.center, design.stem.x - design.bowl.radius]);
      const cy = magnetic(clamp(p.y, 35, 118), [GUIDES.xHeight + design.bowl.radius, GUIDES.baseline - design.bowl.radius]);
      onChange({ ...design, bowl: { ...design.bowl, cx, cy } });
    }

    if (dragTarget === 'bowl-radius') {
      const radius = clamp(Math.hypot(p.x - design.bowl.cx, p.y - design.bowl.cy), 18, 38);
      const snappedRadius = magnetic(radius, [24, 28, 30, 32, 36], 1.5);
      onChange({ ...design, bowl: { ...design.bowl, radius: snappedRadius } });
    }

    if (dragTarget === 'stem') {
      const x = magnetic(clamp(p.x, 20, 90), [design.bowl.cx + design.bowl.radius, GUIDES.center]);
      const height = design.stem.bottom - design.stem.top;
      const top = magnetic(clamp(p.y - height / 2, 8, 95), [GUIDES.ascender, GUIDES.xHeight]);
      onChange({
        ...design,
        stem: { ...design.stem, x, top, bottom: clamp(top + height, top + 20, 132) },
      });
    }

    if (dragTarget === 'stem-top') {
      const top = magnetic(clamp(p.y, 8, design.stem.bottom - 18), [GUIDES.ascender, GUIDES.xHeight]);
      onChange({ ...design, stem: { ...design.stem, top } });
    }

    if (dragTarget === 'stem-bottom') {
      const bottom = magnetic(clamp(p.y, design.stem.top + 18, 132), [GUIDES.baseline]);
      onChange({ ...design, stem: { ...design.stem, bottom } });
    }
  };

  const selectAndDrag = (part: PartId, target: DragTarget) => (event: React.PointerEvent<SVGGElement | SVGCircleElement>) => {
    event.stopPropagation();
    onSelect(part);
    setDragTarget(target);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  return (
    <div className="tc-canvas-shell">
      <div className="tc-canvas-head">
        <div>
          <div className="tc-label">GLYPH / d</div>
          <div className="tc-canvas-sub">DESIGN FIELD / 100 × 140</div>
        </div>
        <div className="tc-canvas-state">{mode === 'design' ? 'DESIGN MODE' : 'CONSTRUCTION MODE'}</div>
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 100 140"
        className="tc-canvas"
        onPointerMove={updateFromPointer}
        onPointerUp={() => setDragTarget(null)}
        onPointerLeave={() => setDragTarget(null)}
      >
        <defs>
          <pattern id="tc-grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M 5 0 L 0 0 0 5" className="tc-grid-line" />
          </pattern>
        </defs>

        <rect width="100" height="140" fill="url(#tc-grid)" />
        <line x1="0" x2="100" y1={GUIDES.ascender} y2={GUIDES.ascender} className="tc-guide tc-guide--muted" />
        <line x1="0" x2="100" y1={GUIDES.xHeight} y2={GUIDES.xHeight} className="tc-guide tc-guide--blue" />
        <line x1="0" x2="100" y1={GUIDES.baseline} y2={GUIDES.baseline} className="tc-guide tc-guide--red" />
        <line x1={GUIDES.center} x2={GUIDES.center} y1="0" y2="140" className="tc-guide tc-guide--axis" />

        {mode === 'construction' && (
          <>
            <circle cx={design.bowl.cx} cy={design.bowl.cy} r={design.bowl.radius} className="tc-construction-shape" />
            <line x1={design.stem.x} x2={design.stem.x} y1={design.stem.top} y2={design.stem.bottom} className="tc-construction-shape" />
            <line
              x1={design.bowl.cx}
              y1={design.bowl.cy}
              x2={design.bowl.cx + design.bowl.radius}
              y2={design.bowl.cy}
              className="tc-construction-radius"
            />
          </>
        )}

        <g
          className={`tc-part ${selected === 'bowl' ? 'is-selected' : ''}`}
          onPointerDown={selectAndDrag('bowl', 'bowl')}
        >
          <circle
            cx={design.bowl.cx}
            cy={design.bowl.cy}
            r={design.bowl.radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={design.stroke}
            vectorEffect="non-scaling-stroke"
          />
        </g>

        <g
          className={`tc-part ${selected === 'stem' ? 'is-selected' : ''}`}
          onPointerDown={selectAndDrag('stem', 'stem')}
        >
          <line
            x1={design.stem.x}
            x2={design.stem.x}
            y1={design.stem.top}
            y2={design.stem.bottom}
            stroke="currentColor"
            strokeWidth={design.stroke}
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {selected === 'bowl' && (
          <>
            <circle
              cx={design.bowl.cx + design.bowl.radius}
              cy={design.bowl.cy}
              r="2.1"
              className="tc-handle"
              onPointerDown={selectAndDrag('bowl', 'bowl-radius')}
            />
            <circle cx={design.bowl.cx} cy={design.bowl.cy} r="1.4" className="tc-anchor-dot" />
          </>
        )}

        {selected === 'stem' && (
          <>
            <circle
              cx={design.stem.x}
              cy={design.stem.top}
              r="2.1"
              className="tc-handle"
              onPointerDown={selectAndDrag('stem', 'stem-top')}
            />
            <circle
              cx={design.stem.x}
              cy={design.stem.bottom}
              r="2.1"
              className="tc-handle"
              onPointerDown={selectAndDrag('stem', 'stem-bottom')}
            />
          </>
        )}
      </svg>

      <div className="tc-guide-legend">
        <span>ASCENDER {GUIDES.ascender}</span>
        <span>X-HEIGHT {GUIDES.xHeight}</span>
        <span>BASELINE {GUIDES.baseline}</span>
      </div>
    </div>
  );
};

import React, { useRef, useState } from 'react';
import {
  EditorMode,
  GlyphDesign,
  GlyphId,
  GUIDES,
  PartId,
  bowlOuterRy,
  clamp,
  magnetic,
  getStemX,
} from './model';

interface GlyphCanvasProps {
  design: GlyphDesign;
  selected: PartId;
  mode: EditorMode;
  onSelect: (part: PartId) => void;
  onChange: (design: GlyphDesign) => void;
  glyph: GlyphId;
}

type DragTarget =
  | 'bowl'
  | 'bowl-width'
  | 'bowl-height'
  | 'stem'
  | 'stem-top'
  | 'stem-bottom'
  | null;

interface DragState {
  target: DragTarget;
  offsetX: number;
  offsetY: number;
}

interface SnapCue {
  axis: 'x' | 'y';
  value: number;
  label: string;
}

export const GlyphCanvas: React.FC<GlyphCanvasProps> = ({
  design,
  selected,
  mode,
  onSelect,
  onChange,
  glyph,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [drag, setDrag] = useState<DragState | null>(null);
  const [snapCues, setSnapCues] = useState<SnapCue[]>([]);

  const pointFromClient = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    return {
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 140,
    };
  };

  const beginDrag = (
    part: PartId,
    target: DragTarget,
    event: React.PointerEvent<SVGGElement | SVGCircleElement>
  ) => {
    event.stopPropagation();
    const point = pointFromClient(event.clientX, event.clientY);
    if (!point) return;

    onSelect(part);

    const center =
      part === 'bowl'
        ? { x: design.bowl.cx, y: design.bowl.cy }
        : {
            x: design.stem.x,
            y: (design.stem.top + design.stem.bottom) / 2,
          };

    setDrag({
      target,
      offsetX: point.x - center.x,
      offsetY: point.y - center.y,
    });
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const updateFromPointer = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!drag?.target) return;
    const p = pointFromClient(event.clientX, event.clientY);
    if (!p) return;

    const cues: SnapCue[] = [];
    const outerRy = bowlOuterRy(design);

    if (drag.target === 'bowl') {
      const rawCx = clamp(p.x - drag.offsetX, 16, 82);
      const tangentX = design.stem.x - design.bowl.rx;
      const cxSnap = magnetic(rawCx, [GUIDES.center, tangentX], 2.2);

      if (cxSnap.snapped) {
        cues.push({
          axis: 'x',
          value: cxSnap.value,
          label: cxSnap.target === tangentX ? 'TANGENT' : 'CENTER',
        });
      }

      const rawCy = clamp(p.y - drag.offsetY, 34, 118);
      const xHeightCenter = GUIDES.xHeight + outerRy;
      const baselineCenter = GUIDES.baseline - outerRy;
      const cySnap = magnetic(rawCy, [xHeightCenter, baselineCenter], 2.2);

      if (cySnap.snapped) {
        cues.push({
          axis: 'y',
          value:
            cySnap.target === xHeightCenter
              ? GUIDES.xHeight
              : GUIDES.baseline,
          label:
            cySnap.target === xHeightCenter
              ? 'X-HEIGHT'
              : 'BASELINE',
        });
      }

      onChange({
        ...design,
        bowl: {
          ...design.bowl,
          cx: cxSnap.value,
          cy: cySnap.value,
        },
      });
    }

    if (drag.target === 'bowl-width') {
      const rx = clamp(Math.abs(p.x - design.bowl.cx), 18, 40);
      const snapped = magnetic(rx, [24, 28, 30, 32, 36], 1.1);
      if (snapped.snapped) {
        cues.push({ axis: 'x', value: design.bowl.cx + snapped.value, label: `WIDTH ${snapped.value * 2}` });
      }
      onChange({ ...design, bowl: { ...design.bowl, rx: snapped.value } });
    }

    if (drag.target === 'bowl-height') {
      const outer = clamp(Math.abs(p.y - design.bowl.cy), 20, 38);
      const ry = clamp(outer - design.overshoot, 18, 36);
      const snapped = magnetic(ry, [24, 28, 30, 32, 34], 1.1);
      if (snapped.snapped) {
        cues.push({ axis: 'y', value: design.bowl.cy - snapped.value, label: `HEIGHT ${snapped.value * 2}` });
      }
      onChange({ ...design, bowl: { ...design.bowl, ry: snapped.value } });
    }

    if (drag.target === 'stem') {
      const rawX = clamp(p.x - drag.offsetX, 10, 90);
      const tangentX =
        glyph === 'b'
          ? design.bowl.cx - design.bowl.rx
          : design.bowl.cx + design.bowl.rx;
      const xSnap = magnetic(rawX, [tangentX, GUIDES.center], 2.2);

      if (xSnap.snapped) {
        cues.push({
          axis: 'x',
          value: xSnap.value,
          label: xSnap.target === tangentX ? 'TANGENT' : 'CENTER',
        });
      }

      const height = design.stem.bottom - design.stem.top;
      const rawCenterY = p.y - drag.offsetY;
      let top = clamp(rawCenterY - height / 2, 8, 96);
      const topSnap = magnetic(top, [GUIDES.ascender, GUIDES.xHeight], 2.2);
      top = topSnap.value;

      if (topSnap.snapped) {
        cues.push({
          axis: 'y',
          value: top,
          label: top === GUIDES.ascender ? 'ASCENDER' : 'X-HEIGHT',
        });
      }

      onChange({
        ...design,
        stem: {
          ...design.stem,
          x: glyph === 'b' ? (2 * design.bowl.cx) - xSnap.value : xSnap.value,
          top,
          bottom: clamp(top + height, top + 20, 132),
        },
      });
    }

    if (drag.target === 'stem-top') {
      const snap = magnetic(
        clamp(p.y, 8, design.stem.bottom - 18),
        [GUIDES.ascender, GUIDES.xHeight],
        2.2
      );
      if (snap.snapped) {
        cues.push({
          axis: 'y',
          value: snap.value,
          label: snap.value === GUIDES.ascender ? 'ASCENDER' : 'X-HEIGHT',
        });
      }
      onChange({ ...design, stem: { ...design.stem, top: snap.value } });
    }

    if (drag.target === 'stem-bottom') {
      const snap = magnetic(
        clamp(p.y, design.stem.top + 18, 132),
        [GUIDES.baseline],
        2.2
      );
      if (snap.snapped) {
        cues.push({ axis: 'y', value: GUIDES.baseline, label: 'BASELINE' });
      }
      onChange({ ...design, stem: { ...design.stem, bottom: snap.value } });
    }

    setSnapCues(cues);
  };

  const endDrag = () => {
    setDrag(null);
    setSnapCues([]);
  };

  const outerRy = bowlOuterRy(design);
  const stemX = getStemX(design, glyph);

  return (
    <div className="tc-canvas-shell">
      <div className="tc-canvas-head">
        <div>
          <div className="tc-label">GLYPH / {glyph}</div>
          <div className="tc-canvas-sub">DESIGN FIELD / 100 × 140</div>
        </div>
        <div className="tc-canvas-state">
          {mode === 'design' ? 'DESIGN MODE' : 'CONSTRUCTION MODE'}
        </div>
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 100 140"
        className="tc-canvas"
        onPointerMove={updateFromPointer}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
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

        {snapCues.map((cue, index) =>
          cue.axis === 'x' ? (
            <g key={`${cue.label}-${index}`} className="tc-snap-cue">
              <line x1={cue.value} x2={cue.value} y1="0" y2="140" />
              <text x={cue.value + 1.3} y="8">{cue.label}</text>
            </g>
          ) : (
            <g key={`${cue.label}-${index}`} className="tc-snap-cue">
              <line x1="0" x2="100" y1={cue.value} y2={cue.value} />
              <text x="2" y={cue.value - 2}>{cue.label}</text>
            </g>
          )
        )}

        {mode === 'construction' && (
          <>
            <ellipse
              cx={design.bowl.cx}
              cy={design.bowl.cy}
              rx={design.bowl.rx}
              ry={outerRy}
              className="tc-construction-shape"
            />
            <line
              x1={design.bowl.cx - design.bowl.rx}
              x2={design.bowl.cx + design.bowl.rx}
              y1={design.bowl.cy}
              y2={design.bowl.cy}
              className="tc-construction-radius"
            />
            <line
              x1={design.bowl.cx}
              x2={design.bowl.cx}
              y1={design.bowl.cy - outerRy}
              y2={design.bowl.cy + outerRy}
              className="tc-construction-radius"
            />
            {glyph !== 'o' && (
              <line
                x1={stemX}
                x2={stemX}
                y1={design.stem.top}
                y2={design.stem.bottom}
                className="tc-construction-shape"
              />
            )}
          </>
        )}

        <g
          className={`tc-part ${selected === 'bowl' ? 'is-selected' : ''}`}
          onPointerDown={(event) => beginDrag('bowl', 'bowl', event)}
        >
          <ellipse
            cx={design.bowl.cx}
            cy={design.bowl.cy}
            rx={design.bowl.rx}
            ry={outerRy}
            fill="none"
            stroke="transparent"
            strokeWidth={Math.max(design.stroke + 10, 18)}
            vectorEffect="non-scaling-stroke"
            className="tc-hit-stroke"
          />
          <ellipse
            cx={design.bowl.cx}
            cy={design.bowl.cy}
            rx={design.bowl.rx}
            ry={outerRy}
            fill="none"
            stroke="currentColor"
            strokeWidth={design.stroke}
            vectorEffect="non-scaling-stroke"
            className="tc-visible-stroke"
          />
        </g>

        {glyph !== 'o' && (
          <>
                    <g
                      className={`tc-part ${selected === 'stem' ? 'is-selected' : ''}`}
                      onPointerDown={(event) => beginDrag('stem', 'stem', event)}
                    >
                      <line
                        x1={stemX}
                        x2={stemX}
                        y1={design.stem.top}
                        y2={design.stem.bottom}
                        stroke="transparent"
                        strokeWidth={Math.max(design.stroke + 12, 20)}
                        vectorEffect="non-scaling-stroke"
                        className="tc-hit-stroke"
                      />
                      <line
                        x1={stemX}
                        x2={stemX}
                        y1={design.stem.top}
                        y2={design.stem.bottom}
                        stroke="currentColor"
                        strokeWidth={design.stroke}
                        vectorEffect="non-scaling-stroke"
                        className="tc-visible-stroke"
                      />
                    </g>
            
            
          </>
        )}

        {selected === 'bowl' && (
          <>
            <line
              x1={design.bowl.cx}
              x2={design.bowl.cx + design.bowl.rx}
              y1={design.bowl.cy}
              y2={design.bowl.cy}
              className="tc-handle-guide"
            />
            <line
              x1={design.bowl.cx}
              x2={design.bowl.cx}
              y1={design.bowl.cy}
              y2={design.bowl.cy - outerRy}
              className="tc-handle-guide"
            />
            <circle
              cx={design.bowl.cx + design.bowl.rx}
              cy={design.bowl.cy}
              r="2.5"
              className="tc-handle"
              onPointerDown={(event) => beginDrag('bowl', 'bowl-width', event)}
            />
            <circle
              cx={design.bowl.cx}
              cy={design.bowl.cy - outerRy}
              r="2.5"
              className="tc-handle"
              onPointerDown={(event) => beginDrag('bowl', 'bowl-height', event)}
            />
            <circle cx={design.bowl.cx} cy={design.bowl.cy} r="1.4" className="tc-anchor-dot" />
          </>
        )}

        {glyph === 'd' && selected === 'stem' && (
          <>
            <circle
              cx={stemX}
              cy={design.stem.top}
              r="2.5"
              className="tc-handle"
              onPointerDown={(event) => beginDrag('stem', 'stem-top', event)}
            />
            <circle
              cx={stemX}
              cy={design.stem.bottom}
              r="2.5"
              className="tc-handle"
              onPointerDown={(event) => beginDrag('stem', 'stem-bottom', event)}
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

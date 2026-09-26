import React, { useMemo, useRef, useState } from 'react';
import { Copy, RotateCcw, Trash2 } from 'lucide-react';

type PrimitiveType = 'circle' | 'vertical' | 'horizontal' | 'diagonal' | 'arc';

interface Primitive {
  id: string;
  type: PrimitiveType;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

const GRID_X = 10;
const GRID_Y = 14;
const SNAP_X = 100 / GRID_X;
const SNAP_Y = 140 / GRID_Y;

const createId = () => Math.random().toString(36).slice(2, 9);

const DEFAULT_D: Primitive[] = [
  { id: 'circle-01', type: 'circle', x: 43, y: 82, rotation: 0, scale: 1 },
  { id: 'stem-01', type: 'vertical', x: 72, y: 62, rotation: 0, scale: 1 },
];

const PALETTE: Array<{ type: PrimitiveType; label: string; symbol: string }> = [
  { type: 'circle', label: 'Circle', symbol: '○' },
  { type: 'vertical', label: 'Vertical', symbol: '│' },
  { type: 'horizontal', label: 'Horizontal', symbol: '—' },
  { type: 'diagonal', label: 'Diagonal', symbol: '╱' },
  { type: 'arc', label: 'Arc', symbol: '◜' },
];

const snap = (value: number, step: number, min: number, max: number) =>
  Math.min(max, Math.max(min, Math.round(value / step) * step));

export const TypeConstructionEditor: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [primitives, setPrimitives] = useState<Primitive[]>(DEFAULT_D);
  const [selectedId, setSelectedId] = useState<string>('circle-01');
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [stroke, setStroke] = useState(12);
  const [radius, setRadius] = useState(28);
  const [snapEnabled, setSnapEnabled] = useState(true);

  const selected = useMemo(
    () => primitives.find((primitive) => primitive.id === selectedId) ?? null,
    [primitives, selectedId]
  );

  const updatePrimitive = (id: string, patch: Partial<Primitive>) => {
    setPrimitives((current) =>
      current.map((primitive) => primitive.id === id ? { ...primitive, ...patch } : primitive)
    );
  };

  const addPrimitive = (type: PrimitiveType) => {
    const next: Primitive = {
      id: `${type}-${createId()}`,
      type,
      x: 50,
      y: 70,
      rotation: type === 'diagonal' ? -45 : 0,
      scale: 1,
    };
    setPrimitives((current) => [...current, next]);
    setSelectedId(next.id);
  };

  const deleteSelected = () => {
    if (!selected) return;
    setPrimitives((current) => current.filter((primitive) => primitive.id !== selected.id));
    setSelectedId('');
  };

  const duplicateSelected = () => {
    if (!selected) return;
    const copy: Primitive = {
      ...selected,
      id: `${selected.type}-${createId()}`,
      x: Math.min(95, selected.x + SNAP_X),
      y: Math.min(135, selected.y + SNAP_Y),
    };
    setPrimitives((current) => [...current, copy]);
    setSelectedId(copy.id);
  };

  const resetGlyph = () => {
    setPrimitives(DEFAULT_D);
    setSelectedId('circle-01');
    setStroke(12);
    setRadius(28);
  };

  const clientToSvg = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 140;
    return {
      x: snapEnabled ? snap(x, SNAP_X, 5, 95) : Math.min(95, Math.max(5, x)),
      y: snapEnabled ? snap(y, SNAP_Y, 5, 135) : Math.min(135, Math.max(5, y)),
    };
  };

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!draggingId) return;
    const point = clientToSvg(event.clientX, event.clientY);
    if (!point) return;
    updatePrimitive(draggingId, point);
  };

  const renderPrimitive = (primitive: Primitive) => {
    const selected = primitive.id === selectedId;
    const common = {
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: stroke,
      strokeLinecap: 'butt' as const,
      strokeLinejoin: 'miter' as const,
      vectorEffect: 'non-scaling-stroke' as const,
    };

    let shape: React.ReactNode = null;
    if (primitive.type === 'circle') {
      shape = <circle cx="0" cy="0" r={radius} {...common} />;
    } else if (primitive.type === 'vertical') {
      shape = <line x1="0" y1="-42" x2="0" y2="42" {...common} />;
    } else if (primitive.type === 'horizontal') {
      shape = <line x1="-34" y1="0" x2="34" y2="0" {...common} />;
    } else if (primitive.type === 'diagonal') {
      shape = <line x1="-30" y1="30" x2="30" y2="-30" {...common} />;
    } else if (primitive.type === 'arc') {
      shape = <path d={`M ${-radius} 0 A ${radius} ${radius} 0 0 1 0 ${-radius}`} {...common} />;
    }

    return (
      <g
        key={primitive.id}
        transform={`translate(${primitive.x} ${primitive.y}) rotate(${primitive.rotation}) scale(${primitive.scale})`}
        className={`type-editor-object ${selected ? 'is-selected' : ''}`}
        onPointerDown={(event) => {
          event.stopPropagation();
          event.currentTarget.setPointerCapture(event.pointerId);
          setSelectedId(primitive.id);
          setDraggingId(primitive.id);
        }}
        onPointerUp={() => setDraggingId(null)}
      >
        {shape}
        {selected && (
          <rect
            x={primitive.type === 'vertical' ? -10 : -36}
            y={primitive.type === 'horizontal' ? -10 : -46}
            width={primitive.type === 'vertical' ? 20 : 72}
            height={primitive.type === 'horizontal' ? 20 : 92}
            className="type-editor-selection"
          />
        )}
      </g>
    );
  };

  return (
    <div className="type-editor">
      <aside className="type-editor-panel type-editor-panel--palette">
        <div className="type-editor-eyebrow">PRIMITIVES</div>
        <div className="type-editor-palette">
          {PALETTE.map((item) => (
            <button
              key={item.type}
              type="button"
              className="type-editor-primitive-button"
              onClick={() => addPrimitive(item.type)}
            >
              <span className="type-editor-primitive-symbol">{item.symbol}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="type-editor-panel-section">
          <div className="type-editor-eyebrow">GLOBAL</div>

          <label className="type-editor-control">
            <span>STROKE</span>
            <input type="range" min="4" max="24" step="1" value={stroke} onChange={(e) => setStroke(Number(e.target.value))} />
            <strong>{stroke}</strong>
          </label>

          <label className="type-editor-control">
            <span>RADIUS</span>
            <input type="range" min="16" max="38" step="1" value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
            <strong>{radius}</strong>
          </label>

          <button
            type="button"
            className={`type-editor-toggle ${snapEnabled ? 'is-active' : ''}`}
            onClick={() => setSnapEnabled((value) => !value)}
          >
            SNAP / {snapEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
      </aside>

      <div className="type-editor-canvas-wrap">
        <div className="type-editor-canvas-head">
          <div>
            <div className="type-editor-eyebrow">GLYPH / d</div>
            <div className="type-editor-canvas-title">10 × 14 CONSTRUCTION GRID</div>
          </div>
          <button type="button" className="type-editor-icon-button" onClick={resetGlyph} title="Reset glyph">
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        <svg
          ref={svgRef}
          viewBox="0 0 100 140"
          className="type-editor-canvas"
          onPointerMove={handlePointerMove}
          onPointerUp={() => setDraggingId(null)}
          onPointerLeave={() => setDraggingId(null)}
          onPointerDown={() => setSelectedId('')}
        >
          <defs>
            <pattern id="minor-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" className="type-editor-grid-line" />
            </pattern>
          </defs>

          <rect width="100" height="140" fill="url(#minor-grid)" />
          <line x1="0" y1="110" x2="100" y2="110" className="type-editor-metric-line" />
          <line x1="0" y1="50" x2="100" y2="50" className="type-editor-metric-line type-editor-metric-line--muted" />
          <line x1="50" y1="0" x2="50" y2="140" className="type-editor-axis-line" />

          {primitives.map(renderPrimitive)}
        </svg>

        <div className="type-editor-canvas-footer">
          <span>BASELINE / 110</span>
          <span>X-HEIGHT / 50</span>
          <span>OBJECTS / {String(primitives.length).padStart(2, '0')}</span>
        </div>
      </div>

      <aside className="type-editor-panel type-editor-panel--inspector">
        <div className="type-editor-eyebrow">OBJECT</div>

        {selected ? (
          <>
            <div className="type-editor-object-name">{selected.type.toUpperCase()}</div>

            <div className="type-editor-readouts">
              <div><span>X</span><strong>{selected.x.toFixed(0)}</strong></div>
              <div><span>Y</span><strong>{selected.y.toFixed(0)}</strong></div>
              <div><span>ROT</span><strong>{selected.rotation}°</strong></div>
              <div><span>SCALE</span><strong>{selected.scale.toFixed(2)}</strong></div>
            </div>

            <div className="type-editor-actions">
              <button type="button" onClick={() => updatePrimitive(selected.id, { rotation: selected.rotation - 15 })}>
                <RotateCcw className="h-3.5 w-3.5" /> −15°
              </button>
              <button type="button" onClick={() => updatePrimitive(selected.id, { rotation: selected.rotation + 15 })}>
                <RotateCcw className="h-3.5 w-3.5 rotate-180" /> +15°
              </button>
              <button type="button" onClick={duplicateSelected}>
                <Copy className="h-3.5 w-3.5" /> DUPLICATE
              </button>
              <button type="button" className="is-danger" onClick={deleteSelected}>
                <Trash2 className="h-3.5 w-3.5" /> DELETE
              </button>
            </div>
          </>
        ) : (
          <div className="type-editor-empty">SELECT AN OBJECT ON THE GRID</div>
        )}

        <div className="type-editor-panel-section">
          <div className="type-editor-eyebrow">SYSTEM</div>
          <div className="type-editor-system-readout">
            <span>GRID</span><strong>10×14</strong>
            <span>STROKE</span><strong>{stroke}</strong>
            <span>RADIUS</span><strong>{radius}</strong>
            <span>SNAP</span><strong>{snapEnabled ? 'ON' : 'OFF'}</strong>
          </div>
        </div>
      </aside>
    </div>
  );
};

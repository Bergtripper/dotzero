export type EditorMode = 'design' | 'construction' | 'system' | 'test';
export type GlyphId = 'd' | 'o';
export type Tool = 'select' | 'bowl' | 'stem';
export type PartId = 'bowl' | 'stem';

export interface BowlPart {
  id: 'bowl';
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

export interface StemPart {
  id: 'stem';
  x: number;
  top: number;
  bottom: number;
}

export interface GlyphMetrics {
  leftSideBearing: number;
  rightSideBearing: number;
}

export interface GlyphDesign {
  bowl: BowlPart;
  stem: StemPart;
  stroke: number;
  overshoot: number;
  metrics: Record<GlyphId, GlyphMetrics>;
}

export const GUIDES = {
  ascender: 18,
  xHeight: 52,
  baseline: 112,
  center: 50,
};

export const DEFAULT_GLYPH: GlyphDesign = {
  bowl: { id: 'bowl', cx: 43, cy: 82, rx: 30, ry: 28 },
  stem: { id: 'stem', x: 73, top: 18, bottom: 112 },
  stroke: 11,
  overshoot: 2,
  metrics: {
    d: { leftSideBearing: 8, rightSideBearing: 8 },
    o: { leftSideBearing: 8, rightSideBearing: 8 },
  },
};

export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export interface MagneticResult {
  value: number;
  snapped: boolean;
  target?: number;
}

export const magnetic = (value: number, targets: number[], threshold = 2.8): MagneticResult => {
  const nearest = targets.reduce(
    (best, target) => Math.abs(value - target) < Math.abs(value - best) ? target : best,
    targets[0]
  );
  const snapped = Math.abs(value - nearest) <= threshold;
  return { value: snapped ? nearest : value, snapped, target: snapped ? nearest : undefined };
};

export const bowlOuterRy = (design: GlyphDesign) => design.bowl.ry + design.overshoot;


export interface GlyphBounds {
  minX: number;
  maxX: number;
  visualWidth: number;
  advanceWidth: number;
}

export const getGlyphBounds = (design: GlyphDesign, glyph: GlyphId): GlyphBounds => {
  const halfStroke = design.stroke / 2;
  const bowlMin = design.bowl.cx - design.bowl.rx - halfStroke;
  const bowlMax = design.bowl.cx + design.bowl.rx + halfStroke;
  const stemMax = design.stem.x + halfStroke;
  const minX = bowlMin;
  const maxX = glyph === 'd' ? Math.max(bowlMax, stemMax) : bowlMax;
  const visualWidth = maxX - minX;
  const metrics = design.metrics[glyph];
  return {
    minX,
    maxX,
    visualWidth,
    advanceWidth: visualWidth + metrics.leftSideBearing + metrics.rightSideBearing,
  };
};

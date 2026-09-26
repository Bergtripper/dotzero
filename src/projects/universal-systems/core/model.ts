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

export interface GlyphDesign {
  bowl: BowlPart;
  stem: StemPart;
  stroke: number;
  overshoot: number;
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

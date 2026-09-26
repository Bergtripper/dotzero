export type EditorMode = 'design' | 'construction';
export type Tool = 'select' | 'bowl' | 'stem';
export type PartId = 'bowl' | 'stem';

export interface BowlPart {
  id: 'bowl';
  cx: number;
  cy: number;
  radius: number;
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
  bowl: { id: 'bowl', cx: 43, cy: 82, radius: 30 },
  stem: { id: 'stem', x: 73, top: 18, bottom: 112 },
  stroke: 11,
  overshoot: 2,
};

export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const magnetic = (value: number, targets: number[], threshold = 2.8) => {
  const nearest = targets.reduce(
    (best, target) => Math.abs(value - target) < Math.abs(value - best) ? target : best,
    targets[0]
  );
  return Math.abs(value - nearest) <= threshold ? nearest : value;
};

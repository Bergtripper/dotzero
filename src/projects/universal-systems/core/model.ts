export type EditorMode = 'design' | 'construction' | 'system' | 'test';
export type GlyphId = 'b' | 'd' | 'o' | 'p';
export type KerningPair = `${GlyphId}${GlyphId}`;
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
  kerning: Record<KerningPair, number>;
  descender: number;
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
    b: { leftSideBearing: 8, rightSideBearing: 8 },
    d: { leftSideBearing: 8, rightSideBearing: 8 },
    o: { leftSideBearing: 8, rightSideBearing: 8 },
    p: { leftSideBearing: 8, rightSideBearing: 8 },
  },
  kerning: {
    bb: 0, bd: 0, bo: 0, bp: 0,
    db: 0, dd: 0, do: 0, dp: 0,
    ob: 0, od: 0, oo: 0, op: 0,
    pb: 0, pd: 0, po: 0, pp: 0,
  },
  descender: 132,
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
  const stemX = getStemX(design, glyph);
  const stemMin = stemX - halfStroke;
  const stemMax = stemX + halfStroke;
  const minX = glyph === 'b' ? Math.min(bowlMin, stemMin) : bowlMin;
  const maxX = glyph === 'o' ? bowlMax : Math.max(bowlMax, stemMax);
  const visualWidth = maxX - minX;
  const metrics = design.metrics[glyph];
  return {
    minX,
    maxX,
    visualWidth,
    advanceWidth: visualWidth + metrics.leftSideBearing + metrics.rightSideBearing,
  };
};


export const KERNING_PAIRS: KerningPair[] = [
  'bb', 'bd', 'bo', 'bp',
  'db', 'dd', 'do', 'dp',
  'ob', 'od', 'oo', 'op',
  'pb', 'pd', 'po', 'pp',
];

export const getKerningValue = (
  design: GlyphDesign,
  left: string,
  right: string | undefined
) => {
  if (!right) return 0;
  const pair = `${left}${right}` as KerningPair;
  return KERNING_PAIRS.includes(pair) ? design.kerning[pair] : 0;
};


export const getStemX = (design: GlyphDesign, glyph: GlyphId) =>
  glyph === 'b' || glyph === 'p'
    ? (2 * design.bowl.cx) - design.stem.x
    : design.stem.x;

export const getStemTop = (design: GlyphDesign, glyph: GlyphId) =>
  glyph === 'p' ? GUIDES.xHeight : design.stem.top;

export const getStemBottom = (design: GlyphDesign, glyph: GlyphId) =>
  glyph === 'p' ? design.descender : design.stem.bottom;

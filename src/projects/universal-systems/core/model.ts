export type EditorMode = 'design' | 'construction' | 'system' | 'test';
export type GlyphId = 'b' | 'd' | 'e' | 'o' | 'p' | 'q';
export type KerningPair = `${GlyphId}${GlyphId}`;
export type Tool = 'select' | 'bowl' | 'stem' | 'crossbar';
export type PartId = 'bowl' | 'stem' | 'crossbar';

export const GLYPH_IDS: GlyphId[] = ['b', 'd', 'e', 'o', 'p', 'q'];

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

export interface CrossbarPart {
  id: 'crossbar';
  yOffset: number;
  aperture: number;
  inset: number;
}

export interface GlyphMetrics {
  leftSideBearing: number;
  rightSideBearing: number;
}

export interface GlyphDesign {
  bowl: BowlPart;
  stem: StemPart;
  crossbar: CrossbarPart;
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

const createDefaultKerning = () =>
  Object.fromEntries(
    GLYPH_IDS.flatMap((left) =>
      GLYPH_IDS.map((right) => [`${left}${right}`, 0])
    )
  ) as Record<KerningPair, number>;

export const DEFAULT_GLYPH: GlyphDesign = {
  bowl: { id: 'bowl', cx: 43, cy: 82, rx: 30, ry: 28 },
  stem: { id: 'stem', x: 73, top: 18, bottom: 112 },
  crossbar: { id: 'crossbar', yOffset: 0, aperture: 16, inset: 8 },
  stroke: 11,
  overshoot: 2,
  metrics: {
    b: { leftSideBearing: 8, rightSideBearing: 8 },
    d: { leftSideBearing: 8, rightSideBearing: 8 },
    e: { leftSideBearing: 8, rightSideBearing: 8 },
    o: { leftSideBearing: 8, rightSideBearing: 8 },
    p: { leftSideBearing: 8, rightSideBearing: 8 },
    q: { leftSideBearing: 8, rightSideBearing: 8 },
  },
  kerning: createDefaultKerning(),
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
  const hasStem = isStemGlyph(glyph);
  const minX = hasStem && isLeftStemGlyph(glyph) ? Math.min(bowlMin, stemMin) : bowlMin;
  const maxX = hasStem ? Math.max(bowlMax, stemMax) : bowlMax;
  const visualWidth = maxX - minX;
  const metrics = design.metrics[glyph];
  return {
    minX,
    maxX,
    visualWidth,
    advanceWidth: visualWidth + metrics.leftSideBearing + metrics.rightSideBearing,
  };
};


export const KERNING_PAIRS: KerningPair[] =
  GLYPH_IDS.flatMap((left) =>
    GLYPH_IDS.map((right) => `${left}${right}` as KerningPair)
  );


export const getKerningValue = (
  design: GlyphDesign,
  left: string,
  right: string | undefined
) => {
  if (!right) return 0;
  const pair = `${left}${right}` as KerningPair;
  return KERNING_PAIRS.includes(pair) ? design.kerning[pair] : 0;
};


export const isLeftStemGlyph = (glyph: GlyphId) =>
  glyph === 'b' || glyph === 'p';

export const isDescenderGlyph = (glyph: GlyphId) =>
  glyph === 'p' || glyph === 'q';

export const getStemX = (design: GlyphDesign, glyph: GlyphId) =>
  isLeftStemGlyph(glyph)
    ? (2 * design.bowl.cx) - design.stem.x
    : design.stem.x;

export const getStemTop = (design: GlyphDesign, glyph: GlyphId) =>
  isDescenderGlyph(glyph) ? GUIDES.xHeight : design.stem.top;

export const getStemBottom = (design: GlyphDesign, glyph: GlyphId) =>
  isDescenderGlyph(glyph) ? design.descender : design.stem.bottom;


export const isStemGlyph = (glyph: GlyphId) =>
  glyph === 'b' || glyph === 'd' || glyph === 'p' || glyph === 'q';

export const getECrossbarY = (design: GlyphDesign) =>
  design.bowl.cy + design.crossbar.yOffset;

export const getEArcPath = (design: GlyphDesign) => {
  const right = design.bowl.cx + design.bowl.rx;
  const halfGap = design.crossbar.aperture / 2;
  const topGap = design.bowl.cy - halfGap;
  const bottomGap = design.bowl.cy + halfGap;
  return `M ${right} ${bottomGap} A ${design.bowl.rx} ${bowlOuterRy(design)} 0 1 1 ${right} ${topGap}`;
};

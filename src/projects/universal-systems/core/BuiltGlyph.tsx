import React from 'react';
import {
  GlyphDesign,
  GlyphId,
  bowlOuterRy,
  getECrossbarY,
  getOpenBowlPath,
  getGlyphBounds,
  getStemBottom,
  getStemTop,
  getStemX,
  isStemGlyph,
  isOpenBowlGlyph,
} from './model';

interface BuiltGlyphProps {
  glyph: GlyphId;
  design: GlyphDesign;
  className?: string;
  title?: string;
}

export const BuiltGlyph: React.FC<BuiltGlyphProps> = ({
  glyph,
  design,
  className,
  title,
}) => {
  const bounds = getGlyphBounds(design, glyph);
  const metrics = design.metrics[glyph];
  const viewMinX = bounds.minX - metrics.leftSideBearing;
  const crossbarY = getECrossbarY(design);

  return (
    <svg
      viewBox={`${viewMinX} 0 ${bounds.advanceWidth} 140`}
      className={className}
      role="img"
      aria-label={title ?? `Custom ${glyph}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {isOpenBowlGlyph(glyph) ? (
        <>
          <path
            d={getOpenBowlPath(design)}
            fill="none"
            stroke="currentColor"
            strokeWidth={design.stroke}
            vectorEffect="non-scaling-stroke"
          />
          {glyph === 'e' && (
            <line
              x1={design.bowl.cx - design.bowl.rx + design.crossbar.inset}
              x2={design.bowl.cx + design.bowl.rx}
              y1={crossbarY}
              y2={crossbarY}
              stroke="currentColor"
              strokeWidth={design.stroke}
              vectorEffect="non-scaling-stroke"
            />
          )}
        </>
      ) : (
        <ellipse
          cx={design.bowl.cx}
          cy={design.bowl.cy}
          rx={design.bowl.rx}
          ry={bowlOuterRy(design)}
          fill="none"
          stroke="currentColor"
          strokeWidth={design.stroke}
          vectorEffect="non-scaling-stroke"
        />
      )}

      {isStemGlyph(glyph) && (
        <line
          x1={getStemX(design, glyph)}
          x2={getStemX(design, glyph)}
          y1={getStemTop(design, glyph)}
          y2={getStemBottom(design, glyph)}
          stroke="currentColor"
          strokeWidth={design.stroke}
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
};

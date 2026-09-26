import React from 'react';
import { GlyphDesign, GlyphId, bowlOuterRy, getGlyphBounds, getStemBottom, getStemTop, getStemX } from './model';

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

  return (
    <svg
      viewBox={`${viewMinX} 0 ${bounds.advanceWidth} 140`}
      className={className}
      role="img"
      aria-label={title ?? `Custom ${glyph}`}
      preserveAspectRatio="xMidYMid meet"
    >
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
      {glyph !== 'o' && (
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

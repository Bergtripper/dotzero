import React from 'react';
import { GlyphDesign, GlyphId, bowlOuterRy } from './model';

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
}) => (
  <svg
    viewBox="0 0 100 140"
    className={className}
    role="img"
    aria-label={title ?? `Custom ${glyph}`}
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
    {glyph === 'd' && (
      <line
        x1={design.stem.x}
        x2={design.stem.x}
        y1={design.stem.top}
        y2={design.stem.bottom}
        stroke="currentColor"
        strokeWidth={design.stroke}
        vectorEffect="non-scaling-stroke"
      />
    )}
  </svg>
);

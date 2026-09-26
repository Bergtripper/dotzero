import React from 'react';
import { GlyphDesign, bowlOuterRy } from './model';

interface TypeSpecimenProps {
  design: GlyphDesign;
}

const Bowl: React.FC<{ design: GlyphDesign }> = ({ design }) => (
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
);

const CustomGlyph: React.FC<{ glyph: 'd' | 'o'; design: GlyphDesign; size?: number }> = ({
  glyph,
  design,
  size = 72,
}) => (
  <svg viewBox="0 0 100 140" width={size * 0.72} height={size} aria-label={`Custom ${glyph}`}>
    <Bowl design={design} />
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

export const TypeSpecimen: React.FC<TypeSpecimenProps> = ({ design }) => (
  <section className="tc-specimen">
    <div className="tc-specimen-head">
      <div>
        <div className="tc-label">LIVE SPECIMEN</div>
        <div className="tc-specimen-note">SHARED BOWL / TWO GLYPHS</div>
      </div>
      <div className="tc-specimen-status">d + o / LINKED</div>
    </div>

    <div className="tc-specimen-row tc-specimen-row--large">
      <CustomGlyph glyph="d" design={design} size={120} />
      <CustomGlyph glyph="o" design={design} size={120} />
      <CustomGlyph glyph="d" design={design} size={72} />
      <CustomGlyph glyph="o" design={design} size={72} />
    </div>

    <div className="tc-specimen-row tc-specimen-row--context">
      <CustomGlyph glyph="d" design={design} size={76} />
      <CustomGlyph glyph="o" design={design} size={76} />
      <span>tzero</span>
      <span className="tc-specimen-separator">/</span>
      <CustomGlyph glyph="d" design={design} size={76} />
      <span>esign</span>
      <span className="tc-specimen-separator">/</span>
      <CustomGlyph glyph="o" design={design} size={76} />
      <span>pen</span>
    </div>
  </section>
);

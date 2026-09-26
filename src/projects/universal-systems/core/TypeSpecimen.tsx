import React from 'react';
import { GlyphDesign } from './model';

interface TypeSpecimenProps {
  design: GlyphDesign;
}

const CustomD: React.FC<{ design: GlyphDesign; size?: number }> = ({ design, size = 72 }) => (
  <svg viewBox="0 0 100 140" width={size * 0.72} height={size} aria-label="Custom d">
    <circle
      cx={design.bowl.cx}
      cy={design.bowl.cy}
      r={design.bowl.radius}
      fill="none"
      stroke="currentColor"
      strokeWidth={design.stroke}
      vectorEffect="non-scaling-stroke"
    />
    <line
      x1={design.stem.x}
      x2={design.stem.x}
      y1={design.stem.top}
      y2={design.stem.bottom}
      stroke="currentColor"
      strokeWidth={design.stroke}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

export const TypeSpecimen: React.FC<TypeSpecimenProps> = ({ design }) => (
  <section className="tc-specimen">
    <div className="tc-specimen-head">
      <div>
        <div className="tc-label">LIVE SPECIMEN</div>
        <div className="tc-specimen-note">CUSTOM GLYPH + FALLBACK CONTEXT</div>
      </div>
      <div className="tc-specimen-status">GLYPH d / LIVE</div>
    </div>

    <div className="tc-specimen-row tc-specimen-row--large">
      <CustomD design={design} size={120} />
      <CustomD design={design} size={120} />
      <CustomD design={design} size={120} />
      <CustomD design={design} size={120} />
    </div>

    <div className="tc-specimen-row tc-specimen-row--context">
      <CustomD design={design} size={76} />
      <span>otzero</span>
      <span className="tc-specimen-separator">/</span>
      <CustomD design={design} size={76} />
      <span>esign</span>
      <span className="tc-specimen-separator">/</span>
      <CustomD design={design} size={76} />
      <span>igital</span>
    </div>
  </section>
);

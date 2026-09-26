import React from 'react';
import { BuiltGlyph } from './BuiltGlyph';
import { GLYPH_IDS, GlyphDesign, GlyphId } from './model';

interface TypeSpecimenProps {
  design: GlyphDesign;
}

const SizedGlyph: React.FC<{
  glyph: GlyphId;
  design: GlyphDesign;
}> = ({ glyph, design }) => (
  <BuiltGlyph
    glyph={glyph}
    design={design}
    className="tc-specimen-built-glyph"
    title={`Custom ${glyph}`}
  />
);

export const TypeSpecimen: React.FC<TypeSpecimenProps> = ({ design }) => (
  <section className="tc-specimen">
    <div className="tc-specimen-head">
      <div>
        <div className="tc-label">LIVE SPECIMEN</div>
        <div className="tc-specimen-note">SHARED SYSTEM / SIX GLYPHS</div>
      </div>
      <div className="tc-specimen-status">b + d + e + o + p + q / LINKED</div>
    </div>

    <div className="tc-specimen-row tc-specimen-row--large">
      {[120, 104, 88, 72, 60, 48].map((size, index) => (
        <span
          className="tc-specimen-sized-glyph"
          style={{ '--tc-specimen-size': `${size}px` } as React.CSSProperties}
          key={size}
        >
          <SizedGlyph glyph={GLYPH_IDS[index]} design={design} />
        </span>
      ))}
    </div>

    <div className="tc-specimen-row tc-specimen-row--context">
      {GLYPH_IDS.map((glyph) => (
        <span className="tc-specimen-inline-glyph" key={glyph}>
          <BuiltGlyph glyph={glyph} design={design} className="tc-specimen-built-glyph" />
        </span>
      ))}
      <span className="tc-specimen-separator">/</span>
      {(['b', 'e', 'd', 'o', 'p', 'q'] as GlyphId[]).map((glyph, index) => (
        <span className="tc-specimen-inline-glyph" key={`${glyph}-${index}`}>
          <BuiltGlyph glyph={glyph} design={design} className="tc-specimen-built-glyph" />
        </span>
      ))}
    </div>
  </section>
);

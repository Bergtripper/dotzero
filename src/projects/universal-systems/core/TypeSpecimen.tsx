import React from 'react';
import { BuiltGlyph } from './BuiltGlyph';
import { GlyphDesign, GlyphId } from './model';

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

const specimenGlyphs: GlyphId[] = ['b', 'd', 'o', 'b'];

export const TypeSpecimen: React.FC<TypeSpecimenProps> = ({ design }) => (
  <section className="tc-specimen">
    <div className="tc-specimen-head">
      <div>
        <div className="tc-label">LIVE SPECIMEN</div>
        <div className="tc-specimen-note">SHARED BOWL / THREE GLYPHS</div>
      </div>
      <div className="tc-specimen-status">b + d + o / LINKED</div>
    </div>

    <div className="tc-specimen-row tc-specimen-row--large">
      {[120, 96, 72, 48].map((size, index) => (
        <span
          className="tc-specimen-sized-glyph"
          style={{ '--tc-specimen-size': `${size}px` } as React.CSSProperties}
          key={size}
        >
          <SizedGlyph glyph={specimenGlyphs[index]} design={design} />
        </span>
      ))}
    </div>

    <div className="tc-specimen-row tc-specimen-row--context">
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="b" design={design} className="tc-specimen-built-glyph" /></span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="o" design={design} className="tc-specimen-built-glyph" /></span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="d" design={design} className="tc-specimen-built-glyph" /></span>
      <span className="tc-specimen-separator">/</span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="d" design={design} className="tc-specimen-built-glyph" /></span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="o" design={design} className="tc-specimen-built-glyph" /></span>
      <span className="tc-specimen-separator">/</span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="b" design={design} className="tc-specimen-built-glyph" /></span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="d" design={design} className="tc-specimen-built-glyph" /></span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="o" design={design} className="tc-specimen-built-glyph" /></span>
    </div>
  </section>
);

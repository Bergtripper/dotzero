import React from 'react';
import { BuiltGlyph } from './BuiltGlyph';
import { GlyphDesign } from './model';

interface TypeSpecimenProps {
  design: GlyphDesign;
}

const SizedGlyph: React.FC<{
  glyph: 'd' | 'o';
  design: GlyphDesign;
  size: number;
}> = ({ glyph, design, size }) => (
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
        <div className="tc-specimen-note">SHARED BOWL / TWO GLYPHS</div>
      </div>
      <div className="tc-specimen-status">d + o / LINKED</div>
    </div>

    <div className="tc-specimen-row tc-specimen-row--large">
      {[120, 96, 72, 48].map((size, index) => (
        <span
          className="tc-specimen-sized-glyph"
          style={{ '--tc-specimen-size': `${size}px` } as React.CSSProperties}
          key={size}
        >
          <SizedGlyph glyph={index % 2 === 0 ? 'd' : 'o'} design={design} size={size} />
        </span>
      ))}
    </div>

    <div className="tc-specimen-row tc-specimen-row--context">
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="d" design={design} className="tc-specimen-built-glyph" /></span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="o" design={design} className="tc-specimen-built-glyph" /></span>
      <span>tzero</span>
      <span className="tc-specimen-separator">/</span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="d" design={design} className="tc-specimen-built-glyph" /></span>
      <span>esign</span>
      <span className="tc-specimen-separator">/</span>
      <span className="tc-specimen-inline-glyph"><BuiltGlyph glyph="o" design={design} className="tc-specimen-built-glyph" /></span>
      <span>pen</span>
    </div>
  </section>
);

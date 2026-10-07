import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { UNIVERSAL_CORE_COPY } from './copy';
import { BuiltGlyph } from './BuiltGlyph';
import { GLYPH_IDS, GlyphDesign, GlyphId } from './model';

interface TypeSpecimenProps {
  design: GlyphDesign;
}

const SizedGlyph: React.FC<{
  glyph: GlyphId;
  design: GlyphDesign;
  title: string;
}> = ({ glyph, design, title }) => (
  <BuiltGlyph
    glyph={glyph}
    design={design}
    className="tc-specimen-built-glyph"
    title={title}
  />
);

export const TypeSpecimen: React.FC<TypeSpecimenProps> = ({ design }) => {
  const { language } = useLanguage();
  const t = UNIVERSAL_CORE_COPY[language];
  return (
  <section className="tc-specimen">
    <div className="tc-specimen-head">
      <div>
        <div className="tc-label">{t.liveSpecimen}</div>
        <div className="tc-specimen-note">{t.sharedSystemSeven}</div>
      </div>
      <div className="tc-specimen-status">b + c + d + e + o + p + q / {t.linked}</div>
    </div>

    <div className="tc-specimen-row tc-specimen-row--large">
      {[120, 108, 96, 84, 72, 60, 48].map((size, index) => (
        <span
          className="tc-specimen-sized-glyph"
          style={{ '--tc-specimen-size': `${size}px` } as React.CSSProperties}
          key={size}
        >
          <SizedGlyph glyph={GLYPH_IDS[index]} design={design} title={`${t.customGlyph} ${GLYPH_IDS[index]}`} />
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
      {(['c', 'o', 'd', 'e', 'b', 'o', 'q'] as GlyphId[]).map((glyph, index) => (
        <span className="tc-specimen-inline-glyph" key={`${glyph}-${index}`}>
          <BuiltGlyph glyph={glyph} design={design} className="tc-specimen-built-glyph" />
        </span>
      ))}
    </div>
  </section>
  );
};

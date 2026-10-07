import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { UNIVERSAL_CORE_COPY } from './copy';
import { BuiltGlyph } from './BuiltGlyph';
import { GLYPH_IDS, GlyphDesign, GlyphId, getGlyphBounds } from './model';

interface SystemViewProps {
  design: GlyphDesign;
}

const structureLabel = (glyph: GlyphId, t: typeof UNIVERSAL_CORE_COPY.en) => {
  if (glyph === 'o') return t.structure.bowl;
  if (glyph === 'c') return t.structure.openBowl;
  if (glyph === 'e') return t.structure.openBowlBar;
  if (glyph === 'b') return t.structure.ascenderLeft;
  if (glyph === 'd') return t.structure.ascenderRight;
  if (glyph === 'p') return t.structure.descenderLeft;
  return t.structure.descenderRight;
};

export const SystemView: React.FC<SystemViewProps> = ({ design }) => {
  const { language } = useLanguage();
  const t = UNIVERSAL_CORE_COPY[language];
  return (
  <section className="tc-system-view">
    <div className="tc-system-head">
      <div>
        <div className="tc-label">{t.systemView}</div>
        <div className="tc-system-title">{t.oneBowlSeven}</div>
      </div>
      <div className="tc-system-status">{t.systemStatus}</div>
    </div>

    <div className="tc-system-stage tc-system-stage--seven">
      {GLYPH_IDS.map((glyph) => (
        <div className="tc-system-card" key={glyph}>
          <div className="tc-system-card-head">
            <span>{t.glyph} / {glyph}</span>
            <strong>{structureLabel(glyph, t)}</strong>
          </div>
          <BuiltGlyph glyph={glyph} design={design} className="tc-system-glyph" />
        </div>
      ))}
    </div>

    <div className="tc-system-matrix tc-system-matrix--seven">
      <div className="is-head"><span>{t.rule}</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>{glyph}</span>)}<span>{t.status}</span></div>
      <div><span>{t.bowl} {Math.round(design.bowl.rx * 2)}×{Math.round(design.bowl.ry * 2)}</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>01</span>)}<strong>{t.shared}</strong></div>
      <div><span>{t.stroke} {design.stroke}</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>{design.stroke}</span>)}<strong>{t.shared}</strong></div>
      <div><span>{t.stemSide}</span><span>{t.left}</span><span>—</span><span>{t.right}</span><span>—</span><span>—</span><span>{t.left}</span><span>{t.right}</span><em>{t.derived}</em></div>
      <div><span>{t.verticalRange}</span><span>ASC→BASE</span><span>XH→BASE</span><span>ASC→BASE</span><span>XH→BASE</span><span>XH→BASE</span><span>XH→DESC</span><span>XH→DESC</span><em>{t.structural}</em></div>
      <div><span>{t.aperture}</span><span>—</span><span>{design.crossbar.aperture}</span><span>—</span><span>{design.crossbar.aperture}</span><span>—</span><span>—</span><span>—</span><strong>c ↔ e {t.shared}</strong></div>
      <div><span>{t.crossbar}</span><span>—</span><span>—</span><span>—</span><span>{design.crossbar.yOffset}</span><span>—</span><span>—</span><span>—</span><strong>e {t.only}</strong></div>
      <div><span>{t.advance}</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>{getGlyphBounds(design, glyph).advanceWidth.toFixed(1)}</span>)}<em>{t.glyphMetric}</em></div>
      <div><span>KERNING</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>7×</span>)}<em>49 {t.pairs}</em></div>
    </div>
  </section>
  );
};

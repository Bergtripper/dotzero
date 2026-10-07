import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { UNIVERSAL_CORE_COPY } from './copy';
import { GlyphDesign } from './model';

interface SharedDnaProps {
  design: GlyphDesign;
}

export const SharedDna: React.FC<SharedDnaProps> = ({ design }) => {
  const { language } = useLanguage();
  const t = UNIVERSAL_CORE_COPY[language];
  return (
  <section className="tc-dna">
    <div className="tc-dna-head">
      <div>
        <div className="tc-label">{t.sharedDna}</div>
        <div className="tc-dna-title">b ↔ c ↔ d ↔ e ↔ o ↔ p ↔ q</div>
      </div>
      <div className="tc-dna-status">{t.liveFamily}</div>
    </div>

    <div className="tc-dna-grid">
      <div>
        <span>{t.bowl}</span>
        <strong>07 {t.glyphs}</strong>
        <small>{Math.round(design.bowl.rx * 2)} × {Math.round(design.bowl.ry * 2)}</small>
      </div>
      <div>
        <span>{t.stroke}</span>
        <strong>{t.shared}</strong>
        <small>{design.stroke}</small>
      </div>
      <div>
        <span>{t.overshoot}</span>
        <strong>SHARED</strong>
        <small>{design.overshoot.toFixed(1)}</small>
      </div>
      <div>
        <span>{t.stemSide}</span>
        <strong>{t.mirrored}</strong>
        <small>b/p ← bowl → d/q</small>
      </div>
      <div>
        <span>{t.openBowl}</span>
        <strong>c ↔ e</strong>
        <small>{t.aperture} {design.crossbar.aperture}</small>
      </div>
      <div>
        <span>{t.crossbar}</span>
        <strong>e {t.specific}</strong>
        <small>{t.toolBar} {design.crossbar.yOffset} / {t.inset} {design.crossbar.inset}</small>
      </div>
      <div>
        <span>{t.verticalSystem}</span>
        <strong>2 {t.axes}</strong>
        <small>ASC→BASE / XH→DESC {Math.round(design.descender)}</small>
      </div>
      <div className="is-specific">
        <span>{t.spacing}</span>
        <strong>{t.perGlyph}</strong>
        <small>07 {t.metricSets}</small>
      </div>
      <div className="is-specific">
        <span>KERNING</span>
        <strong>49 {t.pairs}</strong>
        <small>7 × 7 {t.builtGlyphs}</small>
      </div>
    </div>
  </section>
  );
};

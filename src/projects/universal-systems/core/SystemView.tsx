import React from 'react';
import { BuiltGlyph } from './BuiltGlyph';
import { GLYPH_IDS, GlyphDesign, GlyphId, getGlyphBounds } from './model';

interface SystemViewProps {
  design: GlyphDesign;
}

const structureLabel = (glyph: GlyphId) => {
  if (glyph === 'o') return 'BOWL';
  if (glyph === 'e') return 'OPEN BOWL + BAR';
  if (glyph === 'b') return 'ASCENDER ← BOWL';
  if (glyph === 'd') return 'BOWL → ASCENDER';
  if (glyph === 'p') return 'DESCENDER ← BOWL';
  return 'BOWL → DESCENDER';
};

export const SystemView: React.FC<SystemViewProps> = ({ design }) => (
  <section className="tc-system-view">
    <div className="tc-system-head">
      <div>
        <div className="tc-label">SYSTEM VIEW</div>
        <div className="tc-system-title">ONE BOWL / SIX GLYPHS</div>
      </div>
      <div className="tc-system-status">MIRROR + VERTICAL + APERTURE SYSTEM</div>
    </div>

    <div className="tc-system-stage tc-system-stage--six">
      {GLYPH_IDS.map((glyph) => (
        <div className="tc-system-card" key={glyph}>
          <div className="tc-system-card-head">
            <span>GLYPH / {glyph}</span>
            <strong>{structureLabel(glyph)}</strong>
          </div>
          <BuiltGlyph glyph={glyph} design={design} className="tc-system-glyph" />
        </div>
      ))}
    </div>

    <div className="tc-system-matrix tc-system-matrix--six">
      <div className="is-head"><span>RULE</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>{glyph}</span>)}<span>STATUS</span></div>
      <div><span>BOWL {Math.round(design.bowl.rx * 2)}×{Math.round(design.bowl.ry * 2)}</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>01</span>)}<strong>SHARED</strong></div>
      <div><span>STROKE {design.stroke}</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>{design.stroke}</span>)}<strong>SHARED</strong></div>
      <div><span>STEM SIDE</span><span>LEFT</span><span>RIGHT</span><span>—</span><span>—</span><span>LEFT</span><span>RIGHT</span><em>DERIVED</em></div>
      <div><span>VERTICAL RANGE</span><span>ASC→BASE</span><span>ASC→BASE</span><span>XH→BASE</span><span>XH→BASE</span><span>XH→DESC</span><span>XH→DESC</span><em>STRUCTURAL</em></div>
      <div><span>APERTURE</span><span>—</span><span>—</span><span>{design.crossbar.aperture}</span><span>—</span><span>—</span><span>—</span><strong>e ONLY</strong></div>
      <div><span>CROSSBAR</span><span>—</span><span>—</span><span>{design.crossbar.yOffset}</span><span>—</span><span>—</span><span>—</span><strong>e ONLY</strong></div>
      <div><span>ADVANCE</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>{getGlyphBounds(design, glyph).advanceWidth.toFixed(1)}</span>)}<em>GLYPH METRIC</em></div>
      <div><span>KERNING</span>{GLYPH_IDS.map((glyph) => <span key={glyph}>6×</span>)}<em>36 PAIRS</em></div>
    </div>
  </section>
);

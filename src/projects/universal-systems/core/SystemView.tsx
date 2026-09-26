import React from 'react';
import { BuiltGlyph } from './BuiltGlyph';
import { GlyphDesign, GlyphId, getGlyphBounds } from './model';

interface SystemViewProps {
  design: GlyphDesign;
}

const glyphs: GlyphId[] = ['b', 'd', 'o', 'p', 'q'];

const structureLabel = (glyph: GlyphId) => {
  if (glyph === 'o') return 'BOWL';
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
        <div className="tc-system-title">ONE BOWL / FIVE GLYPHS</div>
      </div>
      <div className="tc-system-status">MIRROR + VERTICAL TRANSFORMATION SYSTEM</div>
    </div>

    <div className="tc-system-stage tc-system-stage--five">
      {glyphs.map((glyph) => (
        <div className="tc-system-card" key={glyph}>
          <div className="tc-system-card-head">
            <span>GLYPH / {glyph}</span>
            <strong>{structureLabel(glyph)}</strong>
          </div>
          <BuiltGlyph glyph={glyph} design={design} className="tc-system-glyph" />
        </div>
      ))}
    </div>

    <div className="tc-system-matrix tc-system-matrix--five">
      <div className="is-head"><span>RULE</span><span>b</span><span>d</span><span>o</span><span>p</span><span>q</span><span>STATUS</span></div>
      <div><span>BOWL {Math.round(design.bowl.rx * 2)}×{Math.round(design.bowl.ry * 2)}</span><span>01</span><span>01</span><span>01</span><span>01</span><span>01</span><strong>SHARED</strong></div>
      <div><span>STROKE {design.stroke}</span><span>{design.stroke}</span><span>{design.stroke}</span><span>{design.stroke}</span><span>{design.stroke}</span><span>{design.stroke}</span><strong>SHARED</strong></div>
      <div><span>STEM SIDE</span><span>LEFT</span><span>RIGHT</span><span>—</span><span>LEFT</span><span>RIGHT</span><em>DERIVED</em></div>
      <div><span>VERTICAL RANGE</span><span>ASC→BASE</span><span>ASC→BASE</span><span>XH→BASE</span><span>XH→DESC</span><span>XH→DESC</span><em>STRUCTURAL</em></div>
      <div><span>DESCENDER</span><span>—</span><span>—</span><span>—</span><span>{Math.round(design.descender)}</span><span>{Math.round(design.descender)}</span><strong>SHARED</strong></div>
      <div><span>ADVANCE</span>{glyphs.map((glyph) => <span key={glyph}>{getGlyphBounds(design, glyph).advanceWidth.toFixed(1)}</span>)}<em>GLYPH METRIC</em></div>
      <div><span>KERNING</span><span>5×</span><span>5×</span><span>5×</span><span>5×</span><span>5×</span><em>25 PAIRS</em></div>
    </div>
  </section>
);

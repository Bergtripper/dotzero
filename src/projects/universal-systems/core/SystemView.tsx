import React from 'react';
import { BuiltGlyph } from './BuiltGlyph';
import { GlyphDesign, GlyphId, getGlyphBounds } from './model';

interface SystemViewProps {
  design: GlyphDesign;
}

const glyphs: GlyphId[] = ['b', 'd', 'o'];

export const SystemView: React.FC<SystemViewProps> = ({ design }) => (
  <section className="tc-system-view">
    <div className="tc-system-head">
      <div>
        <div className="tc-label">SYSTEM VIEW</div>
        <div className="tc-system-title">ONE BOWL / THREE GLYPHS</div>
      </div>
      <div className="tc-system-status">BOWL + MIRRORED STEM LOGIC</div>
    </div>

    <div className="tc-system-stage tc-system-stage--three">
      {glyphs.map((glyph) => (
        <div className="tc-system-card" key={glyph}>
          <div className="tc-system-card-head">
            <span>GLYPH / {glyph}</span>
            <strong>{glyph === 'o' ? 'BOWL' : glyph === 'b' ? 'STEM ← BOWL' : 'BOWL → STEM'}</strong>
          </div>
          <BuiltGlyph glyph={glyph} design={design} className="tc-system-glyph" />
        </div>
      ))}
    </div>

    <div className="tc-system-matrix tc-system-matrix--three">
      <div className="is-head"><span>RULE</span><span>b</span><span>d</span><span>o</span><span>STATUS</span></div>
      <div><span>BOWL {Math.round(design.bowl.rx * 2)}×{Math.round(design.bowl.ry * 2)}</span><span>01</span><span>01</span><span>01</span><strong>SHARED</strong></div>
      <div><span>STROKE {design.stroke}</span><span>{design.stroke}</span><span>{design.stroke}</span><span>{design.stroke}</span><strong>SHARED</strong></div>
      <div><span>OVERSHOOT {design.overshoot.toFixed(1)}</span><span>{design.overshoot.toFixed(1)}</span><span>{design.overshoot.toFixed(1)}</span><span>{design.overshoot.toFixed(1)}</span><strong>SHARED</strong></div>
      <div><span>STEM</span><span>LEFT / MIRROR</span><span>RIGHT</span><span>—</span><em>DERIVED</em></div>
      <div><span>LSB</span><span>{design.metrics.b.leftSideBearing}</span><span>{design.metrics.d.leftSideBearing}</span><span>{design.metrics.o.leftSideBearing}</span><em>GLYPH METRIC</em></div>
      <div><span>RSB</span><span>{design.metrics.b.rightSideBearing}</span><span>{design.metrics.d.rightSideBearing}</span><span>{design.metrics.o.rightSideBearing}</span><em>GLYPH METRIC</em></div>
      <div><span>ADVANCE</span><span>{getGlyphBounds(design, 'b').advanceWidth.toFixed(1)}</span><span>{getGlyphBounds(design, 'd').advanceWidth.toFixed(1)}</span><span>{getGlyphBounds(design, 'o').advanceWidth.toFixed(1)}</span><em>GLYPH METRIC</em></div>
      <div><span>KERNING</span><span>bb/bd/bo</span><span>db/dd/do</span><span>ob/od/oo</span><em>PAIR METRIC</em></div>
    </div>
  </section>
);

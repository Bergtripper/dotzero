import React from 'react';
import { GlyphDesign } from './model';

interface SharedDnaProps {
  design: GlyphDesign;
}

export const SharedDna: React.FC<SharedDnaProps> = ({ design }) => (
  <section className="tc-dna">
    <div className="tc-dna-head">
      <div>
        <div className="tc-label">SHARED DNA</div>
        <div className="tc-dna-title">b ↔ d ↔ o</div>
      </div>
      <div className="tc-dna-status">LIVE FAMILY</div>
    </div>

    <div className="tc-dna-grid">
      <div>
        <span>BOWL</span>
        <strong>03 GLYPHS</strong>
        <small>{Math.round(design.bowl.rx * 2)} × {Math.round(design.bowl.ry * 2)}</small>
      </div>
      <div>
        <span>STROKE</span>
        <strong>SHARED</strong>
        <small>{design.stroke}</small>
      </div>
      <div>
        <span>OVERSHOOT</span>
        <strong>SHARED</strong>
        <small>{design.overshoot.toFixed(1)}</small>
      </div>
      <div>
        <span>STEM LOGIC</span>
        <strong>MIRRORED</strong>
        <small>b ← axis → d</small>
      </div>
      <div className="is-specific">
        <span>SPACING</span>
        <strong>PER GLYPH</strong>
        <small>b {design.metrics.b.leftSideBearing}/{design.metrics.b.rightSideBearing} · d {design.metrics.d.leftSideBearing}/{design.metrics.d.rightSideBearing} · o {design.metrics.o.leftSideBearing}/{design.metrics.o.rightSideBearing}</small>
      </div>
      <div className="is-specific">
        <span>KERNING</span>
        <strong>09 PAIRS</strong>
        <small>bb bd bo / db dd do / ob od oo</small>
      </div>
    </div>
  </section>
);

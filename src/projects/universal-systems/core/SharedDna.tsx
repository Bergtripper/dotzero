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
        <div className="tc-dna-title">d ↔ o</div>
      </div>
      <div className="tc-dna-status">LIVE LINK</div>
    </div>

    <div className="tc-dna-grid">
      <div>
        <span>BOWL</span>
        <strong>LINKED</strong>
        <small>{Math.round(design.bowl.rx * 2)} × {Math.round(design.bowl.ry * 2)}</small>
      </div>
      <div>
        <span>STROKE</span>
        <strong>LINKED</strong>
        <small>{design.stroke}</small>
      </div>
      <div>
        <span>OVERSHOOT</span>
        <strong>LINKED</strong>
        <small>{design.overshoot.toFixed(1)}</small>
      </div>
      <div className="is-specific">
        <span>STEM</span>
        <strong>d ONLY</strong>
        <small>NOT SHARED</small>
      </div>
      <div className="is-specific">
        <span>SPACING</span>
        <strong>PER GLYPH</strong>
        <small>d {design.metrics.d.leftSideBearing}/{design.metrics.d.rightSideBearing} · o {design.metrics.o.leftSideBearing}/{design.metrics.o.rightSideBearing}</small>
      </div>
    </div>
  </section>
);

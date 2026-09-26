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
        <div className="tc-dna-title">b ↔ d ↔ o ↔ p ↔ q</div>
      </div>
      <div className="tc-dna-status">LIVE FAMILY</div>
    </div>

    <div className="tc-dna-grid">
      <div>
        <span>BOWL</span>
        <strong>05 GLYPHS</strong>
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
        <span>STEM SIDE</span>
        <strong>MIRRORED</strong>
        <small>b/p ← bowl → d/q</small>
      </div>
      <div>
        <span>VERTICAL SYSTEM</span>
        <strong>2 AXES</strong>
        <small>ASC→BASE / XH→DESC {Math.round(design.descender)}</small>
      </div>
      <div className="is-specific">
        <span>SPACING</span>
        <strong>PER GLYPH</strong>
        <small>05 METRIC SETS</small>
      </div>
      <div className="is-specific">
        <span>KERNING</span>
        <strong>25 PAIRS</strong>
        <small>5 × 5 BUILT GLYPHS</small>
      </div>
    </div>
  </section>
);

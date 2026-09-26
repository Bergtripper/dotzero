import React from 'react';
import { GlyphDesign, bowlOuterRy, getGlyphBounds } from './model';

interface SystemViewProps {
  design: GlyphDesign;
}

const SystemGlyph: React.FC<{ glyph: 'd' | 'o'; design: GlyphDesign }> = ({ glyph, design }) => (
  <svg viewBox="0 0 100 140" className="tc-system-glyph" aria-label={`System glyph ${glyph}`}>
    <ellipse
      cx={design.bowl.cx}
      cy={design.bowl.cy}
      rx={design.bowl.rx}
      ry={bowlOuterRy(design)}
      fill="none"
      stroke="currentColor"
      strokeWidth={design.stroke}
      vectorEffect="non-scaling-stroke"
    />
    {glyph === 'd' && (
      <line
        x1={design.stem.x}
        x2={design.stem.x}
        y1={design.stem.top}
        y2={design.stem.bottom}
        stroke="currentColor"
        strokeWidth={design.stroke}
        vectorEffect="non-scaling-stroke"
      />
    )}
  </svg>
);

export const SystemView: React.FC<SystemViewProps> = ({ design }) => {
  const dBounds = getGlyphBounds(design, 'd');
  const oBounds = getGlyphBounds(design, 'o');

  return (
  <section className="tc-system-view">
    <div className="tc-system-head">
      <div>
        <div className="tc-label">SYSTEM VIEW</div>
        <div className="tc-system-title">ONE BOWL / TWO GLYPHS</div>
      </div>
      <div className="tc-system-status">COHERENT / 03 SHARED RULES</div>
    </div>

    <div className="tc-system-stage">
      <div className="tc-system-card">
        <div className="tc-system-card-head">
          <span>GLYPH / d</span>
          <strong>BOWL + STEM</strong>
        </div>
        <SystemGlyph glyph="d" design={design} />
      </div>

      <div className="tc-system-link" aria-hidden="true">
        <span>BOWL</span>
        <i />
        <span>SHARED</span>
        <i />
        <span>BOWL</span>
      </div>

      <div className="tc-system-card">
        <div className="tc-system-card-head">
          <span>GLYPH / o</span>
          <strong>BOWL</strong>
        </div>
        <SystemGlyph glyph="o" design={design} />
      </div>
    </div>

    <div className="tc-system-matrix">
      <div className="is-head"><span>RULE</span><span>d</span><span>o</span><span>STATUS</span></div>
      <div><span>BOWL {Math.round(design.bowl.rx * 2)}×{Math.round(design.bowl.ry * 2)}</span><span>01</span><span>01</span><strong>SHARED</strong></div>
      <div><span>STROKE {design.stroke}</span><span>{design.stroke}</span><span>{design.stroke}</span><strong>SHARED</strong></div>
      <div><span>OVERSHOOT {design.overshoot.toFixed(1)}</span><span>{design.overshoot.toFixed(1)}</span><span>{design.overshoot.toFixed(1)}</span><strong>SHARED</strong></div>
      <div><span>STEM</span><span>01</span><span>—</span><em>SPECIFIC</em></div>
      <div><span>LSB</span><span>{design.metrics.d.leftSideBearing}</span><span>{design.metrics.o.leftSideBearing}</span><em>GLYPH METRIC</em></div>
      <div><span>RSB</span><span>{design.metrics.d.rightSideBearing}</span><span>{design.metrics.o.rightSideBearing}</span><em>GLYPH METRIC</em></div>
      <div><span>ADVANCE</span><span>{dBounds.advanceWidth.toFixed(1)}</span><span>{oBounds.advanceWidth.toFixed(1)}</span><em>GLYPH METRIC</em></div>
      <div><span>KERN dd / oo</span><span>{design.kerning.dd}</span><span>{design.kerning.oo}</span><em>PAIR METRIC</em></div>
      <div><span>KERN do / od</span><span>{design.kerning.do}</span><span>{design.kerning.od}</span><em>PAIR METRIC</em></div>
    </div>
  </section>
  );
};

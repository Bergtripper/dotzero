import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DotMarker, FieldGlyph, SyntaxLabel, SystemGlyph } from './GraphicSyntax';

type DotzeroScrollHeroProps = {
  label: string;
  meta: string;
  statement: string;
  sub: string;
  intro: string;
  projectCount: number;
  activeLabel: string;
  projectsLabel: string;
};

type Glyph = {
  id: string;
  char: string;
  finalX: number;
  finalY: number;
  scatterX: number;
  scatterY: number;
  scatterRotate: number;
  scatterScale: number;
  drift: number;
  specialZero?: boolean;
};

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const smoothstep = (start: number, end: number, value: number) => {
  const t = clamp01((value - start) / (end - start));
  return t * t * (3 - 2 * t);
};

const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;

const LINE_SPECS = [
  { text: 'DOT.', x: 10, y: 25, step: 7.4 },
  { text: 'ZERO.', x: 10, y: 48, step: 7.4 },
  { text: 'OPEN DIRECTION.', x: 10, y: 72, step: 5.15 },
] as const;

const buildGlyphs = (): Glyph[] => {
  let visibleIndex = 0;
  const glyphs: Glyph[] = [];

  LINE_SPECS.forEach((line, lineIndex) => {
    Array.from(line.text).forEach((char, charIndex) => {
      if (char === ' ') return;

      const seed = visibleIndex + 1;
      const specialZero = lineIndex === 1 && charIndex === 3;

      glyphs.push({
        id: `l${lineIndex}-c${charIndex}`,
        char,
        finalX: line.x + charIndex * line.step,
        finalY: line.y,
        scatterX: 5 + ((seed * 37) % 89),
        scatterY: 10 + ((seed * 53) % 76),
        scatterRotate: -24 + ((seed * 17) % 49),
        scatterScale: 0.72 + ((seed * 11) % 34) / 100,
        drift: 0.55 + ((seed * 13) % 90) / 100,
        specialZero,
      });

      visibleIndex += 1;
    });
  });

  return glyphs;
};

const GLYPHS = buildGlyphs();

export const DotzeroScrollHero: React.FC<DotzeroScrollHeroProps> = ({
  label,
  meta,
  statement,
  sub,
  intro,
  projectCount,
  activeLabel,
  projectsLabel,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [stageSize, setStageSize] = useState({ width: 1200, height: 520 });
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const measure = () => {
      const rect = stage.getBoundingClientRect();
      setStageSize({ width: rect.width, height: rect.height });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    measure();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const sync = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (reduceMotion.matches) {
          setProgress(1);
          return;
        }

        const rect = section.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        const start = absoluteTop - 80;
        const range = Math.max(1, section.offsetHeight - window.innerHeight);
        setProgress(clamp01((window.scrollY - start) / range));
      });
    };

    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    reduceMotion.addEventListener?.('change', sync);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
      reduceMotion.removeEventListener?.('change', sync);
    };
  }, []);

  const align = smoothstep(0.12, 0.62, progress);
  const meaning = smoothstep(0.58, 0.9, progress);
  const zeroShift = smoothstep(0.42, 0.62, progress);

  const stateLabel = progress < 0.34 ? '01 / OPEN' : progress < 0.68 ? '02 / ALIGN' : '03 / OPEN DIRECTION';

  const renderedGlyphs = useMemo(() => GLYPHS, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  return (
    <section ref={sectionRef} className="dz-scroll-hero border-b dz-border" aria-label={statement}>
      <div className="dz-scroll-hero__sticky">
        <div className="mx-auto flex min-h-full max-w-7xl flex-col px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 dz-text-muted">
            <SyntaxLabel kind="dot">{label}</SyntaxLabel>
            <span className="hidden font-mono text-[8px] uppercase tracking-[0.16em] sm:block">{meta}</span>
          </div>

          <div
            ref={stageRef}
            className="dz-scroll-hero__stage mt-7"
            onPointerMove={handlePointerMove}
            onPointerLeave={() => setPointer({ x: 0, y: 0 })}
          >
            <div className="dz-scroll-hero__grid" aria-hidden="true" />
            <div className="dz-scroll-hero__state">{stateLabel}</div>
            <div className="dz-scroll-hero__claim sr-only">{statement}</div>

            {renderedGlyphs.map((glyph) => {
              const x = lerp(glyph.scatterX, glyph.finalX, align);
              const y = lerp(glyph.scatterY, glyph.finalY, align);
              const rotate = lerp(glyph.scatterRotate, 0, align);
              const scale = lerp(glyph.scatterScale, 1, align);
              const drift = (1 - align) * glyph.drift;
              const dx = pointer.x * 13 * drift;
              const dy = pointer.y * 9 * drift;
              const fontSize = Math.max(24, Math.min(104, stageSize.width * 0.073));

              return (
                <span
                  key={glyph.id}
                  className={`dz-scroll-glyph${glyph.specialZero ? ' is-zero' : ''}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    fontSize: `${fontSize}px`,
                    transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${rotate}deg) scale(${scale})`,
                    opacity: 0.58 + align * 0.42,
                  }}
                  aria-hidden="true"
                >
                  {glyph.specialZero ? (
                    <span className="dz-scroll-zero">
                      <span style={{ opacity: 1 - zeroShift }}>o</span>
                      <span className="dz-scroll-zero__numeric" style={{ opacity: zeroShift }}>
                        0
                        <span className="dz-scroll-zero__slash" />
                      </span>
                    </span>
                  ) : glyph.char}
                </span>
              );
            })}

            <span
              className="dz-scroll-sign dz-scroll-sign--dot"
              style={{ opacity: meaning, transform: `translate(-50%, -50%) scale(${0.72 + meaning * 0.28})` }}
              aria-hidden="true"
            >
              <DotMarker size="lg" />
            </span>
            <span
              className="dz-scroll-sign dz-scroll-sign--field"
              style={{ opacity: meaning, transform: `translate(-50%, -50%) scale(${0.72 + meaning * 0.28})` }}
              aria-hidden="true"
            >
              <FieldGlyph size={28} />
            </span>
            <span
              className="dz-scroll-sign dz-scroll-sign--system"
              style={{ opacity: meaning, transform: `translate(calc(-50% + ${meaning * 8}px), -50%) scale(${0.72 + meaning * 0.28})` }}
              aria-hidden="true"
            >
              <SystemGlyph size={46} />
            </span>

            <div className="dz-scroll-hero__progress" aria-hidden="true">
              <span style={{ transform: `scaleX(${progress})` }} />
            </div>
          </div>

          <div
            className="dz-scroll-hero__footer mt-7 grid gap-6 border-t dz-rule pt-6 lg:grid-cols-12 lg:items-end"
            style={{ opacity: 0.28 + meaning * 0.72 }}
          >
            <div className="lg:col-span-7">
              <p className="dz-body-strong max-w-2xl">{sub}</p>
              <p className="dz-body mt-3 max-w-2xl">{intro}</p>
            </div>
            <div className="flex items-center gap-8 font-mono text-[8px] uppercase tracking-[0.16em] dz-text-muted lg:col-span-5 lg:justify-end">
              <span className="inline-flex items-center gap-2"><DotMarker size="xs" />{activeLabel}</span>
              <span>{String(projectCount).padStart(2, '0')} {projectsLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

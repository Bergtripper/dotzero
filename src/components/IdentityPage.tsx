import React from 'react';
import { DotzeroLogotypetype } from './DotzeroLogotypetype';
import { DotzeroMark } from './DotzeroMark';

type CellProps = {
  number: string;
  title: string;
  note?: string;
  className?: string;
  children: React.ReactNode;
};

const Cell: React.FC<CellProps> = ({ number, title, note, className = '', children }) => (
  <section className={`dz-ci-cell ${className}`}>
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[10px] dz-text-muted">{number}</span>
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em]">{title}</h2>
      </div>
      {note ? <span className="hidden max-w-[15rem] text-right font-mono text-[8px] uppercase tracking-[0.11em] dz-text-muted sm:block">{note}</span> : null}
    </div>
    <div className="mt-7">{children}</div>
  </section>
);

const ConstructionDiagram = () => (
  <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_11rem]">
    <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden border border-[#cfcfcf] bg-white text-black">
      <div className="absolute inset-0 dz-ci-construction-grid" />
      <div className="absolute inset-[15%] rounded-full border border-[#c8c8c8]" />
      <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-[#d1d1d1]" />
      <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-[#d1d1d1]" />
      <div className="absolute inset-[22%] flex items-center justify-center">
        <DotzeroMark size={155} />
      </div>
      <span className="absolute left-1/2 top-1 -translate-x-1/2 bg-white px-1 font-mono text-[8px] text-[#666]">1.0</span>
      <span className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 bg-white px-1 font-mono text-[8px] text-[#666]">2.6</span>
    </div>
    <div className="font-mono text-[9px] leading-7 text-[var(--text-muted)]">
      <div className="mb-2 font-semibold text-[var(--text)]">KEY PROPORTIONS</div>
      <div className="grid grid-cols-[1fr_auto] gap-x-5">
        <span>Head</span><span>1.0</span>
        <span>Total height</span><span>2.6</span>
        <span>Main stroke</span><span>0.6</span>
        <span>Diagonal</span><span>58°</span>
        <span>Top overlap</span><span>0.2</span>
        <span>Corner logic</span><span>r = s/2</span>
      </div>
    </div>
  </div>
);

const ClearSpaceDiagram = () => (
  <div className="grid gap-7 sm:grid-cols-[12rem_1fr] sm:items-center">
    <div className="relative aspect-square border border-[#d8d8d8] bg-white text-black">
      <div className="absolute inset-0 dz-ci-construction-grid opacity-60" />
      <div className="absolute inset-[20%] border border-dashed border-[#c9c9c9]" />
      <div className="absolute inset-[28%] flex items-center justify-center">
        <DotzeroMark size={95} />
      </div>
      {[
        'left-3 top-3',
        'right-3 top-3',
        'left-3 bottom-3',
        'right-3 bottom-3',
      ].map((position) => (
        <span key={position} className={`absolute ${position} font-mono text-[9px] text-[#a3a3a3]`}>×</span>
      ))}
    </div>
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.1em] dz-text-muted">Minimum clear space</div>
      <p className="mt-3 text-sm leading-6">Use at least the height of the circular head around every side of the mark.</p>
      <p className="mt-4 text-xs leading-5 dz-text-muted">No text, frame, image edge or interface control may enter this field.</p>
    </div>
  </div>
);

const MeaningPanel = () => (
  <div className="grid gap-10 xl:grid-cols-12 xl:items-start">
    <div className="xl:col-span-4">
      <div className="flex min-h-[34rem] items-center justify-center bg-white p-8 text-black sm:p-12">
        <DotzeroMark size="72%" title="DOTZERO sign — dot, zero and open direction" />
      </div>
      <div className="mt-4 font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">
        Four primitives / point · zero · diagonal · triangle
      </div>
    </div>

    <div className="xl:col-span-8">
      <div className="font-mono text-[9px] uppercase tracking-[.14em] text-[var(--accent)]">
        THE SIGN / CONCEPT BEFORE APPLICATION
      </div>
      <h2 className="dz-h2 mt-5 max-w-4xl text-4xl sm:text-6xl lg:text-7xl">
        DOT. ZERO.<br />OPEN DIRECTION.
      </h2>
      <p className="dz-body-strong mt-7 max-w-3xl">
        The sign is built to hold several readings at the same time. Its base grammar is geometric:
        <strong className="font-semibold text-[var(--text)]"> point + zero + diagonal + triangle</strong>.
        From that construction emerge the name, the research method, a digital/code echo and a latent human figure.
      </p>

      <div className="mt-10 grid gap-px bg-[var(--line-soft)] p-px md:grid-cols-2 xl:grid-cols-3">
        <div className="bg-[var(--bg)] p-5">
          <div className="font-display text-5xl font-bold text-[var(--accent)]">.</div>
          <div className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[.12em]">DOT / ORIGIN</div>
          <p className="mt-3 text-sm leading-6 dz-text-muted">
            The point of origin: the first coordinate, the smallest unit, the moment before point one. It also reads as the first question from which research begins.
          </p>
        </div>

        <div className="bg-[var(--bg)] p-5">
          <div className="font-display text-5xl font-bold">0</div>
          <div className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[.12em]">ZERO / FIELD</div>
          <p className="mt-3 text-sm leading-6 dz-text-muted">
            Starting from zero. The zero is not empty: it is a field, container and system — a bounded space in which knowledge can be constructed.
          </p>
        </div>

        <div className="bg-[var(--bg)] p-5">
          <div className="font-mono text-4xl font-semibold text-[var(--accent)]">&lt;/&gt;</div>
          <div className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[.12em]">CODE / CONSTRUCTION</div>
          <p className="mt-3 text-sm leading-6 dz-text-muted">
            The slash and angular terminal suggest &lt;/&gt; without drawing it literally: code, construction, systems, opening and closing. A digital layer, not a developer pictogram.
          </p>
        </div>

        <div className="bg-[var(--bg)] p-5">
          <div className="font-display text-5xl font-bold">?</div>
          <div className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[.12em]">QUESTION / RESEARCH</div>
          <p className="mt-3 text-sm leading-6 dz-text-muted">
            Dot, curved field and diagonal can also suggest an unresolved question mark. The ambiguity is intentional: DOTZERO starts with questions rather than answers.
          </p>
        </div>

        <div className="bg-[var(--bg)] p-5">
          <div className="font-mono text-4xl font-semibold">● /</div>
          <div className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[.12em]">INDIVIDUAL / GESTURE</div>
          <p className="mt-3 text-sm leading-6 dz-text-muted">
            A second reading reveals a person with a raised arm: head, body/field and gesture. The human figure remains latent, never illustrated or fixed.
          </p>
        </div>

        <div className="bg-[var(--bg)] p-5">
          <div className="font-mono text-4xl font-semibold text-[var(--accent)]">/›</div>
          <div className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[.12em]">OPEN DIRECTION</div>
          <p className="mt-3 text-sm leading-6 dz-text-muted">
            The diagonal breaks the closed form and moves upward beyond its perimeter. The black triangular wedge echoes “&gt;”: direction, continuation and deviation from a closed system.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 border-t dz-rule pt-8 md:grid-cols-2">
        <div>
          <div className="font-mono text-[9px] font-semibold uppercase tracking-[.12em]">BAUHAUS / CONTEMPORARY LOGIC</div>
          <p className="mt-4 text-sm leading-6 dz-text-muted">
            Circle, line, angle and asymmetry are used as a construction grammar, not as retro styling. The sign follows a rational Bauhaus logic while remaining contemporary and digital.
          </p>
        </div>
        <div>
          <div className="font-mono text-[9px] font-semibold uppercase tracking-[.12em]">CORE PRINCIPLE</div>
          <p className="mt-4 font-display text-2xl font-medium leading-tight tracking-[-.03em]">
            A point enters a field. A question opens it. A direction leaves it.
          </p>
          <p className="mt-4 text-sm leading-6 dz-text-muted">
            DOT / ZERO / CODE / QUESTION / INDIVIDUAL / OPEN DIRECTION are not separate logos. They are simultaneous readings of one sign.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const UsageExamples = () => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
    <figure className="m-0">
      <div className="flex min-h-36 flex-col justify-between border border-[#dfdfdf] bg-white p-4 text-black">
        <div className="flex items-center justify-between">
          <DotzeroLogotypetype className="w-[118px]" />
          <span className="font-mono text-[8px]">☰</span>
        </div>
        <div className="flex gap-4 font-mono text-[7px] uppercase tracking-[.08em]">
          <span>Research</span><span>Dialog</span><span>About</span>
        </div>
      </div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">Website / logotype only</figcaption>
    </figure>

    <figure className="m-0">
      <div className="flex min-h-36 items-center justify-center bg-black p-5 text-white">
        <DotzeroLogotypetype className="w-[155px]" />
      </div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">Dark mode / logotype only</figcaption>
    </figure>

    <figure className="m-0">
      <div className="flex min-h-36 items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-[22px] bg-black text-white">
          <DotzeroMark size={62} />
        </div>
      </div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">App icon / sign only</figcaption>
    </figure>

    <figure className="m-0">
      <div className="min-h-36 border border-[#dfdfdf] bg-white p-4 text-black">
        <DotzeroLogotypetype className="w-[132px]" />
        <div className="mt-8 border-l border-[#bdbdbd] pl-3 font-mono text-[8px] leading-4">
          RESEARCH<br />EXPLORATION<br />OPEN DIRECTION
        </div>
        <div className="mt-3 h-px w-5 bg-[#F70B0D]" />
      </div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">Document / logotype only</figcaption>
    </figure>

    <figure className="m-0">
      <div className="flex min-h-36 items-center gap-5 bg-[#d7d7d5] p-5 text-black">
        <DotzeroMark size={58} />
        <div className="font-sans text-sm leading-5">
          Research<br />Dialog<br />Open Direction
        </div>
      </div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">Wayfinding / sign only</figcaption>
    </figure>
  </div>
);

export const IdentityPage: React.FC = () => {
  const weights = ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold'];
  const sizes = [
    [16, 'UI / favicon'],
    [24, 'Navigation'],
    [32, 'Interface'],
    [48, 'Web / sections'],
    [96, 'Hero / print'],
  ] as const;

  return (
    <main id="identity" className="pt-16">
      <header className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b dz-rule pb-5">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">DOTZERO / BRAND IDENTITY GUIDELINES</div>
            <div className="font-mono text-[8px] uppercase tracking-[0.14em] dz-text-muted">Personal research lab · Version 1.2</div>
          </div>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="dz-meta">CD / CI / CANONICAL SYSTEM</div>
              <h1 className="dz-h1 mt-5 text-[clamp(4rem,10vw,9rem)]">IDENTITY.</h1>
              <p className="dz-body-strong mt-7 max-w-2xl">
                The visual system begins with the sign: DOT · ZERO · OPEN DIRECTION. Logotype and sign are complementary identities and are never combined into a lockup.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white p-6 text-black sm:p-8">
                <DotzeroLogotype className="w-full" title=".DOTZERO logotype" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[96rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-px bg-[var(--line-soft)] p-px lg:grid-cols-12">
          <Cell number="00" title="Meaning of the sign" note={'. + 0 + </> / question · individual · opening'} className="lg:col-span-12">
            <MeaningPanel />
          </Cell>

          <Cell number="01" title="Logotype" note=".DOTZERO / standalone typographic signature" className="lg:col-span-7">
            <div className="flex min-h-56 items-center justify-center bg-white p-8 text-black sm:min-h-72">
              <DotzeroLogotype className="w-full max-w-[720px]" />
            </div>
            <div className="mt-4 flex flex-wrap justify-between gap-3 font-mono text-[8px] uppercase tracking-[.11em] dz-text-muted">
              <span>Master artwork / path-built SVG · leading dot</span>
              <span>Never paired with the sign</span>
            </div>
            <div className="mt-6 border-l-2 border-[var(--accent)] pl-4">
              <div className="font-mono text-[8px] font-semibold uppercase tracking-[.12em]">RELATIONSHIP RULE</div>
              <p className="mt-2 max-w-2xl text-sm leading-6 dz-text-muted">
                Logotype and sign are complementary, not a combined logo. Use <strong className="text-[var(--text)]">.DOTZERO</strong> when the name must be read; use the sign when recognition can be carried by the symbol. Never place them side by side as one lockup.
              </p>
            </div>
          </Cell>

          <Cell number="02" title="Sign" note="Standalone sign · complementary to logotype" className="lg:col-span-2">
            <div className="flex min-h-56 items-center justify-center bg-white p-6 text-black sm:min-h-72">
              <DotzeroMark size={180} />
            </div>
          </Cell>

          <Cell number="03" title="Construction" note="Grid & proportions" className="lg:col-span-3">
            <ConstructionDiagram />
          </Cell>

          <Cell number="04" title="Typography" note="IBM Plex system" className="lg:col-span-5">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">Primary typeface</div>
                <div className="mt-2 font-sans text-4xl font-medium tracking-[-.04em]">IBM Plex Sans</div>
                <p className="mt-4 max-w-md text-sm leading-6 dz-text-muted">
                  Core voice for headlines, editorial text, navigation and interface. Neutral enough for research; distinctive enough for a system.
                </p>
              </div>
              <div className="border-t dz-rule pt-5 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                {weights.map((weight, index) => (
                  <div key={weight} className="grid grid-cols-[5rem_1fr] items-baseline border-b dz-rule py-2 last:border-b-0">
                    <span className="text-xs">{weight}</span>
                    <span
                      className="font-sans text-lg"
                      style={{ fontWeight: [300, 400, 500, 600, 700][index] }}
                    >
                      Aa Bb Cc 0123
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 grid gap-5 border-t dz-rule pt-6 sm:grid-cols-2">
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">Supporting / technical</div>
                <div className="mt-2 font-mono text-3xl tracking-[-.04em]">IBM Plex Mono</div>
              </div>
              <p className="text-xs leading-5 dz-text-muted">
                Data, source notes, labels, coordinates, revision states and technical metadata.
              </p>
            </div>
          </Cell>

          <Cell number="05" title="Sign variations" note="Controlled derivatives · sign only" className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-px bg-[var(--line-soft)] sm:grid-cols-4">
              <div className="bg-[var(--bg)] p-3 text-center">
                <div className="flex h-28 items-center justify-center bg-white text-black"><DotzeroMark size={70} /></div>
                <div className="mt-3 text-xs font-semibold">Standard</div>
                <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">Default</div>
              </div>
              <div className="bg-[var(--bg)] p-3 text-center">
                <div className="flex h-28 items-center justify-center bg-white text-black"><DotzeroMark size={48} /></div>
                <div className="mt-3 text-xs font-semibold">Compact</div>
                <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">Small UI</div>
              </div>
              <div className="bg-[var(--bg)] p-3 text-center">
                <div className="flex h-28 items-center justify-center bg-black text-white"><DotzeroMark size={70} /></div>
                <div className="mt-3 text-xs font-semibold">Reverse</div>
                <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">Dark field</div>
              </div>
              <div className="bg-[var(--bg)] p-3 text-center">
                <div className="flex h-28 items-center justify-center bg-white text-black"><DotzeroMark size={70} variant="outline" /></div>
                <div className="mt-3 text-xs font-semibold">Outline</div>
                <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">Special use</div>
              </div>
            </div>
          </Cell>

          <Cell number="06" title="Rotation (optional)" note="Exploratory, never default" className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-px bg-[var(--line-soft)]">
              {[0, 45, 90].map((angle) => (
                <div key={angle} className="bg-[var(--bg)] px-2 py-4 text-center">
                  <div className="flex h-28 items-center justify-center bg-white text-black">
                    <DotzeroMark size={62} rotation={angle} />
                  </div>
                  <div className="mt-3 text-xs font-semibold">{angle}°</div>
                  <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">
                    {angle === 0 ? 'Recommended' : angle === 45 ? 'Dynamic' : 'Experimental'}
                  </div>
                </div>
              ))}
            </div>
          </Cell>

          <Cell number="07" title="Sizes" note="16 px and upward" className="lg:col-span-5">
            <div className="flex min-h-44 flex-wrap items-end justify-between gap-6">
              {sizes.map(([size, label]) => (
                <figure key={size} className="m-0 grid justify-items-center gap-3">
                  <div className="flex min-h-24 items-end justify-center text-black">
                    <DotzeroMark size={size} />
                  </div>
                  <figcaption className="text-center">
                    <div className="text-xs font-semibold">{size} px</div>
                    <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{label}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Cell>

          <Cell number="08" title="Color palette" note="Full chroma — no clipping" className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ['DOTZERO Red', '#F70B0D', '#F70B0D', 'Primary'],
                ['Black', '#000000', '#000000', 'Text / UI'],
                ['White', '#FFFFFF', '#FFFFFF', 'Background'],
                ['Grey', '#E5E5E5', '#E5E5E5', 'UI elements'],
              ].map(([name, hex, color, use]) => (
                <div key={name} className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full border border-[#d7d7d7]" style={{ backgroundColor: color }} />
                  <div className="mt-3 text-xs font-semibold">{name}</div>
                  <div className="mt-1 font-mono text-[8px] dz-text-muted">{hex}</div>
                  <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{use}</div>
                </div>
              ))}
            </div>
          </Cell>

          <Cell number="09" title="Clear space" note="Protected field" className="lg:col-span-3">
            <ClearSpaceDiagram />
          </Cell>

          <Cell number="10" title="Usage examples" note="Digital · print · space" className="lg:col-span-12">
            <UsageExamples />
          </Cell>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t dz-rule pt-4 font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">
          <span>DOTZERO / CD + CI / v1.2</span>
          <span>.DOTZERO logotype + standalone sign · IBM Plex Sans · IBM Plex Mono · #F70B0D</span>
        </div>
      </div>
    </main>
  );
};

import React from 'react';
import { getDotzeroProjects } from '../projects';
import { useLanguage } from '../context/LanguageContext';
import { DotzeroTypographicSpecimen } from './DotzeroTypographicSpecimen';
import { DotMarker, FieldGlyph, SyntaxLabel, SystemGlyph } from './GraphicSyntax';


const COPY = {
  it: {
    heroLabel: 'PERSONAL RESEARCH LAB',
    heroMeta: 'NODE 00 / INDEX',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Esplorare la conoscenza attraverso atlanti, studi e strumenti.',
    intro: 'Atlas, Studies e Tools nati dalla curiosità e costruiti come strumenti di indagine.',
    projects: 'PROJECT INDEX',
    method: 'METHOD',
    about: 'ABOUT',
    aboutBody: 'Un laboratorio personale per esplorare la conoscenza. Il soggetto può cambiare completamente; metodo, standard, evidenza e responsabilità restano costanti.',
    contact: 'CONTACT',
    methodLines: ['The question comes first.', 'Curiosity to begin, rigor to publish.', 'Every claim shows its ground.', 'Machines suggest. People interpret.'],
    open: 'OPEN PROJECT',
    pending: 'LINK SOON',
  },
  de: {
    heroLabel: 'PERSONAL RESEARCH LAB',
    heroMeta: 'NODE 00 / INDEX',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Wissen durch Atlanten, Studien und Instrumente erkunden.',
    intro: 'Atlanten, Studies und Tools, die aus Neugier entstehen und als Instrumente der Untersuchung gebaut werden.',
    projects: 'PROJECT INDEX',
    method: 'METHOD',
    about: 'ABOUT',
    aboutBody: 'Ein persönliches Labor zur Erkundung von Wissen. Das Thema kann vollständig wechseln; Methode, Standards, Evidenz und Verantwortung bleiben konstant.',
    contact: 'CONTACT',
    methodLines: ['The question comes first.', 'Curiosity to begin, rigor to publish.', 'Every claim shows its ground.', 'Machines suggest. People interpret.'],
    open: 'OPEN PROJECT',
    pending: 'LINK SOON',
  },
  en: {
    heroLabel: 'PERSONAL RESEARCH LAB',
    heroMeta: 'NODE 00 / INDEX',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Exploring knowledge through atlases, studies and instruments.',
    intro: 'Atlases, Studies and Tools that begin with curiosity and become instruments for inquiry.',
    projects: 'PROJECT INDEX',
    method: 'METHOD',
    about: 'ABOUT',
    aboutBody: 'A personal lab for exploring knowledge. The subject may change completely; the method, standards, evidence and responsibility remain constant.',
    contact: 'CONTACT',
    methodLines: ['The question comes first.', 'Curiosity to begin, rigor to publish.', 'Every claim shows its ground.', 'Machines suggest. People interpret.'],
    open: 'OPEN PROJECT',
    pending: 'LINK SOON',
  },
};

export const DotzeroIndex: React.FC = () => {
  const { language } = useLanguage();
  const t = COPY[language];
  const projects = getDotzeroProjects();

  return (
    <main id="index" className="pt-20">
      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-7 flex items-center justify-between gap-6 dz-text-muted">
              <SyntaxLabel kind="dot">{t.heroLabel}</SyntaxLabel>
              <span className="hidden font-mono text-[8px] uppercase tracking-[0.16em] sm:block">{t.heroMeta}</span>
            </div>

            <DotzeroTypographicSpecimen />

            <div className="mt-10 grid gap-10 border-t dz-rule pt-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1 className="dz-h2 max-w-5xl text-[clamp(2.8rem,6vw,6.4rem)]">
                  {t.heroStatement}
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="dz-body-strong max-w-md">{t.heroSub}</p>
                <div className="dz-hero-syntax mt-8" aria-label="Dot, zero, open direction">
                  <span className="dz-hero-syntax__node dz-hero-syntax__node--dot"><DotMarker size="lg" /></span>
                  <span className="dz-hero-syntax__track dz-hero-syntax__track--one" aria-hidden="true" />
                  <span className="dz-hero-syntax__node dz-hero-syntax__node--field"><FieldGlyph size={28} /></span>
                  <span className="dz-hero-syntax__track dz-hero-syntax__track--two" aria-hidden="true" />
                  <span className="dz-hero-syntax__node dz-hero-syntax__node--system"><SystemGlyph size={46} /></span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-t dz-border pt-7 lg:grid-cols-12 lg:items-start">
            <p className="dz-body max-w-2xl lg:col-span-7">
              {t.intro}
            </p>
            <div className="flex items-center gap-8 font-mono text-[8px] uppercase tracking-[0.16em] dz-text-muted lg:col-span-5 lg:justify-end">
              <span className="inline-flex items-center gap-2"><DotMarker size="xs" />Active</span>
              <span>{String(projects.length).padStart(2, '0')} projects</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em]"><SyntaxLabel kind="dot">{t.projects}</SyntaxLabel></h2>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">01—{String(projects.length).padStart(2, '0')}</span>
          </div>

          <div className="border-t-2 dz-border">
            {projects.map((project) => {
              const canOpen = project.destination.kind !== 'planned';
              const projectHref =
                project.destination.kind === 'internal'
                  ? project.destination.hash
                  : project.destination.kind === 'external'
                    ? project.destination.url
                    : undefined;
              const isExternal = project.destination.kind === 'external';

              return (
                <article key={project.id} className="dz-project-row group border-b dz-border">
                  <div className="grid gap-6 py-9 md:grid-cols-12 md:items-start lg:py-11">
                    <div className="md:col-span-1">
                      <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold"><FieldGlyph size={9} />{project.number}</span>
                    </div>

                    <div className="md:col-span-4">
                      <h3 className="dz-h3 text-4xl sm:text-5xl">
                        {project.title}
                      </h3>
                      <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] dz-text-muted">
                        {project.period || project.year}
                      </div>
                    </div>

                    <div className="md:col-span-4">
                      <p className="dz-body max-w-xl text-[15px] transition-colors group-hover:text-[var(--text)]">
                        {project.summary[language]}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        {project.type.map((type) => (
                          <span key={type} className="font-mono text-[9px] uppercase tracking-[0.15em] dz-text-muted">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start justify-between md:col-span-3 md:block md:text-right">
                      <div className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] dz-text-muted">
                        <DotMarker size="xs" />
                        {project.status}
                      </div>

                      {canOpen && projectHref ? (
                        <a
                          href={projectHref}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noreferrer' : undefined}
                          className="dz-action-link mt-0 font-mono text-[10px] font-bold uppercase tracking-[0.13em] hover:opacity-50 md:mt-8"
                        >
                          {t.open}
                          <SystemGlyph size={20} />
                        </a>
                      ) : (
                        <span className="mt-0 inline-flex cursor-default items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.13em] opacity-35 md:mt-8">
                          {t.pending}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="method" className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3">
            <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em]"><SyntaxLabel kind="system">{t.method}</SyntaxLabel></h2>
          </div>
          <div className="lg:col-span-9">
            {t.methodLines.map((line, i) => (
              <div key={line} className="group grid grid-cols-[2.5rem_1fr] border-t dz-border py-5 first:border-t-2">
                <span className="flex items-center gap-2 font-mono text-[9px] dz-text-muted"><SystemGlyph size={14} />0{i + 1}</span>
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] transition-transform duration-200 group-hover:translate-x-1 sm:text-4xl">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] lg:col-span-3"><SyntaxLabel kind="dot">{t.about}</SyntaxLabel></h2>
          <div className="lg:col-span-7">
            <p className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              {t.aboutBody}
            </p>
            <p className="mt-10 border-t dz-border pt-4 font-mono text-[9px] uppercase tracking-[0.15em] dz-text-muted">
              Alberto Comini — Research · Digital experiments · Cultural projects
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] lg:col-span-3"><SyntaxLabel kind="system">{t.contact}</SyntaxLabel></h2>
          <div className="lg:col-span-8">
            <p className="flex items-center gap-4 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-6xl"><SystemGlyph size={48} />OPEN CHANNEL</p>
            <p className="dz-body mt-6 max-w-xl text-sm">
              Personal research · Atlas · Study · Tool · Instruments for inquiry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

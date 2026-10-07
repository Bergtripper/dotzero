import React from 'react';
import { getDotzeroProjects } from '../projects';
import { useLanguage } from '../context/LanguageContext';
import { DotMarker, FieldGlyph, SyntaxLabel, SystemGlyph } from './GraphicSyntax';
import { DotzeroScrollHero } from './DotzeroScrollHero';


const COPY = {
  it: {
    heroLabel: 'PERSONAL RESEARCH LAB',
    heroMeta: 'NODE 00 / INDEX',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Esplorare la conoscenza attraverso atlanti, studi e strumenti.',
    intro: 'Atlas, Study e Tool nati dalla curiosità e costruiti come strumenti di indagine.',
    projects: 'INDICE PROGETTI',
    method: 'METODO',
    about: 'PROFILO',
    aboutBody: 'Un laboratorio personale per esplorare la conoscenza. Il soggetto può cambiare; metodo, evidenza e responsabilità restano costanti.',
    contact: 'CONTATTO',
    methodLines: [
      'La domanda viene prima.',
      'Curiosità per iniziare, rigore per pubblicare.',
      'Ogni affermazione mostra il proprio fondamento.',
      'Ogni strumento dichiara i propri limiti.',
    ],
    open: 'APRI PROGETTO',
    pending: 'IN ARRIVO',
    active: 'ATTIVO',
    projectsCount: 'PROGETTI',
    status: { active: 'attivo', prototype: 'prototipo', planned: 'pianificato' },
    types: {
      archive: 'archivio', research: 'ricerca', interactive: 'interattivo',
      'visual-culture': 'cultura visiva', experiment: 'esperimento',
      generative: 'generativo', 'visual-systems': 'sistemi visivi',
      typography: 'tipografia', geometry: 'geometria', morphology: 'morfologia',
    },
  },
  de: {
    heroLabel: 'PERSONAL RESEARCH LAB',
    heroMeta: 'NODE 00 / INDEX',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Wissen durch Atlanten, Studien und Werkzeuge erkunden.',
    intro: 'Atlanten, Studies und Tools, die aus Neugier entstehen und als Instrumente der Untersuchung gebaut werden.',
    projects: 'PROJEKTINDEX',
    method: 'METHODE',
    about: 'PROFIL',
    aboutBody: 'Ein persönliches Labor zur Erkundung von Wissen. Das Thema kann wechseln; Methode, Evidenz und Verantwortung bleiben konstant.',
    contact: 'KONTAKT',
    methodLines: [
      'Die Frage kommt zuerst.',
      'Neugier zum Beginnen, Sorgfalt zum Veröffentlichen.',
      'Jede Aussage zeigt ihre Grundlage.',
      'Jedes Instrument legt seine Grenzen offen.',
    ],
    open: 'PROJEKT ÖFFNEN',
    pending: 'FOLGT',
    active: 'AKTIV',
    projectsCount: 'PROJEKTE',
    status: { active: 'aktiv', prototype: 'prototyp', planned: 'geplant' },
    types: {
      archive: 'archiv', research: 'forschung', interactive: 'interaktiv',
      'visual-culture': 'visuelle kultur', experiment: 'experiment',
      generative: 'generativ', 'visual-systems': 'visuelle systeme',
      typography: 'typografie', geometry: 'geometrie', morphology: 'morphologie',
    },
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
    aboutBody: 'A personal lab for exploring knowledge. The subject may change; method, evidence and responsibility remain constant.',
    contact: 'CONTACT',
    methodLines: [
      'The question comes first.',
      'Curiosity to begin, rigor to publish.',
      'Every claim shows its ground.',
      'Every instrument declares its limits.',
    ],
    open: 'OPEN PROJECT',
    pending: 'COMING SOON',
    active: 'ACTIVE',
    projectsCount: 'PROJECTS',
    status: { active: 'active', prototype: 'prototype', planned: 'planned' },
    types: {
      archive: 'archive', research: 'research', interactive: 'interactive',
      'visual-culture': 'visual culture', experiment: 'experiment',
      generative: 'generative', 'visual-systems': 'visual systems',
      typography: 'typography', geometry: 'geometry', morphology: 'morphology',
    },
  },
};

export const DotzeroIndex: React.FC = () => {
  const { language } = useLanguage();
  const t = COPY[language];
  const projects = getDotzeroProjects();

  return (
    <main id="index" className="pt-20">
      <DotzeroScrollHero
        label={t.heroLabel}
        meta={t.heroMeta}
        statement={t.heroStatement}
        sub={t.heroSub}
        intro={t.intro}
        projectCount={projects.length}
      />

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
                          <span key={t.types[type as keyof typeof t.types] ?? type} className="font-mono text-[9px] uppercase tracking-[0.15em] dz-text-muted">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start justify-between md:col-span-3 md:block md:text-right">
                      <div className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] dz-text-muted">
                        <DotMarker size="xs" />
                        {t.status[project.status as keyof typeof t.status] ?? project.status}
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

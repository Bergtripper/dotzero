import React from 'react';
import { getDotzeroProjects } from '../projects';
import { useLanguage } from '../context/LanguageContext';
import { DotMarker, FieldGlyph, SyntaxLabel, SystemGlyph } from './GraphicSyntax';
import { DotzeroScrollHero } from './DotzeroScrollHero';

const COPY = {
  it: {
    heroLabel: 'LABORATORIO PERSONALE DI RICERCA',
    heroMeta: 'NODO 00 / INDICE',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Esplorare la conoscenza attraverso atlanti, studi e strumenti.',
    intro: 'Atlanti, studi e strumenti nati dalla curiosità e costruiti per indagare, mettere in relazione e capire.',
    projects: 'INDICE PROGETTI',
    method: 'METODO',
    about: 'DOTZERO',
    aboutBody: 'Un laboratorio personale per esplorare la conoscenza. I temi cambiano; restano costanti metodo, rigore, evidenza e responsabilità.',
    contact: 'CONTATTO',
    contactTitle: 'CANALE APERTO',
    contactBody: 'Ricerca personale · Atlanti · Studi · Strumenti · Progetti culturali e digitali.',
    methodLines: [
      'La domanda viene prima.',
      'Curiosità per iniziare, rigore per pubblicare.',
      'Ogni affermazione mostra il proprio fondamento.',
      'Ogni strumento dichiara i propri limiti.',
    ],
    open: 'APRI PROGETTO',
    pending: 'PRESTO DISPONIBILE',
    active: 'ATTIVO',
    prototype: 'PROTOTIPO',
    projectsCount: 'progetti',
    authorLine: 'Alberto Comini — Ricerca · Esperimenti digitali · Progetti culturali',
    types: {
      archive: 'archivio',
      research: 'ricerca',
      interactive: 'interattivo',
      'visual-culture': 'cultura visiva',
      experiment: 'esperimento',
      generative: 'generativo',
      'visual-systems': 'sistemi visivi',
      typography: 'tipografia',
      geometry: 'geometria',
      morphology: 'morfologia',
    } as Record<string, string>,
  },
  de: {
    heroLabel: 'PERSÖNLICHES FORSCHUNGSLABOR',
    heroMeta: 'KNOTEN 00 / INDEX',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Wissen durch Atlanten, Studien und Instrumente erkunden.',
    intro: 'Atlanten, Studien und Instrumente, die aus Neugier entstehen und zum Untersuchen, Verknüpfen und Verstehen gebaut werden.',
    projects: 'PROJEKTINDEX',
    method: 'METHODE',
    about: 'DOTZERO',
    aboutBody: 'Ein persönliches Labor zur Erkundung von Wissen. Die Themen wechseln; Methode, Sorgfalt, Evidenz und Verantwortung bleiben konstant.',
    contact: 'KONTAKT',
    contactTitle: 'OFFENER KANAL',
    contactBody: 'Persönliche Forschung · Atlanten · Studien · Instrumente · Kultur- und Digitalprojekte.',
    methodLines: [
      'Die Frage kommt zuerst.',
      'Neugier zum Beginnen, Sorgfalt zum Veröffentlichen.',
      'Jede Aussage zeigt ihre Grundlage.',
      'Jedes Instrument benennt seine Grenzen.',
    ],
    open: 'PROJEKT ÖFFNEN',
    pending: 'DEMNÄCHST',
    active: 'AKTIV',
    prototype: 'PROTOTYP',
    projectsCount: 'Projekte',
    authorLine: 'Alberto Comini — Forschung · Digitale Experimente · Kulturprojekte',
    types: {
      archive: 'Archiv',
      research: 'Forschung',
      interactive: 'interaktiv',
      'visual-culture': 'visuelle Kultur',
      experiment: 'Experiment',
      generative: 'generativ',
      'visual-systems': 'visuelle Systeme',
      typography: 'Typografie',
      geometry: 'Geometrie',
      morphology: 'Morphologie',
    } as Record<string, string>,
  },
  en: {
    heroLabel: 'PERSONAL RESEARCH LAB',
    heroMeta: 'NODE 00 / INDEX',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Exploring knowledge through atlases, studies and instruments.',
    intro: 'Atlases, studies and instruments born from curiosity and built to investigate, connect and understand.',
    projects: 'PROJECT INDEX',
    method: 'METHOD',
    about: 'DOTZERO',
    aboutBody: 'A personal lab for exploring knowledge. Subjects change; method, rigor, evidence and responsibility remain constant.',
    contact: 'CONTACT',
    contactTitle: 'OPEN CHANNEL',
    contactBody: 'Personal research · Atlases · Studies · Tools · Cultural and digital projects.',
    methodLines: [
      'The question comes first.',
      'Curiosity to begin, rigor to publish.',
      'Every claim shows its ground.',
      'Every instrument declares its limits.',
    ],
    open: 'OPEN PROJECT',
    pending: 'COMING SOON',
    active: 'ACTIVE',
    prototype: 'PROTOTYPE',
    projectsCount: 'projects',
    authorLine: 'Alberto Comini — Research · Digital experiments · Cultural projects',
    types: {
      archive: 'archive',
      research: 'research',
      interactive: 'interactive',
      'visual-culture': 'visual culture',
      experiment: 'experiment',
      generative: 'generative',
      'visual-systems': 'visual systems',
      typography: 'typography',
      geometry: 'geometry',
      morphology: 'morphology',
    } as Record<string, string>,
  },
};

export const DotzeroIndex: React.FC = () => {
  const { language } = useLanguage();
  const t = COPY[language];
  const projects = getDotzeroProjects();

  const statusLabel = (status: string) => status === 'prototype' ? t.prototype : t.active;

  return (
    <main id="index" className="pt-20">
      <DotzeroScrollHero
        label={t.heroLabel}
        meta={t.heroMeta}
        statement={t.heroStatement}
        sub={t.heroSub}
        intro={t.intro}
        projectCount={projects.length}
        activeLabel={t.active}
        projectsLabel={t.projectsCount}
        language={language}
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
                      <h3 className="dz-h3 text-4xl sm:text-5xl">{project.title}</h3>
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
                            {t.types[type] || type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start justify-between md:col-span-3 md:block md:text-right">
                      <div className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] dz-text-muted">
                        <DotMarker size="xs" />
                        {statusLabel(project.status)}
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
            <p className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl">{t.aboutBody}</p>
            <p className="mt-10 border-t dz-border pt-4 font-mono text-[9px] uppercase tracking-[0.15em] dz-text-muted">{t.authorLine}</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] lg:col-span-3"><SyntaxLabel kind="system">{t.contact}</SyntaxLabel></h2>
          <div className="lg:col-span-8">
            <p className="flex items-center gap-4 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-6xl"><SystemGlyph size={48} />{t.contactTitle}</p>
            <p className="dz-body mt-6 max-w-xl text-sm">{t.contactBody}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

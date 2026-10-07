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
    intro: 'Atlanti, studi e strumenti nati dalla curiosità e costruiti per indagare.',
    projects: 'INDICE PROGETTI',
    method: 'METODO',
    about: 'CHI SONO',
    aboutBody: 'Un laboratorio personale per esplorare la conoscenza. Il soggetto può cambiare completamente; metodo, standard, evidenza e responsabilità restano costanti.',
    aboutMeta: 'Ricerca · esperimenti digitali · progetti culturali',
    contact: 'CONTATTO',
    contactTitle: 'CANALE APERTO',
    contactBody: 'Ricerca personale · Atlante · Studio · Strumento · strumenti per l’indagine.',
    methodLines: ['La domanda viene prima.', 'Curiosità per iniziare, rigore per pubblicare.', 'Ogni affermazione mostra il proprio fondamento.', 'Ogni strumento dichiara i propri limiti.'],
    open: 'APRI PROGETTO',
    pending: 'LINK IN ARRIVO',
    active: 'attivo',
    projectsCount: 'progetti',
  },
  de: {
    heroLabel: 'PERSÖNLICHES FORSCHUNGSLABOR',
    heroMeta: 'KNOTEN 00 / INDEX',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Wissen durch Atlanten, Studien und Instrumente erkunden.',
    intro: 'Atlanten, Studien und Werkzeuge, die aus Neugier entstehen und der Untersuchung dienen.',
    projects: 'PROJEKTINDEX',
    method: 'METHODE',
    about: 'ÜBER',
    aboutBody: 'Ein persönliches Labor zur Erkundung von Wissen. Das Thema kann vollständig wechseln; Methode, Standards, Evidenz und Verantwortung bleiben konstant.',
    aboutMeta: 'Forschung · digitale Experimente · Kulturprojekte',
    contact: 'KONTAKT',
    contactTitle: 'OFFENER KANAL',
    contactBody: 'Persönliche Forschung · Atlas · Studie · Werkzeug · Instrumente für Untersuchung.',
    methodLines: ['Die Frage kommt zuerst.', 'Neugier zum Beginnen, Sorgfalt zum Veröffentlichen.', 'Jede Aussage zeigt ihre Grundlage.', 'Jedes Instrument benennt seine Grenzen.'],
    open: 'PROJEKT ÖFFNEN',
    pending: 'LINK FOLGT',
    active: 'aktiv',
    projectsCount: 'Projekte',
  },
  en: {
    heroLabel: 'PERSONAL RESEARCH LAB',
    heroMeta: 'NODE 00 / INDEX',
    heroStatement: 'DOT. ZERO. OPEN DIRECTION.',
    heroSub: 'Exploring knowledge through atlases, studies and instruments.',
    intro: 'Atlases, studies and tools that begin with curiosity and become instruments for inquiry.',
    projects: 'PROJECT INDEX',
    method: 'METHOD',
    about: 'ABOUT',
    aboutBody: 'A personal lab for exploring knowledge. The subject may change completely; method, standards, evidence and responsibility remain constant.',
    aboutMeta: 'Research · digital experiments · cultural projects',
    contact: 'CONTACT',
    contactTitle: 'OPEN CHANNEL',
    contactBody: 'Personal research · Atlas · Study · Tool · instruments for inquiry.',
    methodLines: ['The question comes first.', 'Curiosity to begin, rigor to publish.', 'Every claim shows its ground.', 'Every instrument declares its limits.'],
    open: 'OPEN PROJECT',
    pending: 'LINK SOON',
    active: 'active',
    projectsCount: 'projects',
  },
};

export const DotzeroIndex: React.FC = () => {
  const { language } = useLanguage();
  const t = COPY[language];
  const projects = getDotzeroProjects();

  const typeLabels: Record<string, Record<typeof language, string>> = {
    archive: { it: 'archivio', de: 'Archiv', en: 'archive' },
    research: { it: 'ricerca', de: 'Forschung', en: 'research' },
    interactive: { it: 'interattivo', de: 'interaktiv', en: 'interactive' },
    'visual-culture': { it: 'cultura visiva', de: 'visuelle Kultur', en: 'visual culture' },
    experiment: { it: 'esperimento', de: 'Experiment', en: 'experiment' },
    generative: { it: 'generativo', de: 'generativ', en: 'generative' },
    'visual-systems': { it: 'sistemi visivi', de: 'visuelle Systeme', en: 'visual systems' },
    typography: { it: 'tipografia', de: 'Typografie', en: 'typography' },
    geometry: { it: 'geometria', de: 'Geometrie', en: 'geometry' },
    morphology: { it: 'morfologia', de: 'Morphologie', en: 'morphology' },
  };

  const statusLabels: Record<string, Record<typeof language, string>> = {
    active: { it: 'attivo', de: 'aktiv', en: 'active' },
    prototype: { it: 'prototipo', de: 'Prototyp', en: 'prototype' },
    planned: { it: 'pianificato', de: 'geplant', en: 'planned' },
  };

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
                          <span key={type} className="font-mono text-[9px] uppercase tracking-[0.15em] dz-text-muted">
{typeLabels[type]?.[language] ?? type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start justify-between md:col-span-3 md:block md:text-right">
                      <div className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] dz-text-muted">
                        <DotMarker size="xs" />
{statusLabels[project.status]?.[language] ?? project.status}
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
              Alberto Comini — {t.aboutMeta}
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] lg:col-span-3"><SyntaxLabel kind="system">{t.contact}</SyntaxLabel></h2>
          <div className="lg:col-span-8">
            <p className="flex items-center gap-4 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-6xl"><SystemGlyph size={48} />{t.contactTitle}</p>
            <p className="dz-body mt-6 max-w-xl text-sm">
              {t.contactBody}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

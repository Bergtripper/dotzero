import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DOTZERO_PROJECTS } from '../projects';
import { useLanguage } from '../context/LanguageContext';

interface DotzeroIndexProps {
  onNavigateToModulor: () => void;
  onNavigateToBauhaus: () => void;
}

const COPY = {
  it: {
    kicker: 'NODE 00 / INDEX / REV 2026.09',
    title: 'ARCHIVES · SYSTEMS · CULTURE · EXPERIMENTS',
    intro: 'DOTZERO è un indice di progetti indipendenti: archivi, sistemi digitali, ricerca culturale ed esperimenti interattivi.',
    projects: 'PROJECT INDEX',
    method: 'METHOD',
    about: 'ABOUT',
    aboutBody: 'Un laboratorio personale per ricerca, sistemi digitali e progetti culturali. I progetti condividono un metodo, non necessariamente un tema.',
    contact: 'CONTACT',
    methodLines: ['Research before decoration.', 'Systems before pages.', 'Relations before categories.', 'Experiments before conclusions.'],
    open: 'OPEN PROJECT',
    pending: 'LINK SOON',
  },
  de: {
    kicker: 'NODE 00 / INDEX / REV 2026.09',
    title: 'ARCHIVE · SYSTEME · KULTUR · EXPERIMENTE',
    intro: 'DOTZERO ist ein Index unabhängiger Projekte: Archive, digitale Systeme, Kulturforschung und interaktive Experimente.',
    projects: 'PROJECT INDEX',
    method: 'METHOD',
    about: 'ABOUT',
    aboutBody: 'Ein persönliches Labor für Forschung, digitale Systeme und Kulturprojekte. Die Projekte teilen eine Methode, nicht zwingend ein Thema.',
    contact: 'CONTACT',
    methodLines: ['Research before decoration.', 'Systems before pages.', 'Relations before categories.', 'Experiments before conclusions.'],
    open: 'OPEN PROJECT',
    pending: 'LINK SOON',
  },
  en: {
    kicker: 'NODE 00 / INDEX / REV 2026.09',
    title: 'ARCHIVES · SYSTEMS · CULTURE · EXPERIMENTS',
    intro: 'DOTZERO is an index of independent projects: archives, digital systems, cultural research, and interactive experiments.',
    projects: 'PROJECT INDEX',
    method: 'METHOD',
    about: 'ABOUT',
    aboutBody: 'A personal laboratory for research, digital systems, and cultural projects. The projects share a method, not necessarily a subject.',
    contact: 'CONTACT',
    methodLines: ['Research before decoration.', 'Systems before pages.', 'Relations before categories.', 'Experiments before conclusions.'],
    open: 'OPEN PROJECT',
    pending: 'LINK SOON',
  },
};

export const DotzeroIndex: React.FC<DotzeroIndexProps> = ({ onNavigateToModulor, onNavigateToBauhaus }) => {
  const { language } = useLanguage();
  const t = COPY[language];

  const openProject = (id: string) => {
    if (id === 'modulor-studio') onNavigateToModulor();
    if (id === 'bauhaus-laboratory') onNavigateToBauhaus();
  };

  return (
    <main id="index" className="pt-24">
      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.22em] dz-text-muted">{t.kicker}</div>
          <h1 className="max-w-6xl font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[7.5rem]">
            DOTZERO<span className="text-[var(--accent)]">.</span>
          </h1>
          <p className="mt-5 max-w-5xl font-mono text-xs uppercase tracking-[0.14em] dz-text-muted sm:text-sm">{t.title}</p>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed sm:text-xl">{t.intro}</p>

          <div className="mt-16 grid grid-cols-2 gap-px border dz-border bg-[var(--line)] font-mono text-[10px] uppercase tracking-[0.12em] sm:grid-cols-4">
            {[
              ['TYPE', 'INDEX'],
              ['STATUS', 'ACTIVE'],
              ['PROJECTS', String(DOTZERO_PROJECTS.length).padStart(2, '0')],
              ['REV', '2026.09'],
            ].map(([label, value]) => (
              <div key={label} className="dz-bg p-4">
                <div className="dz-text-muted">{label}</div>
                <div className="mt-2 font-bold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 flex items-end justify-between border-b dz-border pb-4">
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-5xl">{t.projects}</h2>
            <span className="font-mono text-[10px] dz-text-muted">01—{String(DOTZERO_PROJECTS.length).padStart(2, '0')}</span>
          </div>

          <div>
            {DOTZERO_PROJECTS.map((project) => {
              const canOpen = project.id !== 'avant-garde-atlas';
              return (
                <article key={project.id} className="group grid gap-5 border-b dz-border py-8 md:grid-cols-12 md:items-start">
                  <div className="font-mono text-xs font-bold md:col-span-1">{project.number}</div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">{project.title}</h3>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] dz-text-muted">
                      {project.period || project.year}
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <p className="max-w-xl leading-relaxed">{project.summary[language]}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.type.map((type) => (
                        <span key={type} className="border dz-border px-2 py-1 font-mono text-[9px] uppercase tracking-wider">{type}</span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <div className="font-mono text-[9px] uppercase tracking-[0.14em] dz-text-muted">STATUS / {project.status}</div>
                    <button
                      type="button"
                      onClick={() => canOpen && openProject(project.id)}
                      disabled={!canOpen}
                      className={`mt-4 inline-flex items-center gap-2 border dz-border px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors ${
                        canOpen ? 'hover:bg-[var(--text)] hover:text-[var(--bg)]' : 'cursor-default opacity-50'
                      }`}
                    >
                      {canOpen ? t.open : t.pending}
                      {canOpen && <ArrowUpRight className="h-3.5 w-3.5" />}
                    </button>
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
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.18em]">{t.method}</h2>
          </div>
          <div className="lg:col-span-9">
            {t.methodLines.map((line, i) => (
              <div key={line} className="grid grid-cols-[2rem_1fr] border-b dz-border py-5">
                <span className="font-mono text-[10px] dz-text-muted">0{i + 1}</span>
                <p className="font-display text-2xl font-bold tracking-[-0.03em] sm:text-4xl">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.18em] lg:col-span-3">{t.about}</h2>
          <div className="lg:col-span-7">
            <p className="text-2xl leading-snug sm:text-3xl">{t.aboutBody}</p>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] dz-text-muted">
              Alberto Comini — Research · Digital experiments · Cultural projects
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.18em] lg:col-span-3">{t.contact}</h2>
          <div className="lg:col-span-7">
            <p className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-5xl">DOTZERO / OPEN CHANNEL</p>
            <p className="mt-5 max-w-xl dz-text-muted">Independent research, digital experiments, archives and cultural collaborations.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

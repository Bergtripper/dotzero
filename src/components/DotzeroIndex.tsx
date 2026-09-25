import React from 'react';
import { ArrowUpRight, Circle } from 'lucide-react';
import { DOTZERO_PROJECTS } from '../projects';
import { useLanguage } from '../context/LanguageContext';
import { DotzeroWordmark } from './DotzeroWordmark';

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
    <main id="index" className="pt-20">
      <section className="border-b dz-border">
        <div className="px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-7 font-mono text-[10px] uppercase tracking-[0.24em] dz-text-muted">{t.kicker}</div>
            <DotzeroWordmark />
            <p className="mt-8 max-w-3xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] dz-text-muted sm:text-[11px]">
              {t.title}
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-10 border-t dz-border pt-7 lg:grid-cols-12">
            <p className="dz-body-strong max-w-2xl sm:text-xl lg:col-span-7">
              {t.intro}
            </p>
            <div className="grid grid-cols-2 gap-y-5 font-mono text-[9px] uppercase tracking-[0.16em] lg:col-span-5">
              {[
                ['TYPE', 'INDEX'],
                ['STATUS', 'ACTIVE'],
                ['PROJECTS', String(DOTZERO_PROJECTS.length).padStart(2, '0')],
                ['REV', '2026.09'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="dz-text-muted">{label}</div>
                  <div className="mt-1 text-[var(--text)]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em]">{t.projects}</h2>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">01—{String(DOTZERO_PROJECTS.length).padStart(2, '0')}</span>
          </div>

          <div className="border-t-2 dz-border">
            {DOTZERO_PROJECTS.map((project) => {
              const canOpen = project.id !== 'avant-garde-atlas';
              return (
                <article key={project.id} className="dz-project-row group border-b dz-border">
                  <div className="grid gap-6 py-9 md:grid-cols-12 md:items-start lg:py-11">
                    <div className="md:col-span-1">
                      <span className="font-mono text-[11px] font-bold">{project.number}</span>
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
                        <Circle className="h-2 w-2 fill-current" />
                        {project.status}
                      </div>

                      <button
                        type="button"
                        onClick={() => canOpen && openProject(project.id)}
                        disabled={!canOpen}
                        className={`mt-0 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.13em] md:mt-8 ${
                          canOpen ? 'hover:opacity-50' : 'cursor-default opacity-35'
                        }`}
                      >
                        {canOpen ? t.open : t.pending}
                        {canOpen && <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                      </button>
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
            <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em]">{t.method}</h2>
          </div>
          <div className="lg:col-span-9">
            {t.methodLines.map((line, i) => (
              <div key={line} className="group grid grid-cols-[2.5rem_1fr] border-t dz-border py-5 first:border-t-2">
                <span className="font-mono text-[9px] dz-text-muted">0{i + 1}</span>
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] transition-transform duration-200 group-hover:translate-x-1 sm:text-4xl">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] lg:col-span-3">{t.about}</h2>
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
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] lg:col-span-3">{t.contact}</h2>
          <div className="lg:col-span-8">
            <p className="font-display text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">DOTZERO / OPEN CHANNEL</p>
            <p className="dz-body mt-6 max-w-xl text-sm">
              Independent research, digital experiments, archives and cultural collaborations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

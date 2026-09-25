import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowUpRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../translations';

export const ProjectsGallery: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT.projects;

  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { key: 'all', label: t.categories.all[language] },
    { key: 'identity', label: t.categories.identity[language] },
    { key: 'typography', label: t.categories.typography[language] },
    { key: 'space', label: t.categories.space[language] },
    { key: 'digital', label: t.categories.digital[language] },
  ];

  const filteredProjects =
    selectedCategoryKey === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categoryKey === selectedCategoryKey);

  return (
    <section id="progetti" className="py-20 border-b-2 border-[var(--text)] bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b-2 border-[var(--text)] gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] uppercase tracking-[0.2em] font-bold mb-2">
              <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
              <span>{t.badge[language]}</span>
            </div>
            <h2 className="dz-h2 text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--text)]">
              {t.title[language]} <span className="text-[var(--accent-secondary)]">·0</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 border border-[var(--text)] bg-[var(--surface-raised)] p-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                id={`filter-${cat.key}`}
                onClick={() => setSelectedCategoryKey(cat.key)}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  selectedCategoryKey === cat.key
                    ? 'bg-[var(--text)] text-[var(--on-accent)] font-bold'
                    : 'text-[var(--text)] hover:bg-zinc-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setActiveProjectModal(project)}
              className="border-2 border-[var(--text)] bg-[var(--surface-raised)] group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#121212] flex flex-col justify-between"
            >
              {/* Card Geometric Visual Poster Area */}
              <div className="h-56 bg-[#FAF8F5] border-b-2 border-[var(--text)] p-6 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bauhaus-grid-pattern opacity-50" />

                {/* Vector Constructivist Graphic corresponding to project */}
                {project.id === 'kandinsky-grid' && (
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <div className="absolute w-28 h-28 rounded-full bg-[var(--accent)] mix-blend-multiply" />
                    <div className="absolute w-20 h-20 bg-[var(--accent-secondary)] rotate-12 border border-[var(--text)]" />
                    <div className="absolute w-40 h-2 bg-[var(--text)] -rotate-45" />
                    <div className="absolute w-4 h-4 rounded-full bg-[var(--accent-tertiary)] z-10" />
                  </div>
                )}

                {project.id === 'monolito-terminal' && (
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <div className="w-32 h-24 bg-[var(--accent-secondary)] border-2 border-[var(--text)] p-2 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div className="w-3 h-3 bg-[var(--accent-tertiary)]" />
                        <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
                      </div>
                      <div className="h-2 w-full bg-[var(--surface-raised)]/40" />
                      <div className="h-4 w-12 bg-[var(--surface-raised)]" />
                    </div>
                  </div>
                )}

                {project.id === 'modulor-type' && (
                  <div className="relative flex items-center justify-center">
                    <div className="text-7xl font-extrabold font-display text-[var(--text)] tracking-tighter flex items-center">
                      <span>A</span>
                      <span className="text-[var(--accent)]">a</span>
                      <span className="w-8 h-8 rounded-full bg-[var(--accent-tertiary)] ml-1 border-2 border-[var(--text)]" />
                    </div>
                  </div>
                )}

                {project.id === 'padiglione-dessau' && (
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-[var(--text)] bg-[var(--surface-raised)] relative">
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-[var(--accent)]" />
                      <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-[var(--accent-secondary)]" />
                    </div>
                  </div>
                )}

                {project.id === 'cinetica-sonora' && (
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border-2 border-dashed border-[var(--text)] flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[var(--accent-secondary)] flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[var(--accent-tertiary)]" />
                      </div>
                    </div>
                    <div className="absolute w-36 h-0.5 bg-[var(--accent)] rotate-30" />
                  </div>
                )}

                {project.id === 'kandinsky-os' && (
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                      <polygon points="50,10 90,85 10,85" fill="#F7B801" stroke="#121212" strokeWidth="2" />
                      <circle cx="50" cy="55" r="18" fill="#1350B0" />
                      <rect x="42" y="47" width="16" height="16" fill="#DE3831" />
                    </svg>
                  </div>
                )}

                {/* Technical Coordinates Badge */}
                <div className="absolute top-2 left-2 font-mono text-[10px] bg-[var(--surface-raised)] border border-[var(--text)] px-1.5 py-0.5">
                  {project.code}
                </div>
                <div className="absolute bottom-2 right-2 font-mono text-[10px] bg-[var(--surface-raised)] border border-[var(--text)] px-1.5 py-0.5">
                  RATIO {project.ratio}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase font-bold text-[var(--accent)]">
                      {project.category[language]}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">{project.year}</span>
                  </div>

                  <h3 className="dz-h3 mb-2 text-xl uppercase text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                    {project.title[language]}
                  </h3>

                  <p className="dz-body mb-4 line-clamp-2 text-sm">
                    {project.description[language]}
                  </p>
                </div>

                {/* Bottom Action strip */}
                <div className="pt-4 border-t border-[var(--text)] flex items-center justify-between font-mono text-xs">
                  <span className="font-semibold text-[var(--text)] flex items-center gap-1 group-hover:underline">
                    {t.detailsBtn[language]}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full border border-[var(--text)]"
                      style={{ backgroundColor: project.primaryColorHex }}
                    />
                    <span
                      className="w-3 h-3 border border-[var(--text)]"
                      style={{ backgroundColor: project.secondaryColorHex }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProjectModal && (
          <div
            id="project-detail-modal"
            className="fixed inset-0 z-50 bg-[var(--text)]/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActiveProjectModal(null)}
          >
            <div
              className="bg-[var(--surface-raised)] border-4 border-[var(--text)] max-w-2xl w-full p-6 sm:p-8 shadow-[12px_12px_0px_0px_#DE3831] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 mb-6 border-b-2 border-[var(--text)]">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] uppercase font-bold mb-1">
                    <span className="px-1.5 py-0.5 bg-[var(--text)] text-[var(--on-accent)]">
                      {activeProjectModal.code}
                    </span>
                    <span>{activeProjectModal.category[language]}</span>
                    <span className="text-zinc-400">/</span>
                    <span>{activeProjectModal.year}</span>
                  </div>
                  <h3 className="dz-h3 text-2xl sm:text-3xl uppercase text-[var(--text)]">
                    {activeProjectModal.title[language]}
                  </h3>
                </div>

                <button
                  type="button"
                  id="close-project-modal"
                  onClick={() => setActiveProjectModal(null)}
                  className="p-1.5 border-2 border-[var(--text)] hover:bg-[var(--accent)] hover:text-[var(--on-accent)] transition-colors"
                  aria-label="Chiudi dettaglio"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description & specs */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase font-bold text-zinc-500 mb-2">
                    {t.modalRequirement[language]}
                  </h4>
                  <p className="dz-body text-base">
                    {activeProjectModal.description[language]}
                  </p>
                </div>

                {/* Specifics Checklist */}
                <div>
                  <h4 className="font-mono text-xs uppercase font-bold text-zinc-500 mb-3">
                    {t.modalSpecs[language]}
                  </h4>
                  <ul className="space-y-2 font-mono text-xs text-zinc-700">
                    {activeProjectModal.details[language].map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Color Palette Specimen */}
                <div className="pt-4 border-t-2 border-[var(--text)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-5 h-5 border-2 border-[var(--text)]"
                        style={{ backgroundColor: activeProjectModal.primaryColorHex }}
                      />
                      <span className="text-[11px] font-bold">
                        {activeProjectModal.primaryColorHex}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-5 h-5 border-2 border-[var(--text)]"
                        style={{ backgroundColor: activeProjectModal.secondaryColorHex }}
                      />
                      <span className="text-[11px] font-bold">
                        {activeProjectModal.secondaryColorHex}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2 bg-[var(--text)] text-[var(--on-accent)] font-mono text-xs uppercase font-bold hover:bg-[var(--accent)] transition-colors"
                  >
                    {t.modalClose[language]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

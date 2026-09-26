import React from 'react';
import { ArrowLeft, FlaskConical, Grid3X3, Network, ScanLine, Shapes, Type } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TypeConstructionEditor } from './core/TypeConstructionEditor';
import './styles.css';

interface UniversalSystemsProjectProps {
  onBack?: () => void;
}

type ModuleStatus = 'active' | 'planned';

const COPY = {
  it: {
    kicker: 'PROJECT 04 / TYPOGRAPHIC RESEARCH',
    title: 'UNIVERSAL SYSTEMS',
    period: '1925—2026',
    subtitle: 'Type · Geometry · Morphology · Reduction',
    intro: 'Un progetto di ricerca interattivo sulla costruzione della forma tipografica: dalle regole geometriche ai sistemi condivisi, fino alla domanda su cosa possa significare oggi una tipografia universale.',
    back: 'BACK TO INDEX',
    modules: 'EXPERIMENTS / MODULES',
    active: 'ACTIVE',
    soon: 'COMING SOON',
    construction: 'CONSTRUCTION',
    resolved: 'RESOLVED',
    build: '01 / BUILD',
    system: '02 / SYSTEM',
    test: '03 / TEST',
    buildText: 'Costruisci il glifo attraverso un insieme limitato di primitive e regole condivise.',
    systemText: 'Osserva quali componenti vengono riutilizzati e come nasce una famiglia coerente di segni.',
    testText: 'Porta il glifo fuori dall’isolamento e verifica il comportamento dentro parole e sequenze.',
    framework: 'FROM UNIVERSAL TYPE TO CONSTRUCTION SYSTEMS',
    frameworkText: 'Il punto di partenza non è imitare un carattere storico, ma interrogare il principio: quante regole servono per generare un sistema leggibile, coerente e riconoscibile?',
  },
  de: {
    kicker: 'PROJECT 04 / TYPOGRAPHIC RESEARCH',
    title: 'UNIVERSAL SYSTEMS',
    period: '1925—2026',
    subtitle: 'Type · Geometry · Morphology · Reduction',
    intro: 'Ein interaktives Forschungsprojekt über die Konstruktion typografischer Form: von geometrischen Regeln über gemeinsame Systeme bis zur Frage, was universelle Typografie heute bedeuten könnte.',
    back: 'BACK TO INDEX',
    modules: 'EXPERIMENTS / MODULES',
    active: 'ACTIVE',
    soon: 'COMING SOON',
    construction: 'CONSTRUCTION',
    resolved: 'RESOLVED',
    build: '01 / BUILD',
    system: '02 / SYSTEM',
    test: '03 / TEST',
    buildText: 'Konstruiere Glyphen aus einem begrenzten Satz gemeinsamer Grundformen und Regeln.',
    systemText: 'Untersuche wiederkehrende Komponenten und wie daraus eine kohärente Zeichenfamilie entsteht.',
    testText: 'Teste die Glyphe außerhalb der Isolation in Wörtern und Sequenzen.',
    framework: 'FROM UNIVERSAL TYPE TO CONSTRUCTION SYSTEMS',
    frameworkText: 'Es geht nicht darum, eine historische Schrift zu imitieren, sondern das Prinzip zu untersuchen: Wie wenige Regeln braucht ein lesbares, kohärentes und wiedererkennbares System?',
  },
  en: {
    kicker: 'PROJECT 04 / TYPOGRAPHIC RESEARCH',
    title: 'UNIVERSAL SYSTEMS',
    period: '1925—2026',
    subtitle: 'Type · Geometry · Morphology · Reduction',
    intro: 'An interactive research project on the construction of typographic form: from geometric rules and shared systems to the question of what universal type could mean today.',
    back: 'BACK TO INDEX',
    modules: 'EXPERIMENTS / MODULES',
    active: 'ACTIVE',
    soon: 'COMING SOON',
    construction: 'CONSTRUCTION',
    resolved: 'RESOLVED',
    build: '01 / BUILD',
    system: '02 / SYSTEM',
    test: '03 / TEST',
    buildText: 'Build a glyph from a limited set of shared primitives and rules.',
    systemText: 'Observe recurring components and how a coherent family of signs emerges.',
    testText: 'Move the glyph out of isolation and test it inside words and sequences.',
    framework: 'FROM UNIVERSAL TYPE TO CONSTRUCTION SYSTEMS',
    frameworkText: 'The point is not to imitate a historical typeface, but to question the principle: how few rules are needed to generate a readable, coherent and recognizable system?',
  },
};

const MODULES: Array<{
  number: string;
  title: string;
  strap: string;
  status: ModuleStatus;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { number: '01', title: 'TYPE CONSTRUCTION LAB', strap: 'Geometry → Glyph', status: 'active', icon: Grid3X3 },
  { number: '02', title: 'ONE SHAPE, MANY ALPHABETS', strap: 'Constraint → Variation', status: 'planned', icon: Shapes },
  { number: '03', title: 'GLYPH DNA', strap: 'Component → Relation', status: 'planned', icon: Network },
  { number: '04', title: 'TYPE MORPHOLOGY ATLAS', strap: 'Form → Comparison', status: 'planned', icon: ScanLine },
  { number: '05', title: '1925 → 2026 / UNIVERSAL?', strap: 'History → Question', status: 'planned', icon: Type },
];

export const UniversalSystemsProject: React.FC<UniversalSystemsProjectProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const t = COPY[language];
  return (
    <div className="min-h-screen dz-bg dz-text">
      <header className="sticky top-0 z-40 border-b dz-border bg-[var(--bg)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {onBack ? (
            <button onClick={onBack} className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em]">
              <ArrowLeft className="h-3.5 w-3.5" /> {t.back}
            </button>
          ) : (
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">INDEPENDENT RESEARCH TOOL</div>
          )}
          <div className="font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">DOTZERO / UNIVERSAL SYSTEMS / 04</div>
        </div>
      </header>

      <main>
        <section className="border-b dz-border">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] dz-text-muted">{t.kicker}</div>
            <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:items-end">
              <h1 className="dz-h1 text-[clamp(3.5rem,9vw,8.5rem)] uppercase lg:col-span-9">{t.title}</h1>
              <div className="lg:col-span-3 lg:pb-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em]">{t.period}</div>
                <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] dz-text-muted">{t.subtitle}</div>
              </div>
            </div>
            <p className="dz-body-strong mt-10 max-w-3xl">{t.intro}</p>
          </div>
        </section>

        <section className="border-b dz-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em]">{t.modules}</div>
              </div>
              <div className="lg:col-span-9">
                <div className="border-t-2 dz-border">
                  {MODULES.map((module) => {
                    const Icon = module.icon;
                    return (
                      <div key={module.number} className={`universal-module-row ${module.status === 'active' ? 'is-active' : ''}`}>
                        <div className="font-mono text-[10px]">{module.number}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4" />
                            <h2 className="font-display text-xl font-semibold tracking-[-0.035em] sm:text-2xl">{module.title}</h2>
                          </div>
                          <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] dz-text-muted">{module.strap}</div>
                        </div>
                        <div className={`universal-module-status ${module.status === 'active' ? 'is-active' : ''}`}>
                          {module.status === 'active' ? t.active : t.soon}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b dz-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">EXPERIMENT 01 / ACTIVE</div>
                <h2 className="dz-h2 mt-4 text-4xl uppercase sm:text-5xl">TYPE CONSTRUCTION LAB</h2>
                <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">GEOMETRY → GLYPH</div>
              </div>

              <div className="lg:col-span-9">
                <div className="grid gap-5 md:grid-cols-3">
                  {[
                    [t.build, t.buildText],
                    [t.system, t.systemText],
                    [t.test, t.testText],
                  ].map(([label, body]) => (
                    <div key={label} className="universal-process-card">
                      <div className="font-mono text-[9px] uppercase tracking-[0.15em]">{label}</div>
                      <p className="dz-body mt-5 text-sm">{body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <TypeConstructionEditor />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
            <div className="lg:col-span-3">
              <FlaskConical className="h-5 w-5 text-[var(--accent)]" />
            </div>
            <div className="lg:col-span-8">
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] dz-text-muted">{t.framework}</div>
              <p className="mt-5 font-display text-3xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl">{t.frameworkText}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

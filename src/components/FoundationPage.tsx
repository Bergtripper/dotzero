import React from 'react';
import { ArrowLeft, ArrowRight, Braces, Compass, GitBranch, Layers3, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const COPY = {
  it: {
    kicker: 'DOTZERO / FOUNDATION / v0.3',
    title: 'PERSONAL RESEARCH LAB FOR KNOWLEDGE EXPLORATION',
    tagline: 'Instruments for inquiry.',
    intro:
      'DOTZERO è un laboratorio personale per esplorare la conoscenza. Nasce dalla curiosità individuale e costruisce Atlas, Studies e Tools per vedere connessioni, testare idee, confrontare prospettive e capire su cosa poggiano le affermazioni.',
    subject:
      'Il tema può essere qualsiasi cosa. Ciò che resta costante non è il soggetto, ma il metodo e gli standard.',
    problemLabel: 'THE PROBLEM',
    problemTitle: 'L’informazione è abbondante. La comprensione no.',
    problemBody:
      'La maggior parte dei sistemi digitali ottimizza il recupero o la sintesi. DOTZERO lavora nello spazio intermedio: relazioni, tempo, spazio, evidenza, disaccordi, assunzioni e nuove domande che emergono quando l’informazione viene riorganizzata.',
    methodLabel: 'METHOD',
    methodTitle: 'Question → Research → Model → Represent → Explore → Record',
    methodBody:
      'Il processo è iterativo. La rappresentazione può rivelare difetti del modello; l’esplorazione può mostrare lacune nella ricerca. Il metodo termina in un record documentato, non in una risposta finale.',
    outputsLabel: 'OUTPUTS',
    outputsTitle: 'Tre forme. Qualunque soggetto.',
    outputs: [
      ['ATLAS', 'Il suo oggetto è un campo.', 'Un ambiente strutturato per esplorare cosa esiste, cosa si connette, cosa cambia, dove, quando e secondo quali fonti.'],
      ['STUDY', 'Il suo oggetto è una domanda.', 'Un modello interattivo o computazionale che rende un’idea, un’ipotesi o un problema osservabile, comparabile o manipolabile.'],
      ['TOOL', 'Il suo oggetto è un metodo.', 'Uno strumento riutilizzabile per l’indagine: compare, map, timeline, network, similarity, search, simulation e altri metodi.'],
    ],
    evidenceLabel: 'EVIDENCE',
    evidenceTitle: 'Ogni claim mostra il proprio fondamento.',
    evidenceBody:
      'Le interfacce non sono neutrali. Una linea implica una relazione, un cluster una somiglianza, una posizione una rilevanza. DOTZERO rende visibili origine, livello di confidenza, copertura e disaccordi quando contano per l’interpretazione.',
    evidenceAxes: [
      ['ORIGIN', 'Documented · Derived · Interpreted · Suggested'],
      ['CONFIDENCE', 'Established · Probable · Disputed · Unknown'],
    ],
    aiLabel: 'COMPUTATION + AI',
    aiTitle: 'Machines suggest. People interpret.',
    aiBody:
      'L’AI è uno strumento tra gli altri, non l’identità di DOTZERO. Gli output macchina non diventano automaticamente fatti: devono essere distinguibili, tracciabili e, quando pubblicati come contenuto curato, sottoposti a revisione umana.',
    scopeLabel: 'SCOPE',
    scopeTitle: 'Open in subject. Narrow in claim.',
    scopeBody:
      'DOTZERO può lavorare su arte, storia, scienza, linguaggio, natura, tecnologia, sistemi o qualunque altro dominio. La curiosità è sufficiente per iniziare; il rigore determina cosa viene pubblicato.',
    architectureLabel: 'ARCHITECTURE',
    architectureTitle: 'Foundation → Framework → Register',
    architectureBody:
      'La Foundation definisce purpose, metodo, standard e responsabilità. Il Framework contiene Atlas Engine, evidence schema, design system e componenti condivisi. Il Register raccoglie progetti, versioni, status e contributori.',
    principlesLabel: '10 PRINCIPLES',
    principles: [
      'The question comes first.',
      'Curiosity to begin, rigor to publish.',
      'Open in subject. Narrow in claim.',
      'Every claim shows its ground.',
      'Missing data is not proof of absence.',
      'Disagreement is shown, not silently resolved.',
      'Machines suggest. People interpret.',
      'Every instrument declares its limits.',
      'Connect, don’t capture.',
      'Record what was learned, including what failed.',
    ],
    longLabel: 'LONG-TERM QUESTION',
    longQuestion:
      'How can computational instruments help people see knowledge differently, while keeping visible what the instrument itself has chosen?',
    framework: 'OPEN FRAMEWORK',
    back: 'BACK TO INDEX',
    canonical: 'Canonical Foundation Document · v0.3 · 28 Sep 2026',
  },
  de: {
    kicker: 'DOTZERO / FOUNDATION / v0.3',
    title: 'PERSONAL RESEARCH LAB FOR KNOWLEDGE EXPLORATION',
    tagline: 'Instruments for inquiry.',
    intro:
      'DOTZERO ist ein persönliches Forschungslabor zur Erkundung von Wissen. Es beginnt mit individueller Neugier und entwickelt Atlanten, Studies und Tools, um Verbindungen sichtbar zu machen, Ideen zu testen, Perspektiven zu vergleichen und die Grundlage von Aussagen nachvollziehbar zu machen.',
    subject:
      'Das Thema kann alles sein. Konstant bleiben nicht die Gegenstände, sondern Methode und Standards.',
    problemLabel: 'THE PROBLEM',
    problemTitle: 'Information ist reichlich vorhanden. Verstehen nicht.',
    problemBody:
      'Die meisten digitalen Systeme optimieren Retrieval oder Synthese. DOTZERO arbeitet im Zwischenraum: Beziehungen, Zeit, Raum, Evidenz, Widersprüche, Annahmen und neue Fragen, die durch eine andere Anordnung von Information sichtbar werden.',
    methodLabel: 'METHOD',
    methodTitle: 'Question → Research → Model → Represent → Explore → Record',
    methodBody:
      'Der Prozess ist iterativ. Repräsentation kann Schwächen des Modells zeigen; Exploration kann Forschungslücken sichtbar machen. Die Methode endet in einer dokumentierten Aufzeichnung, nicht in einer endgültigen Antwort.',
    outputsLabel: 'OUTPUTS',
    outputsTitle: 'Drei Formen. Jedes Thema.',
    outputs: [
      ['ATLAS', 'Sein Objekt ist ein Feld.', 'Eine strukturierte Umgebung, um zu erkunden, was existiert, was verbunden ist, was sich verändert, wo, wann und auf Basis welcher Quellen.'],
      ['STUDY', 'Sein Objekt ist eine Frage.', 'Ein interaktives oder rechnerisches Modell, das eine Idee, Hypothese oder ein Problem beobachtbar, vergleichbar oder manipulierbar macht.'],
      ['TOOL', 'Sein Objekt ist eine Methode.', 'Ein wiederverwendbares Instrument für Untersuchung: compare, map, timeline, network, similarity, search, simulation und weitere Methoden.'],
    ],
    evidenceLabel: 'EVIDENCE',
    evidenceTitle: 'Jede Aussage zeigt ihre Grundlage.',
    evidenceBody:
      'Interfaces sind nicht neutral. Eine Linie impliziert Beziehung, ein Cluster Ähnlichkeit, eine Position Relevanz. DOTZERO macht Herkunft, Sicherheit, Abdeckung und Widerspruch sichtbar, wenn sie für die Interpretation wesentlich sind.',
    evidenceAxes: [
      ['ORIGIN', 'Documented · Derived · Interpreted · Suggested'],
      ['CONFIDENCE', 'Established · Probable · Disputed · Unknown'],
    ],
    aiLabel: 'COMPUTATION + AI',
    aiTitle: 'Machines suggest. People interpret.',
    aiBody:
      'AI ist ein Instrument unter mehreren, nicht die Identität von DOTZERO. Maschinelle Ausgaben werden nicht automatisch zu Fakten: sie müssen unterscheidbar, nachvollziehbar und bei kuratierten Inhalten menschlich geprüft sein.',
    scopeLabel: 'SCOPE',
    scopeTitle: 'Open in subject. Narrow in claim.',
    scopeBody:
      'DOTZERO kann Kunst, Geschichte, Wissenschaft, Sprache, Natur, Technologie, Systeme oder jedes andere Gebiet untersuchen. Neugier genügt zum Beginn; Rigorosität entscheidet über die Veröffentlichung.',
    architectureLabel: 'ARCHITECTURE',
    architectureTitle: 'Foundation → Framework → Register',
    architectureBody:
      'Die Foundation definiert Zweck, Methode, Standards und Verantwortung. Das Framework umfasst Atlas Engine, Evidence Schema, Design System und gemeinsame Komponenten. Das Register führt Projekte, Versionen, Status und Mitwirkende.',
    principlesLabel: '10 PRINCIPLES',
    principles: [
      'The question comes first.',
      'Curiosity to begin, rigor to publish.',
      'Open in subject. Narrow in claim.',
      'Every claim shows its ground.',
      'Missing data is not proof of absence.',
      'Disagreement is shown, not silently resolved.',
      'Machines suggest. People interpret.',
      'Every instrument declares its limits.',
      'Connect, don’t capture.',
      'Record what was learned, including what failed.',
    ],
    longLabel: 'LONG-TERM QUESTION',
    longQuestion:
      'How can computational instruments help people see knowledge differently, while keeping visible what the instrument itself has chosen?',
    framework: 'OPEN FRAMEWORK',
    back: 'BACK TO INDEX',
    canonical: 'Canonical Foundation Document · v0.3 · 28 Sep 2026',
  },
  en: {
    kicker: 'DOTZERO / FOUNDATION / v0.3',
    title: 'PERSONAL RESEARCH LAB FOR KNOWLEDGE EXPLORATION',
    tagline: 'Instruments for inquiry.',
    intro:
      'DOTZERO is a personal research lab for exploring knowledge. It begins with individual curiosity and builds Atlases, Studies and Tools that help people see how things connect, test ideas, compare perspectives and understand what claims rest on.',
    subject:
      'The subject can be anything. What remains constant is not the subject, but the method and the standards.',
    problemLabel: 'THE PROBLEM',
    problemTitle: 'Information is abundant. Understanding is not.',
    problemBody:
      'Most digital systems optimise retrieval or synthesis. DOTZERO works in the gap between them: relations, time, space, evidence, disagreement, assumptions, and the new questions that appear when information is rearranged.',
    methodLabel: 'METHOD',
    methodTitle: 'Question → Research → Model → Represent → Explore → Record',
    methodBody:
      'The process is iterative. Representation may expose weaknesses in a model; exploration may reveal missing research. The method ends in a documented record, not a final answer.',
    outputsLabel: 'OUTPUTS',
    outputsTitle: 'Three forms. Any subject.',
    outputs: [
      ['ATLAS', 'Its object is a field.', 'A structured environment for exploring what exists, what connects, what changes, where, when, and according to which sources.'],
      ['STUDY', 'Its object is a question.', 'An interactive or computational model that makes an idea, hypothesis, or problem observable, comparable, or manipulable.'],
      ['TOOL', 'Its object is a method.', 'A reusable instrument for inquiry: compare, map, timeline, network, similarity, search, simulation, and other methods.'],
    ],
    evidenceLabel: 'EVIDENCE',
    evidenceTitle: 'Every claim shows its ground.',
    evidenceBody:
      'Interfaces are not neutral. A line implies a relation, a cluster similarity, a position relevance. DOTZERO makes origin, confidence, coverage, and disagreement visible when they materially affect interpretation.',
    evidenceAxes: [
      ['ORIGIN', 'Documented · Derived · Interpreted · Suggested'],
      ['CONFIDENCE', 'Established · Probable · Disputed · Unknown'],
    ],
    aiLabel: 'COMPUTATION + AI',
    aiTitle: 'Machines suggest. People interpret.',
    aiBody:
      'AI is one instrument among others, not the identity of DOTZERO. Machine output does not automatically become fact: it must remain distinguishable, traceable and, when published as curated content, subject to human review.',
    scopeLabel: 'SCOPE',
    scopeTitle: 'Open in subject. Narrow in claim.',
    scopeBody:
      'DOTZERO can work on art, history, science, language, nature, technology, systems, or any other domain. Curiosity is sufficient to begin; rigor determines what gets published.',
    architectureLabel: 'ARCHITECTURE',
    architectureTitle: 'Foundation → Framework → Register',
    architectureBody:
      'The Foundation defines purpose, method, standards and responsibility. The Framework contains the Atlas Engine, evidence schema, design system and shared components. The Register contains projects, versions, status and contributors.',
    principlesLabel: '10 PRINCIPLES',
    principles: [
      'The question comes first.',
      'Curiosity to begin, rigor to publish.',
      'Open in subject. Narrow in claim.',
      'Every claim shows its ground.',
      'Missing data is not proof of absence.',
      'Disagreement is shown, not silently resolved.',
      'Machines suggest. People interpret.',
      'Every instrument declares its limits.',
      'Connect, don’t capture.',
      'Record what was learned, including what failed.',
    ],
    longLabel: 'LONG-TERM QUESTION',
    longQuestion:
      'How can computational instruments help people see knowledge differently, while keeping visible what the instrument itself has chosen?',
    framework: 'OPEN FRAMEWORK',
    back: 'BACK TO INDEX',
    canonical: 'Canonical Foundation Document · v0.3 · 28 Sep 2026',
  },
};

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] dz-text-muted">{children}</div>
);

export const FoundationPage: React.FC = () => {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <main id="foundation" className="pt-20">
      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28">
          <a href="#index" className="mb-12 inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] hover:opacity-45">
            <ArrowLeft className="h-3 w-3" /> {t.back}
          </a>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Label>{t.kicker}</Label>
              <h1 className="dz-h1 mt-8 max-w-6xl text-[clamp(3.6rem,8.5vw,8.5rem)]">{t.title}</h1>
              <div className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{t.tagline}</div>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-4">
              <p className="dz-body-strong">{t.intro}</p>
              <p className="dz-body">{t.subject}</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] dz-text-muted">{t.canonical}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><Label>{t.problemLabel}</Label></div>
          <div className="lg:col-span-8">
            <h2 className="dz-h2 text-4xl sm:text-6xl">{t.problemTitle}</h2>
            <p className="dz-body mt-7 max-w-3xl text-lg">{t.problemBody}</p>
            <div className="mt-10 grid gap-px border dz-border bg-[var(--line)] sm:grid-cols-3">
              {[
                ['RETRIEVE', 'question → list', Search],
                ['SYNTHESISE', 'question → answer', Sparkles],
                ['EXPLORE', 'entry → relation → question', Compass],
              ].map(([title, body, Icon]) => (
                <div key={String(title)} className="min-h-44 bg-[var(--bg)] p-5">
                  {React.createElement(Icon as React.ElementType, { className: 'h-5 w-5' })}
                  <div className="mt-12 font-mono text-[9px] font-bold tracking-[0.15em]">{String(title)}</div>
                  <div className="mt-2 font-mono text-[9px] dz-text-muted">{String(body)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Label>{t.methodLabel}</Label>
          <h2 className="dz-h2 mt-6 max-w-6xl text-4xl sm:text-6xl">{t.methodTitle}</h2>
          <p className="dz-body mt-7 max-w-3xl text-lg">{t.methodBody}</p>
          <div className="mt-12 grid gap-px border dz-border bg-[var(--line)] sm:grid-cols-3 lg:grid-cols-6">
            {['Question', 'Research', 'Model', 'Represent', 'Explore', 'Record'].map((item, i) => (
              <div key={item} className="min-h-32 bg-[var(--bg)] p-5">
                <span className="font-mono text-[9px] dz-text-muted">0{i + 1}</span>
                <div className="mt-10 font-display text-xl font-semibold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Label>{t.outputsLabel}</Label>
          <h2 className="dz-h2 mt-6 text-4xl sm:text-6xl">{t.outputsTitle}</h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {t.outputs.map(([name, object, body], i) => (
              <article key={name} className="border dz-border p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] dz-text-muted">0{i + 1}</span>
                  <Layers3 className="h-4 w-4" />
                </div>
                <h3 className="dz-h3 mt-12 text-4xl">{name}</h3>
                <div className="mt-4 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--accent)]">{object}</div>
                <p className="dz-body mt-6">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><Label>{t.evidenceLabel}</Label></div>
          <div className="lg:col-span-9">
            <div className="grid gap-8 border-2 dz-border p-6 sm:p-9 lg:grid-cols-12">
              <ShieldCheck className="h-8 w-8 lg:col-span-1" />
              <div className="lg:col-span-10">
                <h2 className="dz-h2 text-4xl sm:text-5xl">{t.evidenceTitle}</h2>
                <p className="dz-body mt-6 max-w-3xl text-lg">{t.evidenceBody}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {t.evidenceAxes.map(([label, values]) => (
                <div key={label} className="border dz-border p-6">
                  <div className="font-mono text-[9px] font-bold tracking-[0.15em]">{label}</div>
                  <div className="mt-8 font-display text-2xl font-semibold leading-tight">{values}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><Label>{t.aiLabel}</Label></div>
          <div className="lg:col-span-8">
            <h2 className="dz-h2 text-4xl sm:text-6xl">{t.aiTitle}</h2>
            <p className="dz-body mt-7 max-w-3xl text-lg">{t.aiBody}</p>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><Label>{t.scopeLabel}</Label></div>
          <div className="lg:col-span-8">
            <h2 className="dz-h2 text-4xl sm:text-6xl">{t.scopeTitle}</h2>
            <p className="dz-body mt-7 max-w-3xl text-lg">{t.scopeBody}</p>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Label>{t.architectureLabel}</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="dz-h2 text-4xl sm:text-6xl">{t.architectureTitle}</h2>
              <p className="dz-body mt-7 max-w-2xl text-lg">{t.architectureBody}</p>
            </div>
            <div className="lg:col-span-6">
              {[
                ['FOUNDATION', 'purpose · method · standards · responsibility'],
                ['FRAMEWORK', 'Atlas Engine · evidence · design system · components'],
                ['REGISTER', 'projects · versions · status · contributors'],
              ].map(([name, body], i) => (
                <div key={name} className="grid grid-cols-[2.5rem_1fr] border-t dz-border py-5 first:border-t-2">
                  <span className="font-mono text-[9px] dz-text-muted">0{i + 1}</span>
                  <div>
                    <div className="font-display text-2xl font-semibold">{name}</div>
                    <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.13em] dz-text-muted">{body}</div>
                  </div>
                </div>
              ))}
              <a href="#atlas-engine" className="mt-8 inline-flex items-center gap-2 border dz-border px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-[var(--text)] hover:text-[var(--bg)]">
                {t.framework} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><Label>{t.principlesLabel}</Label></div>
          <div className="lg:col-span-9 border-t-2 dz-border">
            {t.principles.map((principle, i) => (
              <div key={principle} className="grid grid-cols-[2.5rem_1fr] border-b dz-border py-5">
                <span className="font-mono text-[9px] dz-text-muted">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Label>{t.longLabel}</Label>
          <p className="dz-h2 mt-8 max-w-6xl text-5xl sm:text-7xl lg:text-8xl">{t.longQuestion}</p>
          <div className="mt-14 flex flex-wrap gap-3">
            <a href="#atlas-engine" className="inline-flex items-center gap-2 border dz-border px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-[var(--text)] hover:text-[var(--bg)]">
              {t.framework} <GitBranch className="h-3.5 w-3.5" />
            </a>
            <a href="#index" className="inline-flex items-center gap-2 border dz-border px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-[var(--text)] hover:text-[var(--bg)]">
              {t.back} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

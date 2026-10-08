import React from 'react';
import { ArrowLeft, Braces, Compass, Layers3, Search, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DotMarker, FieldGlyph, SyntaxLabel, SystemGlyph, ZeroField } from './GraphicSyntax';

const COPY = {
  it: {
    kicker: 'DOTZERO / FOUNDATION',
    title: 'LABORATORIO PERSONALE PER ESPLORARE LA CONOSCENZA',
    tagline: 'Strumenti per indagare.',
    intro: 'DOTZERO nasce dalla curiosità e costruisce atlanti, studi e strumenti per vedere connessioni, testare idee e confrontare prospettive.',
    subject: 'I temi possono cambiare completamente. Metodo, rigore ed evidenza restano costanti.',
    back: 'TORNA ALL’INDICE',
    principleLabel: 'PRINCIPIO / DOT · ZERO · OPEN DIRECTION',
    principleTitle: 'DOT. ZERO. OPEN DIRECTION.',
    principleBody: 'DOTZERO parte da un punto, apre un campo e cerca una direzione. La grammatica visiva riflette il metodo di ricerca, senza sostituirlo.',
    principleItems: [
      ['DOT.', 'ORIGINE', 'Il punto è l’inizio: una domanda, un’osservazione, un nodo da cui partire.'],
      ['ZERO.', 'CAMPO', 'Lo zero è lo spazio dell’indagine: un contesto delimitato in cui elementi e relazioni diventano leggibili.'],
      ['OPEN DIRECTION.', 'METODO', 'La direzione resta aperta: il metodo organizza la ricerca senza chiuderla in una risposta definitiva.'],
    ],
    problemLabel: 'IL PROBLEMA',
    problemTitle: 'L’informazione è abbondante. La comprensione no.',
    problemBody: 'DOTZERO lavora sulle relazioni: tempo, spazio, fonti, disaccordi e nuove domande che emergono quando l’informazione viene riorganizzata.',
    compare: [
      ['RECUPERARE', 'domanda → elenco'],
      ['SINTETIZZARE', 'domanda → risposta'],
      ['ESPLORARE', 'ingresso → relazione → domanda'],
    ],
    methodLabel: 'METODO',
    methodTitle: 'Domanda → Ricerca → Modello → Rappresentazione → Esplorazione → Registro',
    methodBody: 'Il processo è iterativo: una rappresentazione può mostrare un limite del modello e l’esplorazione può rivelare una lacuna nella ricerca.',
    methodSteps: ['Domanda', 'Ricerca', 'Modello', 'Rappresentazione', 'Esplorazione', 'Registro'],
    outputsLabel: 'FORME',
    outputsTitle: 'Tre forme. Qualunque soggetto.',
    outputs: [
      ['ATLAS', 'Oggetto: un campo.', 'Un ambiente strutturato per esplorare elementi, relazioni, luoghi, tempi e fonti.'],
      ['STUDY', 'Oggetto: una domanda.', 'Un modello interattivo o computazionale che rende un’idea osservabile, comparabile o manipolabile.'],
      ['TOOL', 'Oggetto: un metodo.', 'Uno strumento riutilizzabile per confrontare, mappare, cercare, simulare o mettere in relazione.'],
    ],
    evidenceLabel: 'EVIDENZA',
    evidenceTitle: 'Ogni affermazione mostra il proprio fondamento.',
    evidenceBody: 'Fonti, attribuzioni, copertura, confidenza e disaccordi devono restare visibili quando cambiano il modo in cui un’informazione viene interpretata.',
    evidenceAxes: [
      ['ORIGINE', 'Documentato · Derivato · Interpretato · Proposto'],
      ['CONFIDENZA', 'Consolidato · Probabile · Contestato · Sconosciuto'],
    ],
    scopeLabel: 'CAMPO',
    scopeTitle: 'Aperto nei temi. Preciso nelle affermazioni.',
    scopeBody: 'Arte, storia, scienza, linguaggio, natura, tecnologia o sistemi: la curiosità apre la ricerca; il rigore decide cosa pubblicare.',
    architectureLabel: 'ARCHITETTURA',
    architectureTitle: 'Foundation → Framework → Register',
    architectureBody: 'La Foundation definisce il metodo. Il Framework offre strutture condivise. Il Register rende visibili progetti e stato del lavoro.',
    architectureItems: [
      ['FOUNDATION', 'scopo · metodo · standard · responsabilità'],
      ['FRAMEWORK', 'Atlas Engine · evidenza · design system · componenti'],
      ['REGISTER', 'progetti · versioni · stato · contributi'],
    ],
    principlesLabel: '9 PRINCIPI',
    principles: [
      'La domanda viene prima.',
      'Curiosità per iniziare, rigore per pubblicare.',
      'Aperto nei temi. Preciso nelle affermazioni.',
      'Ogni affermazione mostra il proprio fondamento.',
      'L’assenza di dati non dimostra l’assenza di un fenomeno.',
      'Il disaccordo viene mostrato, non cancellato.',
      'Ogni strumento dichiara i propri limiti.',
      'Connettere, non catturare.',
      'Registrare ciò che si è imparato, compreso ciò che non ha funzionato.',
    ],
    longLabel: 'DOMANDA APERTA',
    longQuestion: 'Come possono gli strumenti computazionali aiutarci a vedere la conoscenza in modo diverso, rendendo visibili anche le scelte dello strumento?',
    framework: 'APRI IL FRAMEWORK',
  },
  de: {
    kicker: 'DOTZERO / FOUNDATION',
    title: 'PERSÖNLICHES LABOR ZUR ERKUNDUNG VON WISSEN',
    tagline: 'Instrumente zum Untersuchen.',
    intro: 'DOTZERO beginnt mit Neugier und entwickelt Atlanten, Studien und Instrumente, um Verbindungen sichtbar zu machen, Ideen zu prüfen und Perspektiven zu vergleichen.',
    subject: 'Die Themen können vollständig wechseln. Methode, Sorgfalt und Evidenz bleiben konstant.',
    back: 'ZURÜCK ZUM INDEX',
    principleLabel: 'PRINZIP / DOT · ZERO · OPEN DIRECTION',
    principleTitle: 'DOT. ZERO. OPEN DIRECTION.',
    principleBody: 'DOTZERO beginnt mit einem Punkt, öffnet ein Feld und sucht eine Richtung. Die visuelle Grammatik spiegelt die Forschungsmethode, ohne sie zu ersetzen.',
    principleItems: [
      ['DOT.', 'URSPRUNG', 'Der Punkt ist der Anfang: eine Frage, eine Beobachtung, ein Knoten, von dem aus die Untersuchung beginnt.'],
      ['ZERO.', 'FELD', 'Die Null ist der Untersuchungsraum: ein begrenzter Kontext, in dem Elemente und Beziehungen lesbar werden.'],
      ['OPEN DIRECTION.', 'METHODE', 'Die Richtung bleibt offen: Die Methode strukturiert die Forschung, ohne sie in einer endgültigen Antwort zu schließen.'],
    ],
    problemLabel: 'DAS PROBLEM',
    problemTitle: 'Information ist reichlich vorhanden. Verstehen nicht.',
    problemBody: 'DOTZERO arbeitet mit Beziehungen: Zeit, Raum, Quellen, Widersprüchen und neuen Fragen, die durch eine andere Anordnung von Information entstehen.',
    compare: [
      ['ABRUFEN', 'Frage → Liste'],
      ['VERDICHTEN', 'Frage → Antwort'],
      ['ERKUNDEN', 'Einstieg → Beziehung → Frage'],
    ],
    methodLabel: 'METHODE',
    methodTitle: 'Frage → Recherche → Modell → Darstellung → Exploration → Dokumentation',
    methodBody: 'Der Prozess ist iterativ: Eine Darstellung kann Grenzen des Modells zeigen, Exploration kann Lücken in der Recherche sichtbar machen.',
    methodSteps: ['Frage', 'Recherche', 'Modell', 'Darstellung', 'Exploration', 'Dokumentation'],
    outputsLabel: 'FORMEN',
    outputsTitle: 'Drei Formen. Jedes Thema.',
    outputs: [
      ['ATLAS', 'Gegenstand: ein Feld.', 'Eine strukturierte Umgebung für Elemente, Beziehungen, Orte, Zeiten und Quellen.'],
      ['STUDY', 'Gegenstand: eine Frage.', 'Ein interaktives oder computergestütztes Modell, das eine Idee beobachtbar, vergleichbar oder manipulierbar macht.'],
      ['TOOL', 'Gegenstand: eine Methode.', 'Ein wiederverwendbares Instrument zum Vergleichen, Kartieren, Suchen, Simulieren oder Verknüpfen.'],
    ],
    evidenceLabel: 'EVIDENZ',
    evidenceTitle: 'Jede Aussage zeigt ihre Grundlage.',
    evidenceBody: 'Quellen, Zuschreibungen, Abdeckung, Sicherheit und Widersprüche bleiben sichtbar, wenn sie die Interpretation beeinflussen.',
    evidenceAxes: [
      ['HERKUNFT', 'Dokumentiert · Abgeleitet · Interpretiert · Vorgeschlagen'],
      ['SICHERHEIT', 'Gesichert · Wahrscheinlich · Umstritten · Unbekannt'],
    ],
    scopeLabel: 'RAHMEN',
    scopeTitle: 'Offen im Thema. Präzise in der Aussage.',
    scopeBody: 'Kunst, Geschichte, Wissenschaft, Sprache, Natur, Technologie oder Systeme: Neugier eröffnet die Recherche; Sorgfalt entscheidet über die Veröffentlichung.',
    architectureLabel: 'ARCHITEKTUR',
    architectureTitle: 'Foundation → Framework → Register',
    architectureBody: 'Die Foundation definiert die Methode. Das Framework bietet gemeinsame Strukturen. Das Register macht Projekte und Arbeitsstand sichtbar.',
    architectureItems: [
      ['FOUNDATION', 'Zweck · Methode · Standards · Verantwortung'],
      ['FRAMEWORK', 'Atlas Engine · Evidenz · Designsystem · Komponenten'],
      ['REGISTER', 'Projekte · Versionen · Status · Beiträge'],
    ],
    principlesLabel: '9 PRINZIPIEN',
    principles: [
      'Die Frage kommt zuerst.',
      'Neugier zum Beginnen, Sorgfalt zum Veröffentlichen.',
      'Offen im Thema. Präzise in der Aussage.',
      'Jede Aussage zeigt ihre Grundlage.',
      'Fehlende Daten beweisen nicht die Abwesenheit eines Phänomens.',
      'Widerspruch wird gezeigt, nicht still aufgelöst.',
      'Jedes Instrument benennt seine Grenzen.',
      'Verbinden, nicht vereinnahmen.',
      'Festhalten, was gelernt wurde – auch was nicht funktioniert hat.',
    ],
    longLabel: 'OFFENE FRAGE',
    longQuestion: 'Wie können computergestützte Instrumente helfen, Wissen anders zu sehen und zugleich die Entscheidungen des Instruments sichtbar zu halten?',
    framework: 'FRAMEWORK ÖFFNEN',
  },
  en: {
    kicker: 'DOTZERO / FOUNDATION',
    title: 'PERSONAL LAB FOR EXPLORING KNOWLEDGE',
    tagline: 'Instruments for inquiry.',
    intro: 'DOTZERO begins with curiosity and builds atlases, studies and tools to reveal connections, test ideas and compare perspectives.',
    subject: 'Subjects can change completely. Method, rigor and evidence remain constant.',
    back: 'BACK TO INDEX',
    principleLabel: 'PRINCIPLE / DOT · ZERO · OPEN DIRECTION',
    principleTitle: 'DOT. ZERO. OPEN DIRECTION.',
    principleBody: 'DOTZERO starts from a point, opens a field and looks for a direction. The visual grammar reflects the research method without replacing it.',
    principleItems: [
      ['DOT.', 'ORIGIN', 'The point is the beginning: a question, an observation, a node from which inquiry starts.'],
      ['ZERO.', 'FIELD', 'Zero is the space of inquiry: a bounded context in which elements and relations become legible.'],
      ['OPEN DIRECTION.', 'METHOD', 'The direction remains open: method structures inquiry without closing it into a final answer.'],
    ],
    problemLabel: 'THE PROBLEM',
    problemTitle: 'Information is abundant. Understanding is not.',
    problemBody: 'DOTZERO works with relations: time, space, sources, disagreement and the new questions that appear when information is rearranged.',
    compare: [
      ['RETRIEVE', 'question → list'],
      ['SYNTHESISE', 'question → answer'],
      ['EXPLORE', 'entry → relation → question'],
    ],
    methodLabel: 'METHOD',
    methodTitle: 'Question → Research → Model → Represent → Explore → Record',
    methodBody: 'The process is iterative: representation can expose limits in the model, and exploration can reveal gaps in the research.',
    methodSteps: ['Question', 'Research', 'Model', 'Represent', 'Explore', 'Record'],
    outputsLabel: 'FORMS',
    outputsTitle: 'Three forms. Any subject.',
    outputs: [
      ['ATLAS', 'Object: a field.', 'A structured environment for exploring elements, relations, places, time and sources.'],
      ['STUDY', 'Object: a question.', 'An interactive or computational model that makes an idea observable, comparable or manipulable.'],
      ['TOOL', 'Object: a method.', 'A reusable instrument for comparing, mapping, searching, simulating or connecting.'],
    ],
    evidenceLabel: 'EVIDENCE',
    evidenceTitle: 'Every claim shows its ground.',
    evidenceBody: 'Sources, attribution, coverage, confidence and disagreement remain visible when they affect interpretation.',
    evidenceAxes: [
      ['ORIGIN', 'Documented · Derived · Interpreted · Suggested'],
      ['CONFIDENCE', 'Established · Probable · Disputed · Unknown'],
    ],
    scopeLabel: 'SCOPE',
    scopeTitle: 'Open in subject. Precise in claim.',
    scopeBody: 'Art, history, science, language, nature, technology or systems: curiosity opens the research; rigor determines what is published.',
    architectureLabel: 'ARCHITECTURE',
    architectureTitle: 'Foundation → Framework → Register',
    architectureBody: 'The Foundation defines the method. The Framework provides shared structures. The Register makes projects and work status visible.',
    architectureItems: [
      ['FOUNDATION', 'purpose · method · standards · responsibility'],
      ['FRAMEWORK', 'Atlas Engine · evidence · design system · components'],
      ['REGISTER', 'projects · versions · status · contributions'],
    ],
    principlesLabel: '9 PRINCIPLES',
    principles: [
      'The question comes first.',
      'Curiosity to begin, rigor to publish.',
      'Open in subject. Precise in claim.',
      'Every claim shows its ground.',
      'Missing data is not proof of absence.',
      'Disagreement is shown, not silently resolved.',
      'Every instrument declares its limits.',
      'Connect, don’t capture.',
      'Record what was learned, including what failed.',
    ],
    longLabel: 'OPEN QUESTION',
    longQuestion: 'How can computational instruments help us see knowledge differently while keeping the choices made by the instrument visible?',
    framework: 'OPEN FRAMEWORK',
  },
};

const Label: React.FC<{ children: React.ReactNode; kind?: 'dot' | 'system' | 'field' }> = ({ children, kind = 'dot' }) => (
  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] dz-text-muted">
    <SyntaxLabel kind={kind}>{children}</SyntaxLabel>
  </div>
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
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Label kind="field">{t.principleLabel}</Label>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="dz-h2 text-4xl sm:text-6xl">{t.principleTitle}</h2>
              <p className="dz-body mt-6 max-w-xl text-lg">{t.principleBody}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-px border dz-rule bg-[var(--line-soft)] md:grid-cols-3">
                {t.principleItems.map(([title, meta, body], index) => {
                  const icon = index === 0 ? <DotMarker size="lg" /> : index === 1 ? <FieldGlyph size={24} /> : <SystemGlyph size={46} />;
                  const inner = (
                    <>
                      {icon}
                      <h3 className="dz-h3 mt-8 text-3xl">{title}</h3>
                      <div className="mt-3 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--accent)]">{meta}</div>
                      <p className="dz-body mt-5">{body}</p>
                    </>
                  );
                  return index === 1
                    ? <ZeroField key={title} className="bg-[var(--bg)] p-6 sm:p-7">{inner}</ZeroField>
                    : <div key={title} className="bg-[var(--bg)] p-6 sm:p-7">{inner}</div>;
                })}
              </div>
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
              {t.compare.map(([title, body], i) => {
                const Icon = [Search, Braces, Compass][i];
                return (
                  <div key={title} className="min-h-44 bg-[var(--bg)] p-5">
                    <Icon className="h-5 w-5" />
                    <div className="mt-12 font-mono text-[9px] font-bold tracking-[0.15em]">{title}</div>
                    <div className="mt-2 font-mono text-[9px] dz-text-muted">{body}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Label kind="system">{t.methodLabel}</Label>
          <h2 className="dz-h2 mt-6 max-w-6xl text-4xl sm:text-6xl">{t.methodTitle}</h2>
          <p className="dz-body mt-7 max-w-3xl text-lg">{t.methodBody}</p>
          <div className="mt-12 grid gap-px border dz-border bg-[var(--line)] sm:grid-cols-3 lg:grid-cols-6">
            {t.methodSteps.map((item, i) => (
              <div key={item} className="min-h-32 bg-[var(--bg)] p-5">
                <span className="flex items-center gap-2 font-mono text-[9px] dz-text-muted"><SystemGlyph size={14} />0{i + 1}</span>
                <div className="mt-10 font-display text-xl font-semibold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Label kind="field">{t.outputsLabel}</Label>
          <h2 className="dz-h2 mt-6 text-4xl sm:text-6xl">{t.outputsTitle}</h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {t.outputs.map(([name, object, body], i) => (
              <ZeroField key={name} className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-mono text-[9px] dz-text-muted"><FieldGlyph size={10} />0{i + 1}</span>
                  <Layers3 className="h-4 w-4" />
                </div>
                <h3 className="dz-h3 mt-12 text-4xl">{name}</h3>
                <div className="mt-4 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--accent)]">{object}</div>
                <p className="dz-body mt-6">{body}</p>
              </ZeroField>
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
                  <div className="flex items-center gap-2 font-mono text-[9px] font-bold tracking-[0.15em]"><DotMarker size="xs" />{label}</div>
                  <div className="mt-8 font-display text-2xl font-semibold leading-tight">{values}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><Label kind="field">{t.scopeLabel}</Label></div>
          <div className="lg:col-span-8">
            <h2 className="dz-h2 text-4xl sm:text-6xl">{t.scopeTitle}</h2>
            <p className="dz-body mt-7 max-w-3xl text-lg">{t.scopeBody}</p>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Label kind="system">{t.architectureLabel}</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="dz-h2 text-4xl sm:text-6xl">{t.architectureTitle}</h2>
              <p className="dz-body mt-7 max-w-2xl text-lg">{t.architectureBody}</p>
            </div>
            <div className="lg:col-span-6">
              {t.architectureItems.map(([name, body], i) => (
                <div key={name} className="grid grid-cols-[2.5rem_1fr] border-t dz-border py-5 first:border-t-2">
                  <span className="flex items-center gap-2 font-mono text-[9px] dz-text-muted"><SystemGlyph size={14} />0{i + 1}</span>
                  <div>
                    <div className="font-display text-2xl font-semibold">{name}</div>
                    <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.13em] dz-text-muted">{body}</div>
                  </div>
                </div>
              ))}
              <a href="#atlas-engine" className="dz-action-link mt-8 border dz-border px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-[var(--text)] hover:text-[var(--bg)]">
                {t.framework} <SystemGlyph size={20} />
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
            <a href="#atlas-engine" className="dz-action-link border dz-border px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-[var(--text)] hover:text-[var(--bg)]">
              {t.framework} <SystemGlyph size={20} />
            </a>
            <a href="#index" className="dz-action-link border dz-border px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-[var(--text)] hover:text-[var(--bg)]">
              {t.back} <SystemGlyph size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

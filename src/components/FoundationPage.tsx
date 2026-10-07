import React from 'react';
import { ArrowLeft, ArrowRight, Braces, Compass, GitBranch, Layers3, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DotzeroMark } from './DotzeroMark';
import { DotzeroLogotype } from './DotzeroLogotype';
import { DotMarker, FieldGlyph, SyntaxLabel, SystemGlyph, ZeroField } from './GraphicSyntax';

const COPY = {
  it: {
    kicker: 'DOTZERO / FOUNDATION',
    title: 'LABORATORIO PERSONALE PER ESPLORARE LA CONOSCENZA',
    tagline: 'Strumenti per indagare.',
    intro: 'DOTZERO nasce dalla curiosità individuale e costruisce Atlas, Study e Tool per vedere connessioni, testare idee, confrontare prospettive e verificare su cosa poggiano le affermazioni.',
    subject: 'Il tema può cambiare completamente. Restano costanti il metodo, l’evidenza e la responsabilità.',
    identityLabel: 'IDENTITÀ / DOT · ZERO · OPEN DIRECTION',
    identityBody: 'Un segno geometrico costruito da punto, zero, diagonale e triangolo. Può essere letto come DOT / ZERO / OPEN DIRECTION, richiamare </> come costruzione e suggerire una domanda o una figura umana. Le letture convivono.',
    construction: 'COSTRUZIONE',
    scaleTest: 'TEST DI SCALA',
    logotypeComplement: 'LOGOTIPO / IDENTITÀ COMPLEMENTARE',
    noLockup: '.DOTZERO E SEGNO NON FORMANO UN LOCKUP',
    syntaxLabel: 'SINTASSI GRAFICA / . · 0 · </>',
    syntaxCards: [
      ['CONOSCENZA.', 'DOT / MARCATORE DI CONTENUTO', 'Origine, domanda, nodo, evidenza e punto di attenzione. Il punto accompagna sezioni, affermazioni, fonti e stati.'],
      ['CAMPO.', 'ZERO / CONTENITORE', 'Uno spazio delimitato di ricerca: progetto, modello, dataset o contesto. Lo zero diventa campo e struttura.'],
      ['METODO.', '</> / MARCATORE DI SISTEMA', 'Costruzione, azione, transizione e apertura. Appartiene a metodi, strumenti, navigazione e inviti a esplorare.'],
    ],
    syntaxNotes: [
      'Il punto resta vicino a conoscenza ed evidenza.',
      'Lo zero definisce il campo in cui avviene l’indagine.',
      '</> indica metodo, azione e movimento oltre il campo.',
    ],
    problemLabel: 'IL PROBLEMA',
    problemTitle: 'L’informazione è abbondante. La comprensione no.',
    problemBody: 'Molti sistemi digitali privilegiano il recupero o la sintesi. DOTZERO lavora sulle relazioni: tempo, spazio, evidenza, disaccordi, assunzioni e nuove domande che emergono quando l’informazione viene riorganizzata.',
    problemModes: [['RECUPERA', 'domanda → elenco'], ['SINTETIZZA', 'domanda → risposta'], ['ESPLORA', 'ingresso → relazione → domanda']],
    methodLabel: 'METODO',
    methodTitle: 'Domanda → Ricerca → Modello → Rappresenta → Esplora → Registra',
    methodBody: 'Il processo è iterativo. La rappresentazione può mostrare difetti del modello; l’esplorazione può rivelare lacune nella ricerca. Il risultato è un record documentato, non una risposta definitiva.',
    methodSteps: ['Domanda', 'Ricerca', 'Modello', 'Rappresenta', 'Esplora', 'Registra'],
    outputsLabel: 'FORME',
    outputsTitle: 'Tre forme. Qualunque soggetto.',
    outputs: [
      ['ATLAS', 'Il suo oggetto è un campo.', 'Un ambiente strutturato per esplorare cosa esiste, cosa si connette, cosa cambia, dove, quando e secondo quali fonti.'],
      ['STUDY', 'Il suo oggetto è una domanda.', 'Un modello interattivo o computazionale che rende un’idea, un’ipotesi o un problema osservabile e confrontabile.'],
      ['TOOL', 'Il suo oggetto è un metodo.', 'Uno strumento riutilizzabile per l’indagine: confronto, mappa, timeline, rete, ricerca, simulazione e altri metodi.'],
    ],
    evidenceLabel: 'EVIDENZA',
    evidenceTitle: 'Ogni affermazione mostra il proprio fondamento.',
    evidenceBody: 'Le interfacce non sono neutrali. Una linea implica una relazione, un cluster una somiglianza, una posizione una rilevanza. DOTZERO rende visibili origine, grado di certezza, copertura e disaccordi quando contano per l’interpretazione.',
    evidenceAxes: [['ORIGINE', 'Documentato · Derivato · Interpretato · Proposto'], ['CERTEZZA', 'Consolidato · Probabile · Contestato · Ignoto']],
    scopeLabel: 'AMBITO',
    scopeTitle: 'Aperto nel soggetto. Preciso nelle affermazioni.',
    scopeBody: 'DOTZERO può lavorare su arte, storia, scienza, linguaggio, natura, tecnologia o altri domini. La curiosità basta per iniziare; il rigore determina cosa viene pubblicato.',
    architectureLabel: 'ARCHITETTURA',
    architectureTitle: 'Foundation → Framework → Register',
    architectureBody: 'La Foundation definisce scopo, metodo, standard e responsabilità. Il Framework contiene Atlas Engine, schema dell’evidenza, design system e componenti condivisi. Il Register raccoglie progetti, versioni e stato.',
    architectureItems: [['FOUNDATION', 'scopo · metodo · standard · responsabilità'], ['FRAMEWORK', 'Atlas Engine · evidenza · design system · componenti'], ['REGISTER', 'progetti · versioni · stato']],
    principlesLabel: '9 PRINCIPI',
    principles: [
      'La domanda viene prima.',
      'Curiosità per iniziare, rigore per pubblicare.',
      'Aperto nel soggetto. Preciso nelle affermazioni.',
      'Ogni affermazione mostra il proprio fondamento.',
      'Un dato mancante non prova un’assenza.',
      'Il disaccordo viene mostrato, non risolto in silenzio.',
      'Ogni strumento dichiara i propri limiti.',
      'Connettere, non catturare.',
      'Registrare ciò che si è imparato, compreso ciò che non ha funzionato.',
    ],
    longLabel: 'DOMANDA APERTA',
    longQuestion: 'Come possono gli strumenti computazionali aiutarci a vedere la conoscenza in modo diverso, rendendo visibili anche le scelte dello strumento?',
    framework: 'APRI IL FRAMEWORK',
    back: 'TORNA ALL’INDICE',
  },
  de: {
    kicker: 'DOTZERO / FOUNDATION',
    title: 'PERSÖNLICHES LABOR ZUR ERKUNDUNG VON WISSEN',
    tagline: 'Instrumente zum Untersuchen.',
    intro: 'DOTZERO beginnt mit persönlicher Neugier und entwickelt Atlanten, Studies und Tools, um Verbindungen sichtbar zu machen, Ideen zu prüfen, Perspektiven zu vergleichen und die Grundlage von Aussagen nachvollziehbar zu machen.',
    subject: 'Das Thema kann vollständig wechseln. Konstant bleiben Methode, Evidenz und Verantwortung.',
    identityLabel: 'IDENTITÄT / DOT · ZERO · OPEN DIRECTION',
    identityBody: 'Ein geometrisches Zeichen aus Punkt, Null, Diagonale und Dreieck. Es lässt sich als DOT / ZERO / OPEN DIRECTION lesen, erinnert an </> als Konstruktion und kann zugleich eine Frage oder eine menschliche Geste andeuten. Diese Lesarten bestehen nebeneinander.',
    construction: 'KONSTRUKTION',
    scaleTest: 'SKALENTEST',
    logotypeComplement: 'LOGOTYPE / KOMPLEMENTÄRE IDENTITÄT',
    noLockup: '.DOTZERO UND ZEICHEN BILDEN KEIN LOCKUP',
    syntaxLabel: 'GRAFISCHE SYNTAX / . · 0 · </>',
    syntaxCards: [
      ['WISSEN.', 'DOT / INHALTSMARKER', 'Ursprung, Frage, Knoten, Evidenz und Fokus. Der Punkt begleitet Abschnitte, Aussagen, Quellen und Zustände.'],
      ['FELD.', 'ZERO / CONTAINER', 'Ein abgegrenzter Forschungsraum: Projekt, Modell, Datensatz oder Kontext. Die Null wird zu Feld und Struktur.'],
      ['METHODE.', '</> / SYSTEMMARKER', 'Konstruktion, Handlung, Übergang und Öffnung. Das Zeichen gehört zu Methoden, Werkzeugen, Navigation und Einladungen zur Exploration.'],
    ],
    syntaxNotes: [
      'Der Punkt bleibt bei Wissen und Evidenz.',
      'Die Null definiert das Feld, in dem Untersuchung stattfindet.',
      '</> markiert Methode, Handlung und Bewegung über das Feld hinaus.',
    ],
    problemLabel: 'DAS PROBLEM',
    problemTitle: 'Information ist reichlich vorhanden. Verstehen nicht.',
    problemBody: 'Viele digitale Systeme priorisieren Abruf oder Synthese. DOTZERO arbeitet mit Beziehungen: Zeit, Raum, Evidenz, Widersprüchen, Annahmen und neuen Fragen, die durch eine andere Ordnung von Information sichtbar werden.',
    problemModes: [['ABRUF', 'Frage → Liste'], ['SYNTHESE', 'Frage → Antwort'], ['EXPLORATION', 'Einstieg → Relation → Frage']],
    methodLabel: 'METHODE',
    methodTitle: 'Frage → Recherche → Modell → Darstellen → Erkunden → Dokumentieren',
    methodBody: 'Der Prozess ist iterativ. Darstellung kann Schwächen eines Modells zeigen; Exploration kann Forschungslücken sichtbar machen. Das Ergebnis ist eine dokumentierte Aufzeichnung, keine endgültige Antwort.',
    methodSteps: ['Frage', 'Recherche', 'Modell', 'Darstellen', 'Erkunden', 'Dokumentieren'],
    outputsLabel: 'FORMEN',
    outputsTitle: 'Drei Formen. Jedes Thema.',
    outputs: [
      ['ATLAS', 'Sein Gegenstand ist ein Feld.', 'Eine strukturierte Umgebung, um zu erkunden, was existiert, was verbunden ist, was sich verändert, wo, wann und auf Grundlage welcher Quellen.'],
      ['STUDY', 'Sein Gegenstand ist eine Frage.', 'Ein interaktives oder computergestütztes Modell, das eine Idee, Hypothese oder ein Problem beobachtbar und vergleichbar macht.'],
      ['TOOL', 'Sein Gegenstand ist eine Methode.', 'Ein wiederverwendbares Instrument für Untersuchung: Vergleich, Karte, Zeitleiste, Netzwerk, Suche, Simulation und weitere Methoden.'],
    ],
    evidenceLabel: 'EVIDENZ',
    evidenceTitle: 'Jede Aussage zeigt ihre Grundlage.',
    evidenceBody: 'Interfaces sind nicht neutral. Eine Linie impliziert Beziehung, ein Cluster Ähnlichkeit, eine Position Relevanz. DOTZERO macht Herkunft, Sicherheit, Abdeckung und Widerspruch sichtbar, wenn sie für die Interpretation wichtig sind.',
    evidenceAxes: [['HERKUNFT', 'Dokumentiert · Abgeleitet · Interpretiert · Vorgeschlagen'], ['SICHERHEIT', 'Gesichert · Wahrscheinlich · Umstritten · Unbekannt']],
    scopeLabel: 'RAHMEN',
    scopeTitle: 'Offen im Thema. Präzise in der Aussage.',
    scopeBody: 'DOTZERO kann Kunst, Geschichte, Wissenschaft, Sprache, Natur, Technologie oder andere Felder untersuchen. Neugier genügt zum Beginn; Sorgfalt bestimmt, was veröffentlicht wird.',
    architectureLabel: 'ARCHITEKTUR',
    architectureTitle: 'Foundation → Framework → Register',
    architectureBody: 'Die Foundation definiert Zweck, Methode, Standards und Verantwortung. Das Framework umfasst Atlas Engine, Evidenzschema, Designsystem und gemeinsame Komponenten. Das Register führt Projekte, Versionen und Status.',
    architectureItems: [['FOUNDATION', 'Zweck · Methode · Standards · Verantwortung'], ['FRAMEWORK', 'Atlas Engine · Evidenz · Designsystem · Komponenten'], ['REGISTER', 'Projekte · Versionen · Status']],
    principlesLabel: '9 PRINZIPIEN',
    principles: [
      'Die Frage kommt zuerst.',
      'Neugier zum Beginnen, Sorgfalt zum Veröffentlichen.',
      'Offen im Thema. Präzise in der Aussage.',
      'Jede Aussage zeigt ihre Grundlage.',
      'Fehlende Daten beweisen keine Abwesenheit.',
      'Widerspruch wird gezeigt, nicht stillschweigend aufgelöst.',
      'Jedes Instrument legt seine Grenzen offen.',
      'Verbinden, nicht vereinnahmen.',
      'Festhalten, was gelernt wurde — auch was nicht funktioniert hat.',
    ],
    longLabel: 'OFFENE FRAGE',
    longQuestion: 'Wie können computergestützte Instrumente Wissen anders sichtbar machen und zugleich offenlegen, welche Entscheidungen das Instrument selbst trifft?',
    framework: 'FRAMEWORK ÖFFNEN',
    back: 'ZURÜCK ZUM INDEX',
  },
  en: {
    kicker: 'DOTZERO / FOUNDATION',
    title: 'PERSONAL RESEARCH LAB FOR KNOWLEDGE EXPLORATION',
    tagline: 'Instruments for inquiry.',
    intro: 'DOTZERO begins with individual curiosity and builds Atlases, Studies and Tools to reveal connections, test ideas, compare perspectives and understand what claims rest on.',
    subject: 'The subject can change completely. Method, evidence and responsibility remain constant.',
    identityLabel: 'IDENTITY / DOT · ZERO · OPEN DIRECTION',
    identityBody: 'A geometric sign built from point, zero, diagonal and triangle. It reads as DOT / ZERO / OPEN DIRECTION, echoes </> as construction and can also suggest a question or a human gesture. These readings coexist.',
    construction: 'CONSTRUCTION',
    scaleTest: 'SCALE TEST',
    logotypeComplement: 'LOGOTYPE / COMPLEMENTARY IDENTITY',
    noLockup: '.DOTZERO AND SIGN NEVER FORM A LOCKUP',
    syntaxLabel: 'GRAPHIC SYNTAX / . · 0 · </>',
    syntaxCards: [
      ['KNOWLEDGE.', 'DOT / CONTENT MARKER', 'Origin, question, node, evidence and focus. The dot accompanies sections, claims, sources and states.'],
      ['FIELD.', 'ZERO / CONTAINER', 'A bounded research space: project, model, dataset or context. The zero becomes field and structure.'],
      ['METHOD.', '</> / SYSTEM MARKER', 'Construction, action, transition and opening. It belongs to methods, tools, navigation and invitations to explore.'],
    ],
    syntaxNotes: [
      'The dot stays with knowledge and evidence.',
      'The zero defines the field in which inquiry happens.',
      '</> marks method, action and movement beyond the field.',
    ],
    problemLabel: 'THE PROBLEM',
    problemTitle: 'Information is abundant. Understanding is not.',
    problemBody: 'Many digital systems prioritise retrieval or synthesis. DOTZERO works through relations: time, space, evidence, disagreement, assumptions and new questions that appear when information is reorganised.',
    problemModes: [['RETRIEVE', 'question → list'], ['SYNTHESISE', 'question → answer'], ['EXPLORE', 'entry → relation → question']],
    methodLabel: 'METHOD',
    methodTitle: 'Question → Research → Model → Represent → Explore → Record',
    methodBody: 'The process is iterative. Representation may expose weaknesses in a model; exploration may reveal gaps in research. The result is a documented record, not a final answer.',
    methodSteps: ['Question', 'Research', 'Model', 'Represent', 'Explore', 'Record'],
    outputsLabel: 'FORMS',
    outputsTitle: 'Three forms. Any subject.',
    outputs: [
      ['ATLAS', 'Its object is a field.', 'A structured environment for exploring what exists, what connects, what changes, where, when and according to which sources.'],
      ['STUDY', 'Its object is a question.', 'An interactive or computational model that makes an idea, hypothesis or problem observable and comparable.'],
      ['TOOL', 'Its object is a method.', 'A reusable instrument for inquiry: compare, map, timeline, network, search, simulation and other methods.'],
    ],
    evidenceLabel: 'EVIDENCE',
    evidenceTitle: 'Every claim shows its ground.',
    evidenceBody: 'Interfaces are not neutral. A line implies a relation, a cluster similarity, a position relevance. DOTZERO makes origin, confidence, coverage and disagreement visible when they matter to interpretation.',
    evidenceAxes: [['ORIGIN', 'Documented · Derived · Interpreted · Suggested'], ['CONFIDENCE', 'Established · Probable · Disputed · Unknown']],
    scopeLabel: 'SCOPE',
    scopeTitle: 'Open in subject. Precise in claim.',
    scopeBody: 'DOTZERO can work across art, history, science, language, nature, technology or other domains. Curiosity is enough to begin; rigor determines what gets published.',
    architectureLabel: 'ARCHITECTURE',
    architectureTitle: 'Foundation → Framework → Register',
    architectureBody: 'The Foundation defines purpose, method, standards and responsibility. The Framework contains the Atlas Engine, evidence schema, design system and shared components. The Register records projects, versions and status.',
    architectureItems: [['FOUNDATION', 'purpose · method · standards · responsibility'], ['FRAMEWORK', 'Atlas Engine · evidence · design system · components'], ['REGISTER', 'projects · versions · status']],
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
    longQuestion: 'How can computational instruments help people see knowledge differently while keeping the instrument’s own choices visible?',
    framework: 'OPEN FRAMEWORK',
    back: 'BACK TO INDEX',
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
          <Label kind="field">{t.identityLabel}</Label>
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="dz-h2 text-4xl sm:text-6xl">DOT. ZERO. OPEN DIRECTION.</h2>
              <p className="dz-body mt-6 max-w-xl">{t.identityBody}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="dz-identity-board">
                <div className="dz-identity-cell dz-identity-hero"><DotzeroMark size={150} /></div>
                <div className="dz-identity-cell">
                  <div className="dz-meta">{t.construction}</div>
                  <div className="mt-10 flex items-center gap-5"><DotzeroMark size={72} /><div className="font-mono text-[9px] uppercase tracking-[.14em] dz-text-muted">DOT / ORIGIN<br/>ZERO / FIELD<br/>SLASH / OPEN DIRECTION</div></div>
                </div>
                <div className="dz-identity-cell">
                  <div className="dz-meta">{t.scaleTest}</div>
                  <div className="dz-identity-scale mt-10">{[16,24,32,48].map(size => <figure key={size}><DotzeroMark size={size}/><figcaption className="dz-meta">{size}px</figcaption></figure>)}</div>
                </div>
                <div className="dz-identity-cell">
                  <div className="dz-meta">{t.logotypeComplement}</div>
                  <div className="mt-10 bg-white p-4 text-black"><DotzeroLogotype className="w-full max-w-[250px]" /></div>
                  <div className="dz-meta mt-6">{t.noLockup}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Label kind="system">{t.syntaxLabel}</Label>
          <div className="mt-8 grid gap-px border dz-rule bg-[var(--line-soft)] lg:grid-cols-3">
            <div className="bg-[var(--bg)] p-6 sm:p-8">
              <DotMarker size="lg" />
              <h3 className="dz-h3 mt-8 text-3xl">{t.syntaxCards[0][0]}</h3>
              <div className="mt-3 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--accent)]">{t.syntaxCards[0][1]}</div>
              <p className="dz-body mt-5">{t.syntaxCards[0][2]}</p>
            </div>
            <ZeroField className="bg-[var(--bg)] p-6 sm:p-8">
              <FieldGlyph size={24} />
              <h3 className="dz-h3 mt-8 text-3xl">{t.syntaxCards[1][0]}</h3>
              <div className="mt-3 font-mono text-[9px] uppercase tracking-[.14em]">{t.syntaxCards[1][1]}</div>
              <p className="dz-body mt-5">{t.syntaxCards[1][2]}</p>
            </ZeroField>
            <div className="bg-[var(--bg)] p-6 sm:p-8">
              <SystemGlyph size={46} />
              <h3 className="dz-h3 mt-8 text-3xl">{t.syntaxCards[2][0]}</h3>
              <div className="mt-3 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--accent)]">{t.syntaxCards[2][1]}</div>
              <p className="dz-body mt-5">{t.syntaxCards[2][2]}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 font-mono text-[8px] uppercase leading-5 tracking-[.12em] dz-text-muted md:grid-cols-3">
            <div><strong className="text-[var(--text)]">.</strong> {t.syntaxNotes[0]}</div>
            <div><strong className="text-[var(--text)]">0</strong> {t.syntaxNotes[1]}</div>
            <div><strong className="text-[var(--text)]">&lt;/&gt;</strong> {t.syntaxNotes[2]}</div>
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
              {t.problemModes.map(([title, body], i) => {
                const Icon = [Search, Sparkles, Compass][i];
                return (
                <div key={String(title)} className="min-h-44 bg-[var(--bg)] p-5">
                  {React.createElement(Icon as React.ElementType, { className: 'h-5 w-5' })}
                  <div className="mt-12 font-mono text-[9px] font-bold tracking-[0.15em]">{String(title)}</div>
                  <div className="mt-2 font-mono text-[9px] dz-text-muted">{String(body)}</div>
                </div>
              )})}
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

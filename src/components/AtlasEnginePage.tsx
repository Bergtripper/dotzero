import React from 'react';
import { ArrowLeft, ArrowRight, Circle, GitBranch, Layers3, Map, Network, Search, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DotMarker, FieldGlyph, SyntaxLabel, SystemGlyph, ZeroField } from './GraphicSyntax';

const COPY = {
  it: {
    kicker: 'DOTZERO / FRAMEWORK / ATLAS ENGINE',
    title: 'UN FRAMEWORK PER CONOSCENZA CONNESSA',
    intro:
      'L’Atlas Engine è un framework condiviso per i progetti DOTZERO che beneficiano di conoscenza relazionale strutturata: entità, relazioni, fonti e dimensioni spaziali e temporali. Non definisce il contenuto di un Atlas: definisce il modo in cui quel contenuto può essere strutturato, verificato ed esplorato.',
    back: 'BACK TO INDEX',
    why: 'WHY',
    whyTitle: 'Da pagine isolate a sistemi esplorabili.',
    whyBody:
      'Un archivio tradizionale funziona bene quando sappiamo già cosa cercare. Un Atlas DOTZERO parte invece dalle relazioni: permette di entrare da un nodo, cambiare scala, seguire connessioni, confrontare contesti e formulare nuove domande.',
    archive: 'ARCHIVE',
    archiveFlow: ['Search', 'Result', 'Object', 'Metadata'],
    atlas: 'ATLAS',
    atlasFlow: ['Entry point', 'Entity', 'Relation', 'Context', 'Discovery'],
    principles: 'CORE PRINCIPLES',
    principlesIntro: 'Cinque principi regolano il motore indipendentemente dal tema del singolo Atlas.',
    principleItems: [
      ['01', 'Relations before isolation', 'Un elemento acquista significato anche attraverso ciò a cui è collegato.'],
      ['02', 'One structure, many views', 'La stessa informazione può alimentare profili, mappe, timeline, network e confronti.'],
      ['03', 'Evidence by design', 'Fonti, provenienza e grado di certezza fanno parte della struttura, non sono note accessorie.'],
      ['04', 'Core + domain layer', 'Il framework resta comune; ogni Atlas definisce il proprio vocabolario, le proprie regole e le proprie viste.'],
      ['05', 'Exploration before conclusion', 'Il sistema è progettato per far emergere pattern e domande, non solo per restituire risultati.'],
    ],
    framework: 'FRAMEWORK',
    frameworkTitle: 'Un nucleo stabile, livelli specifici.',
    frameworkBody:
      'Il motore separa ciò che è universale da ciò che appartiene a un dominio. Il core gestisce identità, relazioni, tempo, spazio, fonti e media. Ogni Atlas aggiunge sopra questo nucleo il proprio modello culturale.',
    layers: [
      ['DOMAIN LAYER', 'Vocabolario, tipi di entità, relazioni specifiche, regole editoriali.'],
      ['ATLAS CORE', 'Entità, relazioni, tempo, spazio, fonti, evidenza, media.'],
      ['VIEW LAYER', 'Profile, map, timeline, network, compare, routes, explore.'],
    ],
    flow: 'KNOWLEDGE FLOW',
    flowTitle: 'Una volta strutturato, un fatto può vivere in molte interfacce.',
    fact: 'ENTITY A → TYPED RELATION → ENTITY B',
    flowItems: ['Profile', 'Network', 'Timeline', 'Map', 'Compare', 'Explore'],
    boundary: 'SYSTEM BOUNDARY',
    boundaryTitle: 'Il motore non decide il significato del singolo Atlas.',
    boundaryBody:
      'Avant-Garde, Alpine Graphic, Systems e i futuri Atlas possono avere linguaggi, estetiche e strutture differenti. Il framework garantisce interoperabilità e coerenza, senza appiattire i progetti in un unico template.',
    evidence: 'EVIDENCE',
    evidenceTitle: 'Le connessioni devono poter essere spiegate.',
    evidenceBody:
      'Una visualizzazione può rendere una relazione persuasiva semplicemente perché la mostra. Per questo DOTZERO tratta fonti, attribuzioni e incertezza come dati di prima classe. Dove possibile, il sistema deve poter rispondere a una domanda semplice: perché questa connessione è qui?',
    projectSpecific: 'PROJECT-SPECIFIC DOCUMENTATION',
    projectSpecificBody:
      'Le specifiche operative — tipi di entità, relation vocabulary, media model, regole delle viste e convenzioni editoriali — saranno documentate all’interno di ciascun Atlas. Questa pagina resta intenzionalmente generale: descrive il framework condiviso.',
    close: 'DOTZERO ATLAS ENGINE',
    closeTitle: 'A shared framework for relational inquiry.',
  },
  de: {
    kicker: 'DOTZERO / FRAMEWORK / ATLAS ENGINE',
    title: 'EIN FRAMEWORK FÜR VERNETZTES WISSEN',
    intro:
      'Die Atlas Engine ist ein gemeinsames Framework für DOTZERO-Projekte, die von strukturiertem relationalem Wissen profitieren: Entitäten, Beziehungen, Quellen sowie räumliche und zeitliche Dimensionen. Sie definiert nicht den Inhalt eines Atlas, sondern wie dieser Inhalt organisiert, überprüft und exploriert werden kann.',
    back: 'BACK TO INDEX',
    why: 'WHY',
    whyTitle: 'Von isolierten Seiten zu explorierbaren Systemen.',
    whyBody:
      'Ein klassisches Archiv funktioniert gut, wenn bereits klar ist, wonach gesucht wird. Ein DOTZERO Atlas beginnt dagegen bei Beziehungen: Man kann über einen Knoten einsteigen, Maßstäbe wechseln, Verbindungen verfolgen, Kontexte vergleichen und neue Fragen entwickeln.',
    archive: 'ARCHIVE',
    archiveFlow: ['Search', 'Result', 'Object', 'Metadata'],
    atlas: 'ATLAS',
    atlasFlow: ['Entry point', 'Entity', 'Relation', 'Context', 'Discovery'],
    principles: 'CORE PRINCIPLES',
    principlesIntro: 'Fünf Prinzipien steuern die Engine unabhängig vom Thema des jeweiligen Atlas.',
    principleItems: [
      ['01', 'Relations before isolation', 'Ein Element gewinnt Bedeutung auch durch das, womit es verbunden ist.'],
      ['02', 'One structure, many views', 'Dieselbe Information kann Profile, Karten, Timelines, Netzwerke und Vergleiche speisen.'],
      ['03', 'Evidence by design', 'Quellen, Provenienz und Unsicherheit gehören zur Struktur und sind keine nachträglichen Fußnoten.'],
      ['04', 'Core + domain layer', 'Das Framework bleibt gemeinsam; jeder Atlas definiert sein eigenes Vokabular, Regeln und Ansichten.'],
      ['05', 'Exploration before conclusion', 'Das System soll Muster und Fragen sichtbar machen, nicht nur Ergebnisse ausgeben.'],
    ],
    framework: 'FRAMEWORK',
    frameworkTitle: 'Ein stabiler Kern, spezifische Ebenen.',
    frameworkBody:
      'Die Engine trennt Universelles von Domänenspezifischem. Der Core verwaltet Identitäten, Beziehungen, Zeit, Raum, Quellen und Medien. Jeder Atlas ergänzt darauf sein eigenes kulturelles Modell.',
    layers: [
      ['DOMAIN LAYER', 'Vokabular, Entitätstypen, spezifische Relationen, redaktionelle Regeln.'],
      ['ATLAS CORE', 'Entitäten, Relationen, Zeit, Raum, Quellen, Evidenz, Medien.'],
      ['VIEW LAYER', 'Profile, map, timeline, network, compare, routes, explore.'],
    ],
    flow: 'KNOWLEDGE FLOW',
    flowTitle: 'Einmal strukturiert, kann ein Fakt in vielen Interfaces leben.',
    fact: 'ENTITY A → TYPED RELATION → ENTITY B',
    flowItems: ['Profile', 'Network', 'Timeline', 'Map', 'Compare', 'Explore'],
    boundary: 'SYSTEM BOUNDARY',
    boundaryTitle: 'Die Engine entscheidet nicht über die Bedeutung eines einzelnen Atlas.',
    boundaryBody:
      'Avant-Garde, Alpine Graphic, Systems und zukünftige Atlanten können unterschiedliche Sprachen, Ästhetiken und Strukturen haben. Das Framework schafft Interoperabilität und Kohärenz, ohne die Projekte in ein einziges Template zu pressen.',
    evidence: 'EVIDENCE',
    evidenceTitle: 'Verbindungen müssen erklärbar bleiben.',
    evidenceBody:
      'Eine Visualisierung kann eine Beziehung allein dadurch überzeugend wirken lassen, dass sie sie zeigt. Deshalb behandelt DOTZERO Quellen, Zuschreibungen und Unsicherheit als First-Class-Daten. Wo möglich, muss das System eine einfache Frage beantworten können: Warum ist diese Verbindung hier?',
    projectSpecific: 'PROJECT-SPECIFIC DOCUMENTATION',
    projectSpecificBody:
      'Operative Spezifikationen — Entitätstypen, Relation Vocabulary, Media Model, View-Regeln und redaktionelle Konventionen — werden innerhalb jedes Atlas dokumentiert. Diese Seite bleibt bewusst allgemein und beschreibt das gemeinsame Framework.',
    close: 'DOTZERO ATLAS ENGINE',
    closeTitle: 'Not a database of isolated entries. A framework for connected knowledge.',
  },
  en: {
    kicker: 'DOTZERO / FRAMEWORK / ATLAS ENGINE',
    title: 'A FRAMEWORK FOR CONNECTED KNOWLEDGE',
    intro:
      'The Atlas Engine is a shared framework for DOTZERO projects that benefit from structured relational knowledge: entities, relations, sources, and spatial and temporal dimensions. It does not define the content of an Atlas; it defines how that content can be organised, verified, and explored.',
    back: 'BACK TO INDEX',
    why: 'WHY',
    whyTitle: 'From isolated pages to explorable systems.',
    whyBody:
      'A conventional archive works well when we already know what we are looking for. A DOTZERO Atlas starts from relations instead: enter through one node, change scale, follow connections, compare contexts, and formulate new questions.',
    archive: 'ARCHIVE',
    archiveFlow: ['Search', 'Result', 'Object', 'Metadata'],
    atlas: 'ATLAS',
    atlasFlow: ['Entry point', 'Entity', 'Relation', 'Context', 'Discovery'],
    principles: 'CORE PRINCIPLES',
    principlesIntro: 'Five principles govern the engine independently of the subject of any individual Atlas.',
    principleItems: [
      ['01', 'Relations before isolation', 'An element gains meaning through what it is connected to.'],
      ['02', 'One structure, many views', 'The same information can power profiles, maps, timelines, networks, and comparisons.'],
      ['03', 'Evidence by design', 'Sources, provenance, and uncertainty are part of the structure, not secondary footnotes.'],
      ['04', 'Core + domain layer', 'The framework stays shared; each Atlas defines its own vocabulary, rules, and views.'],
      ['05', 'Exploration before conclusion', 'The system is designed to surface patterns and questions, not only return results.'],
    ],
    framework: 'FRAMEWORK',
    frameworkTitle: 'A stable core, domain-specific layers.',
    frameworkBody:
      'The engine separates what is universal from what belongs to a specific field. The core handles identity, relations, time, space, sources, evidence, and media. Each Atlas adds its own cultural model on top.',
    layers: [
      ['DOMAIN LAYER', 'Vocabulary, entity types, specific relations, editorial rules.'],
      ['ATLAS CORE', 'Entities, relations, time, space, sources, evidence, media.'],
      ['VIEW LAYER', 'Profile, map, timeline, network, compare, routes, explore.'],
    ],
    flow: 'KNOWLEDGE FLOW',
    flowTitle: 'Once structured, one fact can live across many interfaces.',
    fact: 'ENTITY A → TYPED RELATION → ENTITY B',
    flowItems: ['Profile', 'Network', 'Timeline', 'Map', 'Compare', 'Explore'],
    boundary: 'SYSTEM BOUNDARY',
    boundaryTitle: 'The engine does not decide what an individual Atlas means.',
    boundaryBody:
      'Avant-Garde, Alpine Graphic, Systems, and future Atlases can have different languages, aesthetics, and structures. The framework provides interoperability and coherence without flattening projects into a single template.',
    evidence: 'EVIDENCE',
    evidenceTitle: 'Connections should remain explainable.',
    evidenceBody:
      'A visualisation can make a relation look persuasive simply by drawing it. DOTZERO therefore treats sources, attribution, and uncertainty as first-class data. Wherever possible, the system should answer one simple question: why is this connection here?',
    projectSpecific: 'PROJECT-SPECIFIC DOCUMENTATION',
    projectSpecificBody:
      'Operational specifications — entity types, relation vocabulary, media models, view rules, and editorial conventions — will be documented inside each Atlas. This page intentionally remains general: it describes the shared framework.',
    close: 'DOTZERO ATLAS ENGINE',
    closeTitle: 'Not a database of isolated entries. A framework for connected knowledge.',
  },
};

const SectionLabel: React.FC<{ children: React.ReactNode; kind?: 'dot' | 'system' | 'field' }> = ({ children, kind = 'dot' }) => (
  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] dz-text-muted">
    <SyntaxLabel kind={kind}>{children}</SyntaxLabel>
  </div>
);

export const AtlasEnginePage: React.FC = () => {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <main id="atlas-engine" className="pt-20">
      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28">
          <a href="#index" className="mb-12 inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] hover:opacity-45">
            <ArrowLeft className="h-3 w-3" /> {t.back}
          </a>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel kind="system">{t.kicker}</SectionLabel>
              <h1 className="dz-h1 mt-8 max-w-5xl text-[clamp(3.8rem,9vw,9rem)]">{t.title}</h1>
            </div>
            <div className="flex items-end lg:col-span-4">
              <p className="dz-body-strong max-w-xl">{t.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><SectionLabel>{t.why}</SectionLabel></div>
          <div className="lg:col-span-9">
            <h2 className="dz-h2 max-w-4xl text-4xl sm:text-6xl">{t.whyTitle}</h2>
            <p className="dz-body mt-7 max-w-3xl text-lg">{t.whyBody}</p>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {[
                [t.archive, t.archiveFlow, '01'],
                [t.atlas, t.atlasFlow, '02'],
              ].map(([label, flow, n]) => (
                <ZeroField key={String(label)} className="p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-[0.16em]">{String(label)}</span>
                    <span className="inline-flex items-center gap-2 font-mono text-[9px] dz-text-muted"><FieldGlyph size={9} />{String(n)}</span>
                  </div>
                  <div className="mt-8 space-y-2">
                    {(flow as string[]).map((item, i) => (
                      <React.Fragment key={item}>
                        <div className="flex min-h-12 items-center justify-between border dz-border px-4 font-display text-lg font-semibold">
                          <span>{item}</span><DotMarker size="xs" />
                        </div>
                        {i < (flow as string[]).length - 1 && <div className="pl-5 font-mono text-[10px] dz-text-muted">↓</div>}
                      </React.Fragment>
                    ))}
                  </div>
                </ZeroField>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionLabel>{t.principles}</SectionLabel>
          <p className="dz-body mt-5 max-w-2xl">{t.principlesIntro}</p>
          <div className="mt-10 border-t-2 dz-border">
            {t.principleItems.map(([n, title, body]) => (
              <div key={n} className="grid gap-5 border-b dz-border py-7 md:grid-cols-12">
                <div className="font-mono text-[10px] font-bold md:col-span-1">{n}</div>
                <div className="font-display text-2xl font-semibold tracking-[-0.035em] md:col-span-4">{title}</div>
                <p className="dz-body md:col-span-6 md:col-start-7">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><SectionLabel kind="system">{t.framework}</SectionLabel></div>
          <div className="lg:col-span-9">
            <h2 className="dz-h2 max-w-4xl text-4xl sm:text-6xl">{t.frameworkTitle}</h2>
            <p className="dz-body mt-7 max-w-3xl text-lg">{t.frameworkBody}</p>

            <div className="mt-14 border dz-border">
              {t.layers.map(([title, body], i) => (
                <div key={title} className="grid gap-5 border-b dz-border p-5 last:border-b-0 sm:p-7 md:grid-cols-12">
                  <div className="flex items-center gap-2 font-mono text-[9px] dz-text-muted md:col-span-1"><SystemGlyph size={14} />0{i + 1}</div>
                  <div className="font-display text-2xl font-semibold md:col-span-3">{title}</div>
                  <p className="dz-body md:col-span-7">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionLabel kind="system">{t.flow}</SectionLabel>
          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <h2 className="dz-h2 text-4xl sm:text-6xl lg:col-span-7">{t.flowTitle}</h2>
            <div className="lg:col-span-5">
              <div className="border-2 dz-border p-6 font-mono text-xs font-bold tracking-[0.12em]">{t.fact}</div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px border dz-border bg-[var(--line)] sm:grid-cols-3 lg:grid-cols-6">
            {t.flowItems.map((item, i) => {
              const Icon = [Layers3, Network, GitBranch, Map, Search, ArrowRight][i];
              return (
                <div key={item} className="min-h-36 bg-[var(--bg)] p-5">
                  <div className="flex items-center justify-between"><Icon className="h-5 w-5" /><SystemGlyph size={18} /></div>
                  <div className="mt-12 font-mono text-[9px] uppercase tracking-[0.16em]">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><SectionLabel kind="field">{t.boundary}</SectionLabel></div>
          <div className="lg:col-span-8">
            <h2 className="dz-h2 text-4xl sm:text-6xl">{t.boundaryTitle}</h2>
            <p className="dz-body mt-7 max-w-3xl text-lg">{t.boundaryBody}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {['AVANT-GARDE', 'ALPINE GRAPHIC', 'SYSTEMS'].map((name) => (
                <ZeroField key={name} className="p-5">
                  <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] dz-text-muted"><FieldGlyph size={9} />DOMAIN</div>
                  <div className="mt-8 font-display text-2xl font-semibold">{name}</div>
                  <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] dz-text-muted">own vocabulary / shared core</div>
                </ZeroField>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b dz-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-3"><SectionLabel>{t.evidence}</SectionLabel></div>
          <div className="lg:col-span-9">
            <div className="grid gap-8 border-2 dz-border p-6 sm:p-9 lg:grid-cols-12">
              <ShieldCheck className="h-9 w-9 lg:col-span-1" />
              <div className="lg:col-span-10">
                <h2 className="dz-h2 text-4xl sm:text-5xl">{t.evidenceTitle}</h2>
                <p className="dz-body mt-6 max-w-3xl text-lg">{t.evidenceBody}</p>
              </div>
            </div>

            <div className="mt-10 border-t dz-border pt-7">
              <SectionLabel>{t.projectSpecific}</SectionLabel>
              <p className="dz-body mt-5 max-w-3xl">{t.projectSpecificBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel kind="system">{t.close}</SectionLabel>
          <p className="dz-h2 mt-8 max-w-6xl text-5xl sm:text-7xl lg:text-8xl">{t.closeTitle}</p>
          <a href="#index" className="dz-action-link mt-14 border dz-border px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.16em] hover:bg-[var(--text)] hover:text-[var(--bg)]">
            {t.back} <SystemGlyph size={20} />
          </a>
        </div>
      </section>
    </main>
  );
};

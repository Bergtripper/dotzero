import React from 'react';
import { ArrowLeft, ArrowRight, GitBranch, Layers3, Map, Network, Search, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DotMarker, FieldGlyph, SyntaxLabel, SystemGlyph, ZeroField } from './GraphicSyntax';

const COPY = {
  it: {
    kicker: 'DOTZERO / FRAMEWORK / ATLAS ENGINE',
    title: 'UN FRAMEWORK PER LA CONOSCENZA CONNESSA',
    intro: 'Atlas Engine è la struttura condivisa dei progetti DOTZERO basati su entità, relazioni, fonti, spazio e tempo. Non decide i contenuti: definisce come organizzarli, verificarli ed esplorarli.',
    back: 'TORNA ALL’INDICE',
    why: 'PERCHÉ',
    whyTitle: 'Da pagine isolate a sistemi esplorabili.',
    whyBody: 'Un archivio tradizionale funziona quando sappiamo già cosa cercare. Un Atlas DOTZERO parte invece dalle relazioni: si entra da un nodo, si cambia scala, si seguono connessioni e si formulano nuove domande.',
    archive: 'ARCHIVIO',
    archiveFlow: ['Ricerca', 'Risultato', 'Oggetto', 'Metadati'],
    atlas: 'ATLAS',
    atlasFlow: ['Ingresso', 'Entità', 'Relazione', 'Contesto', 'Scoperta'],
    principles: 'PRINCIPI',
    principlesIntro: 'Cinque principi comuni, indipendenti dal tema del singolo Atlas.',
    principleItems: [
      ['01', 'Relazioni prima dell’isolamento', 'Un elemento acquista significato anche attraverso ciò a cui è collegato.'],
      ['02', 'Una struttura, molte viste', 'Gli stessi dati possono alimentare profili, mappe, timeline, reti e confronti.'],
      ['03', 'Evidenza nella struttura', 'Fonti, provenienza e incertezza fanno parte del modello, non sono note accessorie.'],
      ['04', 'Nucleo + dominio', 'Il nucleo resta condiviso; ogni Atlas definisce vocabolario, regole e viste proprie.'],
      ['05', 'Esplorazione prima della conclusione', 'Il sistema deve far emergere pattern e domande, non soltanto restituire risultati.'],
    ],
    framework: 'STRUTTURA',
    frameworkTitle: 'Un nucleo stabile, livelli specifici.',
    frameworkBody: 'Il motore separa ciò che è comune da ciò che appartiene a un dominio. Il nucleo gestisce identità, relazioni, tempo, spazio, fonti, evidenza e media.',
    layers: [
      ['LIVELLO DOMINIO', 'Vocabolario, tipi di entità, relazioni specifiche, regole editoriali.'],
      ['NUCLEO ATLAS', 'Entità, relazioni, tempo, spazio, fonti, evidenza, media.'],
      ['LIVELLO VISTE', 'Profilo, mappa, timeline, rete, confronto, percorsi, esplorazione.'],
    ],
    flow: 'FLUSSO DELLA CONOSCENZA',
    flowTitle: 'Una volta strutturato, un fatto può vivere in molte interfacce.',
    fact: 'ENTITÀ A → RELAZIONE TIPIZZATA → ENTITÀ B',
    flowItems: ['Profilo', 'Rete', 'Timeline', 'Mappa', 'Confronto', 'Esplora'],
    boundary: 'CONFINE DEL SISTEMA',
    boundaryTitle: 'Il motore non decide il significato di un Atlas.',
    boundaryBody: 'Avant-Garde, Alpine Graphic, Systems e i futuri Atlas possono avere linguaggi, estetiche e strutture differenti. Il framework crea coerenza senza ridurli a un unico template.',
    domains: [
      ['AVANT-GARDE', 'DOMINIO', 'vocabolario proprio / nucleo condiviso'],
      ['ALPINE GRAPHIC', 'DOMINIO', 'vocabolario proprio / nucleo condiviso'],
      ['SYSTEMS', 'DOMINIO', 'vocabolario proprio / nucleo condiviso'],
    ],
    evidence: 'EVIDENZA',
    evidenceTitle: 'Le connessioni devono poter essere spiegate.',
    evidenceBody: 'Una visualizzazione può rendere persuasiva una relazione solo perché la mostra. Per questo fonti, attribuzioni e incertezza restano parte visibile della struttura.',
    projectSpecific: 'DOCUMENTAZIONE DEL PROGETTO',
    projectSpecificBody: 'Tipi di entità, vocabolario delle relazioni, media, viste e convenzioni editoriali vengono definiti dentro ciascun Atlas. Qui resta soltanto la struttura comune.',
    close: 'DOTZERO ATLAS ENGINE',
    closeTitle: 'Non un database di voci isolate. Una struttura per conoscenza connessa.',
  },
  de: {
    kicker: 'DOTZERO / FRAMEWORK / ATLAS ENGINE',
    title: 'EIN FRAMEWORK FÜR VERNETZTES WISSEN',
    intro: 'Atlas Engine ist die gemeinsame Struktur für DOTZERO-Projekte mit Entitäten, Beziehungen, Quellen, Raum und Zeit. Sie bestimmt nicht die Inhalte, sondern wie sie organisiert, überprüft und erkundet werden.',
    back: 'ZURÜCK ZUM INDEX',
    why: 'WARUM',
    whyTitle: 'Von isolierten Seiten zu erkundbaren Systemen.',
    whyBody: 'Ein klassisches Archiv funktioniert, wenn bereits klar ist, wonach gesucht wird. Ein DOTZERO Atlas beginnt dagegen mit Beziehungen: Einstieg über einen Knoten, Maßstab wechseln, Verbindungen verfolgen, neue Fragen entwickeln.',
    archive: 'ARCHIV',
    archiveFlow: ['Suche', 'Ergebnis', 'Objekt', 'Metadaten'],
    atlas: 'ATLAS',
    atlasFlow: ['Einstieg', 'Entität', 'Relation', 'Kontext', 'Entdeckung'],
    principles: 'PRINZIPIEN',
    principlesIntro: 'Fünf gemeinsame Prinzipien, unabhängig vom Thema des jeweiligen Atlas.',
    principleItems: [
      ['01', 'Beziehungen vor Isolation', 'Ein Element gewinnt Bedeutung auch durch das, womit es verbunden ist.'],
      ['02', 'Eine Struktur, viele Ansichten', 'Dieselben Daten können Profile, Karten, Timelines, Netzwerke und Vergleiche speisen.'],
      ['03', 'Evidenz in der Struktur', 'Quellen, Provenienz und Unsicherheit gehören zum Modell und sind keine Zusatznoten.'],
      ['04', 'Kern + Domäne', 'Der Kern bleibt gemeinsam; jeder Atlas definiert eigenes Vokabular, Regeln und Ansichten.'],
      ['05', 'Exploration vor Schlussfolgerung', 'Das System soll Muster und Fragen sichtbar machen, nicht nur Ergebnisse liefern.'],
    ],
    framework: 'STRUKTUR',
    frameworkTitle: 'Ein stabiler Kern, spezifische Ebenen.',
    frameworkBody: 'Die Engine trennt Gemeinsames von Domänenspezifischem. Der Kern verwaltet Identität, Beziehungen, Zeit, Raum, Quellen, Evidenz und Medien.',
    layers: [
      ['DOMÄNENEBENE', 'Vokabular, Entitätstypen, spezifische Relationen, redaktionelle Regeln.'],
      ['ATLAS-KERN', 'Entitäten, Relationen, Zeit, Raum, Quellen, Evidenz, Medien.'],
      ['ANSICHTSEBENE', 'Profil, Karte, Timeline, Netzwerk, Vergleich, Routen, Exploration.'],
    ],
    flow: 'WISSENSFLUSS',
    flowTitle: 'Einmal strukturiert, kann ein Fakt in vielen Oberflächen leben.',
    fact: 'ENTITÄT A → TYPISIERTE RELATION → ENTITÄT B',
    flowItems: ['Profil', 'Netzwerk', 'Timeline', 'Karte', 'Vergleich', 'Erkunden'],
    boundary: 'SYSTEMGRENZE',
    boundaryTitle: 'Die Engine entscheidet nicht über die Bedeutung eines Atlas.',
    boundaryBody: 'Avant-Garde, Alpine Graphic, Systems und zukünftige Atlanten können unterschiedliche Sprachen, Ästhetiken und Strukturen haben. Das Framework schafft Kohärenz, ohne sie in ein einziges Template zu pressen.',
    domains: [
      ['AVANT-GARDE', 'DOMÄNE', 'eigenes Vokabular / gemeinsamer Kern'],
      ['ALPINE GRAPHIC', 'DOMÄNE', 'eigenes Vokabular / gemeinsamer Kern'],
      ['SYSTEMS', 'DOMÄNE', 'eigenes Vokabular / gemeinsamer Kern'],
    ],
    evidence: 'EVIDENZ',
    evidenceTitle: 'Verbindungen müssen erklärbar bleiben.',
    evidenceBody: 'Eine Visualisierung kann eine Beziehung überzeugend wirken lassen, nur weil sie gezeichnet wird. Deshalb bleiben Quellen, Zuschreibungen und Unsicherheit sichtbar in der Struktur.',
    projectSpecific: 'PROJEKTDOKUMENTATION',
    projectSpecificBody: 'Entitätstypen, Relationsvokabular, Medien, Ansichten und redaktionelle Konventionen werden in jedem Atlas definiert. Hier bleibt nur die gemeinsame Struktur.',
    close: 'DOTZERO ATLAS ENGINE',
    closeTitle: 'Keine Datenbank isolierter Einträge. Eine Struktur für vernetztes Wissen.',
  },
  en: {
    kicker: 'DOTZERO / FRAMEWORK / ATLAS ENGINE',
    title: 'A FRAMEWORK FOR CONNECTED KNOWLEDGE',
    intro: 'Atlas Engine is the shared structure for DOTZERO projects built on entities, relations, sources, space and time. It does not decide the content; it defines how content is organised, verified and explored.',
    back: 'BACK TO INDEX',
    why: 'WHY',
    whyTitle: 'From isolated pages to explorable systems.',
    whyBody: 'A conventional archive works when we already know what to search for. A DOTZERO Atlas begins with relations: enter through a node, change scale, follow connections and formulate new questions.',
    archive: 'ARCHIVE',
    archiveFlow: ['Search', 'Result', 'Object', 'Metadata'],
    atlas: 'ATLAS',
    atlasFlow: ['Entry', 'Entity', 'Relation', 'Context', 'Discovery'],
    principles: 'PRINCIPLES',
    principlesIntro: 'Five shared principles, independent of the subject of each Atlas.',
    principleItems: [
      ['01', 'Relations before isolation', 'An element gains meaning through what it is connected to.'],
      ['02', 'One structure, many views', 'The same data can power profiles, maps, timelines, networks and comparisons.'],
      ['03', 'Evidence in the structure', 'Sources, provenance and uncertainty belong to the model, not to secondary footnotes.'],
      ['04', 'Core + domain', 'The core stays shared; each Atlas defines its own vocabulary, rules and views.'],
      ['05', 'Exploration before conclusion', 'The system is built to surface patterns and questions, not only return results.'],
    ],
    framework: 'STRUCTURE',
    frameworkTitle: 'A stable core, specific layers.',
    frameworkBody: 'The engine separates what is shared from what belongs to a domain. The core handles identity, relations, time, space, sources, evidence and media.',
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
    boundaryTitle: 'The engine does not decide what an Atlas means.',
    boundaryBody: 'Avant-Garde, Alpine Graphic, Systems and future Atlases can have different languages, aesthetics and structures. The framework creates coherence without flattening them into one template.',
    domains: [
      ['AVANT-GARDE', 'DOMAIN', 'own vocabulary / shared core'],
      ['ALPINE GRAPHIC', 'DOMAIN', 'own vocabulary / shared core'],
      ['SYSTEMS', 'DOMAIN', 'own vocabulary / shared core'],
    ],
    evidence: 'EVIDENCE',
    evidenceTitle: 'Connections should remain explainable.',
    evidenceBody: 'A visualisation can make a relation look persuasive simply by drawing it. Sources, attribution and uncertainty therefore remain visible parts of the structure.',
    projectSpecific: 'PROJECT DOCUMENTATION',
    projectSpecificBody: 'Entity types, relation vocabulary, media, views and editorial conventions are defined inside each Atlas. This page keeps only the shared structure.',
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
              {[[t.archive, t.archiveFlow, '01'], [t.atlas, t.atlasFlow, '02']].map(([label, flow, n]) => (
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
            <div className="lg:col-span-5"><div className="border-2 dz-border p-6 font-mono text-xs font-bold tracking-[0.12em]">{t.fact}</div></div>
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
              {t.domains.map(([name, domain, note]) => (
                <ZeroField key={name} className="p-5">
                  <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] dz-text-muted"><FieldGlyph size={9} />{domain}</div>
                  <div className="mt-8 font-display text-2xl font-semibold">{name}</div>
                  <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] dz-text-muted">{note}</div>
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

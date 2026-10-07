import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DotzeroLogotype } from './DotzeroLogotype';
import { DotzeroMark } from './DotzeroMark';
import { DotMarker, FieldGlyph, SystemGlyph, ZeroField } from './GraphicSyntax';

type CellProps = {
  number: string;
  title: string;
  note?: string;
  className?: string;
  children: React.ReactNode;
};

const Cell: React.FC<CellProps> = ({ number, title, note, className = '', children }) => (
  <section className={`dz-ci-cell ${className}`}>
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[10px] dz-text-muted">{number}</span>
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em]">{title}</h2>
      </div>
      {note ? <span className="hidden max-w-[15rem] text-right font-mono text-[8px] uppercase tracking-[0.11em] dz-text-muted sm:block">{note}</span> : null}
    </div>
    <div className="mt-7">{children}</div>
  </section>
);

const COPY = {
  it: {
    header: 'DOTZERO / IDENTITÀ VISIVA',
    headerMeta: 'Laboratorio personale di ricerca · CD / CI',
    system: 'CD / CI / SISTEMA DI IDENTITÀ',
    title: 'IDENTITÀ.',
    intro: 'Il sistema visivo parte dal segno: DOT · ZERO · OPEN DIRECTION. Logotipo e segno sono complementari e non vengono mai uniti in un lockup.',
    cells: ['Significato del segno', 'Sintassi grafica', 'Logotipo', 'Segno', 'Costruzione', 'Tipografia', 'Varianti del segno', 'Rotazione', 'Dimensioni', 'Palette', 'Area di rispetto', 'Esempi d’uso'],
    notes: [
      '. + 0 + </> / domanda · individuo · apertura',
      '. = conoscenza · 0 = campo · </> = metodo',
      '.DOTZERO / firma tipografica autonoma',
      'Segno autonomo · complementare al logotipo',
      'Griglia e proporzioni',
      'Sistema IBM Plex',
      'Derivazioni controllate',
      'Opzionale, mai predefinita',
      'Da 16 px in su',
      'Cromia piena',
      'Campo protetto',
      'Digitale · stampa · spazio',
    ],
    signMeta: 'Quattro elementi / punto · zero · diagonale · triangolo',
    signConcept: 'IL SEGNO / PRIMA DELL’APPLICAZIONE',
    signBody: 'Il segno contiene più letture nello stesso gesto. La grammatica di base è punto + zero + diagonale + triangolo.',
    meanings: [
      ['.', 'DOT / ORIGINE', 'Punto di partenza, prima coordinata, prima domanda.'],
      ['0', 'ZERO / CAMPO', 'Lo zero non è vuoto: è campo, contenitore e sistema.'],
      ['</>', 'CODICE / COSTRUZIONE', 'La diagonale e l’angolo richiamano codice, costruzione e apertura.'],
      ['?', 'DOMANDA / RICERCA', 'Il segno può suggerire una domanda ancora aperta.'],
      ['● /', 'INDIVIDUO / GESTO', 'Una lettura latente mostra una figura umana e un gesto verso l’esterno.'],
      ['/›', 'OPEN DIRECTION', 'La diagonale rompe il campo chiuso e indica continuazione e deviazione.'],
    ],
    logicTitle: 'LOGICA COSTRUTTIVA',
    logicBody: 'Cerchio, linea, angolo e asimmetria sono grammatica, non citazione stilistica.',
    coreTitle: 'PRINCIPIO',
    coreQuote: 'Un punto entra in un campo. Una domanda lo apre. Una direzione ne esce.',
    coreBody: 'DOT / ZERO / CODE / QUESTION / INDIVIDUAL / OPEN DIRECTION sono letture simultanee dello stesso segno.',
    syntax: [
      ['. / MARCATORE DI CONTENUTO', 'CONOSCENZA.', 'Origine, domanda, nodo, evidenza e focus attivo.', 'etichette · evidenza · stato · focus'],
      ['0 / LOGICA DI CAMPO', 'CONTENITORE.', 'Progetto, modello, dataset o contesto diventano un campo delimitato.', 'progetti · modelli · dataset · contesti'],
      ['</> / MARCATORE DI SISTEMA', 'OPEN DIRECTION.', 'Metodo, azione, transizione e movimento oltre il campo.', 'metodo · strumenti · navigazione · transizioni'],
    ],
    syntaxRule: 'Il punto identifica la conoscenza. </> indica ciò che il sistema fa con quella conoscenza.',
    behaviourRule: 'In apertura il nome è .DOTZERO; entrando nella pagina, il logotipo lascia spazio al segno.',
    relationshipTitle: 'REGOLA DI RELAZIONE',
    relationshipBody: 'Usa .DOTZERO quando il nome deve essere letto; usa il segno quando il riconoscimento può essere affidato al simbolo. Non affiancarli come un unico logo.',
    leadingDot: '.DOTZERO · punto iniziale',
    complementary: 'Complementare al segno',
    primaryTypeface: 'Carattere principale',
    primaryBody: 'IBM Plex Sans è la voce principale per titoli, testo, navigazione e interfaccia.',
    technical: 'Supporto tecnico',
    technicalBody: 'IBM Plex Mono per dati, fonti, etichette, coordinate e metadati.',
    variants: [['Standard','Predefinito'],['Compatto','UI piccola'],['Negativo','Campo scuro'],['Outline','Uso speciale']],
    rotations: ['Consigliata','Dinamica','Sperimentale'],
    sizeLabels: ['UI / favicon','Navigazione','Interfaccia','Web / sezioni','Hero / stampa'],
    palette: [['DOTZERO Red','#F70B0D','Primario'],['Nero','#000000','Testo / UI'],['Bianco','#FFFFFF','Sfondo'],['Grigio','#E5E5E5','Elementi UI']],
    constructionKey: 'PROPORZIONI',
    constructionLabels: ['Testa','Altezza totale','Tratto principale','Diagonale','Sovrapposizione','Logica angoli'],
    clearTitle: 'Area minima di rispetto',
    clearBody: 'Mantieni almeno l’altezza della testa circolare libera su ogni lato del segno.',
    clearNote: 'Testi, bordi, immagini e controlli non devono entrare in questo campo.',
    usageCaptions: ['Header · logotipo','Header · segno','Icona app · solo segno','Documento · solo logotipo','Segnaletica · solo segno'],
    footerSyntax: '. = conoscenza · 0 = campo · </> = metodo · open direction',
  },
  de: {
    header: 'DOTZERO / VISUELLE IDENTITÄT',
    headerMeta: 'Persönliches Forschungslabor · CD / CI',
    system: 'CD / CI / IDENTITÄTSSYSTEM',
    title: 'IDENTITÄT.',
    intro: 'Das visuelle System beginnt mit dem Zeichen: DOT · ZERO · OPEN DIRECTION. Logotype und Zeichen ergänzen einander und werden nie zu einem Lockup verbunden.',
    cells: ['Bedeutung des Zeichens', 'Grafische Syntax', 'Logotype', 'Zeichen', 'Konstruktion', 'Typografie', 'Zeichenvarianten', 'Rotation', 'Größen', 'Palette', 'Schutzraum', 'Anwendungsbeispiele'],
    notes: [
      '. + 0 + </> / Frage · Individuum · Öffnung',
      '. = Wissen · 0 = Feld · </> = Methode',
      '.DOTZERO / eigenständige typografische Signatur',
      'Eigenständiges Zeichen · ergänzend zur Logotype',
      'Raster und Proportionen',
      'IBM-Plex-System',
      'Kontrollierte Varianten',
      'Optional, nie Standard',
      'Ab 16 px',
      'Volle Chromatik',
      'Geschütztes Feld',
      'Digital · Druck · Raum',
    ],
    signMeta: 'Vier Elemente / Punkt · Null · Diagonale · Dreieck',
    signConcept: 'DAS ZEICHEN / VOR DER ANWENDUNG',
    signBody: 'Das Zeichen trägt mehrere Lesarten gleichzeitig. Seine Grundgrammatik ist Punkt + Null + Diagonale + Dreieck.',
    meanings: [
      ['.', 'DOT / URSPRUNG', 'Ausgangspunkt, erste Koordinate, erste Frage.'],
      ['0', 'ZERO / FELD', 'Die Null ist nicht leer: Sie ist Feld, Container und System.'],
      ['</>', 'CODE / KONSTRUKTION', 'Diagonale und Winkel verweisen auf Code, Konstruktion und Öffnung.'],
      ['?', 'FRAGE / FORSCHUNG', 'Das Zeichen kann eine noch offene Frage andeuten.'],
      ['● /', 'INDIVIDUUM / GESTE', 'Eine latente Lesart zeigt eine menschliche Figur und eine Geste nach außen.'],
      ['/›', 'OPEN DIRECTION', 'Die Diagonale bricht das geschlossene Feld und zeigt Fortsetzung und Abweichung.'],
    ],
    logicTitle: 'KONSTRUKTIONSLOGIK',
    logicBody: 'Kreis, Linie, Winkel und Asymmetrie bilden eine Grammatik, keine Stilzitation.',
    coreTitle: 'PRINZIP',
    coreQuote: 'Ein Punkt tritt in ein Feld. Eine Frage öffnet es. Eine Richtung verlässt es.',
    coreBody: 'DOT / ZERO / CODE / QUESTION / INDIVIDUAL / OPEN DIRECTION sind gleichzeitige Lesarten desselben Zeichens.',
    syntax: [
      ['. / INHALTSMARKER', 'WISSEN.', 'Ursprung, Frage, Knoten, Evidenz und aktiver Fokus.', 'Labels · Evidenz · Status · Fokus'],
      ['0 / FELDLOGIK', 'CONTAINER.', 'Projekt, Modell, Datensatz oder Kontext werden zu einem begrenzten Feld.', 'Projekte · Modelle · Datensätze · Kontexte'],
      ['</> / SYSTEMMARKER', 'OPEN DIRECTION.', 'Methode, Handlung, Übergang und Bewegung über das Feld hinaus.', 'Methode · Werkzeuge · Navigation · Übergänge'],
    ],
    syntaxRule: 'Der Punkt markiert Wissen. </> zeigt, was das System mit diesem Wissen tut.',
    behaviourRule: 'Am Anfang steht .DOTZERO; beim Eintritt in die Seite übergibt die Logotype an das Zeichen.',
    relationshipTitle: 'BEZIEHUNGSREGEL',
    relationshipBody: 'Nutze .DOTZERO, wenn der Name gelesen werden soll; nutze das Zeichen, wenn das Symbol die Wiedererkennung trägt. Nie nebeneinander als ein Logo.',
    leadingDot: '.DOTZERO · führender Punkt',
    complementary: 'Ergänzend zum Zeichen',
    primaryTypeface: 'Primärschrift',
    primaryBody: 'IBM Plex Sans ist die Hauptstimme für Titel, Text, Navigation und Interface.',
    technical: 'Technischer Support',
    technicalBody: 'IBM Plex Mono für Daten, Quellen, Labels, Koordinaten und Metadaten.',
    variants: [['Standard','Standard'],['Kompakt','Kleine UI'],['Negativ','Dunkles Feld'],['Outline','Sonderfall']],
    rotations: ['Empfohlen','Dynamisch','Experimentell'],
    sizeLabels: ['UI / Favicon','Navigation','Interface','Web / Abschnitte','Hero / Druck'],
    palette: [['DOTZERO Red','#F70B0D','Primär'],['Schwarz','#000000','Text / UI'],['Weiß','#FFFFFF','Hintergrund'],['Grau','#E5E5E5','UI-Elemente']],
    constructionKey: 'PROPORTIONEN',
    constructionLabels: ['Kopf','Gesamthöhe','Hauptstrich','Diagonale','Überlappung','Eckenlogik'],
    clearTitle: 'Minimaler Schutzraum',
    clearBody: 'Mindestens die Höhe des runden Kopfes bleibt auf jeder Seite des Zeichens frei.',
    clearNote: 'Text, Rahmen, Bildkante und Bedienelemente dürfen dieses Feld nicht betreten.',
    usageCaptions: ['Header · Logotype','Header · Zeichen','App-Icon · nur Zeichen','Dokument · nur Logotype','Leitsystem · nur Zeichen'],
    footerSyntax: '. = Wissen · 0 = Feld · </> = Methode · open direction',
  },
  en: {
    header: 'DOTZERO / VISUAL IDENTITY',
    headerMeta: 'Personal research lab · CD / CI',
    system: 'CD / CI / IDENTITY SYSTEM',
    title: 'IDENTITY.',
    intro: 'The visual system begins with the sign: DOT · ZERO · OPEN DIRECTION. Logotype and sign are complementary and are never combined into a lockup.',
    cells: ['Meaning of the sign', 'Graphic syntax', 'Logotype', 'Sign', 'Construction', 'Typography', 'Sign variations', 'Rotation', 'Sizes', 'Palette', 'Clear space', 'Usage examples'],
    notes: [
      '. + 0 + </> / question · individual · opening',
      '. = knowledge · 0 = field · </> = method',
      '.DOTZERO / standalone typographic signature',
      'Standalone sign · complementary to logotype',
      'Grid and proportions',
      'IBM Plex system',
      'Controlled variations',
      'Optional, never default',
      '16 px and upward',
      'Full chroma',
      'Protected field',
      'Digital · print · space',
    ],
    signMeta: 'Four elements / point · zero · diagonal · triangle',
    signConcept: 'THE SIGN / BEFORE APPLICATION',
    signBody: 'The sign holds several readings at once. Its base grammar is point + zero + diagonal + triangle.',
    meanings: [
      ['.', 'DOT / ORIGIN', 'Point of origin, first coordinate, first question.'],
      ['0', 'ZERO / FIELD', 'Zero is not empty: it is field, container and system.'],
      ['</>', 'CODE / CONSTRUCTION', 'The diagonal and angle echo code, construction and opening.'],
      ['?', 'QUESTION / RESEARCH', 'The sign can suggest a question that remains open.'],
      ['● /', 'INDIVIDUAL / GESTURE', 'A latent reading reveals a human figure and a gesture outward.'],
      ['/›', 'OPEN DIRECTION', 'The diagonal breaks the closed field and indicates continuation and deviation.'],
    ],
    logicTitle: 'CONSTRUCTION LOGIC',
    logicBody: 'Circle, line, angle and asymmetry form a grammar, not a stylistic quotation.',
    coreTitle: 'PRINCIPLE',
    coreQuote: 'A point enters a field. A question opens it. A direction leaves it.',
    coreBody: 'DOT / ZERO / CODE / QUESTION / INDIVIDUAL / OPEN DIRECTION are simultaneous readings of one sign.',
    syntax: [
      ['. / CONTENT MARKER', 'KNOWLEDGE.', 'Origin, question, node, evidence and active focus.', 'labels · evidence · status · focus'],
      ['0 / FIELD LOGIC', 'CONTAINER.', 'Project, model, dataset or context become a bounded field.', 'projects · models · datasets · contexts'],
      ['</> / SYSTEM MARKER', 'OPEN DIRECTION.', 'Method, action, transition and movement beyond the field.', 'method · tools · navigation · transitions'],
    ],
    syntaxRule: 'The point identifies knowledge. </> indicates what the system does with that knowledge.',
    behaviourRule: 'At the opening, the name is .DOTZERO; entering the page hands the identity over to the sign.',
    relationshipTitle: 'RELATIONSHIP RULE',
    relationshipBody: 'Use .DOTZERO when the name must be read; use the sign when recognition can be carried by the symbol. Never place them side by side as one logo.',
    leadingDot: '.DOTZERO · leading dot',
    complementary: 'Complementary to the sign',
    primaryTypeface: 'Primary typeface',
    primaryBody: 'IBM Plex Sans is the main voice for headlines, text, navigation and interface.',
    technical: 'Technical support',
    technicalBody: 'IBM Plex Mono for data, sources, labels, coordinates and metadata.',
    variants: [['Standard','Default'],['Compact','Small UI'],['Reverse','Dark field'],['Outline','Special use']],
    rotations: ['Recommended','Dynamic','Experimental'],
    sizeLabels: ['UI / favicon','Navigation','Interface','Web / sections','Hero / print'],
    palette: [['DOTZERO Red','#F70B0D','Primary'],['Black','#000000','Text / UI'],['White','#FFFFFF','Background'],['Grey','#E5E5E5','UI elements']],
    constructionKey: 'PROPORTIONS',
    constructionLabels: ['Head','Total height','Main stroke','Diagonal','Top overlap','Corner logic'],
    clearTitle: 'Minimum clear space',
    clearBody: 'Keep at least the height of the circular head free on every side of the sign.',
    clearNote: 'Text, frames, image edges and interface controls must stay outside this field.',
    usageCaptions: ['Header · logotype','Header · sign','App icon · sign only','Document · logotype only','Wayfinding · sign only'],
    footerSyntax: '. = knowledge · 0 = field · </> = method · open direction',
  },
};

export const IdentityPage: React.FC = () => {
  const { language } = useLanguage();
  const t = COPY[language];
  const weights = ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold'];
  const sizes = [16, 24, 32, 48, 96] as const;

  return (
    <main id="identity" className="pt-16">
      <header className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b dz-rule pb-5">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">{t.header}</div>
            <div className="font-mono text-[8px] uppercase tracking-[0.14em] dz-text-muted">{t.headerMeta}</div>
          </div>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="dz-meta">{t.system}</div>
              <h1 className="dz-h1 mt-5 text-[clamp(4rem,10vw,9rem)]">{t.title}</h1>
              <p className="dz-body-strong mt-7 max-w-2xl">{t.intro}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white p-6 text-black sm:p-8"><DotzeroLogotype className="w-full" title=".DOTZERO" /></div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[96rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-px bg-[var(--line-soft)] p-px lg:grid-cols-12">
          <Cell number="00" title={t.cells[0]} note={t.notes[0]} className="lg:col-span-12">
            <div className="grid gap-10 xl:grid-cols-12 xl:items-start">
              <div className="xl:col-span-4">
                <div className="flex min-h-[34rem] items-center justify-center bg-white p-8 text-black sm:p-12"><DotzeroMark size="72%" /></div>
                <div className="mt-4 font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">{t.signMeta}</div>
              </div>
              <div className="xl:col-span-8">
                <div className="font-mono text-[9px] uppercase tracking-[.14em] text-[var(--accent)]">{t.signConcept}</div>
                <h2 className="dz-h2 mt-5 max-w-4xl text-4xl sm:text-6xl lg:text-7xl">DOT. ZERO.<br />OPEN DIRECTION.</h2>
                <p className="dz-body-strong mt-7 max-w-3xl">{t.signBody}</p>
                <div className="mt-10 grid gap-px bg-[var(--line-soft)] p-px md:grid-cols-2 xl:grid-cols-3">
                  {t.meanings.map(([glyph, title, body], i) => (
                    <div key={title} className="bg-[var(--bg)] p-5">
                      <div className={`font-display text-5xl font-bold ${i === 0 || i === 2 || i === 5 ? 'text-[var(--accent)]' : ''}`}>{glyph}</div>
                      <div className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[.12em]">{title}</div>
                      <p className="mt-3 text-sm leading-6 dz-text-muted">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 grid gap-8 border-t dz-rule pt-8 md:grid-cols-2">
                  <div>
                    <div className="font-mono text-[9px] font-semibold uppercase tracking-[.12em]">{t.logicTitle}</div>
                    <p className="mt-4 text-sm leading-6 dz-text-muted">{t.logicBody}</p>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] font-semibold uppercase tracking-[.12em]">{t.coreTitle}</div>
                    <p className="mt-4 font-display text-2xl font-medium leading-tight tracking-[-.03em]">{t.coreQuote}</p>
                    <p className="mt-4 text-sm leading-6 dz-text-muted">{t.coreBody}</p>
                  </div>
                </div>
              </div>
            </div>
          </Cell>

          <Cell number="01" title={t.cells[1]} note={t.notes[1]} className="lg:col-span-12">
            <div className="grid gap-px bg-[var(--line-soft)] p-px lg:grid-cols-3">
              {t.syntax.map(([meta, title, body, destinations], i) => {
                const inner = (
                  <>
                    {i === 0 ? <DotMarker size="lg" /> : i === 1 ? <FieldGlyph size={26} /> : <SystemGlyph size={50} />}
                    <div className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[.13em]">{meta}</div>
                    <h3 className="dz-h3 mt-3 text-3xl">{title}</h3>
                    <p className="dz-body mt-5">{body}</p>
                    <div className="mt-6 border-t dz-rule pt-4 font-mono text-[8px] uppercase leading-5 tracking-[.11em] dz-text-muted">{destinations}</div>
                  </>
                );
                return i === 1 ? <ZeroField key={title} className="bg-[var(--bg)] p-6 sm:p-8">{inner}</ZeroField> : <div key={title} className="bg-[var(--bg)] p-6 sm:p-8">{inner}</div>;
              })}
            </div>
            <div className="mt-8 grid gap-8 border-t dz-rule pt-7 md:grid-cols-2">
              <p className="text-sm leading-6 dz-text-muted">{t.syntaxRule}</p>
              <p className="text-sm leading-6 dz-text-muted">{t.behaviourRule}</p>
            </div>
          </Cell>

          <Cell number="02" title={t.cells[2]} note={t.notes[2]} className="lg:col-span-7">
            <div className="flex min-h-56 items-center justify-center bg-white p-8 text-black sm:min-h-72"><DotzeroLogotype className="w-full max-w-[720px]" /></div>
            <div className="mt-4 flex flex-wrap justify-between gap-3 font-mono text-[8px] uppercase tracking-[.11em] dz-text-muted">
              <span>{t.leadingDot}</span><span>{t.complementary}</span>
            </div>
            <div className="mt-6 border-l-2 border-[var(--accent)] pl-4">
              <div className="font-mono text-[8px] font-semibold uppercase tracking-[.12em]">{t.relationshipTitle}</div>
              <p className="mt-2 max-w-2xl text-sm leading-6 dz-text-muted">{t.relationshipBody}</p>
            </div>
          </Cell>

          <Cell number="03" title={t.cells[3]} note={t.notes[3]} className="lg:col-span-2">
            <div className="flex min-h-56 items-center justify-center bg-white p-6 text-black sm:min-h-72"><DotzeroMark size={180} /></div>
          </Cell>

          <Cell number="04" title={t.cells[4]} note={t.notes[4]} className="lg:col-span-3">
            <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_11rem]">
              <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden border border-[#cfcfcf] bg-white text-black">
                <div className="absolute inset-0 dz-ci-construction-grid" />
                <div className="absolute inset-[15%] rounded-full border border-[#c8c8c8]" />
                <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-[#d1d1d1]" />
                <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-[#d1d1d1]" />
                <div className="absolute inset-[22%] flex items-center justify-center"><DotzeroMark size={155} /></div>
              </div>
              <div className="font-mono text-[9px] leading-7 text-[var(--text-muted)]">
                <div className="mb-2 font-semibold text-[var(--text)]">{t.constructionKey}</div>
                {t.constructionLabels.map((label, i) => <div key={label} className="flex justify-between gap-4"><span>{label}</span><span>{['1.0','2.6','0.6','58°','0.2','r = s/2'][i]}</span></div>)}
              </div>
            </div>
          </Cell>

          <Cell number="05" title={t.cells[5]} note={t.notes[5]} className="lg:col-span-5">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">{t.primaryTypeface}</div>
                <div className="mt-2 font-sans text-4xl font-medium tracking-[-.04em]">IBM Plex Sans</div>
                <p className="mt-4 max-w-md text-sm leading-6 dz-text-muted">{t.primaryBody}</p>
              </div>
              <div className="border-t dz-rule pt-5 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                {weights.map((weight, index) => (
                  <div key={weight} className="grid grid-cols-[5rem_1fr] items-baseline border-b dz-rule py-2 last:border-b-0">
                    <span className="text-xs">{weight}</span>
                    <span className="font-sans text-lg" style={{ fontWeight: [300, 400, 500, 600, 700][index] }}>Aa Bb Cc 0123</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 grid gap-5 border-t dz-rule pt-6 sm:grid-cols-2">
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">{t.technical}</div>
                <div className="mt-2 font-mono text-3xl tracking-[-.04em]">IBM Plex Mono</div>
              </div>
              <p className="text-xs leading-5 dz-text-muted">{t.technicalBody}</p>
            </div>
          </Cell>

          <Cell number="06" title={t.cells[6]} note={t.notes[6]} className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-px bg-[var(--line-soft)] sm:grid-cols-4">
              {t.variants.map(([name, note], i) => (
                <div key={name} className="bg-[var(--bg)] p-3 text-center">
                  <div className={`flex h-28 items-center justify-center ${i === 2 ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    <DotzeroMark size={i === 1 ? 48 : 70} variant={i === 3 ? 'outline' : 'default'} />
                  </div>
                  <div className="mt-3 text-xs font-semibold">{name}</div>
                  <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{note}</div>
                </div>
              ))}
            </div>
          </Cell>

          <Cell number="07" title={t.cells[7]} note={t.notes[7]} className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-px bg-[var(--line-soft)]">
              {[0, 45, 90].map((angle, i) => (
                <div key={angle} className="bg-[var(--bg)] px-2 py-4 text-center">
                  <div className="flex h-28 items-center justify-center bg-white text-black"><DotzeroMark size={62} rotation={angle} /></div>
                  <div className="mt-3 text-xs font-semibold">{angle}°</div>
                  <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{t.rotations[i]}</div>
                </div>
              ))}
            </div>
          </Cell>

          <Cell number="08" title={t.cells[8]} note={t.notes[8]} className="lg:col-span-5">
            <div className="flex min-h-44 flex-wrap items-end justify-between gap-6">
              {sizes.map((size, i) => (
                <figure key={size} className="m-0 grid justify-items-center gap-3">
                  <div className="flex min-h-24 items-end justify-center text-black"><DotzeroMark size={size} /></div>
                  <figcaption className="text-center">
                    <div className="text-xs font-semibold">{size} px</div>
                    <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{t.sizeLabels[i]}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Cell>

          <Cell number="09" title={t.cells[9]} note={t.notes[9]} className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {t.palette.map(([name, hex, use]) => (
                <div key={name} className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full border border-[#d7d7d7]" style={{ backgroundColor: hex }} />
                  <div className="mt-3 text-xs font-semibold">{name}</div>
                  <div className="mt-1 font-mono text-[8px] dz-text-muted">{hex}</div>
                  <div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{use}</div>
                </div>
              ))}
            </div>
          </Cell>

          <Cell number="10" title={t.cells[10]} note={t.notes[10]} className="lg:col-span-3">
            <div className="grid gap-7 sm:grid-cols-[12rem_1fr] sm:items-center">
              <div className="relative aspect-square border border-[#d8d8d8] bg-white text-black">
                <div className="absolute inset-0 dz-ci-construction-grid opacity-60" />
                <div className="absolute inset-[20%] border border-dashed border-[#c9c9c9]" />
                <div className="absolute inset-[28%] flex items-center justify-center"><DotzeroMark size={95} /></div>
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.1em] dz-text-muted">{t.clearTitle}</div>
                <p className="mt-3 text-sm leading-6">{t.clearBody}</p>
                <p className="mt-4 text-xs leading-5 dz-text-muted">{t.clearNote}</p>
              </div>
            </div>
          </Cell>

          <Cell number="11" title={t.cells[11]} note={t.notes[11]} className="lg:col-span-12">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              <figure className="m-0">
                <div className="flex min-h-36 flex-col justify-between border border-[#dfdfdf] bg-white p-4 text-black"><DotzeroLogotype className="w-[118px]" /><div className="font-mono text-[7px] uppercase tracking-[.08em]">Index · Foundation · CD/CI</div></div>
                <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usageCaptions[0]}</figcaption>
              </figure>
              <figure className="m-0">
                <div className="flex min-h-36 flex-col justify-between bg-white p-4 text-black"><DotzeroMark size={26} /><div className="font-mono text-[7px] uppercase tracking-[.08em]">Index · Foundation · CD/CI</div></div>
                <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usageCaptions[1]}</figcaption>
              </figure>
              <figure className="m-0">
                <div className="flex min-h-36 items-center justify-center"><div className="flex h-24 w-24 items-center justify-center rounded-[22px] bg-black text-white"><DotzeroMark size={62} /></div></div>
                <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usageCaptions[2]}</figcaption>
              </figure>
              <figure className="m-0">
                <div className="min-h-36 border border-[#dfdfdf] bg-white p-4 text-black"><DotzeroLogotype className="w-[132px]" /><div className="mt-8 border-l border-[#bdbdbd] pl-3 font-mono text-[8px] leading-4">RESEARCH<br />EXPLORATION<br />OPEN DIRECTION</div></div>
                <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usageCaptions[3]}</figcaption>
              </figure>
              <figure className="m-0">
                <div className="flex min-h-36 items-center gap-5 bg-[#d7d7d5] p-5 text-black"><DotzeroMark size={58} /><div className="font-sans text-sm leading-5">Research<br />Dialog<br />Open Direction</div></div>
                <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usageCaptions[4]}</figcaption>
              </figure>
            </div>
          </Cell>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t dz-rule pt-4 font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">
          <span>DOTZERO / CD + CI</span>
          <span>{t.footerSyntax}</span>
        </div>
      </div>
    </main>
  );
};

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DotzeroLogotype } from './DotzeroLogotype';
import { DotzeroMark } from './DotzeroMark';
import { DotMarker, FieldGlyph, SystemGlyph } from './GraphicSyntax';

type CellProps = {
  number: string;
  title: string;
  note?: string;
  className?: string;
  children: React.ReactNode;
};

const COPY = {
  it: {
    header: 'DOTZERO / LINEE GUIDA IDENTITÀ',
    meta: 'Personal Research Lab · CD / CI',
    system: 'CD / CI / SISTEMA VISIVO',
    title: 'IDENTITÀ.',
    intro: 'Il sistema visivo nasce dal segno: DOT · ZERO · OPEN DIRECTION. Logotipo e segno sono identità complementari e non vengono mai uniti in un lockup.',
    cells: [
      ['Significato del segno', '. + 0 + </> / domanda · individuo · apertura'],
      ['Sintassi grafica', '. = conoscenza · 0 = campo · </> = metodo / open direction'],
      ['Logotipo', '.DOTZERO / firma tipografica autonoma'],
      ['Segno', 'Segno autonomo · complementare al logotipo'],
      ['Costruzione', 'Griglia e proporzioni'],
      ['Tipografia', 'Sistema IBM Plex'],
      ['Variazioni del segno', 'Derivazioni controllate · solo segno'],
      ['Rotazione', 'Opzionale · mai predefinita'],
      ['Dimensioni', 'Da 16 px in su'],
      ['Palette', 'Rosso DOTZERO · nero · bianco · grigio'],
      ['Spazio di rispetto', 'Campo protetto'],
      ['Esempi d’uso', 'Digitale · stampa · spazio'],
    ],
    meaningLead: 'IL SEGNO / CONCETTO',
    meaningBody: 'Il segno contiene più letture simultanee. La grammatica di base è geometrica: punto, zero, diagonale e triangolo. Da questa struttura emergono origine, campo, domanda, gesto e direzione.',
    primitives: 'Quattro elementi / punto · zero · diagonale · triangolo',
    readings: [
      ['DOT / ORIGINE', 'Il punto è l’inizio: prima coordinata, prima domanda, primo nodo.'],
      ['ZERO / CAMPO', 'Lo zero non è vuoto: è uno spazio delimitato in cui la conoscenza può essere costruita.'],
      ['</> / COSTRUZIONE', 'La diagonale e il terminale angolare richiamano costruzione, sistema, apertura e chiusura.'],
      ['DOMANDA / RICERCA', 'Punto, campo e diagonale possono suggerire un punto interrogativo ancora aperto.'],
      ['INDIVIDUO / GESTO', 'Una lettura latente suggerisce una figura con il braccio alzato, senza fissarla in un’illustrazione.'],
      ['OPEN DIRECTION', 'La diagonale rompe la forma chiusa e indica movimento, continuazione e deviazione.'],
    ],
    principleLabel: 'PRINCIPIO',
    principle: 'A point enters a field. A question opens it. A direction leaves it.',
    principleBody: 'DOT / ZERO / QUESTION / INDIVIDUAL / OPEN DIRECTION sono letture simultanee dello stesso segno.',
    syntaxCards: [
      ['. / MARCATORE DI CONTENUTO', 'CONOSCENZA.', 'Origine, domanda, nodo, evidenza e focus. Il punto accompagna etichette, affermazioni, fonti e stati.'],
      ['0 / LOGICA DI CAMPO', 'CAMPO.', 'Lo zero diventa spazio di ricerca: progetto, modello, dataset o contesto.'],
      ['</> / MARCATORE DI SISTEMA', 'OPEN DIRECTION.', 'Costruzione, metodo, azione, transizione e movimento oltre il campo.'],
    ],
    syntaxDest: ['etichette · evidenza · stato · focus', 'progetti · modelli · dataset · contesti', 'metodo · strumenti · navigazione · transizioni'],
    separation: 'REGOLA DI SEPARAZIONE',
    separationBody: 'Il punto identifica conoscenza; </> indica ciò che il sistema fa con quella conoscenza. Non sono intercambiabili.',
    behaviour: 'COMPORTAMENTO',
    behaviourBody: 'All’inizio compare .DOTZERO. Durante la navigazione il logotipo lascia posto al segno autonomo.',
    relationship: 'REGOLA DI RELAZIONE',
    relationshipBody: 'Usa .DOTZERO quando il nome deve essere letto; usa il segno quando il riconoscimento può essere affidato al simbolo. Non affiancarli come un unico logo.',
    logotypeMeta: '.DOTZERO · punto iniziale',
    logotypeComplement: 'Complementare al segno',
    constructionKey: 'PROPORZIONI CHIAVE',
    constructionLabels: ['Testa', 'Altezza totale', 'Tratto principale', 'Diagonale', 'Sovrapposizione', 'Logica angoli'],
    primaryTypeface: 'Carattere principale',
    typeBody: 'Voce principale per titoli, testo editoriale, navigazione e interfaccia.',
    supportTypeface: 'Supporto / tecnico',
    supportBody: 'Dati, fonti, etichette, coordinate e metadati tecnici.',
    variationNames: ['Standard', 'Compatto', 'Inverso', 'Contorno'],
    variationUses: ['Predefinito', 'UI piccola', 'Campo scuro', 'Uso speciale'],
    rotations: ['Consigliato', 'Dinamico', 'Sperimentale'],
    sizes: ['UI / favicon', 'Navigazione', 'Interfaccia', 'Web / sezioni', 'Hero / stampa'],
    colors: [['Rosso DOTZERO', 'Primario'], ['Nero', 'Testo / UI'], ['Bianco', 'Sfondo'], ['Grigio', 'Elementi UI']],
    clearLabel: 'Spazio minimo',
    clearBody: 'Mantieni almeno l’altezza della testa circolare libera su ogni lato del segno.',
    clearNote: 'Testo, cornici, bordi immagine e controlli non devono entrare in questo campo.',
    usage: ['Header · logotipo', 'Header · segno', 'Icona app / solo segno', 'Documento / solo logotipo', 'Orientamento / solo segno'],
    signTitle: 'Segno DOTZERO',
    headerPreview: 'Indice · Foundation · CD/CI',
    usageNav: ['Ricerca', 'Dialogo', 'Profilo'],
    usageDoc: ['RICERCA', 'ESPLORAZIONE', 'OPEN DIRECTION'],
    usageWayfinding: ['Ricerca', 'Dialogo', 'Open Direction'],
    footer: '. = conoscenza · 0 = campo · </> = metodo · open direction',
  },
  de: {
    header: 'DOTZERO / IDENTITÄTSRICHTLINIEN',
    meta: 'Personal Research Lab · CD / CI',
    system: 'CD / CI / VISUELLES SYSTEM',
    title: 'IDENTITÄT.',
    intro: 'Das visuelle System beginnt mit dem Zeichen: DOT · ZERO · OPEN DIRECTION. Logotype und Zeichen sind komplementäre Identitäten und werden nie zu einem Lockup kombiniert.',
    cells: [
      ['Bedeutung des Zeichens', '. + 0 + </> / Frage · Individuum · Öffnung'],
      ['Grafische Syntax', '. = Wissen · 0 = Feld · </> = Methode / Open Direction'],
      ['Logotype', '.DOTZERO / eigenständige typografische Signatur'],
      ['Zeichen', 'Eigenständiges Zeichen · komplementär zur Logotype'],
      ['Konstruktion', 'Raster und Proportionen'],
      ['Typografie', 'IBM-Plex-System'],
      ['Zeichenvarianten', 'Kontrollierte Varianten · nur Zeichen'],
      ['Rotation', 'Optional · nie Standard'],
      ['Größen', 'Ab 16 px'],
      ['Farbpalette', 'DOTZERO Rot · Schwarz · Weiß · Grau'],
      ['Schutzraum', 'Geschütztes Feld'],
      ['Anwendungsbeispiele', 'Digital · Print · Raum'],
    ],
    meaningLead: 'DAS ZEICHEN / KONZEPT',
    meaningBody: 'Das Zeichen trägt mehrere Lesarten gleichzeitig. Seine Grundgrammatik ist geometrisch: Punkt, Null, Diagonale und Dreieck. Daraus entstehen Ursprung, Feld, Frage, Geste und Richtung.',
    primitives: 'Vier Elemente / Punkt · Null · Diagonale · Dreieck',
    readings: [
      ['DOT / URSPRUNG', 'Der Punkt ist der Anfang: erste Koordinate, erste Frage, erster Knoten.'],
      ['ZERO / FELD', 'Die Null ist keine Leere, sondern ein begrenzter Raum, in dem Wissen aufgebaut werden kann.'],
      ['</> / KONSTRUKTION', 'Diagonale und Winkelabschluss verweisen auf Konstruktion, System, Öffnung und Schließung.'],
      ['FRAGE / FORSCHUNG', 'Punkt, Feld und Diagonale können ein noch offenes Fragezeichen andeuten.'],
      ['INDIVIDUUM / GESTE', 'Eine latente Lesart erinnert an eine Figur mit erhobenem Arm, ohne sie festzuschreiben.'],
      ['OPEN DIRECTION', 'Die Diagonale durchbricht die geschlossene Form und zeigt Bewegung, Fortsetzung und Abweichung.'],
    ],
    principleLabel: 'PRINZIP',
    principle: 'A point enters a field. A question opens it. A direction leaves it.',
    principleBody: 'DOT / ZERO / QUESTION / INDIVIDUAL / OPEN DIRECTION sind gleichzeitige Lesarten desselben Zeichens.',
    syntaxCards: [
      ['. / INHALTSMARKER', 'WISSEN.', 'Ursprung, Frage, Knoten, Evidenz und Fokus. Der Punkt begleitet Labels, Aussagen, Quellen und Zustände.'],
      ['0 / FELDLOGIK', 'FELD.', 'Die Null wird zum Forschungsraum: Projekt, Modell, Datensatz oder Kontext.'],
      ['</> / SYSTEMMARKER', 'OPEN DIRECTION.', 'Konstruktion, Methode, Handlung, Übergang und Bewegung über das Feld hinaus.'],
    ],
    syntaxDest: ['Labels · Evidenz · Status · Fokus', 'Projekte · Modelle · Datensätze · Kontexte', 'Methode · Werkzeuge · Navigation · Übergänge'],
    separation: 'TRENNREGEL',
    separationBody: 'Der Punkt kennzeichnet Wissen; </> zeigt, was das System mit diesem Wissen tut. Beide sind nicht austauschbar.',
    behaviour: 'VERHALTEN',
    behaviourBody: 'Am Anfang erscheint .DOTZERO. Während der Navigation weicht die Logotype dem eigenständigen Zeichen.',
    relationship: 'BEZIEHUNGSREGEL',
    relationshipBody: 'Verwende .DOTZERO, wenn der Name gelesen werden soll; verwende das Zeichen, wenn die Wiedererkennung symbolisch getragen werden kann. Nicht zu einem Logo kombinieren.',
    logotypeMeta: '.DOTZERO · führender Punkt',
    logotypeComplement: 'Komplementär zum Zeichen',
    constructionKey: 'SCHLÜSSELPROPORTIONEN',
    constructionLabels: ['Kopf', 'Gesamthöhe', 'Hauptstrich', 'Diagonale', 'Überlagerung', 'Ecklogik'],
    primaryTypeface: 'Primäre Schrift',
    typeBody: 'Hauptstimme für Headlines, redaktionellen Text, Navigation und Interface.',
    supportTypeface: 'Unterstützend / technisch',
    supportBody: 'Daten, Quellenhinweise, Labels, Koordinaten und technische Metadaten.',
    variationNames: ['Standard', 'Kompakt', 'Negativ', 'Kontur'],
    variationUses: ['Standard', 'Kleine UI', 'Dunkles Feld', 'Sonderfall'],
    rotations: ['Empfohlen', 'Dynamisch', 'Experimentell'],
    sizes: ['UI / Favicon', 'Navigation', 'Interface', 'Web / Abschnitte', 'Hero / Print'],
    colors: [['DOTZERO Rot', 'Primär'], ['Schwarz', 'Text / UI'], ['Weiß', 'Hintergrund'], ['Grau', 'UI-Elemente']],
    clearLabel: 'Mindestabstand',
    clearBody: 'Rund um das Zeichen mindestens die Höhe des kreisförmigen Kopfes freihalten.',
    clearNote: 'Text, Rahmen, Bildkante und Bedienelemente dürfen dieses Feld nicht betreten.',
    usage: ['Header · Logotype', 'Header · Zeichen', 'App-Icon / nur Zeichen', 'Dokument / nur Logotype', 'Leitsystem / nur Zeichen'],
    signTitle: 'DOTZERO Zeichen',
    headerPreview: 'Index · Foundation · CD/CI',
    usageNav: ['Forschung', 'Dialog', 'Profil'],
    usageDoc: ['FORSCHUNG', 'EXPLORATION', 'OPEN DIRECTION'],
    usageWayfinding: ['Forschung', 'Dialog', 'Open Direction'],
    footer: '. = Wissen · 0 = Feld · </> = Methode · Open Direction',
  },
  en: {
    header: 'DOTZERO / IDENTITY GUIDELINES',
    meta: 'Personal Research Lab · CD / CI',
    system: 'CD / CI / VISUAL SYSTEM',
    title: 'IDENTITY.',
    intro: 'The visual system begins with the sign: DOT · ZERO · OPEN DIRECTION. Logotype and sign are complementary identities and are never combined into a lockup.',
    cells: [
      ['Meaning of the sign', '. + 0 + </> / question · individual · opening'],
      ['Graphic syntax', '. = knowledge · 0 = field · </> = method / open direction'],
      ['Logotype', '.DOTZERO / standalone typographic signature'],
      ['Sign', 'Standalone sign · complementary to logotype'],
      ['Construction', 'Grid and proportions'],
      ['Typography', 'IBM Plex system'],
      ['Sign variations', 'Controlled variants · sign only'],
      ['Rotation', 'Optional · never default'],
      ['Sizes', '16 px and upward'],
      ['Color palette', 'DOTZERO Red · black · white · grey'],
      ['Clear space', 'Protected field'],
      ['Usage examples', 'Digital · print · space'],
    ],
    meaningLead: 'THE SIGN / CONCEPT',
    meaningBody: 'The sign holds several readings at the same time. Its base grammar is geometric: point, zero, diagonal and triangle. From that structure emerge origin, field, question, gesture and direction.',
    primitives: 'Four elements / point · zero · diagonal · triangle',
    readings: [
      ['DOT / ORIGIN', 'The point is the beginning: first coordinate, first question, first node.'],
      ['ZERO / FIELD', 'Zero is not emptiness but a bounded space in which knowledge can be constructed.'],
      ['</> / CONSTRUCTION', 'The diagonal and angular terminal suggest construction, system, opening and closing.'],
      ['QUESTION / RESEARCH', 'Point, field and diagonal can suggest an unresolved question mark.'],
      ['INDIVIDUAL / GESTURE', 'A latent reading suggests a figure with a raised arm without fixing it as an illustration.'],
      ['OPEN DIRECTION', 'The diagonal breaks the closed form and indicates movement, continuation and deviation.'],
    ],
    principleLabel: 'PRINCIPLE',
    principle: 'A point enters a field. A question opens it. A direction leaves it.',
    principleBody: 'DOT / ZERO / QUESTION / INDIVIDUAL / OPEN DIRECTION are simultaneous readings of the same sign.',
    syntaxCards: [
      ['. / CONTENT MARKER', 'KNOWLEDGE.', 'Origin, question, node, evidence and focus. The dot accompanies labels, claims, sources and states.'],
      ['0 / FIELD LOGIC', 'FIELD.', 'The zero becomes a research space: project, model, dataset or context.'],
      ['</> / SYSTEM MARKER', 'OPEN DIRECTION.', 'Construction, method, action, transition and movement beyond the field.'],
    ],
    syntaxDest: ['labels · evidence · status · focus', 'projects · models · datasets · contexts', 'method · tools · navigation · transitions'],
    separation: 'SEPARATION RULE',
    separationBody: 'The dot identifies knowledge; </> indicates what the system does with that knowledge. They are related but not interchangeable.',
    behaviour: 'BEHAVIOUR',
    behaviourBody: 'At the top, .DOTZERO names the identity. During navigation, the logotype yields to the standalone sign.',
    relationship: 'RELATIONSHIP RULE',
    relationshipBody: 'Use .DOTZERO when the name must be read; use the sign when recognition can be carried by the symbol. Never place them side by side as one logo.',
    logotypeMeta: '.DOTZERO · leading dot',
    logotypeComplement: 'Complementary to the sign',
    constructionKey: 'KEY PROPORTIONS',
    constructionLabels: ['Head', 'Total height', 'Main stroke', 'Diagonal', 'Top overlap', 'Corner logic'],
    primaryTypeface: 'Primary typeface',
    typeBody: 'Core voice for headlines, editorial text, navigation and interface.',
    supportTypeface: 'Supporting / technical',
    supportBody: 'Data, source notes, labels, coordinates and technical metadata.',
    variationNames: ['Standard', 'Compact', 'Reverse', 'Outline'],
    variationUses: ['Default', 'Small UI', 'Dark field', 'Special use'],
    rotations: ['Recommended', 'Dynamic', 'Experimental'],
    sizes: ['UI / favicon', 'Navigation', 'Interface', 'Web / sections', 'Hero / print'],
    colors: [['DOTZERO Red', 'Primary'], ['Black', 'Text / UI'], ['White', 'Background'], ['Grey', 'UI elements']],
    clearLabel: 'Minimum clear space',
    clearBody: 'Keep at least the height of the circular head clear around every side of the mark.',
    clearNote: 'No text, frame, image edge or interface control may enter this field.',
    usage: ['Header · logotype', 'Header · sign', 'App icon / sign only', 'Document / logotype only', 'Wayfinding / sign only'],
    signTitle: 'DOTZERO sign',
    headerPreview: 'Index · Foundation · CD/CI',
    usageNav: ['Research', 'Dialog', 'About'],
    usageDoc: ['RESEARCH', 'EXPLORATION', 'OPEN DIRECTION'],
    usageWayfinding: ['Research', 'Dialog', 'Open Direction'],
    footer: '. = knowledge · 0 = field · </> = method · open direction',
  },
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

const ConstructionDiagram: React.FC<{ t: typeof COPY.en }> = ({ t }) => {
  const values = ['1.0', '2.6', '0.6', '58°', '0.2', 'r = s/2'];
  return (
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
        <div className="grid grid-cols-[1fr_auto] gap-x-5">
          {t.constructionLabels.map((label, i) => <React.Fragment key={label}><span>{label}</span><span>{values[i]}</span></React.Fragment>)}
        </div>
      </div>
    </div>
  );
};

const ClearSpaceDiagram: React.FC<{ t: typeof COPY.en }> = ({ t }) => (
  <div className="grid gap-7 sm:grid-cols-[12rem_1fr] sm:items-center">
    <div className="relative aspect-square border border-[#d8d8d8] bg-white text-black">
      <div className="absolute inset-0 dz-ci-construction-grid opacity-60" />
      <div className="absolute inset-[20%] border border-dashed border-[#c9c9c9]" />
      <div className="absolute inset-[28%] flex items-center justify-center"><DotzeroMark size={95} /></div>
    </div>
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.1em] dz-text-muted">{t.clearLabel}</div>
      <p className="mt-3 text-sm leading-6">{t.clearBody}</p>
      <p className="mt-4 text-xs leading-5 dz-text-muted">{t.clearNote}</p>
    </div>
  </div>
);

const MeaningPanel: React.FC<{ t: typeof COPY.en }> = ({ t }) => (
  <div className="grid gap-10 xl:grid-cols-12 xl:items-start">
    <div className="xl:col-span-4">
      <div className="flex min-h-[34rem] items-center justify-center bg-white p-8 text-black sm:p-12">
        <DotzeroMark size="72%" title={t.signTitle} />
      </div>
      <div className="mt-4 font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">{t.primitives}</div>
    </div>
    <div className="xl:col-span-8">
      <div className="font-mono text-[9px] uppercase tracking-[.14em] text-[var(--accent)]">{t.meaningLead}</div>
      <h2 className="dz-h2 mt-5 max-w-4xl text-4xl sm:text-6xl lg:text-7xl">DOT. ZERO.<br />OPEN DIRECTION.</h2>
      <p className="dz-body-strong mt-7 max-w-3xl">{t.meaningBody}</p>
      <div className="mt-10 grid gap-px bg-[var(--line-soft)] p-px md:grid-cols-2 xl:grid-cols-3">
        {t.readings.map(([title, body]) => (
          <div key={title} className="bg-[var(--bg)] p-5">
            <div className="font-mono text-[9px] font-semibold uppercase tracking-[.12em]">{title}</div>
            <p className="mt-3 text-sm leading-6 dz-text-muted">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t dz-rule pt-8">
        <div className="font-mono text-[9px] font-semibold uppercase tracking-[.12em]">{t.principleLabel}</div>
        <p className="mt-4 font-display text-2xl font-medium leading-tight tracking-[-.03em]">{t.principle}</p>
        <p className="mt-4 text-sm leading-6 dz-text-muted">{t.principleBody}</p>
      </div>
    </div>
  </div>
);

const GraphicSyntaxPanel: React.FC<{ t: typeof COPY.en }> = ({ t }) => {
  const glyphs = [<DotMarker key="dot" size="lg" />, <FieldGlyph key="field" size={26} />, <SystemGlyph key="system" size={50} />];
  return (
    <div>
      <div className="grid gap-px bg-[var(--line-soft)] p-px lg:grid-cols-3">
        {t.syntaxCards.map(([meta, title, body], i) => (
          <div key={meta} className="bg-[var(--bg)] p-6 sm:p-8">
            {glyphs[i]}
            <div className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[.13em]">{meta}</div>
            <h3 className="dz-h3 mt-3 text-3xl">{title}</h3>
            <p className="dz-body mt-5">{body}</p>
            <div className="mt-6 border-t dz-rule pt-4 font-mono text-[8px] uppercase leading-5 tracking-[.11em] dz-text-muted">{t.syntaxDest[i]}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-8 border-t dz-rule pt-7 md:grid-cols-2">
        <div><div className="font-mono text-[9px] font-semibold uppercase tracking-[.12em]">{t.separation}</div><p className="mt-4 text-sm leading-6 dz-text-muted">{t.separationBody}</p></div>
        <div><div className="font-mono text-[9px] font-semibold uppercase tracking-[.12em]">{t.behaviour}</div><p className="mt-4 text-sm leading-6 dz-text-muted">{t.behaviourBody}</p></div>
      </div>
    </div>
  );
};

const UsageExamples: React.FC<{ t: typeof COPY.en }> = ({ t }) => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
    <figure className="m-0">
      <div className="flex min-h-36 flex-col justify-between border border-[#dfdfdf] bg-white p-4 text-black">
        <DotzeroLogotype className="w-[118px]" /><div className="flex gap-4 font-mono text-[7px] uppercase tracking-[.08em]">{t.usageNav.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usage[0]}</figcaption>
    </figure>
    <figure className="m-0">
      <div className="flex min-h-36 flex-col justify-between bg-white p-4 text-black"><DotzeroMark size={26} /><div className="font-mono text-[8px] uppercase tracking-[.12em] text-[#777]">{t.headerPreview}</div></div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usage[1]}</figcaption>
    </figure>
    <figure className="m-0">
      <div className="flex min-h-36 items-center justify-center"><div className="flex h-24 w-24 items-center justify-center rounded-[22px] bg-black text-white"><DotzeroMark size={62} /></div></div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usage[2]}</figcaption>
    </figure>
    <figure className="m-0">
      <div className="min-h-36 border border-[#dfdfdf] bg-white p-4 text-black"><DotzeroLogotype className="w-[132px]" /><div className="mt-8 border-l border-[#bdbdbd] pl-3 font-mono text-[8px] leading-4">{t.usageDoc.map((item) => <React.Fragment key={item}>{item}<br /></React.Fragment>)}</div></div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usage[3]}</figcaption>
    </figure>
    <figure className="m-0">
      <div className="flex min-h-36 items-center gap-5 bg-[#d7d7d5] p-5 text-black"><DotzeroMark size={58} /><div className="font-sans text-sm leading-5">{t.usageWayfinding.map((item) => <React.Fragment key={item}>{item}<br /></React.Fragment>)}</div></div>
      <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[.1em] dz-text-muted">{t.usage[4]}</figcaption>
    </figure>
  </div>
);

export const IdentityPage: React.FC = () => {
  const { language } = useLanguage();
  const t = COPY[language];
  const weights = ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold'];
  const sizes = [16, 24, 32, 48, 96] as const;
  const colorHex = ['#F70B0D', '#000000', '#FFFFFF', '#E5E5E5'];

  return (
    <main id="identity" className="pt-16">
      <header className="border-b dz-border">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b dz-rule pb-5">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">{t.header}</div>
            <div className="font-mono text-[8px] uppercase tracking-[0.14em] dz-text-muted">{t.meta}</div>
          </div>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="dz-meta">{t.system}</div>
              <h1 className="dz-h1 mt-5 text-[clamp(4rem,10vw,9rem)]">{t.title}</h1>
              <p className="dz-body-strong mt-7 max-w-2xl">{t.intro}</p>
            </div>
            <div className="lg:col-span-5"><div className="bg-white p-6 text-black sm:p-8"><DotzeroLogotype className="w-full" title=".DOTZERO" /></div></div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[96rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-px bg-[var(--line-soft)] p-px lg:grid-cols-12">
          <Cell number="00" title={t.cells[0][0]} note={t.cells[0][1]} className="lg:col-span-12"><MeaningPanel t={t} /></Cell>
          <Cell number="01" title={t.cells[1][0]} note={t.cells[1][1]} className="lg:col-span-12"><GraphicSyntaxPanel t={t} /></Cell>

          <Cell number="02" title={t.cells[2][0]} note={t.cells[2][1]} className="lg:col-span-7">
            <div className="flex min-h-56 items-center justify-center bg-white p-8 text-black sm:min-h-72"><DotzeroLogotype className="w-full max-w-[720px]" /></div>
            <div className="mt-4 flex flex-wrap justify-between gap-3 font-mono text-[8px] uppercase tracking-[.11em] dz-text-muted"><span>{t.logotypeMeta}</span><span>{t.logotypeComplement}</span></div>
            <div className="mt-6 border-l-2 border-[var(--accent)] pl-4"><div className="font-mono text-[8px] font-semibold uppercase tracking-[.12em]">{t.relationship}</div><p className="mt-2 max-w-2xl text-sm leading-6 dz-text-muted">{t.relationshipBody}</p></div>
          </Cell>

          <Cell number="03" title={t.cells[3][0]} note={t.cells[3][1]} className="lg:col-span-2"><div className="flex min-h-56 items-center justify-center bg-white p-6 text-black sm:min-h-72"><DotzeroMark size={180} /></div></Cell>
          <Cell number="04" title={t.cells[4][0]} note={t.cells[4][1]} className="lg:col-span-3"><ConstructionDiagram t={t} /></Cell>

          <Cell number="05" title={t.cells[5][0]} note={t.cells[5][1]} className="lg:col-span-5">
            <div className="grid gap-8 sm:grid-cols-2">
              <div><div className="font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">{t.primaryTypeface}</div><div className="mt-2 font-sans text-4xl font-medium tracking-[-.04em]">IBM Plex Sans</div><p className="mt-4 max-w-md text-sm leading-6 dz-text-muted">{t.typeBody}</p></div>
              <div className="border-t dz-rule pt-5 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                {weights.map((weight, index) => <div key={weight} className="grid grid-cols-[5rem_1fr] items-baseline border-b dz-rule py-2 last:border-b-0"><span className="text-xs">{weight}</span><span className="font-sans text-lg" style={{ fontWeight: [300,400,500,600,700][index] }}>Aa Bb Cc 0123</span></div>)}
              </div>
            </div>
            <div className="mt-8 grid gap-5 border-t dz-rule pt-6 sm:grid-cols-2"><div><div className="font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted">{t.supportTypeface}</div><div className="mt-2 font-mono text-3xl tracking-[-.04em]">IBM Plex Mono</div></div><p className="text-xs leading-5 dz-text-muted">{t.supportBody}</p></div>
          </Cell>

          <Cell number="06" title={t.cells[6][0]} note={t.cells[6][1]} className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-px bg-[var(--line-soft)] sm:grid-cols-4">
              {t.variationNames.map((name, i) => <div key={name} className="bg-[var(--bg)] p-3 text-center"><div className={`flex h-28 items-center justify-center ${i===2?'bg-black text-white':'bg-white text-black'}`}><DotzeroMark size={i===1?48:70} variant={i===3?'outline':'standard'} /></div><div className="mt-3 text-xs font-semibold">{name}</div><div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{t.variationUses[i]}</div></div>)}
            </div>
          </Cell>

          <Cell number="07" title={t.cells[7][0]} note={t.cells[7][1]} className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-px bg-[var(--line-soft)]">{[0,45,90].map((angle,i)=><div key={angle} className="bg-[var(--bg)] px-2 py-4 text-center"><div className="flex h-28 items-center justify-center bg-white text-black"><DotzeroMark size={62} rotation={angle} /></div><div className="mt-3 text-xs font-semibold">{angle}°</div><div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{t.rotations[i]}</div></div>)}</div>
          </Cell>

          <Cell number="08" title={t.cells[8][0]} note={t.cells[8][1]} className="lg:col-span-5">
            <div className="flex min-h-44 flex-wrap items-end justify-between gap-6">{sizes.map((size,i)=><figure key={size} className="m-0 grid justify-items-center gap-3"><div className="flex min-h-24 items-end justify-center text-black"><DotzeroMark size={size} /></div><figcaption className="text-center"><div className="text-xs font-semibold">{size} px</div><div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{t.sizes[i]}</div></figcaption></figure>)}</div>
          </Cell>

          <Cell number="09" title={t.cells[9][0]} note={t.cells[9][1]} className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">{t.colors.map(([name,use],i)=><div key={name} className="text-center"><div className="mx-auto h-16 w-16 rounded-full border border-[#d7d7d7]" style={{ backgroundColor: colorHex[i] }} /><div className="mt-3 text-xs font-semibold">{name}</div><div className="mt-1 font-mono text-[8px] dz-text-muted">{colorHex[i]}</div><div className="mt-1 font-mono text-[7px] uppercase dz-text-muted">{use}</div></div>)}</div>
          </Cell>

          <Cell number="10" title={t.cells[10][0]} note={t.cells[10][1]} className="lg:col-span-3"><ClearSpaceDiagram t={t} /></Cell>
          <Cell number="11" title={t.cells[11][0]} note={t.cells[11][1]} className="lg:col-span-12"><UsageExamples t={t} /></Cell>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t dz-rule pt-4 font-mono text-[8px] uppercase tracking-[.12em] dz-text-muted"><span>DOTZERO / CD + CI</span><span>{t.footer}</span></div>
      </div>
    </main>
  );
};

import { Language } from './types';

const modulorStudioData = {
  backToDotzero: {
    it: '← Ritorna al Bauhaus Dotzero',
    de: '← Zurück zu Bauhaus Dotzero',
    en: '← Back to Dotzero Bauhaus',
  },
  status: {
    it: 'MOTORE GRAFICO SHADER 60FPS ATTIVO',
    de: 'SHADER-GRAFIK-ENGINE 60FPS AKTIV',
    en: 'SHADER GRAPHICS ENGINE 60FPS ACTIVE',
  },
  title: {
    it: 'MODULOR STUDIO',
    de: 'MODULOR STUDIO',
    en: 'MODULOR STUDIO',
  },
  subtitle: {
    it: 'Laboratorio visivo generativo & sonoro a proporzioni armoniche e reticoli cinetici. Muovi il cursore per modulare campi di forza e flussi particellari.',
    de: 'Generatives visuelles & akustisches Labor für harmonische Proportionen und kinetische Raster. Bewege den Cursor, um Kraftfelder und Partikelströme zu modulieren.',
    en: 'Generative visual & sonic laboratory of harmonic proportions and kinetic grids. Move your cursor to modulate force fields and particle vectors.',
  },
  presetLabel: {
    it: 'PRESET VISIVO MODULOR',
    de: 'MODULOR VISUELLES PRESET',
    en: 'MODULOR VISUAL PRESET',
  },
  audioTitle: {
    it: 'SINTETIZZATORE ARMONICO GENERATIVO',
    de: 'GENERATIVER HARMONISCHER SYNTHESIZER',
    en: 'GENERATIVE HARMONIC SYNTHESIZER',
  },
  audioDesc: {
    it: 'Generatore sinusoidale in tempo reale (Web Audio API) che accorda frequenze armoniche in base alla velocità del cursore e alle coordinate dei nodi.',
    de: 'Echtzeit-Sinusgenerator (Web Audio API), der harmonische Frequenzen an Mausgeschwindigkeit und Knoten anpasst.',
    en: 'Real-time sinusoidal generator (Web Audio API) tuning harmonic frequencies based on cursor velocity and node coordinates.',
  },
  audioToggleStart: {
    it: 'Attiva Sintetizzatore Spaziale',
    de: 'Raumsynthesizer Aktivieren',
    en: 'Activate Spatial Synth',
  },
  audioToggleStop: {
    it: 'Arresta Sintetizzatore',
    de: 'Synthesizer Stoppen',
    en: 'Stop Synthesizer',
  },
  shaderControls: {
    it: 'CONTROLLI PARAMETRICI SHADER',
    de: 'PARAMETRISCHE SHADER-STEUERUNG',
    en: 'PARAMETRIC SHADER CONTROLS',
  },
  particlesLabel: {
    it: 'Densità Particellare',
    de: 'Partikeldichte',
    en: 'Particle Density',
  },
  speedLabel: {
    it: 'Velocità Flusso',
    de: 'Strömungsgeschwindigkeit',
    en: 'Flow Speed',
  },
  glowLabel: {
    it: 'Intensità Bloom Glow',
    de: 'Bloom-Glow-Intensität',
    en: 'Bloom Glow Intensity',
  },
  trailLabel: {
    it: 'Persistenza Scia Cinetica',
    de: 'Kinetische Schweifpersistenz',
    en: 'Kinetic Trail Persistence',
  },
  snapshotBtn: {
    it: 'Cattura Fotogramma 4K (PNG)',
    de: '4K-Frame Erfassen (PNG)',
    en: 'Capture 4K Frame (PNG)',
  },
  snapshotSaved: {
    it: 'Fotogramma Salvato!',
    de: 'Frame Gespeichert!',
    en: 'Frame Saved!',
  },
  resetCanvasBtn: {
    it: 'Resetta Flusso',
    de: 'Fluss Zurücksetzen',
    en: 'Reset Flow',
  },
  burstBtn: {
    it: 'Onda d’Urto Cinetica (Click)',
    de: 'Kinetische Schockwelle (Klick)',
    en: 'Kinetic Shockwave (Click)',
  },
  nodesTitle: {
    it: 'PIPELINE DI GENERAZIONE MULTIMODALE',
    de: 'MULTIMODALE GENERATIONS-PIPELINE',
    en: 'MULTIMODAL GENERATION PIPELINE',
  },
  nodes: [
    {
      id: 'node-1',
      title: { it: 'Prompt Semantico', de: 'Semantischer Prompt', en: 'Semantic Prompt' },
      desc: { it: 'Vettorializzazione del concetto visivo', de: 'Vektorisierung des visuellen Konzepts', en: 'Vectorization of visual concept' },
      tag: 'LATENT INPUT',
    },
    {
      id: 'node-2',
      title: { it: 'Shader Neurale 4D', de: 'Neuronaler 4D-Shader', en: 'Neural 4D Shader' },
      desc: { it: 'Interpolazione continua tra geometria e luce', de: 'Kontinuierliche Interpolation von Licht und Geometrie', en: 'Continuous interpolation of geometry and light' },
      tag: 'RAYMARCHING',
    },
    {
      id: 'node-3',
      title: { it: 'Sintesi Audio Spaziale', de: 'Räumliche Audiosynthese', en: 'Spatial Audio Synth' },
      desc: { it: 'Frequenze risonanti a 432Hz in modulazione', de: '432Hz resonante modulierende Frequenzen', en: '432Hz resonant modulating frequencies' },
      tag: 'WEB AUDIO',
    },
  ],
};
export const UI_TEXT = {
  header: {
    origin: {
      it: 'DESSAU · 1919—2026',
      de: 'DESSAU · 1919—2026',
      en: 'DESSAU · 1919—2026',
    },
    gridStatus: {
      it: 'GRIGLIA 12 COL',
      de: 'RASTER 12 SPALTEN',
      en: 'GRID 12 COLUMNS',
    },
    nav: {
      manifesto: { it: 'Manifesto', de: 'Manifest', en: 'Manifesto' },
      theory: { it: 'Teoria', de: 'Theorie', en: 'Theory' },
      projects: { it: 'Progetti', de: 'Projekte', en: 'Projects' },
      laboratory: { it: 'Laboratorio', de: 'Labor', en: 'Laboratory' },
      contact: { it: 'Contatti', de: 'Kontakt', en: 'Contact' },
      modulor: { it: 'Modulor Studio', de: 'Modulor Studio', en: 'Modulor Studio' },
      musa: { it: 'Modulor Studio', de: 'Modulor Studio', en: 'Modulor Studio' },
    },
    gridButton: {
      it: 'Griglia',
      de: 'Raster',
      en: 'Grid',
    },
    gridTooltip: {
      it: 'Attiva/Disattiva griglia costruttivista',
      de: 'Konstruktivistisches Raster umschalten',
      en: 'Toggle constructivist grid lines',
    },
    themeBauhaus: { it: 'Bauhaus', de: 'Bauhaus', en: 'Bauhaus' },
    themeMono: { it: 'Mono', de: 'Mono', en: 'Mono' },
    themeDeStijl: { it: 'De Stijl', de: 'De Stijl', en: 'De Stijl' },
  },
  hero: {
    badge: {
      it: 'ATELIER DI DESIGN & FORMA PRIMARIA',
      de: 'ATELIER FÜR DESIGN & PRIMÄRFORMEN',
      en: 'STUDIO OF DESIGN & PRIMARY FORM',
    },
    subtitle: {
      it: "Il punto d’origine di ogni forma. Un approccio radicalmente minimalista fondato sui precetti del Bauhaus: eliminazione dell'ornamento, rigore geometrico e verità dei colori primari.",
      de: "Der Ursprungspunkt jeder Form. Ein radikal minimalistischer Ansatz, gegründet auf den Lehrsätzen des Bauhauses: Beseitigung des Ornaments, geometrische Strenge und Wahrheit der Primärfarben.",
      en: "The origin point of every form. A radically minimalist stance grounded in Bauhaus principles: elimination of ornament, geometric rigor, and the truth of primary colors.",
    },
    ctaProjects: {
      it: 'Esplora i Progetti',
      de: 'Projekte Entdecken',
      en: 'Explore Projects',
    },
    ctaLab: {
      it: 'Laboratorio Geometrico',
      de: 'Geometrisches Labor',
      en: 'Geometric Lab',
    },
    ctaModulorBanner: {
      it: 'MODULOR STUDIO → SOTTOPAGINA GENERATIVA',
      de: 'MODULOR STUDIO → GENERATIVE UNTERSEITE',
      en: 'MODULOR STUDIO → GENERATIVE SUBPAGE',
    },
    ctaMusaBanner: {
      it: 'MODULOR STUDIO → SOTTOPAGINA GENERATIVA',
      de: 'MODULOR STUDIO → GENERATIVE UNTERSEITE',
      en: 'MODULOR STUDIO → GENERATIVE SUBPAGE',
    },
    metricOriginLabel: {
      it: 'Origine Weimar',
      de: 'Ursprung Weimar',
      en: 'Weimar Origin',
    },
    metricOrnamentLabel: {
      it: 'Ornamento',
      de: 'Ornament',
      en: 'Ornament',
    },
    metricColorsLabel: {
      it: 'Colori Primari',
      de: 'Primärfarben',
      en: 'Primary Colors',
    },
    sculptureTitle: {
      it: 'SCULTURA CINETICA N. 0',
      de: 'KINETISCHE SKULPTUR NR. 0',
      en: 'KINETIC SCULPTURE NO. 0',
    },
    sculptureHint: {
      it: 'CLICCA PER TRASFORMARE',
      de: 'KLICKEN ZUM TRANSFORMIEREN',
      en: 'CLICK TO TRANSFORM',
    },
    sculptureState: {
      it: 'STATO',
      de: 'STATUS',
      en: 'STATE',
    },
    pureElements: {
      it: 'ELEMENTI PURI:',
      de: 'REINE ELEMENTE:',
      en: 'PURE ELEMENTS:',
    },
    circle: { it: 'Cerchio', de: 'Kreis', en: 'Circle' },
    square: { it: 'Quadrato', de: 'Quadrat', en: 'Square' },
    triangle: { it: 'Triangolo', de: 'Dreieck', en: 'Triangle' },
  },
  modulorTeaser: {
    badge: {
      it: 'NUOVA SOTTOPAGINA · EFFETTI CINETICI & AUDIO-VISIVI',
      de: 'NEUE UNTERSEITE · KINETISCHE & AUDIO-VISUELLE EFFEKTE',
      en: 'NEW SUBPAGE · KINETIC & AUDIO-VISUAL FX',
    },
    title: {
      it: 'MODULOR STUDIO · ESPERIENZA GENERATIVA',
      de: 'MODULOR STUDIO · GENERATIVE ERFAHRUNG',
      en: 'MODULOR STUDIO · GENERATIVE EXPERIENCE',
    },
    desc: {
      it: 'Laboratorio digitale di proporzioni armoniche e dinamiche visive: simulazione particellare in tempo reale, shader a luce reattiva, sintesi sonora sinusoidale e pipeline di nodi modulari.',
      de: 'Digitales Labor für harmonische Proportionen und visuelle Dynamiken: Echtzeit-Partikelsimulation, reaktive Lichtshader, sinusförmige Klangsynthese und modulare Knoten-Pipeline.',
      en: 'Digital laboratory of harmonic proportions and fluid visual dynamics: real-time particle simulation, light-reactive shaders, sinusoidal sound synthesis, and modular node pipelines.',
    },
    ctaOpen: {
      it: 'Entra nel Modulor Studio',
      de: 'Modulor Studio Betreten',
      en: 'Enter Modulor Studio',
    },
    feature1: {
      it: 'Particelle & Fluid Dynamics a 60 FPS',
      de: 'Partikel & Fluiddynamik bei 60 FPS',
      en: 'Particles & Fluid Dynamics at 60 FPS',
    },
    feature2: {
      it: 'Sintetizzatore Armonico Web Audio',
      de: 'Web Audio Harmonischer Synthesizer',
      en: 'Web Audio Harmonic Synthesizer',
    },
    feature3: {
      it: 'Controlli Shader & Snapshot PNG',
      de: 'Shader-Steuerung & PNG-Snapshot',
      en: 'Shader Controls & PNG Snapshot',
    },
  },
  musaTeaser: {
    badge: {
      it: 'NUOVA SOTTOPAGINA · EFFETTI CINETICI & AUDIO-VISIVI',
      de: 'NEUE UNTERSEITE · KINETISCHE & AUDIO-VISUELLE EFFEKTE',
      en: 'NEW SUBPAGE · KINETIC & AUDIO-VISUAL FX',
    },
    title: {
      it: 'MODULOR STUDIO · ESPERIENZA GENERATIVA',
      de: 'MODULOR STUDIO · GENERATIVE ERFAHRUNG',
      en: 'MODULOR STUDIO · GENERATIVE EXPERIENCE',
    },
    desc: {
      it: 'Laboratorio digitale di proporzioni armoniche e dinamiche visive: simulazione particellare in tempo reale, shader a luce reattiva, sintesi sonora sinusoidale e pipeline di nodi modulari.',
      de: 'Digitales Labor für harmonische Proportionen und visuelle Dynamiken: Echtzeit-Partikelsimulation, reaktive Lichtshader, sinusförmige Klangsynthese und modulare Knoten-Pipeline.',
      en: 'Digital laboratory of harmonic proportions and fluid visual dynamics: real-time particle simulation, light-reactive shaders, sinusoidal sound synthesis, and modular node pipelines.',
    },
    ctaOpen: {
      it: 'Entra nel Modulor Studio',
      de: 'Modulor Studio Betreten',
      en: 'Enter Modulor Studio',
    },
    feature1: {
      it: 'Particelle & Fluid Dynamics a 60 FPS',
      de: 'Partikel & Fluiddynamik bei 60 FPS',
      en: 'Particles & Fluid Dynamics at 60 FPS',
    },
    feature2: {
      it: 'Sintetizzatore Armonico Web Audio',
      de: 'Web Audio Harmonischer Synthesizer',
      en: 'Web Audio Harmonic Synthesizer',
    },
    feature3: {
      it: 'Controlli Shader & Snapshot PNG',
      de: 'Shader-Steuerung & PNG-Snapshot',
      en: 'Shader Controls & PNG Snapshot',
    },
  },
  manifesto: {
    badge: {
      it: 'CANONE METODOLOGICO',
      de: 'METHODISCHER KANON',
      en: 'METHODOLOGICAL CANON',
    },
    title: {
      it: 'IL MANIFESTO',
      de: 'DAS MANIFEST',
      en: 'THE MANIFESTO',
    },
    quote: {
      it: "«L'architettura e il design non sono applicazione di ornamenti, ma sintesi di rigore logico, materiali onesti e geometria primaria.»",
      de: '„Architektur und Gestaltung sind keine Zierde, sondern Synthese aus logischer Strenge, ehrlichen Materialien und primärer Geometrie.“',
      en: '"Architecture and design are not the application of ornament, but the synthesis of logical rigor, honest materials, and primary geometry."',
    },
    deepDiveBadge: {
      it: 'APPROFONDIMENTO TEORICO',
      de: 'THEORETISCHE VERTIEFUNG',
      en: 'THEORETICAL DEEP DIVE',
    },
    activeLabel: {
      it: 'ATTIVO',
      de: 'AKTIV',
      en: 'ACTIVE',
    },
    tags: {
      origin: { it: 'ORIGINE: WEIMAR 1919', de: 'URSPRUNG: WEIMAR 1919', en: 'ORIGIN: WEIMAR 1919' },
      canon: { it: 'CANONE: RADICALE', de: 'KANON: RADIKAL', en: 'CANON: RADICAL' },
      rigor: { it: 'RIGORE: 100%', de: 'STRENGE: 100%', en: 'RIGOR: 100%' },
    },
  },
  theory: {
    badge: {
      it: 'PSICOLOGIA DELLA FORMA · WEIMAR 1923',
      de: 'FORMPSYCHOLOGIE · WEIMAR 1923',
      en: 'PSYCHOLOGY OF FORM · WEIMAR 1923',
    },
    title: {
      it: 'FORMA & COLORE PRIMARIO',
      de: 'FORM & PRIMÄRFARBE',
      en: 'FORM & PRIMARY COLOR',
    },
    intro: {
      it: "Nel 1923 Wassily Kandinsky sottopose agli studenti del Bauhaus un celebre questionario per indagare l'associazione universale tra le tre forme archetipiche e i tre colori primari.",
      de: '1923 legte Wassily Kandinsky den Bauhaus-Studierenden einen berühmten Fragebogen vor, um die universelle Zuordnung zwischen den drei Urformen und den drei Primärfarben zu erforschen.',
      en: 'In 1923, Wassily Kandinsky distributed a historic questionnaire to Bauhaus students investigating the universal association between the three archetypal forms and three primary colors.',
    },
    expBadge: {
      it: 'ESPERIMENTO INTERATTIVO N. 1',
      de: 'INTERAKTIVES EXPERIMENT NR. 1',
      en: 'INTERACTIVE EXPERIMENT NO. 1',
    },
    expInstruction: {
      it: 'Abbina ogni forma geometrica al suo colore primario',
      de: 'Ordne jeder geometrischen Form ihre Primärfarbe zu',
      en: 'Match each geometric shape with its primary color',
    },
    resetBtn: { it: 'Resetta', de: 'Zurücksetzen', en: 'Reset' },
    verifyBtn: {
      it: 'Verifica con Kandinsky',      de: 'Mit Kandinsky Prüfen',
      en: 'Verify with Kandinsky',
    },
    selectColorHint: {
      it: 'Seleziona il colore:',
      de: 'Farbe auswählen:',
      en: 'Select color:',
    },
    triangleTitle: {
      it: '01 · TRIANGOLO ACUTO',
      de: '01 · SPITZES DREIECK',
      en: '01 · ACUTE TRIANGLE',
    },
    squareTitle: {
      it: '02 · QUADRATO RETTO',
      de: '02 · RECHTES QUADRAT',
      en: '02 · RIGHT SQUARE',
    },
    circleTitle: {
      it: '03 · CERCHIO PERFETTO',
      de: '03 · VOLLKOMMENER KREIS',
      en: '03 · PERFECT CIRCLE',
    },
    resultSuccessTitle: {
      it: 'Risultato: Sintonia Perfetta con il Canone Bauhaus!',
      de: 'Ergebnis: Vollkommener Einklang mit dem Bauhaus-Kanon!',
      en: 'Result: Perfect Alignment with the Bauhaus Canon!',
    },
    resultSuccessDesc: {
      it: 'Hai assegnato Giallo al Triangolo, Rosso al Quadrato e Blu al Cerchio. Questa è esattamente la formula psicodinamica formulata da Kandinsky e confermata dalla maggioranza degli allievi del Bauhaus di Weimar nel 1923!',
      de: 'Du hast Gelb dem Dreieck, Rot dem Quadrat und Blau dem Kreis zugeordnet. Dies entspricht exakt der von Kandinsky formulierten psychodynamischen Zuordnung, wie sie 1923 in Weimar bestätigt wurde!',
      en: 'You matched Yellow to Triangle, Red to Square, and Blue to Circle. This is the exact psychodynamic formula established by Kandinsky and validated by the Weimar Bauhaus students in 1923!',
    },
    resultAltTitle: {
      it: 'Risultato: Interpretazione Eterodossa',
      de: 'Ergebnis: Freie Interpretation',
      en: 'Result: Alternative Interpretation',
    },
    resultAltDesc: {
      it: 'Secondo la teoria canonica di Kandinsky: il Triangolo corrisponde al Giallo (angolo acuto, energia solare), il Quadrato al Rosso (angolo retto, stabilità terrena), e il Cerchio al Blu (tensione centripeta e quiete spirituale).',
      de: 'Nach Kandinskys kanonischer Theorie: Das Dreieck gehört zu Gelb (spitzer Winkel, solare Energie), das Quadrat zu Rot (rechter Winkel, irdische Stabilität) und der Kreis zu Blau (zentripetale Ruhe).',
      en: "According to Kandinsky's canonical doctrine: Triangle corresponds to Yellow (acute angle, radiant energy), Square to Red (right angle, grounded stability), and Circle to Blue (centripetal tension and spiritual stillness).",
    },
    yellowCard: {
      title: { it: 'Giallo · Triangolo', de: 'Gelb · Dreieck', en: 'Yellow · Triangle' },
      angle: { it: 'ANGOLO 30°-60°', de: 'WINKEL 30°-60°', en: 'ANGLE 30°-60°' },
      body: {
        it: "L'angolo acuto punge, divide lo spazio e genera tensione aggressiva. Il giallo possiede una dinamica centrifuga: si proietta verso lo spettatore ed evoca squilli di tromba acuti.",
        de: 'Der spitze Winkel sticht, teilt den Raum und erzeugt dynamische Spannung. Gelb wirkt zentrifugal: Es strebt auf den Betrachter zu und evoziert helle Trompetenklänge.',
        en: 'The acute angle pierces, divides space, and produces active tension. Yellow possesses a centrifugal dynamic: projecting outward toward the viewer and evoking sharp trumpet fanfares.',
      },
      force: { it: 'FORZA: CENTRIFUGA', de: 'KRAFT: ZENTRIFUGAL', en: 'FORCE: CENTRIFUGAL' },
      sound: { it: 'SUONO: ACUTO', de: 'KLANG: HELL/SPITZ', en: 'SOUND: HIGH/BRASS' },
    },
    redCard: {
      title: { it: 'Rosso · Quadrato', de: 'Rot · Quadrat', en: 'Red · Square' },
      angle: { it: 'ANGOLO 90°', de: 'WINKEL 90°', en: 'ANGLE 90°' },
      body: {
        it: 'I quattro angoli retti e i lati uguali conferiscono al quadrato la massima stabilità fisica. Il rosso esprime calore interno, peso materiale, sicurezza costruttiva e gravità terrena.',
        de: 'Vier rechte Winkel und gleiche Seiten verleihen dem Quadrat maximale Stabilität. Rot verkörpert innere Wärme, konstruktive Ruhe und irdische Schwere.',
        en: 'Four right angles and equal sides endow the square with ultimate physical stability. Red embodies internal heat, tectonic security, and earthbound gravity.',
      },
      force: { it: 'FORZA: EQUILIBRIO', de: 'KRAFT: GLEICHGEWICHT', en: 'FORCE: EQUILIBRIUM' },
      sound: { it: 'SUONO: PROFONDO', de: 'KLANG: TIEF', en: 'SOUND: RESONANT/CELLO' },
    },
    blueCard: {
      title: { it: 'Blu · Cerchio', de: 'Blau · Kreis', en: 'Blue · Circle' },
      angle: { it: 'CURVATURA ∞', de: 'KRÜMMUNG ∞', en: 'CURVATURE ∞' },
      body: {
        it: 'La linea curva continua chiusa in se stessa non ha inizio né fine. Il blu si ritrae all’interno, suggerendo infinito, contemplazione, precisione cosmica e assenza di spigoli.',
        de: 'Die in sich geschlossene Kurve kennt weder Anfang noch Ende. Blau zieht sich nach innen zurück und evoziert Unendlichkeit, kosmische Konzentration und Stille.',
        en: 'The continuous closed curve has neither beginning nor end. Blue withdraws inward, inspiring contemplation, cosmic depth, and serene quietude.',
      },
      force: { it: 'FORZA: CENTRIPETA', de: 'KRAFT: ZENTRIPETAL', en: 'FORCE: CENTRIPETAL' },
      sound: { it: 'SUONO: CALMO', de: 'KLANG: RUHIG/ORGEL', en: 'SOUND: SERENE/FLUTE' },
    },
  },
  projects: {
    badge: {
      it: 'ATELIER ARCHIVIO OPERE',
      de: 'ATELIER WERKSARCHIV',
      en: 'STUDIO ARCHIVE WORKS',
    },
    title: {
      it: 'PROGETTI',
      de: 'PROJEKTE',
      en: 'PROJECTS',
    },
    categories: {
      all: { it: 'Tutti', de: 'Alle', en: 'All' },
      identity: { it: 'Identità', de: 'Identität', en: 'Identity' },
      typography: { it: 'Tipografia', de: 'Typografie', en: 'Typography' },
      space: { it: 'Spazio', de: 'Raum', en: 'Space' },
      digital: { it: 'Digitale', de: 'Digital', en: 'Digital' },
    },
    detailsBtn: {
      it: 'Dettagli Tecnici',
      de: 'Technische Details',
      en: 'Technical Details',
    },
    modalRequirement: {
      it: 'REQUISITO & MANIFESTO',
      de: 'ANFORDERUNG & MANIFEST',
      en: 'REQUIREMENT & MANIFESTO',
    },
    modalSpecs: {
      it: 'SPECIFICHE GEOMETRICHE & COSTRUTTIVE',
      de: 'GEOMETRISCHE & KONSTRUKTIVE VORGABEN',
      en: 'GEOMETRIC & CONSTRUCTIVE SPECS',
    },
    modalClose: {
      it: 'Chiudi Scheda',
      de: 'Karte Schließen',
      en: 'Close Sheet',
    },
  },
  laboratory: {
    badge: {
      it: 'ATELIER INTERATTIVO DOTZERO',
      de: 'INTERAKTIVES DOTZERO ATELIER',      en: 'INTERACTIVE DOTZERO STUDIO',
    },
    title: {
      it: 'LABORATORIO GEOMETRICO',
      de: 'GEOMETRISCHES LABOR',
      en: 'GEOMETRIC LABORATORY',
    },
    audioToggle: {
      it: 'Audio',
      de: 'Audio',
      en: 'Audio',
    },
    variationToggle: {
      it: 'Variazione',
      de: 'Variation',
      en: 'Variation',
    },
    elementsCount: {
      it: 'ELEMENTI',
      de: 'ELEMENTE',
      en: 'ELEMENTS',
    },
    exportSvg: {
      it: 'Scarica SVG',
      de: 'SVG Herunterladen',
      en: 'Download SVG',
    },
    copyCode: {
      it: 'Copia Codice',
      de: 'Code Kopieren',
      en: 'Copy SVG Code',
    },
    copied: {
      it: 'Copiato!',
      de: 'Kopiert!',
      en: 'Copied!',
    },
    insertTitle: {
      it: 'INSERISCI FORMA PRIMARIA',
      de: 'PRIMÄRFORM EINFÜGEN',
      en: 'INSERT PRIMARY FORM',
    },
    circle: { it: 'Cerchio', de: 'Kreis', en: 'Circle' },
    square: { it: 'Quadrato', de: 'Quadrat', en: 'Square' },
    triangle: { it: 'Triangolo', de: 'Dreieck', en: 'Triangle' },
    semicircle: { it: 'Semicerc.', de: 'Halbkreis', en: 'Semicircle' },
    line: { it: 'Linea', de: 'Linie', en: 'Line' },
    modifyLabel: {
      it: 'MODIFICA:',
      de: 'BEARBEITEN:',
      en: 'EDIT:',
    },
    colorLabel: {
      it: 'Colore Primario:',
      de: 'Primärfarbe:',
      en: 'Primary Color:',
    },
    sizeLabel: {
      it: 'Dimensione:',
      de: 'Größe:',
      en: 'Size:',
    },
    rotationLabel: {
      it: 'Rotazione:',
      de: 'Rotation:',
      en: 'Rotation:',
    },
    opacityLabel: {
      it: 'Opacità:',
      de: 'Deckkraft:',
      en: 'Opacity:',
    },
    selectHint: {
      it: 'Clicca su una forma nel canvas per ispezionarla o aggiungine una dai comandi sopra.',
      de: 'Klicke auf eine Form im Canvas, um sie zu bearbeiten, oder füge oben eine neue hinzu.',
      en: 'Click on any shape in the canvas to inspect it, or add new primitives from above.',
    },
    tip: {
      it: 'TIP: Il Bauhaus considera il contrasto tra forme taglienti (triangolo) e forme continue (cerchio) l’origine della tensione compositiva.',
      de: 'TIPP: Das Bauhaus betrachtet den Kontrast zwischen spitzen Formen (Dreieck) und stetigen Formen (Kreis) als Ursprung kompositorischer Spannung.',
      en: 'TIP: Bauhaus views the stark contrast between acute forms (triangle) and continuous curves (circle) as the origin of compositional tension.',
    },
  },
  contact: {
    badge: {
      it: 'COMMISSIONI & DIALOGO',
      de: 'KOMMISSIONEN & DIALOG',
      en: 'COMMISSIONS & DIALOGUE',
    },
    title: {
      it: 'INIZIA UN PROGETTO',
      de: 'PROJEKT STARTEN',
      en: 'START A PROJECT',
    },
    subtitle: {
      it: 'Traduciamo le vostre esigenze in forme pure, sistemi tipografici modulari e manufatti digitali privi di superfluo.',
      de: 'Wir übersetzen Ihre Anforderungen in reine Formen, modulare typografische Systeme und digitale Artefakte ohne Überflüssiges.',
      en: 'We translate your requirements into pure forms, modular typographic systems, and digital artifacts free of excess.',
    },
    successTitle: {
      it: 'RICHIESTA ACQUISITA NEL SISTEMA',
      de: 'ANFRAGE IM SYSTEM PROTOKOLLIERT',
      en: 'INQUIRY LOGGED IN SYSTEM',
    },
    successDesc: (name: string, category: string, lang: Language) => {
      if (lang === 'de') {
        return `Vielen Dank ${name}. Ihre Anfrage für ${category} wurde protokolliert. Das Atelier dotzero meldet sich innerhalb von 24 Stunden mit einer geometrischen Vorprüfung.`;
      }
      if (lang === 'en') {
        return `Thank you ${name}. Your inquiry for ${category} has been logged. The dotzero studio will respond within 24 hours with an initial geometric assessment.`;
      }
      return `Grazie ${name}. La tua richiesta per ${category} è stata protocollata. L'Atelier dotzero ti risponderà entro 24 ore con un'analisi preliminare di fattibilità geometrica.`;
    },
    sendAnother: {
      it: 'Invia Altra Richiesta',
      de: 'Weitere Anfrage Senden',
      en: 'Submit Another Inquiry',
    },
    nameLabel: {
      it: '01 · Nome / Studio / Impresa *',      de: '01 · Name / Studio / Unternehmen *',
      en: '01 · Name / Studio / Organization *',
    },
    emailLabel: {
      it: '02 · Indirizzo Email *',
      de: '02 · E-Mail-Adresse *',
      en: '02 · Email Address *',
    },
    categoryLabel: {
      it: '03 · Ambito del Progetto',
      de: '03 · Projektbereich',
      en: '03 · Project Discipline',
    },
    messageLabel: {
      it: '04 · Descrizione & Obiettivi',
      de: '04 · Beschreibung & Ziele',
      en: '04 · Description & Objectives',
    },
    messagePlaceholder: {
      it: 'Descrivi brevemente lo scopo del manufatto, i vincoli dimensionali o funzionali...',
      de: 'Beschreiben Sie Zweck, funktionale oder dimensionale Anforderungen...',
      en: 'Briefly describe the artifact purpose, dimensional constraints, or functional goals...',
    },
    submitBtn: {
      it: 'Invia Capitolato di Progetto',
      de: 'Projektlastenheft Senden',
      en: 'Submit Project Brief',
    },
    locationsTitle: {
      it: 'SEDI & ATELIER OPERATIVI',
      de: 'STANDORTE & ATELIERS',
      en: 'OPERATIONAL STUDIOS & LOCATIONS',
    },
    quoteHeading: {
      it: 'PRINCIPIO FONDANTE',
      de: 'GRUNDPRINZIP',
      en: 'FOUNDING PRINCIPLE',
    },
    quoteBody: {
      it: "«Non ci sono confini tra l'artigiano e l'artista. Costruiamo insieme l'edificio del futuro, che riunirà ogni disciplina in una sola forma.»",
      de: '„Es gibt keinen Wesensunterschied zwischen dem Künstler und dem Handwerker. Bilden wir gemeinsam den neuen Bau der Zukunft.“',
      en: '"There is no essential difference between artist and craftsman. Let us together create the new building of the future."',
    },
    quoteAuthor: {
      it: '— Walter Gropius, Bauhaus Weimar, 1919',
      de: '— Walter Gropius, Bauhaus Weimar, 1919',
      en: '— Walter Gropius, Bauhaus Weimar, 1919',
    },
  },
  footer: {
    desc: {
      it: "Atelier di architettura visiva, tipografia modulare e design digitale. Rifiuto radicale dell'ornamento in nome della purezza geometrica e dell'efficienza della forma.",
      de: 'Atelier für visuelle Architektur, modulare Typografie und digitales Design. Radikale Ablehnung des Ornaments zugunsten geometrischer Reinheit.',
      en: 'Studio of visual architecture, modular typography, and digital design. Radical refusal of ornament in devotion to geometric clarity and formal efficiency.',
    },
    masters: {
      it: 'ISPIRATO AI MAESTRI DEL BAUHAUS: W. GROPIUS · W. KANDINSKY · L. MOHOLY-NAGY · J. ITTEN',
      de: 'INSPIRIERT VON DEN BAUHAUS-MEISTERN: W. GROPIUS · W. KANDINSKY · L. MOHOLY-NAGY · J. ITTEN',
      en: 'INSPIRED BY BAUHAUS MASTERS: W. GROPIUS · W. KANDINSKY · L. MOHOLY-NAGY · J. ITTEN',
    },
    modularIndex: {
      it: 'INDICE MODULARE',
      de: 'MODULARER INDEX',
      en: 'MODULAR INDEX',
    },
    constructiveStandards: {
      it: 'STANDARDS COSTRUTTIVI',
      de: 'KONSTRUKTIONSSTANDARDS',
      en: 'CONSTRUCTION STANDARDS',
    },
    backToZero: {
      it: 'Ritorna al Punto Zero',
      de: 'Zurück zum Punkt Null',
      en: 'Return to Point Zero',
    },
    copyright: {
      it: '© 1919—2026 dotzero atelier. Weimar · Dessau · Berlin · Milano.',
      de: '© 1919—2026 dotzero atelier. Weimar · Dessau · Berlin · Mailand.',
      en: '© 1919—2026 dotzero studio. Weimar · Dessau · Berlin · Milan.',
    },
  },
  musaStudio: modulorStudioData,
  modulorStudio: modulorStudioData,
};

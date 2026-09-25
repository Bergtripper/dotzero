import { Project, ManifestoPrinciple, GeometricElement, ModulorPreset } from './types';

export const MANIFESTO_PRINCIPLES: ManifestoPrinciple[] = [
  {
    number: '01',
    title: {
      it: 'Punto e Linea',
      de: 'Punkt und Linie',
      en: 'Point and Line',
    },
    germanTitle: 'Punkt und Linie zu Fläche',
    subtitle: {
      it: 'L’origine geometrica primaria',
      de: 'Der primäre geometrische Ursprung',
      en: 'The primary geometric origin',
    },
    shape: 'circle',
    color: '#DE3831', // Red
    description: {
      it: 'Tutto ha origine da un punto nello spazio: il punto zero. Quando il punto si muove genera la linea, la linea definisce il piano. In dotzero eliminiamo ogni ornamento superficiale per riscoprire la purezza delle prime forze grafiche.',
      de: 'Alles entspringt einem Punkt im Raum: dem Punkt Null. Bewegt sich der Punkt, entsteht die Linie; die Linie bildet die Fläche. In dotzero verbannen wir jedes oberflächliche Ornament, um die Reinheit der primären Urkräfte freizulegen.',
      en: 'Everything originates from a single point in space: point zero. As the point moves it creates a line, and the line defines a plane. At dotzero we strip away all superficial ornament to reveal the pure power of primary graphic forces.',
    },
  },
  {
    number: '02',
    title: {
      it: 'Forma e Funzione',
      de: 'Form und Funktion',
      en: 'Form and Function',
    },
    germanTitle: 'Form folgt Funktion',
    subtitle: {
      it: 'Nessun elemento senza scopo',
      de: 'Kein Element ohne Zweck',
      en: 'No element without intent',
    },
    shape: 'square',
    color: '#1350B0', // Blue
    description: {
      it: 'La bellezza non è un additivo decorativo, ma la conseguenza naturale della massima chiarezza e funzionalità. La struttura stessa diventa estetica, senza inganni visivi o ombre artificiali.',
      de: 'Schönheit ist keine dekorative Beigabe, sondern die zwingende Konsequenz maximaler Klarheit und Zweckmäßigkeit. Die Konstruktion selbst ist Ästhetik, ohne Täuschung oder künstliche Effekte.',
      en: 'Beauty is not decorative adornment, but the natural consequence of lucid clarity and purposeful functionality. The structure itself becomes the aesthetic, without illusion or artificial shadows.',
    },
  },
  {
    number: '03',
    title: {
      it: 'Colori Primari Puri',
      de: 'Reine Primärfarben',
      en: 'Pure Primary Colors',
    },
    germanTitle: 'Reine Primärfarben',
    subtitle: {
      it: 'Rosso, Giallo, Blu, Nero',
      de: 'Rot, Gelb, Blau, Schwarz',
      en: 'Red, Yellow, Blue, Black',
    },
    shape: 'triangle',
    color: '#F7B801', // Yellow
    description: {
      it: 'Rifiutiamo le gradazioni pastello e le sfumature ambigue. Il rosso per la tensione e la gravitazione, il giallo per la luce e la spinta centrifuga, il blu per la calma e la concentrazione interiore.',
      de: 'Wir verwerfen diffuse Pastelltöne und unklare Schattierungen. Rot steht für Spannung und irdische Schwere, Gelb für Licht und zentrifugalen Drang, Blau für kosmische Ruhe und Einkehr.',
      en: 'We reject murky pastels and ambiguous gradients. Red for tension and gravitational weight, Yellow for radiant centrifugal light, Blue for stillness and contemplative depth.',
    },
  },
  {
    number: '04',
    title: {
      it: 'Sintesi delle Arti',
      de: 'Gesamtkunstwerk',
      en: 'Synthesis of the Arts',
    },
    germanTitle: 'Gesamtkunstwerk',
    subtitle: {
      it: 'Artigianato, architettura e codice',
      de: 'Handwerk, Architektur und Code',
      en: 'Craftsmanship, architecture, and code',
    },
    shape: 'cross',
    color: '#121212', // Black
    description: {
      it: 'Come Gropius riunì pittura, falegnameria e costruzione a Weimar nel 1919, dotzero unisce progettazione grafica, architettura delle informazioni e ingegneria del software in un unico solido manufatto.',
      de: 'Wie Walter Gropius 1919 in Weimar Malerei, Tischlerei und Bauwesen vereinte, verbindet dotzero Grafikdesign, Informationsarchitektur und Software-Engineering zu einem monolithischen Artefakt.',
      en: 'Just as Walter Gropius unified painting, joinery, and building at Weimar in 1919, dotzero synthesizes graphic design, information architecture, and software engineering into a unified artifact.',
    },
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'kandinsky-grid',
    code: 'DZ-01',
    title: {
      it: 'Archivio Weimar · Identità di Sistema',
      de: 'Weimar Archiv · Systemidentität',
      en: 'Weimar Archive · System Identity',
    },
    category: {
      it: 'Identità',
      de: 'Identität',
      en: 'Identity',
    },
    categoryKey: 'identity',
    year: '1923 / 2026',
    description: {
      it: 'Sistema di identità visiva radicalmente modulare per un centro di ricerca sul design mitteleuropeo basato su coordinate cartesiane rigide.',
      de: 'Radikal modulares visuelles Identitätssystem für ein mitteleuropäisches Designforschungszentrum auf der Basis kartesischer Koordinaten.',
      en: 'Radically modular visual identity system for a Central European design research center based on rigorous Cartesian coordinates.',
    },
    details: {
      it: [
        'Proporzioni auree 1:1.618 applicate a tutti i formati',
        'Palette cromatica a 3 pigmenti primari e nero opaco',
        'Tipografia Grotesk a spaziatura geometrica costante',
        'Griglia a 12 colonne con allineamento asimmetrico',
      ],
      de: [
        'Goldener Schnitt 1:1.618 auf sämtliche Formate angewandt',
        'Farbpalette aus 3 Primärpigmenten und mattem Tiefschwarz',
        'Grotesk-Typografie mit streng konstanter Zurichtung',
        '12-Spalten-Raster mit konstruktivistischer Asymmetrie',
      ],
      en: [
        'Golden ratio 1:1.618 applied across all print and screen formats',
        'Triadic primary pigment palette with matte carbon black',
        'Geometric Grotesk typography with strict optical rhythm',
        '12-column architectural grid with dynamic asymmetry',
      ],
    },
    primaryShape: 'circle',
    primaryColorHex: '#DE3831',
    secondaryColorHex: '#1350B0',
    ratio: '1:1',
  },
  {
    id: 'monolito-terminal',
    code: 'DZ-02',
    title: {
      it: 'Terminale Monolito · Interfaccia Industriale',
      de: 'Terminal Monolith · Industrie-Interface',
      en: 'Monolith Terminal · Industrial Interface',
    },
    category: {
      it: 'Digitale',
      de: 'Digital',
      en: 'Digital',
    },
    categoryKey: 'digital',
    year: '2025',
    description: {
      it: 'Interfaccia tattile per dispositivi di controllo numerico, concepita con pulsanti a contrasto puro e feedback aptico istantaneo.',
      de: 'Taktiles Interface für computergestützte Präzisionsmaschinen mit reinsten Farbblöcken und verzögerungsfreier Bedienung.',
      en: 'Tactile human-machine interface for CNC machinery, conceived with pure color blocking and zero-latency operational feedback.',
    },
    details: {
      it: [
        'Zero latenza visiva, eliminazione di transizioni decorative',
        'Superfici a blocchi di colore per gerarchia immediata',
        'Tipografia a caratteri fissi per metriche di precisione',
        'Modalità ad alto contrasto per ambienti di fabbrica',
      ],
      de: [
        'Null visuelle Latenz, Verzicht auf modische Zierübergänge',
        'Farbflächen zur sofortigen ergonomischen Hierarchisierung',
        'Monospace-Schriften für exakte numerische Ablesung',
        'Hochkontrastmodus für anspruchsvolle Produktionsumgebungen',
      ],
      en: [
        'Zero visual latency with complete omission of decorative transitions',
        'Color blocked zones providing instant spatial ergonomics',
        'Tabular monospace figures for micrometer precision readouts',
        'High contrast optical rating compliant with ISO machine ergonomics',
      ],
    },
    primaryShape: 'square',
    primaryColorHex: '#1350B0',
    secondaryColorHex: '#F7B801',
    ratio: '4:3',
  },
  {
    id: 'modulor-type',
    code: 'DZ-03',
    title: {
      it: 'Carattere Tipografico Modulor · Specimen',
      de: 'Schriftsatz Modulor · Schriftmuster',
      en: 'Modulor Typeface · Type Specimen',
    },
    category: {
      it: 'Tipografia',
      de: 'Typografie',
      en: 'Typography',
    },
    categoryKey: 'typography',
    year: '2026',
    description: {
      it: 'Disegno di un font geometrico variabile costruito unicamente su combinazioni di cerchi perfetti, triangoli equilateri e aste ortogonali.',
      de: 'Entwurf einer variablen geometrischen Schrift, ausschließlich konstruiert aus Vollkreisen, gleichseitigen Dreiecken und orthogonalen Balken.',
      en: 'Variable geometric typeface engineered strictly from combinations of perfect circles, equilateral triangles, and orthogonal bars.',
    },
    details: {
      it: [
        'Assenza totale di grazie e rastremazioni organiche',
        'Spessore costante del tratto su tutta la serie',
        'Glifi ausiliari per la composizione di griglie geometriche',
        'Ottimizzato per cartellonistica monumentale e schermi a pixel densi',
      ],
      de: [
        'Vollständiges Fehlen von Serifen und organischen Verjüngungen',
        'Konstante Strichstärke über das gesamte Zeichensystem',
        'Hilfsglyphen zur Konstruktion modularer Layout-Raster',
        'Optimiert für monumentale Beschilderung und hochauflösende Displays',
      ],
      en: [
        'Total elimination of serifs and organic calligraphic tapers',
        'Strict monolinear stroke weight throughout the character set',
        'Auxiliary modular glyphs for direct architectural layout drafting',
        'Optimized for monumental poster broadsheets and high-DPI screens',
      ],
    },
    primaryShape: 'triangle',
    primaryColorHex: '#F7B801',
    secondaryColorHex: '#121212',
    ratio: '16:9',
  },
  {
    id: 'padiglione-dessau',
    code: 'DZ-04',
    title: {
      it: 'Padiglione Zero · Architettura Temporanea',
      de: 'Pavillon Null · Temporäre Architektur',
      en: 'Pavilion Zero · Temporary Architecture',
    },
    category: {
      it: 'Spazio',
      de: 'Raum',
      en: 'Space',
    },
    categoryKey: 'space',
    year: '2024',
    description: {
      it: 'Installazione modulare smontabile realizzata con tubolari di metallo curvato, vetrate trasparenti e pannelli primari autoportanti.',
      de: 'Demontierbare modulare Pavillonstruktur aus gebogenem Stahlrohr, transparentem Floatglas und freistehenden Primärfarbflächen.',
      en: 'Dismountable modular pavilion constructed from cold-bent tubular chrome, transparent float glass, and self-supporting primary color panels.',
    },
    details: {
      it: [
        'Ispirato alle leggendarie sedie B32 di Marcel Breuer',
        'Facciate orientate secondo la traiettoria solare',
        'Pannelli intercambiabili in rosso vermiglio e blu cobalto',
        'Struttura a vista con giunzioni a bullone esagonale',
      ],
      de: [
        'Inspiriert von den legendären Stahlrohrmöbeln Marcel Breuers',
        'Fassadengeometrie ausgerichtet am jahreszeitlichen Sonnenlauf',
        'Austauschbare Platten in Zinnoberrot und Kobaltblau',
        'Sichtbare Tragkonstruktion mit Sechskantschrauben-Knoten',
      ],
      en: [
        'Inspired by Marcel Breuer’s groundbreaking cantilever tubular chairs',
        'Solar azimuth alignment maximizing passive daylight illumination',
        'Interchangeable enamel panels in cadmium vermilion and cobalt blue',
        'Exposed skeleton with industrial hexagonal high-torque fasteners',
      ],
    },
    primaryShape: 'square',
    primaryColorHex: '#DE3831',
    secondaryColorHex: '#ECE8DD',
    ratio: '1:1',
  },
  {
    id: 'cinetica-sonora',
    code: 'DZ-05',
    title: {
      it: 'Cinetica Meccanica · Scultura Polifonica',
      de: 'Mechanische Kinetik · Polyphone Skulptur',
      en: 'Mechanical Kinetics · Polyphonic Sculpture',
    },
    category: {
      it: 'Spazio',
      de: 'Raum',
      en: 'Space',
    },
    categoryKey: 'space',
    year: '2025',
    description: {
      it: 'Pendolo geometrico che traccia figure di Lissajous generando onde sinusoidali pure in risonanza con lo spazio circostante.',
      de: 'Geometrisches Pendel, das Lissajous-Kurven zeichnet und reine Sinusschwingungen im Einklang mit dem Raum erzeugt.',
      en: 'Geometric dual pendulum tracing Lissajous harmonic curves while synthesizing pure sinusoidal tones resonant with the surrounding chamber.',
    },
    details: {
      it: [
        'Motore passo-passo con calibrazione micrometrica',
        'Frequenze accordate sulle lunghezze d’onda del colore visibile',
        'Tracciamento su polvere di grafite e carta avorio',
        'Interazione cinetica attraverso sensori di prossimità',
      ],
      de: [
        'Schrittmotorantrieb mit mikrometrischer Justierung',
        'Frequenzen gestimmt auf die Wellenlängen des sichtbaren Lichtspektrums',
        'Spurenzeichnung in Graphitpulver auf ungestrichenem Büttenpapier',
        'Kinetische Modulation über optische Näherungssensoren',
      ],
      en: [
        'Stepper drive with micrometer counterweight calibration',
        'Acoustic frequencies tuned precisely to visible color wavelengths',
        'Continuous graphite powder displacement on unbleached rag paper',
        'Contactless velocity modulation via spatial optical sensors',
      ],
    },
    primaryShape: 'circle',
    primaryColorHex: '#1350B0',
    secondaryColorHex: '#DE3831',
    ratio: '3:2',
  },
  {
    id: 'kandinsky-os',
    code: 'DZ-06',
    title: {
      it: 'Kandinsky OS · Design System a Primitivi',
      de: 'Kandinsky OS · Primitives Design System',
      en: 'Kandinsky OS · Primitives Design System',
    },
    category: {
      it: 'Digitale',
      de: 'Digital',
      en: 'Digital',
    },
    categoryKey: 'digital',
    year: '2026',
    description: {
      it: 'Libreria di componenti web e applicativi che codifica in token CSS rigorosi le regole compositive della scuola di Weimar.',
      de: 'Bibliothek modularer Software-Komponenten, die die Weimarer Kompositionsgesetze in strenge Design-Tokens überführt.',
      en: 'Component library translating the foundational Weimar compositional grammars into rigorous, mathematically verified tokens.',
    },
    details: {
      it: [
        'Token semantici basati sui rapporti di scala 1:1, 1:2, 1:4',
        'Bordi a tratto netto senza sfocature gaussiane',
        'Gerarchia spaziale determinata dalla massa visiva dei colori',
        'Supporto a griglie isometriche e ortogonali',
      ],
      de: [
        'Semantische Tokens nach dem Skalenverhältnis 1:1, 1:2 und 1:4',
        'Scharfkantige Konturen ohne weichzeichnende Gauß-Schatten',
        'Räumliche Hierarchie gesteuert durch optisches Farbgewicht',
        'Vollständige Unterstützung für isometrische und rechtwinklige Raster',
      ],
      en: [
        'Semantic design tokens calibrated to 1:1, 1:2, and 1:4 geometric ratios',
        'Crisp hairline strokes with absolute ban on faux gaussian blurs',
        'Spatial dominance determined strictly by optical color mass',
        'Universal compatibility with isometric and orthographic grid engines',
      ],
    },
    primaryShape: 'triangle',
    primaryColorHex: '#F7B801',
    secondaryColorHex: '#1350B0',
    ratio: '16:9',
  },
];

export const LAB_PRESETS: { name: string; elements: GeometricElement[] }[] = [
  {
    name: 'Composizione I (Kandinsky)',
    elements: [
      { id: '1', type: 'circle', x: 180, y: 140, size: 130, rotation: 0, color: '#DE3831', opacity: 0.95 },
      { id: '2', type: 'triangle', x: 280, y: 220, size: 150, rotation: 35, color: '#F7B801', opacity: 0.9 },
      { id: '3', type: 'square', x: 100, y: 260, size: 110, rotation: -12, color: '#1350B0', opacity: 0.92 },
      { id: '4', type: 'semicircle', x: 240, y: 80, size: 90, rotation: 180, color: '#121212', opacity: 0.85 },
      { id: '5', type: 'line', x: 60, y: 190, size: 300, rotation: -25, color: '#121212', opacity: 1 },
      { id: '6', type: 'circle', x: 330, y: 120, size: 40, rotation: 0, color: '#1350B0', opacity: 1 },
    ],
  },
  {
    name: 'Costruttivismo 1923',
    elements: [
      { id: '1', type: 'square', x: 140, y: 120, size: 160, rotation: 45, color: '#DE3831', opacity: 0.95 },
      { id: '2', type: 'line', x: 50, y: 210, size: 320, rotation: 45, color: '#121212', opacity: 1 },
      { id: '3', type: 'circle', x: 260, y: 240, size: 120, rotation: 0, color: '#1350B0', opacity: 0.9 },
      { id: '4', type: 'triangle', x: 90, y: 80, size: 90, rotation: -45, color: '#F7B801', opacity: 1 },
      { id: '5', type: 'circle', x: 200, y: 200, size: 30, rotation: 0, color: '#121212', opacity: 1 },
    ],
  },
  {
    name: 'Zero Assoluto',
    elements: [
      { id: '1', type: 'circle', x: 200, y: 200, size: 210, rotation: 0, color: '#DE3831', opacity: 1 },
      { id: '2', type: 'circle', x: 200, y: 200, size: 100, rotation: 0, color: '#121212', opacity: 1 },
      { id: '3', type: 'line', x: 50, y: 200, size: 300, rotation: 0, color: '#F7B801', opacity: 1 },
      { id: '4', type: 'square', x: 310, y: 90, size: 60, rotation: 0, color: '#1350B0', opacity: 0.9 },
    ],
  },
];

export const MODULOR_PRESETS: ModulorPreset[] = [
  {
    id: 'cyber-bauhaus',
    name: 'Cyber Bauhaus 4D',
    particleCount: 160,
    speed: 1.2,
    glow: 24,
    colorScheme: 'bauhaus-neon',
    trail: 0.15,
    shapeMorph: 'geometric-mesh',
  },
  {
    id: 'liquid-cobalt',
    name: 'Liquid Cobalt Wave',
    particleCount: 220,
    speed: 0.8,
    glow: 32,
    colorScheme: 'liquid-cobalt',
    trail: 0.22,
    shapeMorph: 'particles',
  },
  {
    id: 'solar-cadmium',
    name: 'Solar Cadmium Flare',
    particleCount: 190,
    speed: 1.5,
    glow: 28,
    colorScheme: 'solar-red',
    trail: 0.12,
    shapeMorph: 'waveform',
  },
  {
    id: 'monochrome-void',
    name: 'Obsidian Void 0.0',
    particleCount: 140,
    speed: 0.9,
    glow: 14,
    colorScheme: 'monochrome-ghost',
    trail: 0.08,
    shapeMorph: 'geometric-mesh',
  },
];

export const MUSA_PRESETS = MODULOR_PRESETS;

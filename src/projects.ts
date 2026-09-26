import { DotzeroProject } from './types';

export const DOTZERO_PROJECTS: DotzeroProject[] = [
  {
    id: 'avant-garde-atlas',
    number: '01',
    order: 1,
    title: 'Avant-Garde Atlas',
    slug: 'atlas',
    period: '1890—1940',
    year: '2026',
    status: 'active',
    type: ['archive', 'research', 'interactive'],
    featured: true,
    updatedAt: '2026-09',
    summary: {
      it: 'Atlante relazionale di architettura, arte, movimenti, persone e luoghi delle avanguardie europee.',
      de: 'Relationaler Atlas zu Architektur, Kunst, Bewegungen, Personen und Orten der europäischen Avantgarde.',
      en: 'A relational atlas of architecture, art, movements, people, and places across the European avant-garde.',
    },
    destination: { kind: 'external', url: 'https://bergtripper.github.io/avantgardeatlas/sources' },
  },
  {
    id: 'alpine-gebrauchsgraphik',
    number: '02',
    order: 2,
    title: 'Alpine Gebrauchsgraphik',
    slug: 'alpine-gebrauchsgraphik',
    period: '1900—1970',
    year: '2026',
    status: 'active',
    type: ['archive', 'research', 'visual-culture', 'interactive'],
    featured: true,
    updatedAt: '2026-09',
    summary: {
      it: 'Atlante della cultura grafica applicata alpina: autori, opere, luoghi, turismo, tipografia, archivi e connessioni.',
      de: 'Atlas alpiner Gebrauchsgrafik: Gestalter, Werke, Orte, Tourismus, Typografie, Archive und Verbindungen.',
      en: 'An atlas of Alpine applied graphic culture: designers, works, places, tourism, typography, archives, and connections.',
    },
    destination: { kind: 'external', url: 'https://bergtripper.github.io/alpine-gebrauchsgraphik/' },
  },
  {
    id: 'modulor-studio',
    number: '03',
    order: 3,
    title: 'Modulor Studio',
    slug: 'modulor',
    year: '2026',
    status: 'active',
    type: ['experiment', 'generative', 'interactive'],
    updatedAt: '2026-09',
    summary: {
      it: 'Studi generativi su proporzione, movimento, particelle e suono.',
      de: 'Generative Studien zu Proportion, Bewegung, Partikeln und Klang.',
      en: 'Generative studies in proportion, motion, particles, and sound.',
    },
    destination: { kind: 'internal', hash: '#modulor-studio' },
  },
  {
    id: 'bauhaus-laboratory',
    number: '04',
    order: 4,
    title: 'Bauhaus Laboratory',
    slug: 'bauhaus',
    period: '1919—2026',
    year: '2026',
    status: 'prototype',
    type: ['research', 'experiment', 'visual-systems'],
    updatedAt: '2026-09',
    summary: {
      it: 'Esperimenti interattivi su forma, colore, tipografia e sistemi visivi del Bauhaus.',
      de: 'Interaktive Experimente zu Form, Farbe, Typografie und visuellen Systemen des Bauhauses.',
      en: 'Interactive experiments on form, colour, typography, and Bauhaus visual systems.',
    },
    destination: { kind: 'internal', hash: '#bauhaus' },
  },
  {
    id: 'universal-systems',
    number: '05',
    order: 5,
    title: 'Universal Systems',
    slug: 'universal-systems',
    period: '1925—2026',
    year: '2026',
    status: 'prototype',
    type: ['typography', 'geometry', 'morphology', 'research'],
    updatedAt: '2026-09',
    summary: {
      it: 'Ricerca interattiva su costruzione tipografica, morfologia dei glifi, riduzione geometrica e sistemi universali.',
      de: 'Interaktive Forschung zu Schriftkonstruktion, Glyphenmorphologie, geometrischer Reduktion und universellen Systemen.',
      en: 'Interactive research into type construction, glyph morphology, geometric reduction, and universal systems.',
    },
    destination: { kind: 'internal', hash: '#universal-systems' },
  },
];

export const getDotzeroProjects = (): DotzeroProject[] =>
  [...DOTZERO_PROJECTS].sort((a, b) => a.order - b.order);

export const getDotzeroProjectBySlug = (slug: string): DotzeroProject | undefined =>
  DOTZERO_PROJECTS.find((project) => project.slug === slug);

export const getDotzeroProjectById = (id: string): DotzeroProject | undefined =>
  DOTZERO_PROJECTS.find((project) => project.id === id);

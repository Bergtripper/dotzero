import { DotzeroProject } from './types';

export const DOTZERO_PROJECTS: DotzeroProject[] = [
  {
    id: 'avant-garde-atlas',
    number: '01',
    title: 'Avant-Garde Atlas',
    slug: 'atlas',
    period: '1890—1940',
    year: '2026',
    status: 'active',
    type: ['archive', 'research', 'interactive'],
    summary: {
      it: 'Atlante relazionale di architettura, arte, movimenti, persone e luoghi delle avanguardie europee.',
      de: 'Relationaler Atlas zu Architektur, Kunst, Bewegungen, Personen und Orten der europäischen Avantgarde.',
      en: 'A relational atlas of architecture, art, movements, people, and places across the European avant-garde.',
    },
  },
  {
    id: 'modulor-studio',
    number: '02',
    title: 'Modulor Studio',
    slug: 'modulor',
    year: '2026',
    status: 'active',
    type: ['experiment', 'generative', 'interactive'],
    summary: {
      it: 'Studi generativi su proporzione, movimento, particelle e suono.',
      de: 'Generative Studien zu Proportion, Bewegung, Partikeln und Klang.',
      en: 'Generative studies in proportion, motion, particles, and sound.',
    },
    route: '#modulor-studio',
  },
  {
    id: 'bauhaus-laboratory',
    number: '03',
    title: 'Bauhaus Laboratory',
    slug: 'bauhaus',
    period: '1919—2026',
    year: '2026',
    status: 'prototype',
    type: ['research', 'experiment', 'visual-systems'],
    summary: {
      it: 'Esperimenti interattivi su forma, colore, tipografia e sistemi visivi del Bauhaus.',
      de: 'Interaktive Experimente zu Form, Farbe, Typografie und visuellen Systemen des Bauhauses.',
      en: 'Interactive experiments on form, colour, typography, and Bauhaus visual systems.',
    },
    route: '#bauhaus',
  },
];

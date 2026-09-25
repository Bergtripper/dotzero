export type PrimaryColor = 'red' | 'blue' | 'yellow' | 'black' | 'cream';

export type Language = 'it' | 'de' | 'en';

export interface LocalizedString {
  it: string;
  de: string;
  en: string;
}

export interface Project {
  id: string;
  code: string;
  title: LocalizedString;
  category: LocalizedString;
  categoryKey: 'all' | 'identity' | 'typography' | 'space' | 'digital';
  year: string;
  description: LocalizedString;
  details: {
    it: string[];
    de: string[];
    en: string[];
  };
  primaryShape: 'circle' | 'square' | 'triangle';
  primaryColorHex: string;
  secondaryColorHex: string;
  ratio: string;
}

export interface ManifestoPrinciple {
  number: string;
  title: LocalizedString;
  germanTitle: string;
  subtitle: LocalizedString;
  shape: 'circle' | 'square' | 'triangle' | 'cross';
  color: string;
  description: LocalizedString;
}

export interface GeometricElement {
  id: string;
  type: 'circle' | 'square' | 'triangle' | 'semicircle' | 'line';
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  opacity: number;
}

export type ThemeVariant = 'classic' | 'monochrome' | 'destijl';

export type ColorMode = 'light' | 'dark';

export type DotzeroProjectStatus = 'active' | 'archive' | 'prototype';

export type DotzeroProjectDestination =
  | { kind: 'internal'; hash: string }
  | { kind: 'external'; url: string }
  | { kind: 'planned' };

export interface DotzeroProject {
  id: string;
  number: string;
  order: number;
  title: string;
  slug: string;
  period?: string;
  year: string;
  status: DotzeroProjectStatus;
  type: string[];
  summary: LocalizedString;
  destination: DotzeroProjectDestination;
  featured?: boolean;
  updatedAt?: string;
  cover?: {
    src: string;
    alt: LocalizedString;
  };
}

export interface ModulorPreset {
  id: string;
  name: string;
  particleCount: number;
  speed: number;
  glow: number;
  colorScheme: 'bauhaus-neon' | 'cyber-amber' | 'liquid-cobalt' | 'monochrome-ghost' | 'solar-red';
  trail: number;
  shapeMorph: 'particles' | 'geometric-mesh' | 'waveform';
}

export type MusaPreset = ModulorPreset;

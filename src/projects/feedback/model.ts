export type FeedbackEvidenceKind = 'observation' | 'estimate' | 'hypothesis' | 'scenario';
export type FeedbackEvidenceDirection = 'supports' | 'challenges' | 'context';
export type FeedbackIndicatorId = 'capability' | 'closure' | 'recursive-gain' | 'generation-time';

export interface FeedbackSource {
  id: string;
  title: string;
  publisher: string;
  publishedAt: string;
  url: string;
}

export interface FeedbackEvidence {
  id: string;
  indicator: FeedbackIndicatorId;
  kind: FeedbackEvidenceKind;
  direction: FeedbackEvidenceDirection;
  title: string;
  summary: string;
  sourceIds: string[];
  observedAt?: string;
  confidence?: 'low' | 'medium' | 'high';
}

export interface FeedbackIndicator {
  id: FeedbackIndicatorId;
  symbol: 'C' | 'K' | 'R' | 'τ';
  label: string;
  publicQuestion: string;
  status: 'limited' | 'developing' | 'advanced' | 'unknown';
  note: string;
  evidenceIds: string[];
}

export const FEEDBACK_INDICATORS: FeedbackIndicator[] = [
  { id: 'capability', symbol: 'C', label: 'Research capability', publicQuestion: 'Can AI do the work of an AI researcher?', status: 'developing', note: 'Evidence model pending F2.', evidenceIds: [] },
  { id: 'closure', symbol: 'K', label: 'Loop closure', publicQuestion: 'How much of the research loop can AI complete without us?', status: 'unknown', note: 'Evidence model pending F2.', evidenceIds: [] },
  { id: 'recursive-gain', symbol: 'R', label: 'Recursive gain', publicQuestion: 'Do improvements make AI better at producing the next improvement?', status: 'limited', note: 'Evidence model pending F2.', evidenceIds: [] },
  { id: 'generation-time', symbol: 'τ', label: 'Generation time', publicQuestion: 'Are successive improvement cycles getting faster?', status: 'unknown', note: 'Evidence model pending F2.', evidenceIds: [] },
];

export const FEEDBACK_SOURCES: FeedbackSource[] = [];
export const FEEDBACK_EVIDENCE: FeedbackEvidence[] = [];

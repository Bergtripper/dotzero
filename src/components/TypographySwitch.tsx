import React from 'react';
import { TypographyPreset } from '../types';
import { useTypography } from '../context/TypographyContext';
import { useLanguage } from '../context/LanguageContext';

const OPTIONS: Array<{ id: TypographyPreset; label: string }> = [
  { id: 'plex', label: 'PLEX' },
  { id: 'swiss', label: 'SWISS' },
  { id: 'grotesk', label: 'GROTESK' },
  { id: 'syne', label: 'SYNE' },
];

const COPY = {
  it: { aria: 'Tipografia', label: 'TIPO', title: 'Tipografia' },
  de: { aria: 'Typografie', label: 'SCHRIFT', title: 'Typografie' },
  en: { aria: 'Typography', label: 'TYPE', title: 'Typography' },
};

interface TypographySwitchProps {
  compact?: boolean;
  inverse?: boolean;
}

export const TypographySwitch: React.FC<TypographySwitchProps> = ({ compact = false, inverse = false }) => {
  const { typography, setTypography } = useTypography();
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <div
      className={`dz-type-switch ${compact ? 'is-compact' : ''} ${inverse ? 'is-inverse' : ''}`}
      role="group"
      aria-label={t.aria}
    >
      <span className="dz-type-switch__label">{t.label}</span>
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setTypography(option.id)}
          aria-pressed={typography === option.id}
          title={`${t.title}: ${option.label}`}
          className={`dz-type-switch__option ${typography === option.id ? 'is-active' : ''}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

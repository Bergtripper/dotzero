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

interface TypographySwitchProps {
  compact?: boolean;
  inverse?: boolean;
}

export const TypographySwitch: React.FC<TypographySwitchProps> = ({ compact = false, inverse = false }) => {
  const { typography, setTypography } = useTypography();
  const { language } = useLanguage();
  const copy = {
    it: { label: 'TIPO', aria: 'Tipografia' },
    de: { label: 'SCHRIFT', aria: 'Typografie' },
    en: { label: 'TYPE', aria: 'Typography' },
  }[language];

  return (
    <div
      className={`dz-type-switch ${compact ? 'is-compact' : ''} ${inverse ? 'is-inverse' : ''}`}
      role="group"
      aria-label={copy.aria}
    >
      <span className="dz-type-switch__label">{copy.label}</span>
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setTypography(option.id)}
          aria-pressed={typography === option.id}
          title={`${copy.aria}: ${option.label}`}
          className={`dz-type-switch__option ${typography === option.id ? 'is-active' : ''}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

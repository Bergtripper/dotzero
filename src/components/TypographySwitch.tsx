import React from 'react';
import { TypographyPreset } from '../types';
import { useTypography } from '../context/TypographyContext';

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

  return (
    <div
      className={`dz-type-switch ${compact ? 'is-compact' : ''} ${inverse ? 'is-inverse' : ''}`}
      role="group"
      aria-label="Typography"
    >
      <span className="dz-type-switch__label">TYPE</span>
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setTypography(option.id)}
          aria-pressed={typography === option.id}
          title={`Typography: ${option.label}`}
          className={`dz-type-switch__option ${typography === option.id ? 'is-active' : ''}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

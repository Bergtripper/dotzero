import React from 'react';

type DotzeroMarkProps = {
  size?: number | string;
  className?: string;
  title?: string;
};

export const DotzeroMark: React.FC<DotzeroMarkProps> = ({
  size = 32,
  className = '',
  title = 'DOTZERO',
}) => (
  <svg
    viewBox="0 0 64 88"
    width={size}
    height="auto"
    role="img"
    aria-label={title}
    className={`dz-mark ${className}`}
  >
    <circle className="dz-mark__dot" cx="32" cy="13" r="10" />
    <rect className="dz-mark__zero" x="14" y="32" width="36" height="44" rx="18" />
    <rect className="dz-mark__counter" x="23" y="41" width="18" height="26" rx="9" />
    <path className="dz-mark__slash" d="M21 63 L48 27" />
  </svg>
);

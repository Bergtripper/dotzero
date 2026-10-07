import React from 'react';

type DotMarkerProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  title?: string;
};

const DOT_SIZE: Record<NonNullable<DotMarkerProps['size']>, number> = {
  xs: 5,
  sm: 7,
  md: 10,
  lg: 14,
};

export const DotMarker: React.FC<DotMarkerProps> = ({
  size = 'sm',
  className = '',
  title,
}) => (
  <span
    className={`dz-dot-marker ${className}`}
    style={{ width: DOT_SIZE[size], height: DOT_SIZE[size] }}
    aria-hidden={title ? undefined : true}
    title={title}
  />
);

type SystemGlyphProps = {
  size?: number;
  className?: string;
  title?: string;
};

export const SystemGlyph: React.FC<SystemGlyphProps> = ({
  size = 28,
  className = '',
  title = 'Open direction / system',
}) => (
  <svg
    viewBox="0 0 42 24"
    width={size}
    height={(size * 24) / 42}
    role="img"
    aria-label={title}
    className={`dz-system-glyph ${className}`}
  >
    <path d="M11 3 L3 12 L11 21" />
    <path className="dz-system-glyph__slash" d="M25 2 L17 22" />
    <path d="M31 3 L39 12 L31 21" />
  </svg>
);

type FieldGlyphProps = {
  size?: number;
  className?: string;
  title?: string;
};

export const FieldGlyph: React.FC<FieldGlyphProps> = ({
  size = 22,
  className = '',
  title = 'Zero / field',
}) => (
  <svg
    viewBox="0 0 24 32"
    width={size}
    height={(size * 32) / 24}
    role="img"
    aria-label={title}
    className={`dz-field-glyph ${className}`}
  >
    <rect x="3" y="2.5" width="18" height="27" rx="9" />
  </svg>
);

type SyntaxLabelProps = {
  kind?: 'dot' | 'system' | 'field';
  children: React.ReactNode;
  className?: string;
};

export const SyntaxLabel: React.FC<SyntaxLabelProps> = ({
  kind = 'dot',
  children,
  className = '',
}) => (
  <span className={`dz-syntax-label ${className}`}>
    {kind === 'dot' ? <DotMarker size="sm" /> : null}
    {kind === 'system' ? <SystemGlyph size={20} /> : null}
    {kind === 'field' ? <FieldGlyph size={12} /> : null}
    <span>{children}</span>
  </span>
);

type ZeroFieldProps = {
  children: React.ReactNode;
  className?: string;
};

export const ZeroField: React.FC<ZeroFieldProps> = ({ children, className = '' }) => (
  <div className={`dz-zero-field ${className}`}>{children}</div>
);

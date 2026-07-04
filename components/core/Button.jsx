import React from 'react';

/**
 * GeniusMath Africa — Button
 * Big, friendly pill button with a solid tactile "lip" (bottom edge that
 * collapses on press). Tone maps to the brand trio.
 */
export function Button({
  children,
  tone = 'go',          // 'go' (green) | 'primary' (blue) | 'reward' (orange) | 'soft' | 'ghost'
  size = 'md',          // 'sm' | 'md' | 'lg'
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: 14, padding: '8px 16px', minHeight: 40, gap: 6 },
    md: { fontSize: 16, padding: '12px 22px', minHeight: 48, gap: 8 },
    lg: { fontSize: 19, padding: '15px 30px', minHeight: 56, gap: 10 },
  }[size];

  const tones = {
    go:      { bg: 'var(--gm-green)',  fg: '#fff', lip: 'var(--gm-green-dark)' },
    primary: { bg: 'var(--gm-blue)',   fg: '#fff', lip: 'var(--gm-blue-dark)' },
    reward:  { bg: 'var(--gm-orange)', fg: '#fff', lip: 'var(--gm-orange-dark)' },
    soft:    { bg: 'var(--gm-fill-blue)', fg: 'var(--gm-blue-dark)', lip: 'var(--gm-sky-deep)' },
    ghost:   { bg: 'transparent', fg: 'var(--gm-blue)', lip: 'transparent' },
  }[tone];

  const lip = tone === 'ghost' ? 'none' : `0 4px 0 ${tones.lip}`;

  return (
    <button
      disabled={disabled}
      style={{
        appearance: 'none',
        border: tone === 'ghost' ? '2px solid var(--gm-line)' : 'none',
        borderRadius: 'var(--radius-pill)',
        font: 'var(--text-ui)',
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        fontSize: sizes.fontSize,
        lineHeight: 1.1,
        padding: sizes.padding,
        minHeight: sizes.minHeight,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizes.gap,
        whiteSpace: 'nowrap',
        width: block ? '100%' : 'auto',
        background: tones.bg,
        color: tones.fg,
        boxShadow: disabled ? 'none' : lip,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transform: 'translateY(0)',
        transition: 'transform var(--dur-fast) var(--ease-pop), box-shadow var(--dur-fast), filter var(--dur-fast)',
        ...style,
      }}
      onMouseDown={(e) => {
        if (disabled || tone === 'ghost') return;
        e.currentTarget.style.transform = 'translateY(4px)';
        e.currentTarget.style.boxShadow = '0 0 0 ' + tones.lip;
      }}
      onMouseUp={(e) => {
        if (disabled || tone === 'ghost') return;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = lip;
      }}
      onMouseLeave={(e) => {
        if (disabled || tone === 'ghost') return;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = lip;
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

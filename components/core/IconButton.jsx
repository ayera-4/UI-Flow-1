import React from 'react';

/**
 * GeniusMath Africa — IconButton
 * Round, soft-shadowed button for header controls (gear, back, help, sound).
 */
export function IconButton({
  children,
  label,
  tone = 'plain',   // 'plain' | 'blue' | 'green' | 'orange' | 'ghost'
  size = 'md',      // 'sm' | 'md' | 'lg'
  style = {},
  ...rest
}) {
  const dims = { sm: 36, md: 44, lg: 52 }[size];
  const tones = {
    plain: { bg: '#fff', fg: 'var(--gm-blue)', shadow: 'var(--shadow-sm)' },
    blue: { bg: 'var(--gm-blue)', fg: '#fff', shadow: 'var(--shadow-card)' },
    green: { bg: 'var(--gm-green)', fg: '#fff', shadow: 'var(--shadow-card)' },
    orange: { bg: 'var(--gm-orange)', fg: '#fff', shadow: 'var(--shadow-card)' },
    ghost: { bg: 'transparent', fg: 'var(--gm-slate)', shadow: 'none' },
  }[tone];

  return (
    <button
      aria-label={label}
      title={label}
      style={{
        width: dims,
        height: dims,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '50%',
        background: tones.bg,
        color: tones.fg,
        boxShadow: tones.shadow,
        cursor: 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-pop), filter var(--dur-fast)',
        ...style,
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.9)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}

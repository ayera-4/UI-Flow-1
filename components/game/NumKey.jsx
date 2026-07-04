import React from 'react';

/**
 * GeniusMath Africa — NumKey
 * Large round key for the PIN / numeric keypad. Tactile press.
 */
export function NumKey({
  children,
  tone = 'green',   // 'green' | 'blue' | 'light'
  size = 60,
  style = {},
  ...rest
}) {
  const tones = {
    green: { bg: 'var(--gm-green)', fg: '#fff', lip: 'var(--gm-green-dark)' },
    blue: { bg: 'var(--gm-blue)', fg: '#fff', lip: 'var(--gm-blue-dark)' },
    light: { bg: '#fff', fg: 'var(--gm-ink)', lip: 'var(--gm-line)' },
  }[tone];

  return (
    <button
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: 'none',
        background: tones.bg,
        color: tones.fg,
        font: 'var(--text-numkey)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: size * 0.42,
        boxShadow: `0 4px 0 ${tones.lip}`,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform var(--dur-fast) var(--ease-pop), box-shadow var(--dur-fast)',
        ...style,
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(4px)';
        e.currentTarget.style.boxShadow = `0 0 0 ${tones.lip}`;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = `0 4px 0 ${tones.lip}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = `0 4px 0 ${tones.lip}`;
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

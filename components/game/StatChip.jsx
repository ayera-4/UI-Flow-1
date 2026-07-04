import React from 'react';

/**
 * GeniusMath Africa — StatChip
 * Glossy pill showing a gamification balance: coins, stars, XP, streak.
 * Renders a small token glyph + value.
 */
export function StatChip({
  kind = 'coin',   // 'coin' | 'star' | 'xp' | 'streak' | 'custom'
  value,
  glyph = null,    // override token for 'custom'
  size = 'md',     // 'sm' | 'md' | 'lg'
  style = {},
  ...rest
}) {
  const dims = {
    sm: { h: 28, font: 14, dot: 18, pad: '0 10px 0 4px', gap: 6 },
    md: { h: 36, font: 17, dot: 24, pad: '0 14px 0 5px', gap: 8 },
    lg: { h: 44, font: 21, dot: 30, pad: '0 18px 0 6px', gap: 10 },
  }[size];

  const tokens = {
    coin: { bg: 'var(--gm-gold)', ring: 'var(--gm-gold-light)', mark: '¢', markColor: '#8A6A00' },
    star: { bg: 'var(--gm-star)', ring: '#FCE08A', mark: '★', markColor: '#B98900' },
    xp: { bg: 'var(--gm-green)', ring: 'var(--gm-green-light)', mark: 'XP', markColor: '#fff' },
    streak: { bg: 'var(--gm-flame)', ring: '#FFB066', mark: '🔥', markColor: '#fff' },
    custom: { bg: 'var(--gm-blue)', ring: 'var(--gm-blue-light)', mark: '', markColor: '#fff' },
  }[kind];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: dims.gap,
        height: dims.h,
        padding: dims.pad,
        background: 'var(--gm-white)',
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-sm)',
        font: 'var(--text-ui)',
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        fontSize: dims.font,
        color: 'var(--gm-ink)',
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden
        style={{
          width: dims.dot,
          height: dims.dot,
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 30%, ${tokens.ring}, ${tokens.bg})`,
          boxShadow: 'var(--inset-gloss)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: dims.dot * 0.55,
          fontWeight: 800,
          color: tokens.markColor,
          flex: 'none',
        }}
      >
        {glyph || tokens.mark}
      </span>
      {value}
    </span>
  );
}

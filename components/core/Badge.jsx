import React from 'react';

/**
 * GeniusMath Africa — Badge
 * Small status/label pill. For achievement medals use AchievementBadge.
 */
export function Badge({
  children,
  tone = 'neutral',  // 'neutral' | 'green' | 'blue' | 'orange' | 'gold' | 'purple' | 'red' | 'locked'
  variant = 'soft',  // 'soft' | 'solid' | 'outline'
  size = 'md',       // 'sm' | 'md'
  icon = null,
  style = {},
  ...rest
}) {
  const palette = {
    neutral: ['var(--gm-slate)', 'var(--gm-line-soft)'],
    green: ['var(--gm-green-dark)', 'var(--gm-fill-green)'],
    blue: ['var(--gm-blue-dark)', 'var(--gm-fill-blue)'],
    orange: ['var(--gm-orange-dark)', '#FCE6CC'],
    gold: ['#8A6A00', '#FBEFC4'],
    purple: ['#6A4FA0', 'var(--gm-fill-purple)'],
    red: ['#A8321F', '#FAD9D2'],
    locked: ['var(--gm-mute)', 'var(--gm-line-soft)'],
  }[tone];
  const [fg, soft] = palette;

  const variants = {
    soft: { background: soft, color: fg, border: 'none' },
    solid: { background: fg, color: '#fff', border: 'none' },
    outline: { background: 'transparent', color: fg, border: `2px solid ${fg}` },
  }[variant];

  const dims = size === 'sm'
    ? { fontSize: 11, padding: '3px 9px', gap: 4 }
    : { fontSize: 13, padding: '5px 12px', gap: 5 };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: dims.gap,
        font: 'var(--text-xs)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: dims.fontSize,
        lineHeight: 1.1,
        padding: dims.padding,
        borderRadius: 'var(--radius-pill)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-label)',
        whiteSpace: 'nowrap',
        ...variants,
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}

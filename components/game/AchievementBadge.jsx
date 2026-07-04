import React from 'react';

/**
 * GeniusMath Africa — AchievementBadge
 * Collectible reward medallion (trophy-case style). Holds a glyph/icon/image
 * in a glossy ringed disc; supports a locked state.
 */
export function AchievementBadge({
  glyph = '★',        // emoji, short text, or an <img>/icon node
  name = '',
  tone = 'gold',      // 'gold' | 'green' | 'blue' | 'purple' | 'orange'
  locked = false,
  size = 76,
  style = {},
  ...rest
}) {
  const ramps = {
    gold: ['#FBE08A', '#E9B128', '#C68A12'],
    green: ['#A9DD8E', '#5BA83C', '#3C7A2A'],
    blue: ['#8FC4EE', '#3E8AD0', '#1F5C99'],
    purple: ['#CBB6EA', '#9B7FC4', '#6A4FA0'],
    orange: ['#FBC07E', '#F2880E', '#C7670A'],
  }[tone];
  const [hi, mid, lo] = locked ? ['#D7DCE6', '#AEB6C6', '#8C95AA'] : ramps;

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: size + 24, ...style }} {...rest}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: `radial-gradient(circle at 36% 28%, ${hi}, ${mid} 58%, ${lo})`,
          border: '3px solid #fff',
          boxShadow: locked ? 'var(--shadow-sm)' : `var(--shadow-card), inset 0 3px 6px rgba(255,255,255,0.5)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.42,
          color: '#fff',
          position: 'relative',
          filter: locked ? 'grayscale(0.5)' : 'none',
        }}
      >
        <span style={{ opacity: locked ? 0.35 : 1, lineHeight: 1 }}>{glyph}</span>
        {locked && (
          <span style={{
            position: 'absolute', right: -2, bottom: -2,
            width: size * 0.34, height: size * 0.34, borderRadius: '50%',
            background: 'var(--gm-slate)', color: '#fff', border: '2.5px solid #fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: size * 0.17, fontWeight: 800,
          }}>🔒</span>
        )}
      </div>
      {name && (
        <span style={{
          font: 'var(--text-xs)', fontFamily: 'var(--font-body)', fontWeight: 700,
          fontSize: 12, textAlign: 'center', lineHeight: 1.2,
          color: locked ? 'var(--gm-mute)' : 'var(--gm-ink)',
        }}>{name}</span>
      )}
    </div>
  );
}

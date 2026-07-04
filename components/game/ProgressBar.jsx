import React from 'react';

/**
 * GeniusMath Africa — ProgressBar
 * Rounded track + fill for skill mastery / loading. Optional value label.
 */
export function ProgressBar({
  value = 0,          // 0–100
  tone = 'green',     // 'green' | 'blue' | 'orange' | 'gold' | 'purple' | 'red'
  size = 'md',        // 'sm' | 'md' | 'lg'
  showValue = false,
  label = null,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const h = { sm: 8, md: 14, lg: 20 }[size];
  const fills = {
    green: 'var(--gm-green)',
    blue: 'var(--gm-blue)',
    orange: 'var(--gm-orange)',
    gold: 'var(--gm-gold)',
    purple: 'var(--gm-purple)',
    red: 'var(--gm-red)',
  };
  const fill = fills[tone];

  return (
    <div style={{ width: '100%', ...style }} {...rest}>
      {(label || showValue) && (
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 6, font: 'var(--text-sm)', fontFamily: 'var(--font-body)',
          fontWeight: 700, color: 'var(--gm-ink)',
        }}>
          <span>{label}</span>
          {showValue && <span style={{ color: 'var(--gm-slate)' }}>{pct}%</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          height: h,
          background: 'var(--gm-line-soft)',
          borderRadius: 'var(--radius-pill)',
          overflow: 'hidden',
          boxShadow: 'inset 0 1px 3px rgba(40,53,88,0.12)',
        }}
      >
        <div style={{
          width: pct + '%',
          height: '100%',
          background: `linear-gradient(180deg, color-mix(in srgb, ${fill} 78%, #fff), ${fill})`,
          borderRadius: 'var(--radius-pill)',
          boxShadow: 'var(--inset-gloss)',
          transition: 'width var(--dur-slow) var(--ease-smooth)',
        }} />
      </div>
    </div>
  );
}

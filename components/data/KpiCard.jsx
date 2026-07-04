import React from 'react';

/**
 * GeniusMath Africa — KpiCard
 * Compact metric tile for dashboards (Levels Completed, Accuracy, Time Spent…).
 * Tinted top accent + big numeral.
 */
export function KpiCard({
  label,
  value,
  tone = 'blue',     // 'blue' | 'green' | 'gold' | 'purple' | 'orange'
  icon = null,
  style = {},
  ...rest
}) {
  const tints = {
    blue: 'var(--gm-fill-blue)',
    green: 'var(--gm-fill-green)',
    gold: 'var(--gm-fill-yellow)',
    purple: 'var(--gm-fill-purple)',
    orange: '#FCE6CC',
  }[tone];
  const inks = {
    blue: 'var(--gm-blue-dark)',
    green: 'var(--gm-green-dark)',
    gold: '#8A6A00',
    purple: '#6A4FA0',
    orange: 'var(--gm-orange-dark)',
  }[tone];

  return (
    <div
      style={{
        background: 'var(--gm-white)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        minWidth: 0,
        ...style,
      }}
      {...rest}
    >
      <div style={{ height: 5, background: tints }} />
      <div style={{ padding: '14px 16px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8,
        }}>
          {icon && (
            <span style={{
              width: 26, height: 26, borderRadius: 8, background: tints, color: inks,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
            }}>{icon}</span>
          )}
          <span style={{
            font: 'var(--text-xs)', fontFamily: 'var(--font-body)', fontWeight: 700,
            fontSize: 12, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase',
            color: 'var(--gm-slate)', lineHeight: 1.2,
          }}>{label}</span>
        </div>
        <div style={{
          font: 'var(--text-kpi)', fontFamily: 'var(--font-body)', fontWeight: 800,
          fontSize: 30, color: 'var(--gm-ink)', lineHeight: 1,
        }}>{value}</div>
      </div>
    </div>
  );
}

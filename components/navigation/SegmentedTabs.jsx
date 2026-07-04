import React from 'react';

/**
 * GeniusMath Africa — SegmentedTabs
 * Pill segmented control (Learner Login / Teacher Login / Guest Play;
 * also daily/weekly/monthly-style switches).
 */
export function SegmentedTabs({
  tabs = [],          // [{ id, label }]
  value,
  onChange = () => {},
  tone = 'blue',      // 'blue' | 'green'
  size = 'md',        // 'sm' | 'md'
  style = {},
  ...rest
}) {
  const active = value ?? (tabs[0] && tabs[0].id);
  const fill = tone === 'green' ? 'var(--gm-green)' : 'var(--gm-blue)';
  const pad = size === 'sm' ? '7px 12px' : '11px 16px';
  const fs = size === 'sm' ? 13 : 15;

  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        background: 'var(--gm-line-soft)',
        borderRadius: 'var(--radius-pill)',
        ...style,
      }}
      {...rest}
    >
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            onClick={() => onChange(t.id)}
            style={{
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              padding: pad,
              font: 'var(--text-ui)',
              fontFamily: 'var(--font-body)',
              fontWeight: 800,
              fontSize: fs,
              letterSpacing: 'var(--ls-tight)',
              cursor: 'pointer',
              background: on ? fill : 'transparent',
              color: on ? '#fff' : 'var(--gm-slate)',
              boxShadow: on ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--dur-base) var(--ease-smooth)',
              whiteSpace: 'nowrap',
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

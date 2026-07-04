import React from 'react';

/**
 * GeniusMath Africa — BottomNav
 * Fixed bottom tab bar. Active item gets a filled blue pill highlight.
 * Pass an icon node per item (e.g. a Lucide/Phosphor SVG).
 */
export function BottomNav({
  items = [],         // [{ id, label, icon }]
  value,
  onChange = () => {},
  tone = 'blue',      // 'blue' | 'green'
  style = {},
  ...rest
}) {
  const active = value ?? (items[0] && items[0].id);
  const fill = tone === 'green' ? 'var(--gm-green)' : 'var(--gm-blue)';

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        gap: 4,
        background: 'var(--gm-white)',
        borderTop: '1.5px solid var(--gm-line-soft)',
        boxShadow: '0 -4px 16px rgba(40,53,88,0.06)',
        padding: '8px 10px',
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const on = it.id === active;
        return (
          <button
            key={it.id}
            onClick={() => onChange(it.id)}
            aria-current={on ? 'page' : undefined}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              padding: '6px 4px',
              color: on ? fill : 'var(--gm-mute)',
              transition: 'color var(--dur-base)',
            }}
          >
            <span style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 44, height: 30, borderRadius: 'var(--radius-pill)',
              background: on ? `color-mix(in srgb, ${fill} 14%, transparent)` : 'transparent',
              transition: 'background var(--dur-base)',
            }}>
              {it.icon}
            </span>
            <span style={{
              font: 'var(--text-xs)', fontFamily: 'var(--font-body)',
              fontWeight: on ? 800 : 700, fontSize: 11.5, lineHeight: 1,
            }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

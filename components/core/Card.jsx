import React from 'react';

/**
 * GeniusMath Africa — Card
 * Soft rounded surface. The workhorse container.
 * `tone` tints the fill for the level/tier card pattern.
 */
export function Card({
  children,
  tone = 'paper',   // 'paper' | 'white' | 'green' | 'yellow' | 'purple' | 'blue'
  pad = 'md',       // 'none' | 'sm' | 'md' | 'lg'
  raised = true,
  interactive = false,
  style = {},
  ...rest
}) {
  const pads = { none: 0, sm: 14, md: 20, lg: 28 }[pad];
  const tones = {
    paper: 'var(--gm-paper)',
    white: 'var(--gm-white)',
    green: 'var(--gm-fill-green)',
    yellow: 'var(--gm-fill-yellow)',
    purple: 'var(--gm-fill-purple)',
    blue: 'var(--gm-fill-blue)',
  }[tone];

  return (
    <div
      style={{
        background: tones,
        borderRadius: 'var(--radius-lg)',
        padding: pads,
        boxShadow: raised ? 'var(--shadow-card)' : 'none',
        border: raised ? 'none' : '1.5px solid var(--gm-line)',
        transition: 'transform var(--dur-base) var(--ease-pop), box-shadow var(--dur-base)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
      } : undefined}
      onMouseLeave={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = raised ? 'var(--shadow-card)' : 'none';
      } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}

import React from 'react';

/**
 * GeniusMath Africa — StarRating
 * Row of stars for level scores. Filled stars are gold; empty are muted.
 */
export function StarRating({
  value = 0,        // number of filled stars
  max = 3,
  size = 28,
  gap = 4,
  tone = 'star',    // 'star' (gold) | 'purple'
  style = {},
  ...rest
}) {
  const fillColor = tone === 'purple' ? 'var(--gm-purple)' : 'var(--gm-star)';
  const emptyColor = 'var(--gm-line)';
  const strokeFilled = tone === 'purple' ? '#7A5FB0' : '#D9A400';

  return (
    <span
      role="img"
      aria-label={`${value} of ${max} stars`}
      style={{ display: 'inline-flex', gap, alignItems: 'center', ...style }}
      {...rest}
    >
      {Array.from({ length: max }).map((_, i) => {
        const on = i < value;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24"
            style={{ filter: on ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.18))' : 'none' }}>
            <path
              d="M12 2.6l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.5l1-6.1L3.2 9.1l6.1-.9z"
              fill={on ? fillColor : emptyColor}
              stroke={on ? strokeFilled : 'transparent'}
              strokeWidth={on ? 1 : 0}
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </span>
  );
}

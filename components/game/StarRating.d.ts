import * as React from 'react';

export interface StarRatingProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Number of filled stars */
  value?: number;
  /** Total stars (default 3 — the level scoring scheme) */
  max?: number;
  /** Pixel size per star */
  size?: number;
  gap?: number;
  tone?: 'star' | 'purple';
}

/**
 * Row of stars for level scores. Three-star scheme by default, matching
 * the level-select and end-of-level screens. Read-only display.
 */
export function StarRating(props: StarRatingProps): JSX.Element;

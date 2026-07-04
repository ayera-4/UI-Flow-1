import * as React from 'react';

export interface StatChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  kind?: 'coin' | 'star' | 'xp' | 'streak' | 'custom';
  /** The value shown (number or string like "2h 30m") */
  value: React.ReactNode;
  /** Glyph override for kind='custom' */
  glyph?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Glossy balance pill for gamification totals — coins, stars, XP, streak.
 * Appears in screen headers and reward summaries.
 *
 * @startingPoint section="Game" subtitle="Coin / star / XP balance pill" viewport="700x140"
 */
export function StatChip(props: StatChipProps): JSX.Element;

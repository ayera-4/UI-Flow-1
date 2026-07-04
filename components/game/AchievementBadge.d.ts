import * as React from 'react';

export interface AchievementBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Center content — emoji, short text, an icon node, or an <img> */
  glyph?: React.ReactNode;
  /** Caption shown beneath the medallion */
  name?: string;
  tone?: 'gold' | 'green' | 'blue' | 'purple' | 'orange';
  /** Grey, padlocked, not-yet-earned state */
  locked?: boolean;
  /** Medallion diameter in px */
  size?: number;
}

/**
 * Collectible reward medallion for the trophy-case / Badges screen
 * (Money Beginner, Smart Shopper, Saver…). Supports a locked state.
 *
 * @startingPoint section="Game" subtitle="Collectible reward medallion" viewport="700x180"
 */
export function AchievementBadge(props: AchievementBadgeProps): JSX.Element;

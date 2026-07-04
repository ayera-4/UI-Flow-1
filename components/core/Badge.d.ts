import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'green' | 'blue' | 'orange' | 'gold' | 'purple' | 'red' | 'locked';
  variant?: 'soft' | 'solid' | 'outline';
  size?: 'sm' | 'md';
  /** Optional leading icon (~12–14px) */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Small uppercase status/label pill (e.g. "AVAILABLE", "LOCKED", "NEW").
 * For collectible achievement medals use AchievementBadge instead.
 */
export function Badge(props: BadgeProps): JSX.Element;

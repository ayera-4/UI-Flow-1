import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill tint. Tinted tones drive the level/tier-card pattern */
  tone?: 'paper' | 'white' | 'green' | 'yellow' | 'purple' | 'blue';
  pad?: 'none' | 'sm' | 'md' | 'lg';
  /** Soft drop shadow (true) vs hairline border (false) */
  raised?: boolean;
  /** Lift + deepen shadow on hover */
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * Soft, very-rounded surface — the workhorse container. Tinted tones
 * (green/yellow/purple) reproduce the beginner/intermediate/advanced
 * level-card pattern.
 *
 * @startingPoint section="Core" subtitle="Rounded surface with tint tones" viewport="700x200"
 */
export function Card(props: CardProps): JSX.Element;

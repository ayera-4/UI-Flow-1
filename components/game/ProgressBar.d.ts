import * as React from 'react';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill percentage, 0–100 */
  value?: number;
  tone?: 'green' | 'blue' | 'orange' | 'gold' | 'purple' | 'red';
  size?: 'sm' | 'md' | 'lg';
  /** Show the % readout on the right */
  showValue?: boolean;
  /** Optional label shown above the track */
  label?: React.ReactNode;
}

/**
 * Rounded, glossy progress track for skill mastery, loading bars, and
 * learner/class accuracy readouts.
 */
export function ProgressBar(props: ProgressBarProps): JSX.Element;

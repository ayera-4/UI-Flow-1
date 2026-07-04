import * as React from 'react';

export interface NumKeyProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: 'green' | 'blue' | 'light';
  /** Diameter in px (default 60 — the keypad standard) */
  size?: number;
  children?: React.ReactNode;
}

/**
 * Large round key for the learner PIN entry / numeric keypad. Same tactile
 * press as Button. Lay out 0–9 in a grid.
 */
export function NumKey(props: NumKeyProps): JSX.Element;

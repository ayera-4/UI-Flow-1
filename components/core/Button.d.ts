import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Color/intent. go=green confirm, primary=blue action, reward=orange, soft=tinted, ghost=outline */
  tone?: 'go' | 'primary' | 'reward' | 'soft' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to full container width */
  block?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Big friendly pill button with a tactile "lip" that depresses on press.
 * Primary call-to-action element across the learner app.
 *
 * @startingPoint section="Core" subtitle="Pill button with tactile press" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;

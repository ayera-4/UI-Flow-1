import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible label (also the tooltip) */
  label: string;
  tone?: 'plain' | 'blue' | 'green' | 'orange' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** A single icon node, ~20–24px (e.g. a Lucide/Phosphor SVG) */
  children?: React.ReactNode;
}

/**
 * Round, soft-shadowed icon control for header & toolbar actions
 * (settings gear, back arrow, help, sound toggle).
 */
export function IconButton(props: IconButtonProps): JSX.Element;

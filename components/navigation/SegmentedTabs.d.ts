import * as React from 'react';

export interface TabItem { id: string; label: React.ReactNode; }

export interface SegmentedTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  /** Active tab id (controlled) */
  value?: string;
  onChange?: (id: string) => void;
  tone?: 'blue' | 'green';
  size?: 'sm' | 'md';
}

/**
 * Pill segmented control — the login mode switch (Learner / Teacher / Guest)
 * and time-range filters (daily / weekly / monthly).
 */
export function SegmentedTabs(props: SegmentedTabsProps): JSX.Element;

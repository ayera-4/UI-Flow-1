import * as React from 'react';

export interface NavItem { id: string; label: string; icon: React.ReactNode; }

export interface BottomNavProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  items: NavItem[];
  value?: string;
  onChange?: (id: string) => void;
  tone?: 'blue' | 'green';
}

/**
 * Fixed bottom tab bar (World / Quests / Rewards / Profile for learners;
 * Dashboard / Learners / Reports / Settings for educators). Active item
 * gets a soft pill highlight.
 */
export function BottomNav(props: BottomNavProps): JSX.Element;

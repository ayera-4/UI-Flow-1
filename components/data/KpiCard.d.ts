import * as React from 'react';

export interface KpiCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase metric label */
  label: React.ReactNode;
  /** Big numeral / value (e.g. "92%", "2h 30m", 8) */
  value: React.ReactNode;
  tone?: 'blue' | 'green' | 'gold' | 'purple' | 'orange';
  /** Optional small icon shown beside the label */
  icon?: React.ReactNode;
}

/**
 * Compact metric tile for learner & educator dashboards — Levels Completed,
 * Coins Earned, Accuracy, Time Spent, Total Learners, etc.
 *
 * @startingPoint section="Data" subtitle="Dashboard metric tile" viewport="700x160"
 */
export function KpiCard(props: KpiCardProps): JSX.Element;

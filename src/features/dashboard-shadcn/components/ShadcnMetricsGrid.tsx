import type React from 'react'
import type { DashboardMetric } from '../../dashboard/types'
import { ShadcnMetricCard } from './ShadcnMetricCard'

export interface ShadcnMetricsGridProps {
  metrics: DashboardMetric[]
}

export const ShadcnMetricsGrid: React.FC<ShadcnMetricsGridProps> = ({ metrics }) => {
  return (
    <section
      aria-label="Key Performance Indicators (shadcn/ui)"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {metrics.map((metric) => (
        <ShadcnMetricCard key={metric.id} metric={metric} />
      ))}
    </section>
  )
}

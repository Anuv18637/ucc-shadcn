import type React from 'react'
import { Grid } from 'ucc-design-system'
import type { DashboardMetric } from '../types'
import { MetricCard } from '../../../components/ui/MetricCard/MetricCard'
import {
  PackageIcon,
  TruckIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from '../../../components/ui/icons/DashboardIcons'

export interface MetricsGridProps {
  metrics: DashboardMetric[]
}

const renderIcon = (type: DashboardMetric['iconType']) => {
  switch (type) {
    case 'orders':
      return <PackageIcon />
    case 'shipments':
      return <TruckIcon />
    case 'allocation':
      return <CheckCircleIcon />
    case 'overdue':
      return <AlertCircleIcon />
    default:
      return null
  }
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <Grid
      className="metrics-grid"
      aria-label="Key Performance Indicators"
      gridTemplateColumns={[
        '1fr',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gridGap="20px"
    >
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          icon={renderIcon(metric.iconType)}
          value={metric.value}
          label={metric.title}
          status={metric.status}
        />
      ))}
    </Grid>
  )
}

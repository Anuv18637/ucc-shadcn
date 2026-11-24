import React from 'react'
import { useDashboardMetrics } from '../hooks/useDashboardMetrics'
import { DashboardHeader } from './DashboardHeader'
import { MetricsGrid } from './MetricsGrid'

export const DashboardOverview: React.FC = () => {
  const { data, isLoading, error } = useDashboardMetrics()

  if (isLoading) {
    return (
      <div className="dashboard-loading" role="status" aria-live="polite">
        <p>Loading dashboard metrics...</p>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="dashboard-error" role="alert">
        <p>Unable to load dashboard data. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="dashboard-feature">
      <DashboardHeader partner={data.partner} />
      <MetricsGrid metrics={data.metrics} />
    </div>
  )
}

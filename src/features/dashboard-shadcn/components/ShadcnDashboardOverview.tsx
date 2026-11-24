import type React from 'react'
import { useDashboardMetrics } from '../../dashboard/hooks/useDashboardMetrics'
import { ShadcnDashboardHeader } from './ShadcnDashboardHeader'
import { ShadcnMetricsGrid } from './ShadcnMetricsGrid'

export const ShadcnDashboardOverview: React.FC = () => {
  const { data, isLoading, error } = useDashboardMetrics()

  if (isLoading) {
    return (
      <div className="py-12 text-center text-gray-500 font-sans animate-pulse" role="status">
        Loading dashboard metrics with shadcn/ui...
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="p-6 rounded-lg bg-red-50 text-[#E60000] border border-red-200" role="alert">
        Unable to load dashboard data.
      </div>
    )
  }

  return (
    <div className="w-full">
      <ShadcnDashboardHeader partner={data.partner} />
      <ShadcnMetricsGrid metrics={data.metrics} />
    </div>
  )
}

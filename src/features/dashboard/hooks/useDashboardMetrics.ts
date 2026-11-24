import { useState, useEffect } from 'react'
import { getDashboardOverview } from '../api/getDashboardMetrics'
import type { DashboardOverviewData } from '../types'

export interface UseDashboardMetricsReturn {
  data: DashboardOverviewData | null
  isLoading: boolean
  error: Error | null
  refetch: () => Promise<void>
}

export function useDashboardMetrics(): UseDashboardMetricsReturn {
  const [data, setData] = useState<DashboardOverviewData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await getDashboardOverview()
      setData(response)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch dashboard metrics'))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading, error, refetch: fetchData }
}

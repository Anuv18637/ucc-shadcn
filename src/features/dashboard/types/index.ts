export type MetricStatus = 'neutral' | 'alert' | 'success' | 'warning'

export interface PartnerProfile {
  name: string
  partnerId: string
  region: string
}

export interface DashboardMetric {
  id: string
  title: string
  value: string | number
  subtext?: string
  status?: MetricStatus
  iconType: 'orders' | 'shipments' | 'allocation' | 'overdue'
}

export interface DashboardOverviewData {
  partner: PartnerProfile
  metrics: DashboardMetric[]
}

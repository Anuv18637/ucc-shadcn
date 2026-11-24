import type { DashboardOverviewData } from '../types'

/**
 * Service function fetching dashboard overview data.
 * Ready to be connected to Axios, React Query, or RTK Query.
 */
export async function getDashboardOverview(): Promise<DashboardOverviewData> {
  return Promise.resolve({
    partner: {
      name: 'Netzwerk Solutions GmbH',
      partnerId: 'VFW-DE-0047',
      region: 'Bavaria',
    },
    metrics: [
      {
        id: 'metric-orders',
        title: 'Orders This Month',
        value: '14',
        status: 'neutral',
        iconType: 'orders',
      },
      {
        id: 'metric-shipments',
        title: 'Pending Shipments',
        value: '3',
        status: 'neutral',
        iconType: 'shipments',
      },
      {
        id: 'metric-allocation',
        title: 'Allocation Remaining',
        value: '3.760 units',
        status: 'neutral',
        iconType: 'allocation',
      },
      {
        id: 'metric-overdue',
        title: 'Overdue Invoices',
        value: '1',
        status: 'alert',
        iconType: 'overdue',
      },
    ],
  })
}

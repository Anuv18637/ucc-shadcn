import type React from 'react'
import { Package, Truck, CheckCircle2, AlertCircle } from 'lucide-react'
import { Card } from '../../../components/ui/card'
import { cn } from '../../../lib/utils'
import type { DashboardMetric } from '../../dashboard/types'

export interface ShadcnMetricCardProps {
  metric: DashboardMetric
}

export const ShadcnMetricCard: React.FC<ShadcnMetricCardProps> = ({ metric }) => {
  const isAlert = metric.status === 'alert'

  const renderIcon = () => {
    const iconClass = cn(
      'h-5 w-5',
      isAlert ? 'text-[#E60000]' : 'text-gray-600'
    )

    switch (metric.iconType) {
      case 'orders':
        return <Package className={iconClass} />
      case 'shipments':
        return <Truck className={iconClass} />
      case 'allocation':
        return <CheckCircle2 className={iconClass} />
      case 'overdue':
        return <AlertCircle className={iconClass} />
      default:
        return null
    }
  }

  return (
    <Card
      className={cn(
        'p-6 flex flex-col justify-start rounded-xl bg-white transition-all duration-150',
        isAlert
          ? 'border-[1.5px] border-[#FCA5A5] shadow-xs hover:border-[#E60000]/60'
          : 'border border-gray-200 hover:border-gray-300'
      )}
      aria-label={`${metric.title}: ${metric.value}`}
    >
      {/* Icon Badge */}
      <div
        className={cn(
          'w-10 h-10 rounded-lg flex items-center justify-center mb-6',
          isAlert ? 'bg-[#FEE2E2]' : 'bg-gray-100'
        )}
        aria-hidden="true"
      >
        {renderIcon()}
      </div>

      {/* Metric Value */}
      <div className="font-['VodafoneBold',sans-serif] text-[30px] font-bold text-gray-900 leading-tight mb-1 tracking-tight">
        {metric.value}
      </div>

      {/* Metric Title/Label */}
      <div className="font-['VodafoneRg',sans-serif] text-sm text-gray-500 font-normal">
        {metric.title}
      </div>
    </Card>
  )
}

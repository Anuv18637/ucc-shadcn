import type React from 'react'
import { Flex, Box } from 'ucc-design-system'
import type { MetricStatus } from '../../../features/dashboard/types'
import './MetricCard.css'

export interface MetricCardProps {
  icon: React.ReactNode
  value: string | number
  label: string
  status?: MetricStatus
  className?: string
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  value,
  label,
  status = 'neutral',
  className = '',
}) => {
  const isAlert = status === 'alert'

  return (
    <Flex
      as="article"
      flexDirection="column"
      justifyContent="flex-start"
      className={`metric-card ${isAlert ? 'metric-card-alert' : ''} ${className}`}
      aria-label={`${label}: ${value}`}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        className={`metric-badge ${isAlert ? 'metric-badge-alert' : 'metric-badge-neutral'}`}
        aria-hidden="true"
      >
        {icon}
      </Flex>
      <Box className="metric-value">{value}</Box>
      <Box className="metric-label">{label}</Box>
    </Flex>
  )
}

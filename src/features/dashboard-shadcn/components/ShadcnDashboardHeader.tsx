import type React from 'react'
import type { PartnerProfile } from '../../dashboard/types'
import { formatPartnerSubtitle } from '../../../utils/formatters'
import { Badge } from '../../../components/ui/badge'

export interface ShadcnDashboardHeaderProps {
  partner: PartnerProfile
}

export const ShadcnDashboardHeader: React.FC<ShadcnDashboardHeaderProps> = ({ partner }) => {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-7 gap-3" role="banner">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="font-['VodafoneBold',sans-serif] text-3xl font-bold text-gray-900 tracking-tight leading-tight m-0">
            Welcome back, {partner.name}
          </h1>
          <Badge variant="vodafoneAlert" className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5">
            shadcn/ui
          </Badge>
        </div>
        <p className="font-['VodafoneRg',sans-serif] text-[15px] text-gray-500 mt-1 mb-0">
          {formatPartnerSubtitle(partner.partnerId, partner.region)}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Enterprise Architecture Ready
        </span>
      </div>
    </header>
  )
}

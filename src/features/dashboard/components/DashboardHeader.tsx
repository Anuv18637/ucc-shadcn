import type React from 'react'
import { Flex, Box, Heading, Text } from 'ucc-design-system'
import type { PartnerProfile } from '../types'
import { formatPartnerSubtitle } from '../../../utils/formatters'

export interface DashboardHeaderProps {
  partner: PartnerProfile
  actions?: React.ReactNode
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ partner, actions }) => {
  return (
    <Flex
      as="header"
      className="dashboard-header"
      justifyContent="space-between"
      alignItems={['flex-start', 'center']}
      flexDirection={['column', 'row']}
      flexWrap="wrap"
      role="banner"
    >
      <Box>
        <Heading type="h1" className="dashboard-title">
          Welcome back, {partner.name}
        </Heading>
        <Text type="body" className="dashboard-subtitle">
          {formatPartnerSubtitle(partner.partnerId, partner.region)}
        </Text>
      </Box>

      {actions && (
        <Flex alignItems="center" mt={[3, 0]}>
          {actions}
        </Flex>
      )}
    </Flex>
  )
}

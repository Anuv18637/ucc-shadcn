import React from 'react'
import { Box } from 'ucc-design-system'

export interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box className="app-shell">
      <div className="dashboard-container">
        {children}
      </div>
    </Box>
  )
}

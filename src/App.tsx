import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { ErrorBoundary } from './components/feedback/ErrorBoundary'
import { DashboardOverview as UccDashboardOverview } from './features/dashboard'
import { ShadcnDashboardOverview } from './features/dashboard-shadcn'
import './App.css'

function NavigationHeader() {
  return (
    <nav
      className="border-b border-gray-200 bg-white sticky top-0 z-50 px-4 py-3 shadow-2xs"
      aria-label="Route Navigation"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#E60000]"></span>
          <span className="font-['VodafoneBold',sans-serif] text-sm font-bold text-gray-900 tracking-tight">
            Vodafone Architecture Comparison
          </span>
        </div>

        <div className="inline-flex rounded-lg bg-gray-100 p-1 gap-1" role="tablist">
          <NavLink
            to="/dashboard1"
            className={({ isActive }) =>
              `px-3.5 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-white text-gray-900 shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`
            }
          >
            <span>/dashboard1</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-200/70 text-gray-700">
              ucc-design-system
            </span>
          </NavLink>

          <NavLink
            to="/dashboard2"
            className={({ isActive }) =>
              `px-3.5 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#E60000] text-white shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`
            }
          >
            <span>/dashboard2</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-current font-bold">
              only shadcn/ui
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-[#fafbfc]">
          <NavigationHeader />

          <Routes>
            {/* Default root redirects to /dashboard1 */}
            <Route path="/" element={<Navigate to="/dashboard1" replace />} />

            {/* Path 1: Dashboard 1 using ucc-design-system */}
            <Route
              path="/dashboard1"
              element={
                <AppLayout>
                  <UccDashboardOverview />
                </AppLayout>
              }
            />

            {/* Path 2: Dashboard 2 using ONLY shadcn/ui */}
            <Route
              path="/dashboard2"
              element={
                <main className="max-w-6xl mx-auto px-6 sm:px-8 py-10">
                  <ShadcnDashboardOverview />
                </main>
              }
            />

            {/* Fallback unknown routes to /dashboard1 */}
            <Route path="*" element={<Navigate to="/dashboard1" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

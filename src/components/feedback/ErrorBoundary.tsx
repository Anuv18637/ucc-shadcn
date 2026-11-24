import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Enterprise Error Boundary caught an error:', error, errorInfo)
  }

  public override render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            style={{
              padding: '32px',
              border: '1.5px solid #E60000',
              borderRadius: '8px',
              backgroundColor: '#FFF5F5',
              color: '#333333',
              margin: '24px auto',
              maxWidth: '800px',
              fontFamily: 'VodafoneRg, sans-serif',
            }}
            role="alert"
          >
            <h2 style={{ color: '#E60000', marginTop: 0 }}>Something went wrong</h2>
            <p>We encountered an unexpected error while rendering this portal view.</p>
          </div>
        )
      )
    }

    return this.props.children
  }
}

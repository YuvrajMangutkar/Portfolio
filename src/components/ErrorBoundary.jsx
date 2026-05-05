import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            background: '#030712',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'JetBrains Mono, monospace',
            color: '#00f5ff',
            gap: '16px',
          }}
        >
          <div style={{ fontSize: '48px' }}>⚠️</div>
          <h1 style={{ fontSize: '20px', color: '#fff' }}>Something went wrong</h1>
          <p style={{ color: '#64748b', fontSize: '13px' }}>
            Please refresh the page or contact{' '}
            <a
              href="mailto:mangutkaryuvraj@gmail.com"
              style={{ color: '#00f5ff' }}
            >
              mangutkaryuvraj@gmail.com
            </a>
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '8px',
              padding: '10px 24px',
              border: '1px solid #00f5ff',
              background: 'transparent',
              color: '#00f5ff',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '13px',
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

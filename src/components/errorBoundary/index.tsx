'use client';

import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Error Boundary caught an error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>some error occurred </h1>
          <button
            onClick={() => {}}
            className="bg-blue hover:bg-redHover rounded-5 px-8 py-3 font-semibold text-white shadow-md"
          >
            Try Again
          </button>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

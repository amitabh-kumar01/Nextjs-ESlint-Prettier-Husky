import ErrorBoundary from '@/components/errorBoundary';
import React from 'react';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default RootProvider;

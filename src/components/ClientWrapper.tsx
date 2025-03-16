'use client';

import { ReactNode, useState, useEffect } from 'react';

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // During the first render, don't render the children to avoid hydration mismatch
  if (!isMounted) {
    return null; // Return empty during server-side rendering or first client render
  }
  
  // Once the component has mounted on the client, render the children
  return <>{children}</>;
} 
import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import type { BaseComponentProps } from '@/types';

interface LayoutProps extends BaseComponentProps {
  showHeader?: boolean;
  showFooter?: boolean;
}

/**
 * Main layout component that wraps all pages
 * Provides consistent header, footer, and toast notifications
 */
export function Layout({
  children,
  showHeader = true,
  showFooter = true,
  className,
}: LayoutProps) {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col">
        {showHeader && <Header />}
        
        <main className={`flex-1 ${showHeader ? 'pt-16' : ''} ${className || ''}`}>
          {children}
        </main>
        
        {showFooter && <Footer />}
      </div>
      <ToastViewport />
    </ToastProvider>
  );
}
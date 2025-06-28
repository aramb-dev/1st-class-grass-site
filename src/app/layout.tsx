import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/layout/layout';
import { ErrorBoundary } from '@/components/common/error-boundary';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'ModernSite - Modern Web Development',
    template: '%s | ModernSite',
  },
  description: 'Build amazing web experiences with modern technology. Fast, secure, and scalable solutions.',
  keywords: ['web development', 'modern', 'fast', 'secure', 'scalable', 'Next.js', 'React'],
  authors: [{ name: 'ModernSite Team' }],
  creator: 'ModernSite',
  publisher: 'ModernSite',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://modernsite.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://modernsite.com',
    title: 'ModernSite - Modern Web Development',
    description: 'Build amazing web experiences with modern technology.',
    siteName: 'ModernSite',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ModernSite - Modern Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModernSite - Modern Web Development',
    description: 'Build amazing web experiences with modern technology.',
    images: ['/og-image.jpg'],
    creator: '@modernsite',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <ErrorBoundary>
          <Layout>
            {children}
          </Layout>
        </ErrorBoundary>
      </body>
    </html>
  );
}
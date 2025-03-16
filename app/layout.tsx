import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PipelineAI - Intelligent CI/CD Powered by AI',
  description: 'Revolutionize your development workflow with AI-driven CI/CD pipelines. Faster deployments, smarter testing, and automated optimization.',
  keywords: 'CI/CD, DevOps, AI, Pipeline, Automation, Testing, Deployment, Development, Workflow',
  authors: [{ name: 'PipelineAI Team' }],
  creator: 'PipelineAI',
  publisher: 'PipelineAI',
  metadataBase: process.env.VERCEL_URL 
    ? new URL(`https://${process.env.VERCEL_URL}`) 
    : new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PipelineAI - Intelligent CI/CD Powered by AI',
    description: 'Revolutionize your development workflow with AI-driven CI/CD pipelines.',
    url: '/',
    siteName: 'PipelineAI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'PipelineAI - Intelligent CI/CD Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PipelineAI - Intelligent CI/CD Powered by AI',
    description: 'Revolutionize your development workflow with AI-driven CI/CD pipelines.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/rocket-filled.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icons/rocket-filled.svg', type: 'image/svg+xml' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/rocket-filled.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
} 
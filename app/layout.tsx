import './globals.css';
import type { Metadata } from 'next';

// This function helps generate absolute URLs based on the environment
function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Default to localhost in development
  return 'http://localhost:3000';
}

export const metadata: Metadata = {
  title: 'PipelineAI - Intelligent CI/CD Powered by AI',
  description: 'Revolutionize your development workflow with AI-driven CI/CD pipelines. Faster deployments, smarter testing, and automated optimization.',
  keywords: 'CI/CD, DevOps, AI, Pipeline, Automation, Testing, Deployment, Development, Workflow',
  authors: [{ name: 'PipelineAI Team' }],
  creator: 'PipelineAI',
  publisher: 'PipelineAI',
  // Using a function to determine the base URL
  metadataBase: new URL(getBaseUrl()),
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
        // This will be automatically prefixed with the metadataBase URL
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
    // This will be automatically prefixed with the metadataBase URL
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
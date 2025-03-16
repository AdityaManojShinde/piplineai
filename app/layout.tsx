import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PipelineAI - Intelligent CI/CD Powered by AI',
  description: 'Revolutionize your development workflow with AI-driven CI/CD pipelines.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/rocket-filled.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icons/rocket-filled.svg', type: 'image/svg+xml' },
    ],
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
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
} 
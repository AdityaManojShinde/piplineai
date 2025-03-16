import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PipelineAI - Intelligent CI/CD Powered by AI',
  description: 'Revolutionize your development workflow with AI-driven CI/CD pipelines.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
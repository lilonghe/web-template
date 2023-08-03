import { ReactNode } from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

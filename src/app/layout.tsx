import React from 'react';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://hxrxchang.github.io'),
  title: {
    default: 'hxrxchang',
    template: '%s | hxrxchang',
  },
  description: '@hxrxchangのWebsite',
  icons: {
    icon: '/tuna2.jpeg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

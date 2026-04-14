import React from 'react';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Volo',
  description: 'Volo',
};

import Navbar from '@/components/ui/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen w-full overflow-x-hidden bg-[#f5f6f7] text-[#2c2f30]" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { ProgressProvider } from '~/components/ProgressProvider';
import { TooltipProvider } from '~/components/ui/Tooltip';

import './globals.css';

export const metadata: Metadata = {
  description: "A simple portfolio site I update when I'm bored",
  title: "Drew Johnson's Portfolio",
};

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider attribute="class">
          <main className="main">
            <TooltipProvider>
              {/* <Header /> */}
              <ProgressProvider>{children}</ProgressProvider>
              {/* <Footer /> */}
            </TooltipProvider>
          </main>
          <Analytics />
        </NextThemesProvider>
      </body>
    </html>
  );
}

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { ProgressProvider } from '~/components/ProgressProvider';
import { ScrollArea } from '~/components/ui/ScrollArea';
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
          <TooltipProvider>
            <main className="main">
              <Header />
              <ScrollArea className="flex-1">
                <ProgressProvider>{children}</ProgressProvider>
              </ScrollArea>
              <Footer />
            </main>
          </TooltipProvider>
          <Analytics />
        </NextThemesProvider>
      </body>
    </html>
  );
}

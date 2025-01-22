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
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="-mt-[var(--headerHeight)] mb-[-var(--footerHeight)] flex-1">
                <ScrollArea className="pb-[var(--footerHeight)] pt-[var(--headerHeight)]">
                  <ProgressProvider>{children}</ProgressProvider>
                </ScrollArea>
              </div>
              <Footer />
            </div>
          </TooltipProvider>
          <Analytics />
        </NextThemesProvider>
      </body>
    </html>
  );
}

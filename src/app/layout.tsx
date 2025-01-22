import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { ProgressProvider } from '~/components/ProgressProvider';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { TooltipProvider } from '~/components/TooltipProvider';
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
    <html lang="en" className={inter.className}>
      <body>
        <NextThemesProvider attribute="class">
          <ProgressProvider>
            <TooltipProvider>
              <Header />
              <main className="main">{children}</main>
              <Footer />
              <Analytics />
            </TooltipProvider>
          </ProgressProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}

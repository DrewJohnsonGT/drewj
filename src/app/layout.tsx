import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { ProgressBar } from 'react-transition-progress';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
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
      <ProgressBar className="progress-bar" />
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <Analytics />
        </NextThemesProvider>
      </body>
    </html>
  );
}

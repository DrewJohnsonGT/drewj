import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Header } from '~/components';
import { ThemeProvider } from '~/utils/useTheme';
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
      <ThemeProvider>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />

          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}

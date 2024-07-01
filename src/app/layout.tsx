import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { Footer, Header } from '~/components';
import type { Metadata } from 'next';
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
  const cookiesList = cookies();
  const colorMode = cookiesList.get('chakra-ui-color-mode');
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers colorMode={colorMode?.value}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

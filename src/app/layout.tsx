import type { Metadata } from 'next';
import { Footer, Header } from '~/components';
import { ThemeProvider } from '~/hooks/useTheme';
import './globals.css';

// const font = localFont({
//   display: 'swap',
//   src: '/fonts/Cube.woff2',
// });

export const metadata: Metadata = {
  description: "A simple portfolio site I update when I'm bored",
  title: "Drew Johnson's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}

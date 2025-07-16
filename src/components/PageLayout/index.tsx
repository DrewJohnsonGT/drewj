'use client';

import { unstable_ViewTransition as ViewTransition } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { ProgressBarDisplay, ProgressBarProvider } from '~/components/ProgressBar';
import { ScrollArea } from '~/components/ui/ScrollArea';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransition>
      <ProgressBarProvider>
        <div className="relative flex min-h-screen flex-col">
          <ProgressBarDisplay />
          <Header />
          <ScrollArea className="-mb-[var(--footerHeight)] -mt-[var(--headerHeight)] flex h-full flex-1 flex-col">
            <div className="flex h-screen flex-1 flex-col pb-[var(--footerHeight)] pt-[var(--headerHeight)]">
              {children}
            </div>
          </ScrollArea>
          <Footer />
        </div>
      </ProgressBarProvider>
    </ViewTransition>
  );
};

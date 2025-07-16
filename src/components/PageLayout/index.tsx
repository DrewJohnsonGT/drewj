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
          <ScrollArea className="-mt-(--headerHeight) -mb-(--footerHeight) flex h-full flex-1 flex-col">
            <div className="flex h-screen flex-1 flex-col pt-(--headerHeight) pb-(--footerHeight)">{children}</div>
          </ScrollArea>
          <Footer />
        </div>
      </ProgressBarProvider>
    </ViewTransition>
  );
};

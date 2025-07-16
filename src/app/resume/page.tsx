'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '~/components/ui/Button';
import { Dialog, DialogContent } from '~/components/ui/Dialog';
import { ScrollArea } from '~/components/ui/ScrollArea';

const RESUME_FILE = '/resume.jpg';

const ResumePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center pb-(--footerHeight) text-center">
      <div className="mx-auto">
        <Button className="my-4">
          <a href="/resume.pdf" download="DrewJohnson_resume.pdf" data-disable-nprogress={true}>
            Download PDF
          </a>
        </Button>
        <Image
          className={`
            cursor-zoom-in object-contain shadow-lg
            dark:shadow-white dark:invert
          `}
          src={RESUME_FILE}
          alt="Resume"
          onClick={() => setIsModalOpen(true)}
          width={800}
          height={800}
        />
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="h-full p-2" hideCloseButton>
          <ScrollArea className="h-full flex-1">
            <Image
              className="cursor-zoom-out object-contain"
              src={RESUME_FILE}
              alt="Resume"
              onClick={() => {
                console.log('clicked');
                setIsModalOpen(false);
              }}
              fill
            />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumePage;

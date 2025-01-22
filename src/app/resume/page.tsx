'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '~/components/ui/Button';
import { Dialog, DialogContent } from '~/components/ui/Dialog';

const RESUME_FILE = '/resume.jpg';

const ResumePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="flex w-full p-4 text-center" onClick={() => isModalOpen && toggleModal()}>
      <div className="mx-auto">
        <Button asChild className="my-4">
          <a href="/resume.pdf" download="DrewJohnson_resume.pdf">
            Download as PDF
          </a>
        </Button>
        <Image
          className="cursor-zoom-in object-contain"
          src={RESUME_FILE}
          alt="Resume"
          onClick={toggleModal}
          width={800}
          height={800}
        />
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="p-0" hideCloseButton>
          <Image
            className="cursor-zoom-out object-contain"
            src={RESUME_FILE}
            alt="Resume"
            onClick={() => setIsModalOpen(false)}
            fill
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumePage;

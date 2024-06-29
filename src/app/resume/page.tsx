'use client';

import { useState } from 'react';
import { Button, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Image from 'next/image';
import styles from './resume.module.css';

const RESUME_FILE = '/resume.jpg';

const ResumePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={styles.root} onClick={() => isModalOpen && toggleModal()}>
      <div className={styles.imageContainer}>
        <Button className={styles.downloadButton}>
          <a href="/resume.pdf" download="DrewJohnson_resume.pdf">
            Download as PDF
          </a>
        </Button>
        <Image
          className={styles.resumeImage}
          src={RESUME_FILE}
          alt="Resume"
          onClick={toggleModal}
          width={800}
          height={800}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        allowPinchZoom
        size="full"
        isCentered>
        <ModalOverlay />
        <ModalContent p={4}>
          <Image
            className={styles.resumeImageExpanded}
            src={RESUME_FILE}
            alt="Resume"
            onClick={() => setIsModalOpen(false)}
            fill
          />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ResumePage;

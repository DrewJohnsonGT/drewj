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
          width={1000}
          height={1000}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="full"
        allowPinchZoom
        isCentered>
        <ModalOverlay />
        <ModalContent p={4}>
          <Image
            className={styles.resumeImageExpanded}
            src={RESUME_FILE}
            alt="Resume"
            width={2000}
            height={2000}
            onClick={() => setIsModalOpen(false)}
          />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ResumePage;

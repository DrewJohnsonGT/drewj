'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './resume.module.css';

const ResumePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={styles.root} onClick={() => isModalOpen && toggleModal()}>
      <button className={styles.downloadButton}>
        <a href="/resume.pdf" download="DrewJohnson_resume.pdf">
          Download as PDF
        </a>
      </button>
      <div className={styles.imageContainer}>
        <Image
          src="/resume.png"
          alt="Resume"
          onClick={toggleModal}
          className={styles.resumeImage}
          fill
        />
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent} onClick={toggleModal}>
            <Image
              src="/resume.png"
              alt="Zoomed Resume"
              width={1400}
              height={1866}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePage;

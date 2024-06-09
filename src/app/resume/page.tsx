'use client';

import { useState } from 'react';
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
      <button className={styles.downloadButton}>
        <a href="/resume.pdf" download="DrewJohnson_resume.pdf">
          Download as PDF
        </a>
      </button>
      <div className={styles.imageContainer}>
        <Image
          src={RESUME_FILE}
          alt="Resume"
          onClick={toggleModal}
          className={styles.resumeImage}
          fill
        />
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <Image
              src={RESUME_FILE}
              alt="Zoomed Resume"
              width={1400}
              height={1866}
              onClick={(e) => {
                e.stopPropagation();
                toggleModal();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePage;

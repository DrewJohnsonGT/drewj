'use client';

import Image from 'next/image';
import { SKILLS } from '~/constants';
import { useWindowSize } from '~/hooks/useWindowSize';
import styles from './page.module.css';

export const getRandomVariance = (max: number, isAlwaysPositive?: Boolean) =>
  (isAlwaysPositive ? 1 : Math.round(Math.random()) * 2 - 1) *
  (Math.random() * max);

export default function Home() {
  const windowDimensions = useWindowSize();
  const maxIconSize = windowDimensions.height * 0.25;
  const minIconSize = windowDimensions.height * 0.05;
  return (
    <section className={styles.root}>
      <div className={styles.blurryBackdrop}>
        <h1 className={styles.name}>Drew Johnson</h1>
        <h3 className={styles.slogan}>
          <i>Always building something</i>
        </h3>
      </div>
      <div className={styles.skills}>
        {SKILLS.map(({ icon, score }) => {
          const size =
            minIconSize + (maxIconSize - minIconSize) * (score / 100);
          const yOffset =
            size / 2 + Math.random() * (windowDimensions.height - size);

          const travelTime = score * 0.75 + getRandomVariance(score / 2);
          const delay = getRandomVariance(10);
          return (
            <Image
              key={icon}
              src={`/logos/${icon}.svg`}
              alt={icon}
              style={{
                animation: `${Math.random() > 0.5 ? styles.moveAndRotate : styles.moveAndRotateCounter} ${travelTime}s infinite ${delay}s linear`,
                height: `${size}px`,
                left: `-${maxIconSize + getRandomVariance(size, true)}px`,
                top: `${yOffset}px`,
                width: `${size}px`,
              }}
              className={styles.skill}
              width={100}
              height={100}
            />
          );
        })}
      </div>
    </section>
  );
}

'use client';

import clsx from 'clsx';
import NextImage from 'next/image';
import { SVGProps, useEffect, useState } from 'react';
import { CyclingText } from '~/components/CyclingText';
import { SKILLS } from '~/constants';
import { useElementSize } from '~/utils/useElementSize';
import styles from './page.module.css';

interface SkillProps {
  icon: string;
  logo: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
  style: Record<string, string>;
}

const getRandomVariance = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export default function Home() {
  const { ref: sectionRef, size: sectionSize } = useElementSize();
  const [skillStyles, setSkillStyles] = useState<SkillProps[]>([]);

  useEffect(() => {
    const maxIconSize = sectionSize.height * 0.25;
    const minIconSize = sectionSize.height * 0.025;

    const newSkillStyles = SKILLS.map(({ icon, logo, score }) => {
      const size = minIconSize + (maxIconSize - minIconSize) * (score / 100);
      const top = Math.random() * (sectionSize.height - size / 2);

      const baseTravelTime = getRandomVariance(10, 60);
      const travelTime = baseTravelTime * (sectionSize.width / 1000);
      const delay = getRandomVariance(0, 30);

      return {
        icon,
        logo,
        style: {
          animation: `${Math.random() > 0.5 ? styles.moveAndRotate : styles.moveAndRotateCounter} ${travelTime}s infinite ${delay}s linear`,
          height: `${size}px`,
          left: `-${maxIconSize + getRandomVariance(0, size)}px`,
          top: `${top}px`,
          width: `${size}px`,
        },
      };
    });
    setSkillStyles(newSkillStyles);
  }, [sectionSize.height, sectionSize.width]);

  return (
    <section className={styles.root} ref={sectionRef}>
      <div className="z-10 p-4 inline-flex backdrop-blur-sm rounded-lg text-2xl">
        <div className="relative h-[150px] w-[150px] mr-4">
          <NextImage
            className={clsx("absolute rounded-full border-[5px] border-primary mr-4 bg-white/10 transition-all duration-500 opacity-100", styles.regularHeadshot)}
            src="/images/headshot.png"
            alt="Drew Johnson"
            width={150}
            height={150}
          />
          <NextImage
            className={clsx("absolute rounded-full border-[5px] border-primary mr-4 bg-white/10 transition-all duration-500 opacity-0 hover:opacity-100", styles.mandoHeadshot)}
            src="/images/mando-headshot.png"
            alt="Drew Johnson the Mandalorian"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col m-auto">
          <CyclingText text="Drew Johnson" />
          <h3 className="text-primary font-['Qube'] mt-2 text-sm">
            <i>Always Building Something</i>
          </h3>
        </div>
      </div>
      <div className="h-full w-full absolute top-0 left-0">
        {skillStyles.map(({ icon, logo: Logo, style }) => (
          <Logo key={icon} style={style} className="absolute bottom-0 will-change-[animation] transition-all duration-300 opacity-45" />
        ))}
      </div>
    </section>
  );
}

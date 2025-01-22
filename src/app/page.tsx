'use client';

import { JSX, SVGProps, useEffect, useState } from 'react';
import NextImage from 'next/image';
import { CyclingText } from '~/components/CyclingText';
import { SKILLS } from '~/constants';
import { useElementSize } from '~/utils/useElementSize';

interface SkillProps {
  icon: string;
  logo: (props: SVGProps<SVGElement>) => JSX.Element;
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
          animation: `${Math.random() > 0.5 ? 'moveAndRotate' : 'moveAndRotateCounter'} ${travelTime}s infinite ${delay}s linear`,
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
    <section
      ref={sectionRef}
      className="relative flex flex-1 flex-col items-center justify-center overflow-hidden"
    >
      <div className="z-10 inline-flex rounded-lg p-4 text-2xl backdrop-blur-sm md:m-2 md:flex-col md:items-center md:gap-2 md:text-center">
        <div className="relative mr-4 h-[150px] w-[150px] md:mr-0">
          <NextImage
            className="absolute mr-4 rounded-full border-[5px] border-[var(--chakra-colors-orange-500)] bg-white/10 opacity-100 transition-all duration-500"
            src="/images/headshot.png"
            alt="Drew Johnson"
            width={150}
            height={150}
          />
          <NextImage
            className="absolute mr-4 rounded-full border-[5px] border-[var(--chakra-colors-orange-500)] bg-white/10 opacity-0 transition-all duration-500 hover:opacity-100"
            src="/images/mando-headshot.png"
            alt="Drew Johnson the Mandalorian"
            width={150}
            height={150}
          />
        </div>
        <div className="m-auto flex flex-col">
          <CyclingText text="Drew Johnson" />
          <h3 className="mt-2 font-['Qube'] text-sm text-[var(--chakra-colors-orange-500)]">
            <i>Always Building Something</i>
          </h3>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full">
        {skillStyles.map(({ icon, logo: Logo, style }) => (
          <Logo
            key={icon}
            style={style}
            className="absolute bottom-0 opacity-45 transition-all duration-300 will-change-[animation]"
          />
        ))}
      </div>
    </section>
  );
}

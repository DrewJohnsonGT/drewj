'use client';

import { JSX, SVGProps, useEffect, useState } from 'react';
import NextImage from 'next/image';
import { CyclingText } from '~/components/CyclingText';
import { SKILLS } from '~/constants';
import { useElementSize } from '~/utils/useElementSize';

interface SkillProps {
  icon: string;
  logo: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  style: Record<string, string>;
}

const getRandomVariance = (min: number, max: number): number => Math.random() * (max - min) + min;

export default function Home() {
  const { ref: sectionRef, size: sectionSize } = useElementSize();
  const [skillStyles, setSkillStyles] = useState<SkillProps[]>([]);
  const [showMando, setShowMando] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMando(true);
      setTimeout(() => {
        setShowMando(false);
      }, 3000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

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
          left: `-${size}px`,
          top: `${top}px`,
          width: `${size}px`,
        },
      };
    });
    setSkillStyles(newSkillStyles);
  }, [sectionSize.height, sectionSize.width]);

  return (
    <section ref={sectionRef} className="flex flex-1 flex-col items-center justify-center overflow-hidden">
      <div
        className={`
          z-10 m-2 inline-flex flex-col items-center gap-2 rounded-lg text-center text-2xl backdrop-blur-sm
          md:flex-row
        `}
      >
        <div
          className={`
            relative mr-4 size-[150px]
            md:mr-0
          `}
        >
          <NextImage
            className={`
              absolute mr-4 rounded-full border-[5px] border-primary bg-white/10 opacity-100 transition-all duration-500
            `}
            src="/images/headshot.png"
            alt="Drew Johnson"
            width={150}
            height={150}
          />
          <NextImage
            className={`
              absolute mr-4 rounded-full border-[5px] border-primary bg-white/10 transition-all duration-500
              ${
                showMando
                  ? `opacity-100`
                  : `
                    opacity-0
                    hover:opacity-100
                  `
              }
            `}
            src="/images/mando-headshot.png"
            alt="Drew Johnson the Mandalorian"
            width={150}
            height={150}
          />
        </div>
        <div className="m-auto flex flex-col">
          <CyclingText text="Drew Johnson" />
          <h3
            className={`
              mt-2 font-['Qube'] text-base text-primary
              md:text-start
            `}
          >
            <i>Always Building Something</i>
          </h3>
        </div>
      </div>
      <div className="absolute top-0 left-0 size-full">
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

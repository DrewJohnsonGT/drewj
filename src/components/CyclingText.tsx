'use client';

import { useEffect, useState } from 'react';

const CYCLE_COUNT = 40;
const CYCLE_PERIOD = 750;

const fonts = [
  'Qube',
  'Geotalism',
  'Mecha',
  'ScienceFiction',
  'Sikat',
  'Beking',
  'Cookies',
  'Identify',
  'demo',
  'street',
  'monkey',
  'gotrix',
  'mallcity',
  'spooky',
];
const FINAL_FONT = 'Qube';

const setFinalFont = () => {
  const letters = document.querySelectorAll('.cycling-letter');
  letters.forEach((letter) => {
    (letter as HTMLElement).style.fontFamily = FINAL_FONT;
  });
};

export const CyclingText = ({ text }: { text: string }) => {
  const [_count, setCount] = useState(0);

  useEffect(() => {
    const rollIntro = () => {
      const letters = document.querySelectorAll('.cycling-letter');
      letters.forEach((letter) => {
        const randomFontIndex = Math.floor(Math.random() * fonts.length);
        const randomFont = fonts[randomFontIndex];
        (letter as HTMLElement).style.fontFamily = randomFont;
      });
    };

    const introAnimation = setInterval(() => {
      rollIntro();
      setCount((prevCount) => {
        if (prevCount > CYCLE_COUNT) {
          clearInterval(introAnimation);
          setFinalFont();
        }
        return prevCount + 1;
      });
    }, CYCLE_PERIOD);

    return () => clearInterval(introAnimation);
  }, []);

  return (
    <div className="w-full grid place-content-center bg-cover font-[Qube]">
      <h2 className="text-[3rem] leading-none flex items-center justify-between flex-wrap md:text-[1.75rem]">
        {text.split('').map((letter, index) => (
          <p
            key={index}
            className="cycling-letter text-[--textColor] w-12 md:w-6 [text-shadow:0_0_0.4em_var(--chakra-colors-orange-500),0_0_0.5em_var(--chakra-colors-orange-500),0_0_0.25em_var(--chakra-colors-orange-500)]">
            {letter}
          </p>
        ))}
      </h2>
    </div>
  );
};

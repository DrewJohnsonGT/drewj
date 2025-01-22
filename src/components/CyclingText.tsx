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
    <div className="grid w-full place-content-center bg-cover font-[Qube]">
      <h2 className="flex flex-wrap items-center justify-between text-[1.75rem] leading-none md:text-[3rem]">
        {text.split('').map((letter, index) => (
          <p
            key={index}
            className="cycling-letter w-6 text-foreground drop-shadow-[0px_0px_16px_hsl(var(--primary))] md:w-12"
          >
            {letter}
          </p>
        ))}
      </h2>
    </div>
  );
};

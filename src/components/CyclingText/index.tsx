import { useEffect, useState } from 'react';
import styles from './cyclingText.module.css';

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
  const letters = document.querySelectorAll(`.${styles.letter}`);
  letters.forEach((letter) => {
    (letter as HTMLElement).style.fontFamily = FINAL_FONT;
  });
};

export const CyclingText = ({ text }: { text: string }) => {
  const [_count, setCount] = useState(0);

  useEffect(() => {
    const rollIntro = () => {
      const letters = document.querySelectorAll(`.${styles.letter}`);
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
    <div className={styles.container}>
      <h2 className={styles.text}>
        {text.split('').map((letter, index) => (
          <p key={index} className={styles.letter}>
            {letter}
          </p>
        ))}
      </h2>
    </div>
  );
};

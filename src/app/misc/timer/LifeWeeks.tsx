'use client';

import { useEffect, useState } from 'react';

const EXPECTED_LIFESPAN = 80;

export const LifeWeeks = ({ birthDate }: { birthDate: string }) => {
  const WEEKS_PER_YEAR = 52;
  const totalWeeks = EXPECTED_LIFESPAN * WEEKS_PER_YEAR;
  const [weeksLived, setWeeksLived] = useState(0);

  useEffect(() => {
    const calculateWeeksLived = () => {
      const now = new Date();
      const birth = new Date(birthDate);
      const diffInMs = now.getTime() - birth.getTime();
      const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
      setWeeksLived(diffInWeeks);
    };

    calculateWeeksLived();

    const interval = setInterval(calculateWeeksLived, 1000 * 60 * 60 * 24 * 7);

    return () => clearInterval(interval);
  }, [birthDate]);

  const weeksArray = Array.from({ length: totalWeeks }, (_, index) => index);

  return (
    <div
      className={`
        grid flex-1 grid-cols-26 gap-1 px-8
        md:grid-cols-13
        lg:grid-cols-52
      `}
    >
      {weeksArray.map((week) => (
        <div
          key={week}
          className={`
            mx-auto size-2.5 rounded-full
            ${
              week === weeksLived - 1
                ? `
                  animate-pulse bg-primary shadow-lg ring-2 shadow-primary/50 ring-primary/50 ring-offset-1
                  ring-offset-background
                `
                : week < weeksLived
                  ? 'bg-primary'
                  : 'bg-muted'
            }
          `}
        />
      ))}
    </div>
  );
};

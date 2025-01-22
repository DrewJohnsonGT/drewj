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
    <div className="text-center">
      <div className="grid grid-cols-13 md:grid-cols-26 lg:grid-cols-52 gap-1">
        {weeksArray.map((week) => (
          <div
            key={week}
            className={`w-2.5 h-2.5 mx-auto rounded-full ${
              week < weeksLived ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

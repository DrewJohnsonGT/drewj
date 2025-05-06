'use client';

import { useEffect, useState } from 'react';
import { LifeWeeks } from './LifeWeeks';
import { TimeSinceItem } from './TimeSinceItem';
import { ScrollArea } from '~/components/ui/ScrollArea';

export interface TimeSince {
  days: number;
  hours: number;
  minutes: number;
  percentOfMonth: number;
  seconds: number;
}

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
const ONE_MONTH = ONE_WEEK * 4;

const TIME = {
  goal: ONE_MONTH,
  time: new Date('Tue May 6th 2025 00:40:00 GMT-0400 (Eastern Daylight Time)'),
};

const getPercentOfGoal = (date: Date, goal: number) => {
  const ms = Date.now() - date.getTime();
  const percentage = (ms / goal) * 100;
  return Math.round(percentage * 100) / 100;
};

const getTimeSince = (time: Date) => {
  const now = new Date();
  const diff = now.getTime() - time.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};

const useHomeLogic = () => {
  const [timeSince, setTimeSince] = useState<TimeSince>();

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSince = getTimeSince(TIME.time);
      const percentOfGoal = getPercentOfGoal(TIME.time, TIME.goal);
      setTimeSince({
        ...timeSince,
        percentOfMonth: percentOfGoal,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    timeSince,
  };
};

const TimeSincePage = () => {
  const { timeSince } = useHomeLogic();
  return (
    <div className="flex flex-1 flex-col gap-4">
      <ScrollArea className="flex flex-1">
        <div className="flex flex-row items-center justify-center gap-12">
          {timeSince && <TimeSinceItem {...timeSince} />}
        </div>
        <LifeWeeks birthDate="1995-05-30" />
      </ScrollArea>
    </div>
  );
};

export default TimeSincePage;

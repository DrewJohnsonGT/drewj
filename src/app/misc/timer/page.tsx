'use client';

import { useEffect, useState } from 'react';
import { LifeWeeks } from './LifeWeeks';
import { TimeSinceItem } from './TimeSinceItem';
import { ScrollArea } from '~/components/ui/ScrollArea';

export interface TimeSince {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  percentOfMonth: number;
}

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
const ONE_MONTH = ONE_WEEK * 4;

const TIMES = [
  {
    goal: ONE_MONTH,
    time: new Date('Thu Mar 13 2025 23:44:00 GMT-0500 (Eastern Standard Time)'),
  },
];

const getPercentOfGoal = (date: Date, goal: number) => {
  const currentDate = new Date();
  const ms = currentDate.getTime() - date.getTime();
  const percentage = (ms / goal) * 100;
  return Math.round(percentage * 100) / 100;
};

const useHomeLogic = () => {
  const [timeSince, setTimeSince] = useState<TimeSince[]>();

  // Find time since TIME and update every second
  const getTimeSince = (time: Date) => {
    const now = new Date();
    const diff = now.getTime() - time.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSince(
        TIMES.map(({ goal, time }) => ({
          ...getTimeSince(time),
          percentOfMonth: getPercentOfGoal(time, goal),
        })),
      );
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
          {timeSince?.map((ts, index) => <TimeSinceItem key={index} {...ts} />)}
        </div>
        <LifeWeeks birthDate="1995-05-30" />
      </ScrollArea>
    </div>
  );
};

export default TimeSincePage;

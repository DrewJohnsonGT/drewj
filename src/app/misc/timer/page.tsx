'use client';

import { useEffect, useState } from 'react';
import { LifeWeeks } from './LifeWeeks';
import { TimeSinceItem } from './TimeSinceItem';
import { ScrollArea } from '~/components/ui/ScrollArea';
import { GOALS } from '~/constants';
import { getPercentOfGoal } from '~/utils/getPercentOfGoal';
import { getTimeSince } from '~/utils/getTimeSince';

export interface TimeSince {
  days: number;
  hours: number;
  label: string;
  minutes: number;
  percentOfGoal: number;
  seconds: number;
}

const useHomeLogic = () => {
  const [timeSinceItems, setTimeSinceItems] = useState<TimeSince[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const items = GOALS.map((goal) => {
        const timeSince = getTimeSince(goal.startDate);
        const percentOfGoal = getPercentOfGoal(goal.startDate, goal.goal);
        return {
          ...timeSince,
          label: goal.label,
          percentOfGoal,
        };
      });
      setTimeSinceItems(items);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    timeSinceItems,
  };
};

const TimeSincePage = () => {
  const { timeSinceItems } = useHomeLogic();
  return (
    <div className="flex flex-1 flex-col gap-4">
      <ScrollArea className="flex flex-1">
        <div className="flex flex-col items-center justify-center gap-8">
          {timeSinceItems.map((timeSince, index) => (
            <TimeSinceItem key={index} {...timeSince} />
          ))}
        </div>
        <LifeWeeks birthDate="1995-05-30" />
      </ScrollArea>
    </div>
  );
};

export default TimeSincePage;

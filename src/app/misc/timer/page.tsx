'use client';

import { useEffect, useState } from 'react';
import { LifeWeeks } from './LifeWeeks';
import { TimeSinceItem } from './TimeSinceItem';
import { ScrollArea } from '~/components/ui/ScrollArea';
import { GOAL, START_DATE } from '~/constants';
import { getPercentOfGoal } from '~/utils/getPercentOfGoal';
import { getTimeSince } from '~/utils/getTimeSince';

export interface TimeSince {
  days: number;
  hours: number;
  minutes: number;
  percentOfMonth: number;
  seconds: number;
}

const useHomeLogic = () => {
  const [timeSince, setTimeSince] = useState<TimeSince>();

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSince = getTimeSince(START_DATE);
      const percentOfGoal = getPercentOfGoal(START_DATE, GOAL);
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

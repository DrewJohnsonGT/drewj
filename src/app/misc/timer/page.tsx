'use client';

import { useEffect, useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export interface TimeSince {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  percentOfMonth: number;
}

const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

const TIMES = [
  {
    goal: ONE_MONTH,
    time: new Date('Aug 25 2024 16:19:00 GMT-0400 (Eastern Daylight Time)'),
  },
  {
    goal: ONE_WEEK,
    time: new Date('Aug 28 2024 16:29:00 GMT-0400 (Eastern Daylight Time)'),
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

const TimeSinceItem = ({
  days,
  hours,
  minutes,
  percentOfMonth,
  seconds,
}: TimeSince) => {
  return (
    <Flex align="center" justify="center" direction="column">
      <Heading>
        {days} <span>days</span>
      </Heading>
      <Heading>
        {hours} <span>hours</span>
      </Heading>
      <Heading>
        {minutes} <span>minutes</span>
      </Heading>
      <Heading>
        {seconds} <span>seconds</span>
      </Heading>
      {percentOfMonth && (
        <Heading mt={4}>{percentOfMonth?.toFixed(2)}%</Heading>
      )}
    </Flex>
  );
};

const TimeSincePage = () => {
  const { timeSince } = useHomeLogic();
  return (
    <Flex align="center" justify="center" h="100vh" direction="column" gap={12}>
      {timeSince?.map((ts, index) => <TimeSinceItem key={index} {...ts} />)}
    </Flex>
  );
};

export default TimeSincePage;

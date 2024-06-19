'use client';

import { useEffect, useState } from 'react';
import styles from './timer.module.css';

export interface TimeSince {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  percentOfMonth: number;
}

const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;

const TIMES = [
  {
    goal: ONE_MONTH,
    time: new Date('Jun 19 2024 13:36:00 GMT-0400 (Eastern Daylight Time)'),
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
  const { days, hours, minutes, percentOfMonth, seconds } =
    timeSince?.[0] || {};
  return (
    <div className={styles.root}>
      <h2>
        {days} <span className={styles.label}>days</span>
      </h2>
      <h2>
        {hours} <span className={styles.label}>hours</span>
      </h2>
      <h2>
        {minutes} <span className={styles.label}>minutes</span>
      </h2>
      <h2>
        {seconds} <span className={styles.label}>seconds</span>
      </h2>
      {percentOfMonth && <h2>{percentOfMonth?.toFixed(2)}%</h2>}
    </div>
  );
};

export default TimeSincePage;

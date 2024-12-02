'use client';

import { useEffect, useState } from 'react';
import { LifeWeeks } from './LifeWeeks';
import { TimeSinceItem } from './TimeSinceItem';
import { Flex, Text } from '@chakra-ui/react';

async function fetchCryptoPrice(symbol: string): Promise<number | null> {
  try {
    const response = await fetch(`/api/crypto?symbol=${String(symbol)}`);

    if (!response.ok) {
      console.log('ERROR FETCHING CRYPTO');
      console.error(`HTTP error! status: ${response.status}`);
      return null;
    }

    const price = await response.json();
    return price ? parseInt(price) : null;
  } catch (e) {
    console.log('ERROR FETCHING CRYPTO');
    console.error(e);
    return null;
  }
}

export interface TimeSince {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  percentOfMonth: number;
}

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

const TIMES = [
  {
    goal: ONE_WEEK,
    time: new Date('Dec 02 2024 08:55:00 GMT-0500 (Eastern Standard Time)'),
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
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [ethPrice, setEthPrice] = useState<number | null>(null);

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

  useEffect(() => {
    fetchCryptoPrice('BITSTAMP_SPOT_BTC_USD').then((price) => {
      setBtcPrice(price);
    });
    fetchCryptoPrice('BITSTAMP_SPOT_ETH_USD').then((price) => {
      setEthPrice(price);
    });
  }, []);

  return {
    btcPrice,
    ethPrice,
    timeSince,
  };
};

const TimeSincePage = () => {
  const { btcPrice, ethPrice, timeSince } = useHomeLogic();
  return (
    <Flex direction="column" gap={4} padding={8}>
      <Flex direction="row" gap={12} align="center" justify="center">
        {timeSince?.map((ts, index) => <TimeSinceItem key={index} {...ts} />)}
        <Flex direction="column" gap={4}>
          <Text>BTC: {btcPrice}</Text>
          <Text>ETH: {ethPrice}</Text>
        </Flex>
      </Flex>
      <LifeWeeks birthDate="1995-05-30" />
    </Flex>
  );
};

export default TimeSincePage;

import { TimeSince } from './page';
import { Flex, Text } from '@chakra-ui/react';

export const TimeSinceItem = ({
  days,
  hours,
  minutes,
  percentOfMonth,
  seconds,
}: TimeSince) => {
  return (
    <Flex align="center" justify="center" direction="column">
      <Flex direction="row" align="center" justify="center" gap={2}>
        {[
          { label: 'D', value: days },
          { label: 'H', value: hours },
          { label: 'M', value: minutes },
          { label: 'S', value: seconds },
        ].map((unit, index) => (
          <Flex key={index} direction="column" align="center">
            <Text fontSize="2xl" fontWeight="bold">
              {unit.value}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {unit.label}
            </Text>
          </Flex>
        ))}
      </Flex>
      {percentOfMonth && (
        <Text fontSize="lg" color="orange.500">
          {percentOfMonth?.toFixed(2)}%
        </Text>
      )}
    </Flex>
  );
};

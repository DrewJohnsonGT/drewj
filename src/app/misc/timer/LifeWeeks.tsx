import { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

const EXPECTED_LIFESPAN = 90;

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

    // Optional: Recalculate every week to keep the component up-to-date
    const interval = setInterval(calculateWeeksLived, 1000 * 60 * 60 * 24 * 7);

    return () => clearInterval(interval);
  }, [birthDate]);

  const weeksArray = Array.from({ length: totalWeeks }, (_, index) => index);

  return (
    <Box textAlign="center">
      <SimpleGrid columns={[13, null, 26, 52]} spacing={1}>
        {weeksArray.map((week) => (
          <Box
            key={week}
            width={2.5}
            height={2.5}
            bg={week < weeksLived ? 'orange.500' : 'gray.200'}
            borderRadius="full"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

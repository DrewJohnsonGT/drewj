import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useMarketSymbol } from '~/utils/useMarketPrice';

export const MarketPriceTicker = ({
  iconImage,
  symbol,
}: {
  symbol: string;
  iconImage: string;
}) => {
  const { currentPrice } = useMarketSymbol({
    symbol,
  });
  const formattedCurrentPrice = Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    style: 'currency',
  }).format(currentPrice);
  return (
    <Box>
      <Flex justifyContent="flex-end" alignItems="center">
        <Flex flex="0.5" marginRight="0.5rem" justifyContent="flex-end">
          <Image src={iconImage} alt={iconImage} boxSize="30px" />
        </Flex>
        <Text flex="1" fontSize="1.5rem">
          {formattedCurrentPrice}
        </Text>
      </Flex>
    </Box>
  );
};

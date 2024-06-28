'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { withDefaultColorScheme } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';

const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'orange' }), {
  initialColorMode: 'system',
  useSystemColorMode: true,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}

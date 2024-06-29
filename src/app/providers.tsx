'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { withDefaultColorScheme } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      orange: {
        50: '#ffe9db',
        100: '#ffc9ae',
        200: '#ffad7e',
        300: '#ff924c',
        400: '#ff7a1a',
        500: '#e66800',
        600: '#b44500',
        700: '#812800',
        800: '#4f1200',
        900: '#200100',
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'orange' }),
  {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}

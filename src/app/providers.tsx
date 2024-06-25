'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { withDefaultColorScheme } from '@chakra-ui/react';
import { ThemeProvider } from '~/utils/useTheme';

const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'orange' }));

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ThemeProvider>
  );
}

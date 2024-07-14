'use client';

import { ProgressBar, ProgressBarProvider } from 'react-transition-progress';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { withDefaultColorScheme } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import { setCookie } from 'cookies-next';

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
    components: {
      Button: {
        defaultProps: {
          variant: 'outline',
        },
      },
      IconButton: {
        defaultProps: {
          variant: 'outline',
        },
      },
    },
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  withDefaultColorScheme({ colorScheme: 'orange' }),
);

export function Providers({
  children,
  colorMode,
}: {
  children: React.ReactNode;
  colorMode?: string;
}) {
  return (
    <CacheProvider>
      <ChakraProvider
        colorModeManager={{
          get: () => (colorMode as 'dark' | 'light') ?? 'dark',
          set: (value) => {
            setCookie('chakra-ui-color-mode', value);
          },
          ssr: true,
          type: 'cookie',
        }}
        theme={theme}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
          type="cookie"
        />
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}

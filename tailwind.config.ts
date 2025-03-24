import type { Config } from 'tailwindcss';
import { default as tailwindcssAnimate } from 'tailwindcss-animate';

const INPUT_HEIGHT = '2.25rem';

const config: Config = {
  content: ['./src/**/*.tsx'],
  darkMode: ['class'],
  plugins: [tailwindcssAnimate],
  theme: {
    extend: {
      animation: {
        rotating: 'rotating linear infinite',
      },
      backgroundImage: {
        'outline-hover':
          'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)',
        'outline-normal':
          'linear-gradient(180deg, hsl(var(--background-lighter)) 0%, hsl(var(--background)) 100%)',
        'outline-pressed':
          'linear-gradient(180deg, hsl(var(--background-lighter)) 0%, hsl(var(--background)) 100%)',
        'primary-focused':
          'linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--secondary-dark)) 100%)',
        'primary-hover':
          'linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--secondary-dark)) 100%)',
        'primary-normal':
          'linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
        'primary-pressed':
          'linear-gradient(180deg, hsl(var(--secondary-dark)) 0%, hsl(var(--secondary-darker)) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: {
          background: 'hsl(var(--input-background))',
          DEFAULT: 'hsl(var(--input))',
        },
        link: 'hsl(var(--link))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          lighter: 'hsl(var(--primary-lighter))',
          DEFAULT: 'hsl(var(--primary))',
          darker: 'hsl(var(--primary-darker))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          lighter: 'hsl(var(--secondary-lighter))',
          DEFAULT: 'hsl(var(--secondary))',
          darker: 'hsl(var(--secondary-darker))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        sidebar: {
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        26: 'repeat(26, minmax(0, 1fr))',
        52: 'repeat(52, minmax(0, 1fr))',
      },
      height: {
        input: INPUT_HEIGHT,
      },
      keyframes: {
        rotating: {
          '0%': {
            transform:
              'translateZ(calc(var(--translateZ)*-1)) rotateX(0deg) rotateY(0deg)',
          },
          '100%': {
            transform:
              'translateZ(calc(var(--translateZ)*-1)) rotateX(360deg) rotateY(360deg)',
          },
        },
      },
      size: {
        input: INPUT_HEIGHT,
      },
      transitionDuration: {
        DEFAULT: '150ms',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
        4000: '4000ms',
      },
    },
  },
} satisfies Config;

export default config;

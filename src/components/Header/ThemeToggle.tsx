'use client';

import { useTheme } from 'next-themes';
import { EmpireSVG } from '~/assets/svg/empire';
import { RebelsSVG } from '~/assets/svg/rebels';
import { Button } from '~/components/ui/Button';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/Tooltip';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {resolvedTheme === 'dark' ? <EmpireSVG /> : <RebelsSVG />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Change to {resolvedTheme === 'dark' ? 'light' : 'dark'} theme
      </TooltipContent>
    </Tooltip>
  );
};

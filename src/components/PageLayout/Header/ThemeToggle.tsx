'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { EmpireSVG } from '~/assets/svg/empire';
import { RebelsSVG } from '~/assets/svg/rebels';
import { Button } from '~/components/ui/Button';
import { Skeleton } from '~/components/ui/Skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/Tooltip';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="size-12" />;
  }

  const Icon = resolvedTheme === 'dark' ? EmpireSVG : RebelsSVG;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-12 text-foreground"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          <Icon className="size-12 text-foreground" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Change to {resolvedTheme === 'dark' ? 'light' : 'dark'} theme</TooltipContent>
    </Tooltip>
  );
};

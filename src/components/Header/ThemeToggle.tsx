import { IconButton, Tooltip } from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { EmpireSVG } from '~/assets/svg/empire';
import { RebelsSVG } from '~/assets/svg/rebels';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div className={styles.root}>
      <Tooltip
        label={`Change to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}>
        <IconButton
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          icon={resolvedTheme === 'dark' ? <EmpireSVG /> : <RebelsSVG />}
          aria-label="Change theme"
        />
      </Tooltip>
    </div>
  );
};

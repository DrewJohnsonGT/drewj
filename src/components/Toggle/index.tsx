'use client';

import cslx from 'clsx';
import { motion } from 'framer-motion';
import styles from './toggle.module.css';

const SPRING_TRANSITION = { damping: 32, stiffness: 600, type: 'spring' };

const TOGGLE_FRAMER_CONFIG = {
  layout: true,
  transition: SPRING_TRANSITION,
};

const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isLightTheme = theme === Theme.LIGHT;

  return (
    <div
      onClick={toggleTheme}
      className={clsx(styles.switch, isLightTheme && styles.switchLight })}>

    </div>
  );
};

export default ToggleTheme;

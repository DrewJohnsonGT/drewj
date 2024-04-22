import { EmpireSVG } from '~/assets/svg/empire';
import { RebelsSVG } from '~/assets/svg/rebels';
import { useTheme } from '~/hooks/useTheme';
import styles from './themeToggle.module.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleClick} className={styles.root}>
      <div className={styles.imageContainer}>
        <div
          className={`${styles.imageWrapper} ${theme === 'light' ? styles.fadeIn : styles.fadeOut}`}>
          <RebelsSVG className={styles.rebels} />
        </div>

        <div
          className={`${styles.imageWrapper} ${theme === 'dark' ? styles.fadeIn : styles.fadeOut}`}>
          <EmpireSVG className={styles.empire} />
        </div>
      </div>
    </button>
  );
};

import Link from 'next/link';
import { ROUTES } from '~/constants';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        {ROUTES.map((route) => (
          <Link href={`/${route.value}`} key={route.value}>
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

import Link from 'next/link';
import { Cube } from '~/components/Header/Cube';
import { ROUTES } from '~/constants';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link href="/">
        <Cube />
      </Link>
      <nav className={styles.navItem}>
        {ROUTES.map((route) => (
          <Link href={`/${route.value}`} key={route.value}>
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

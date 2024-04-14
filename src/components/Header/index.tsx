'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cube } from '~/components/Header/Cube';
import { ROUTES } from '~/constants';
import { useClickAway } from '~/hooks/useClickAway';
import styles from './header.module.css';

export const Header = () => {
  const currentPath = usePathname().split('/')[1];
  const navRef = useRef<(HTMLLIElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const clickAwayRef = useClickAway<HTMLUListElement>(() => setMenuOpen(false));

  const findRouteIndex = useCallback(
    () => ROUTES.findIndex((route) => route.value === currentPath),
    [currentPath],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = findRouteIndex();
    setActiveIndex(index);
  }, [currentPath, findRouteIndex]);

  useEffect(() => {
    const currentActiveItem = navRef.current[activeIndex];
    if (currentActiveItem && underlineRef.current) {
      underlineRef.current.style.width = `${currentActiveItem.offsetWidth}px`;
      underlineRef.current.style.left = `${currentActiveItem.offsetLeft}px`;
    }
  }, [activeIndex]);

  useEffect(() => {
    const currentActiveItem = navRef.current[activeIndex];
    if (currentActiveItem) {
      if (underlineRef.current) {
        underlineRef.current.style.width = `${currentActiveItem.offsetWidth}px`;
        underlineRef.current.style.left = `${currentActiveItem.offsetLeft}px`;
      }
    }
  }, [activeIndex]);

  return (
    <header className={styles.root}>
      <Link href="/">
        <Cube />
      </Link>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          {ROUTES.map((route, index) => (
            <li
              className={clsx(
                styles.navItem,
                (index === activeIndex || currentPath === route.value) &&
                  styles.active,
              )}
              key={route.value}
              ref={(el) => {
                navRef.current[index] = el;
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(findRouteIndex())}
              onClick={() => setActiveIndex(index)}>
              <Link
                href={`/${route.value}`}
                key={route.value}
                className={styles.navItemLink}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.underline} ref={underlineRef} />
      </nav>
      <nav className={styles.mobileNavBar}>
        {/* Mobile */}
        <h1 className={styles.mobileNavTitle}>
          {ROUTES[findRouteIndex()]?.label}
        </h1>
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          className={`${styles.mobileNavList} ${isMenuOpen ? styles.menuOpen : ''}`}
          ref={clickAwayRef}>
          {ROUTES.map((route) => (
            <li key={route.value} className={styles.mobileNavItem}>
              <Link
                href={`/${route.value}`}
                className={styles.mobileNavItemLink}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

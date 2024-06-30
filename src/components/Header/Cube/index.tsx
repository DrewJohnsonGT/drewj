'use client';

import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaRegAddressCard } from 'react-icons/fa6';
import { FiLayers } from 'react-icons/fi';
import { MdOutlineGamepad } from 'react-icons/md';
import { RiFileUserLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './cube.module.css';

const SIDES = [
  {
    icon: MdOutlineGamepad,
    position: 'front',
    route: 'games',
  },
  {
    icon: FaUserCircle,
    position: 'back',
    route: 'about',
  },
  {
    icon: FaRegNewspaper,
    position: 'top',
    route: 'posts',
  },
  {
    icon: FiLayers,
    position: 'bottom',
    route: 'projects',
  },
  {
    icon: RiFileUserLine,
    position: 'left',
    route: 'resume',
  },
  {
    icon: FaRegAddressCard,
    position: 'right',
    route: 'contact',
  },
];

export const Cube = () => {
  const currentPath = usePathname().split('/')[1];
  const focusedSide = SIDES.find((s) => s.route === currentPath);
  return (
    <div className={styles.root}>
      <div
        className={clsx(
          styles.cube,
          focusedSide && styles[`show-${focusedSide.position}`],
          Boolean(focusedSide) ? styles.focused : styles.unfocused,
        )}>
        {SIDES.map((side) => {
          const Icon = side.icon;
          return (
            <div
              className={clsx(styles.side, styles[side.position])}
              key={side.route}>
              <Icon className={styles.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

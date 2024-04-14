'use client';

import React from 'react';
import { AiFillInfoCircle, AiFillMessage } from 'react-icons/ai';
import { BsBriefcaseFill } from 'react-icons/bs';
import { MdGames } from 'react-icons/md';
import { RiArticleLine } from 'react-icons/ri';
import { TiLightbulb } from 'react-icons/ti';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import styles from './cube.module.css';

const SIDES = [
  {
    icon: MdGames,
    position: 'front',
    route: 'games',
  },
  {
    icon: AiFillInfoCircle,
    position: 'back',
    route: 'about',
  },
  {
    icon: RiArticleLine,
    position: 'top',
    route: 'posts',
  },
  {
    icon: TiLightbulb,
    position: 'bottom',
    route: 'projects',
  },
  {
    icon: BsBriefcaseFill,
    position: 'right',
    route: 'resume',
  },
  {
    icon: AiFillMessage,
    position: 'left',
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

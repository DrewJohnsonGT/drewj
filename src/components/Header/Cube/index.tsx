'use client';

import React from 'react';
import {
  BriefcaseIcon,
  Gamepad2Icon,
  InfoIcon,
  LightbulbIcon,
  MailIcon,
  NewspaperIcon,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './cube.module.css';

const SIDES = [
  {
    icon: Gamepad2Icon,
    position: 'front',
    route: 'games',
  },
  {
    icon: InfoIcon,
    position: 'back',
    route: 'about',
  },
  {
    icon: NewspaperIcon,
    position: 'top',
    route: 'posts',
  },
  {
    icon: LightbulbIcon,
    position: 'bottom',
    route: 'projects',
  },
  {
    icon: BriefcaseIcon,
    position: 'left',
    route: 'resume',
  },
  {
    icon: MailIcon,
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

'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { FaRegNewspaper, FaUserCircle } from 'react-icons/fa';
import { FaRegAddressCard } from 'react-icons/fa6';
import { FiLayers } from 'react-icons/fi';
import { MdOutlineGamepad } from 'react-icons/md';
import { RiFileUserLine } from 'react-icons/ri';

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

  const sideClasses = {
    front:
      'rotate-y-0 translate-z-[calc(var(--cubeSize)/2)] bg-[var(--orange)]',
    back: 'rotate-y-180 translate-z-[calc(var(--cubeSize)/2)] bg-[var(--orange)]',
    right: 'rotate-y-90 translate-z-[calc(var(--cubeSize)/2)] bg-[var(--red)]',
    left: '-rotate-y-90 translate-z-[calc(var(--cubeSize)/2)] bg-[var(--lightOrange)]',
    top: '-rotate-x-90 translate-z-[calc(var(--cubeSize)/2)] bg-[var(--lightOrange)]',
    bottom:
      'rotate-x-90 translate-z-[calc(var(--cubeSize)/2)] bg-[var(--yellow)]',
  };

  const showClasses = {
    'show-front': 'rotate-y-0',
    'show-back': 'rotate-y-180',
    'show-right': 'rotate-y-90',
    'show-left': '-rotate-y-90',
    'show-top': '-rotate-x-90',
    'show-bottom': 'rotate-x-90',
  };

  return (
    <div className="perspective-[calc(var(--cubeSize)*5)] ml-[calc(var(--headerHeight)*0.1)] flex h-[var(--cubeSize)] w-[var(--cubeSize)] items-center justify-center">
      <div
        className={clsx(
          'transform-style-3d relative h-[var(--cubeSize)] w-[var(--cubeSize)] transition-transform duration-1000',
          focusedSide &&
            showClasses[
              `show-${focusedSide.position}` as keyof typeof showClasses
            ],
          Boolean(focusedSide)
            ? 'hover:rotate-y-[1440deg] hover:rotate-x-[1440deg] hover:duration-4000 hover:linear hover:transition-transform'
            : 'animate-[rotating_20s_linear_infinite]',
        )}
      >
        {SIDES.map((side) => {
          const Icon = side.icon;
          return (
            <div
              className={clsx(
                'absolute flex h-[var(--cubeSize)] w-[var(--cubeSize)] items-center justify-center border border-foreground text-xl opacity-80',
                sideClasses[side.position as keyof typeof sideClasses],
              )}
              key={side.route}
            >
              <Icon className="h-[calc(var(--cubeSize)*0.65)] w-[calc(var(--cubeSize)*0.65)] text-foreground opacity-100" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

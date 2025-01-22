'use client';

import { FaRegNewspaper, FaUserCircle } from 'react-icons/fa';
import { FaRegAddressCard } from 'react-icons/fa6';
import { FiLayers } from 'react-icons/fi';
import { MdOutlineGamepad } from 'react-icons/md';
import { RiFileUserLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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
    <div className="ml-[calc(var(--headerHeight)*0.1)] w-[var(--cubeSize)] h-[var(--cubeSize)] flex justify-center items-center perspective-[calc(var(--cubeSize)*5)]">
      <div
        className={clsx(
          'w-[var(--cubeSize)] h-[var(--cubeSize)] relative transform-style-3d transition-transform duration-1000',
          focusedSide &&
            showClasses[
              `show-${focusedSide.position}` as keyof typeof showClasses
            ],
          Boolean(focusedSide)
            ? 'hover:rotate-y-[1440deg] hover:rotate-x-[1440deg] hover:transition-transform hover:duration-4000 hover:linear'
            : 'animate-[rotating_20s_linear_infinite]',
        )}>
        {SIDES.map((side) => {
          const Icon = side.icon;
          return (
            <div
              className={clsx(
                'absolute w-[var(--cubeSize)] h-[var(--cubeSize)] border border-[var(--chakra-colors-chakra-body-bg)] flex items-center justify-center text-xl opacity-80',
                sideClasses[side.position as keyof typeof sideClasses],
              )}
              key={side.route}>
              <Icon className="text-[var(--chakra-colors-chakra-body-bg)] w-[calc(var(--cubeSize)*0.65)] h-[calc(var(--cubeSize)*0.65)] opacity-100" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

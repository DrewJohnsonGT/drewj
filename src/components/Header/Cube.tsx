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

  // Each face transform: rotate + translateZ in one bracket
  const sideClasses: Record<string, string> = {
    back: '[transform:rotateY(180deg)_translateZ(calc(var(--cubeSize)/2))] bg-[var(--orange)]',
    bottom:
      '[transform:rotateX(90deg)_translateZ(calc(var(--cubeSize)/2))] bg-[var(--yellow)]',
    front:
      '[transform:rotateY(0deg)_translateZ(calc(var(--cubeSize)/2))] bg-[var(--orange)]',
    left: '[transform:rotateY(-90deg)_translateZ(calc(var(--cubeSize)/2))] bg-[var(--lightOrange)]',
    right:
      '[transform:rotateY(90deg)_translateZ(calc(var(--cubeSize)/2))] bg-[var(--red)]',
    top: '[transform:rotateX(-90deg)_translateZ(calc(var(--cubeSize)/2))] bg-[var(--lightOrange)]',
  };

  // How to rotate the *entire cube* to show a certain side.
  // Again, must be bracketed if we're using rotateX or rotateY not covered by built-in classes.
  const showClasses: Record<string, string> = {
    'show-back': '[transform:rotateY(180deg)]',
    'show-bottom': '[transform:rotateX(90deg)]',
    'show-front': '[transform:rotateY(0deg)]',
    'show-left': '[transform:rotateY(-90deg)]',
    'show-right': '[transform:rotateY(90deg)]',
    'show-top': '[transform:rotateX(-90deg)]',
  };

  return (
    <div
      className={clsx(
        // Outer container: apply perspective & ensure it's big enough
        'overflow-visible',
        'ml-[calc(var(--headerHeight)*0.2)] h-[var(--cubeSize)] w-[var(--cubeSize)]',
        'flex items-center justify-center',
        // Single bracket for perspective
        '[perspective:calc(var(--cubeSize)*5)]',
      )}
    >
      <div
        className={clsx(
          // The cube wrapper: preserve-3D so child transforms combine in 3D
          'relative h-full w-full [transform-style:preserve-3d]',
          // Smooth transform
          'transition-transform duration-1000',
          // If no side is focused => spin infinitely
          !focusedSide && 'animate-rotating [animation-duration:20s]',
          // If a side is focused => rotate so that side is forward
          focusedSide && showClasses[`show-${focusedSide.position}`],
          // Also spin on hover (4 turns) if a side is focused
          focusedSide &&
            'hover:duration-4000 hover:ease-linear hover:[transform:rotateX(1440deg)_rotateY(1440deg)]',
        )}
      >
        {SIDES.map(({ icon: Icon, position, route }) => (
          <div
            key={route}
            className={clsx(
              // Each face is absolutely positioned in the 3D space
              'absolute h-[var(--cubeSize)] w-[var(--cubeSize)]',
              'flex items-center justify-center border border-foreground opacity-80',
              // Combine rotation + translateZ in a single bracket
              sideClasses[position],
            )}
          >
            <Icon className="h-[calc(var(--cubeSize)*0.65)] w-[calc(var(--cubeSize)*0.65)] text-foreground opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

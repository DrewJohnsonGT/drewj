'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-transition-progress/next';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { Cube } from '~/components/Header/Cube';
import { ThemeToggle } from '~/components/Header/ThemeToggle';
import { NO_HEADER_ROUTES, ROUTES } from '~/constants';
import clsx from 'clsx';

export const Header = () => {
  const pathname = usePathname();
  const currentPath = pathname.split('/')[1];

  const navRef = useRef<(HTMLLIElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement>(null);

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

  if (NO_HEADER_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <Box className="z-10 absolute backdrop-blur-sm h-[var(--headerHeight)] flex items-center w-full pr-2">
      <Link href="/">
        <Cube />
      </Link>
      <nav className="ml-[calc(var(--headerHeight)*0.2)] relative">
        <ul className="inline-flex list-none p-0 m-0">
          {ROUTES.map((route, index) => (
            <li
              className={clsx(
                'p-2 cursor-pointer font-[Qube] hover:text-[--chakra-colors-orange-500]',
                (index === activeIndex || currentPath === route.value) &&
                  'text-[--chakra-colors-orange-500]',
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
                className="no-underline">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="h-1 bg-[--chakra-colors-orange-500] absolute transition-[left,width] duration-500 ease-in-out bottom-0"
          ref={underlineRef}
        />
      </nav>
      <h1 className="hidden ml-4 text-[0.5rem] font-bold font-[Cube] md:block">
        {ROUTES[findRouteIndex()]?.title ?? ROUTES[findRouteIndex()]?.label}
      </h1>
      <ThemeToggle />
      <Box className="hidden md:flex">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Navigation menu"
            icon={<MdMenu />}
          />
          <MenuList>
            {ROUTES.map((route) => (
              <Link href={`/${route.value}`} key={route.value}>
                <MenuItem key={route.value} icon={<route.icon />}>
                  {route.label}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

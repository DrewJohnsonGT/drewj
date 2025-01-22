'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Cube } from '~/components/Header/Cube';
import { ThemeToggle } from '~/components/Header/ThemeToggle';
import { Button } from '~/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/DropdownMenu';
import { NO_HEADER_ROUTES, ROUTES } from '~/constants';

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
    <header className="z-10 absolute backdrop-blur-sm h-[var(--headerHeight)] flex items-center w-full pr-2 bg-primary/50 top-[var(--headerHeight)]">
      <Link href="/">
        <Cube />
      </Link>
      <nav className="ml-[calc(var(--headerHeight)*0.2)] relative">
        <ul className="inline-flex list-none p-0 m-0">
          {ROUTES.map((route, index) => (
            <li
              className={clsx(
                'p-2 cursor-pointer font-[Qube] hover:text-orange-500',
                (index === activeIndex || currentPath === route.value) &&
                  'text-orange-500',
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
          className="h-1 bg-orange-500 absolute transition-[left,width] duration-500 ease-in-out bottom-0"
          ref={underlineRef}
        />
      </nav>
      <h1 className="hidden ml-4 text-[0.5rem] font-bold font-[Cube] md:block">
        {ROUTES[findRouteIndex()]?.title ?? ROUTES[findRouteIndex()]?.label}
      </h1>
      <ThemeToggle />
      <div className="hidden md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              aria-label="Navigation menu"
            >
              <MdMenu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {ROUTES.map((route) => (
              <Link href={`/${route.value}`} key={route.value}>
                <DropdownMenuItem>
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

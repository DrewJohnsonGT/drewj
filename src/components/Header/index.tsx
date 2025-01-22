'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
import { ROUTES } from '~/constants';

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

  return (
    <header className="sticky top-0 z-10 flex min-h-[var(--headerHeight)] items-center bg-primary/10 pr-2 backdrop-blur-sm">
      <Link href="/">
        <Cube />
      </Link>
      <nav className="relative ml-[calc(var(--headerHeight)*0.2)]">
        <ul className="m-0 inline-flex list-none p-0">
          {ROUTES.map((route, index) => (
            <li
              className={clsx(
                'cursor-pointer p-2 font-[Qube] hover:text-primary',
                (index === activeIndex || currentPath === route.value) &&
                  'text-primary',
              )}
              key={route.value}
              ref={(el) => {
                navRef.current[index] = el;
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(findRouteIndex())}
              onClick={() => setActiveIndex(index)}
            >
              <Link
                href={`/${route.value}`}
                key={route.value}
                className="no-underline"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="absolute bottom-0 h-1 bg-primary transition-[left,width] duration-500 ease-in-out"
          ref={underlineRef}
        />
      </nav>
      <h1 className="ml-4 mr-auto hidden font-[Cube] text-[0.5rem] font-bold md:block">
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

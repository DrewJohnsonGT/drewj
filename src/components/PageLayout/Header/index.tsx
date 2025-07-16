'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdMenu } from 'react-icons/md';
import { Cube } from '~/components/Header/Cube';
import { ThemeToggle } from '~/components/Header/ThemeToggle';
import { ProgressLink } from '~/components/ProgressBar/Link';
import { Button } from '~/components/ui/Button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '~/components/ui/DropdownMenu';
import { NO_HEADER_FOOTER_ROUTES, ROUTES } from '~/constants';

export const Header = () => {
  const pathname = usePathname();
  const currentPath = pathname.split('/')[1];

  const navRef = useRef<(HTMLLIElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement>(null);

  const findRouteIndex = useCallback(() => ROUTES.findIndex((route) => route.value === currentPath), [currentPath]);
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

  if (NO_HEADER_FOOTER_ROUTES.includes(pathname)) {
    return <header className="min-h-[var(--headerHeight)]" />;
  }

  return (
    <header className="sticky top-0 z-10 flex min-h-[var(--headerHeight)] items-center pr-2 backdrop-blur-sm">
      <Link href="/" className="mr-auto">
        <Cube />
      </Link>
      <nav className="relative ml-[calc(var(--headerHeight)*0.2)] mr-auto hidden lg:block">
        <ul className="m-0 inline-flex list-none p-0">
          {ROUTES.map((route, index) => (
            <li
              className={clsx(
                'cursor-pointer p-2 px-3 font-[Qube] text-2xl hover:text-primary',
                (index === activeIndex || currentPath === route.value) && 'text-primary',
              )}
              key={route.value}
              ref={(el) => {
                navRef.current[index] = el;
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(findRouteIndex())}
              onClick={() => setActiveIndex(index)}
            >
              <ProgressLink href={`/${route.value}`} key={route.value} className="no-underline">
                {route.label}
              </ProgressLink>
            </li>
          ))}
        </ul>
        <div
          className="absolute bottom-0 h-1 bg-primary transition-[left,width] duration-500 ease-in-out"
          ref={underlineRef}
        />
      </nav>
      <h1 className="mx-auto block font-[Cube] text-[0.65rem] font-bold lg:hidden">
        {ROUTES[findRouteIndex()]?.title ?? ROUTES[findRouteIndex()]?.label}
      </h1>
      <div className="flex lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-12" aria-label="Navigation menu">
              <MdMenu className="size-10" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
            {ROUTES.map((route) => (
              <ProgressLink href={`/${route.value}`} key={route.value}>
                <DropdownMenuItem className="flex items-center">
                  <route.icon className="mr-2 size-6" />
                  {route.label}
                </DropdownMenuItem>
              </ProgressLink>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ThemeToggle />
    </header>
  );
};

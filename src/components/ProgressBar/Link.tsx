'use client';

import { MouseEventHandler, ReactNode, startTransition } from 'react';
import { useProgressBar } from '.';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

type ProgressLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  href: string;
};

export const useProgressLink = () => {
  const router = useRouter();
  const progress = useProgressBar();

  const navigate = (href: string) => {
    progress.start();
    startTransition(() => {
      router.push(href);
      progress.done();
    });
  };

  return { navigate };
};

export const ProgressLink = ({ href, children, className, onClick, ...props }: ProgressLinkProps) => {
  const router = useRouter();
  const progress = useProgressBar();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    progress.start();
    startTransition(() => {
      router.push(href);
      progress.done();
    });
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

'use client';

import { usePathname } from 'next/navigation';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/Tooltip';
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKED_IN_URL,
  NO_FOOTER_ROUTES,
} from '~/constants';

const LINKS = [
  {
    href: LINKED_IN_URL,
    icon: FaLinkedin,
    title: 'LinkedIn',
    color: 'text-[#0077B5] hover:text-[#0099E0]',
  },
  {
    href: INSTAGRAM_URL,
    icon: FaInstagram,
    title: 'Instagram',
    color: 'text-[#E4405F] hover:text-[#FF6B84]',
  },
  {
    href: GITHUB_URL,
    icon: FaGithub,
    title: 'GitHub',
    color: 'text-[#333333] hover:text-[#6E7681]',
  },
];

export const Footer = () => {
  const pathname = usePathname();
  if (NO_FOOTER_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <footer className="absolute bottom-0 w-full flex justify-center items-center bg-primary/50 h-[var(--footerHeight)] backdrop-blur-sm gap-2">
      {LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 border rounded-md flex items-center justify-center hover:bg-muted/10">
                <Icon className={`h-7 w-7 ${link.color}`} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              {link.title}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </footer>
  );
};

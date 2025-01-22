'use client';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
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
    <footer className="absolute bottom-0 w-full flex justify-center items-center h-[var(--footerHeight)] backdrop-blur-sm gap-2">
      {LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <div key={link.title} className="group relative">
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="p-2 border rounded-md flex items-center justify-center hover:bg-gray-100/10">
              <Icon className={`h-7 w-7 ${link.color}`} />
            </a>
            <span className="absolute -top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
              {link.title}
            </span>
          </div>
        );
      })}
    </footer>
  );
};

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui/Tooltip';
import { GITHUB_URL, INSTAGRAM_URL, LINKED_IN_URL } from '~/constants';
import { cn } from '~/utils/cn';

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
  return (
    <footer className="sticky bottom-0 z-10 flex min-h-[var(--footerHeight)] w-full items-center justify-center gap-2 bg-primary/10 backdrop-blur-sm">
      {LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-2 transition-transform hover:scale-125"
              >
                <Icon className={cn('size-7', link.color)} />
              </a>
            </TooltipTrigger>
            <TooltipContent>{link.title}</TooltipContent>
          </Tooltip>
        );
      })}
    </footer>
  );
};

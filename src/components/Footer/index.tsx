import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Tooltip } from '@chakra-ui/react';
import clsx from 'clsx';
import { GITHUB_URL, INSTAGRAM_URL, LINKED_IN_URL } from '~/constants';
import styles from './footer.module.css';

const LINKS = [
  {
    href: LINKED_IN_URL,
    icon: FaLinkedin,
    title: 'LinkedIn',
  },
  {
    href: INSTAGRAM_URL,
    icon: FaInstagram,
    title: 'Instagram',
  },
  {
    href: GITHUB_URL,
    icon: FaGithub,
    title: 'GitHub',
  },
];
export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.links}>
        {LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <Tooltip key={link.title} label={link.title}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={styles.link}>
                <Icon
                  className={clsx(
                    styles.icon,
                    styles[link.title.toLowerCase()],
                  )}
                />
              </a>
            </Tooltip>
          );
        })}
      </div>
    </footer>
  );
};

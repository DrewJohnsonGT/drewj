import { FaGithub } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { Box, Tooltip } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { GITHUB_URL, INSTAGRAM_URL, LINKED_IN_URL } from '~/constants';
import clsx from 'clsx';
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
    <Box className={styles.root} display="flex" justifyContent="center" gap={2}>
      {LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <Tooltip key={link.title} label={link.title}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <IconButton
                size="sm"
                p={0}
                aria-label={link.title}
                icon={
                  <Icon
                    className={clsx(
                      styles[link.title.toLowerCase()],
                      styles.icon,
                    )}
                  />
                }
              />
            </a>
          </Tooltip>
        );
      })}
    </Box>
  );
};

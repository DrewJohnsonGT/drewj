import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import clsx from 'clsx';
import { Tooltip } from '~/components/Tooltip';
import styles from './footer.module.css';

const LINKS = [
  {
    href: 'https://www.linkedin.com/in/sdrewjohnson/',
    icon: FaLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/sdrewjohnson/',
    icon: FaInstagram,
    title: 'Instagram',
  },
  {
    href: 'https://github.com/DrewJohnsonGT',
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
            <Tooltip key={link.title} message={link.title}>
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

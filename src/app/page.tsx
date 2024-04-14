import Image from 'next/image';
import { SKILLS } from '~/constants';
import styles from './page.module.css';

export default function Home() {
  return (
    <section>
      <h1 className={styles.name}>Drew Johnson</h1>
      <h3 className={styles.slogan}>
        <i>Always building something</i>
      </h3>
      <div className={styles.skills}>
        {SKILLS.map((skill) => (
          <Image
            key={skill.icon}
            src={`/logos/${skill.icon}.svg`}
            alt={skill.icon}
            style={{
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              width: `${(skill.score / 100) * 3}rem`,
            }}
            className={styles.skill}
            width={100}
            height={100}
          />
        ))}
      </div>
    </section>
  );
}

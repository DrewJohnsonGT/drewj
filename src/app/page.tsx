import styles from './page.module.css';

export default function Home() {
  return (
    <section>
      <h1 className={styles.name}>Drew Johnson</h1>
      <h3 className={styles.slogan}>
        <i>Always building something</i>
      </h3>
    </section>
  );
}

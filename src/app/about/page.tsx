import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>Hey, I&apos;m Drew</div>
      <div className={styles.description}>
        Product focused engineer and leader with a passion for problem solving.
        Committed to action, delivering quality results, and empowering the
        team. Proficient generalist adept at swiftly acquiring and applying new
        knowledge and skills. Prides himself on managing complexity while
        creating maintainable and extensible systems, and thrives on tackling
        challenging problems.
      </div>
    </div>
  );
};

export default AboutPage;

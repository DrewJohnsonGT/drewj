import { LINKED_IN_URL } from '~/constants';
import styles from './contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.root}>
      <p className="text-xl">
        Reaching out and connecting on{' '}
        <a href={LINKED_IN_URL} target="_blank" rel="noreferrer">
          LinkedIn
        </a>{' '}
        is the best way to get a hold of me
      </p>
    </div>
  );
};

export default ContactPage;

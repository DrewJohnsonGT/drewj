import { Text } from '@chakra-ui/react';
import { LINKED_IN_URL } from '~/constants';
import styles from './contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.root}>
      <Text fontSize="xl">
        Reaching out and connecting on{' '}
        <a href={LINKED_IN_URL} target="_blank" rel="noreferrer">
          LinkedIn
        </a>{' '}
        is the best way to get a hold of me
      </Text>
    </div>
  );
};

export default ContactPage;

import { LINKED_IN_URL } from '~/constants';

const ContactPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
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

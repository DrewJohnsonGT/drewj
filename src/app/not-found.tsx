import React from 'react';
import Image from 'next/image';
import { PUG_SEARCH } from '~/constants';

const NotFoundPage = () => (
  <section>
    <h2>404: NOT FOUND</h2>
    <a href={PUG_SEARCH} target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/pug.png"
        alt="Sad pug"
        className="not-found-image"
        width={200}
        height={200}
      />
    </a>
    <h5>This page does not exist </h5>
  </section>
);

export default NotFoundPage;

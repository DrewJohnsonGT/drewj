import React from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';
import Image from 'next/image';
import { PUG_SEARCH } from '~/constants';

const NotFoundPage = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      m: 'auto',
    }}>
    <Heading>404: NOT FOUND</Heading>
    <Link href={PUG_SEARCH} target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/pug.png"
        alt="Sad pug"
        className="not-found-image"
        width={200}
        height={200}
      />
    </Link>
    <h5>This page does not exist </h5>
  </Box>
);

export default NotFoundPage;

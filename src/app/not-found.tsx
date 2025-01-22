import Image from 'next/image';
import { PUG_SEARCH } from '~/constants';

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center m-auto">
    <h1>404: NOT FOUND</h1>
    <a href={PUG_SEARCH} target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/pug.png"
        alt="Sad pug"
        className="w-[250px] h-[250px] animate-[wiggle_1s_cubic-bezier(0.36,0.07,0.19,0.97)_both_infinite_alternate-reverse] cursor-pointer"
        width={200}
        height={200}
      />
    </a>
    <h5>This page does not exist </h5>
  </div>
);

export default NotFoundPage;

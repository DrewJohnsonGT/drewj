import Image from 'next/image';
import { MANDO_VIDEO_URL } from '~/constants';

const AboutImage = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={266}
      className="max-w-full rounded shadow-lg"
    />
  );
};

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-4 text-center text-2xl font-bold">
        Hey, I&apos;m Drew 👋
      </h1>
      <div className="my-4 mb-16 flex flex-wrap items-center justify-center gap-4">
        <AboutImage src="/images/stark.jpg" alt="Drew Stark" />
        <AboutImage src="/images/headshot-full.jpg" alt="Drew Johnson" />
        <AboutImage src="/images/mando1.jpg" alt="Mandalorian" />
      </div>
      <p className="text-center text-xl">
        I&apos;m a pretty big nerd, and I <b>love</b> making things. <br />I
        often have multiple ongoing 3D printing, embedded device/IoT, web/mobile
        app, SaaS or other miscellaneous projects on the side.{' '}
      </p>
      <br />
      <div className="my-4 mb-16 flex flex-wrap items-center justify-center gap-4">
        <AboutImage src="/images/jedi1.jpg" alt="Jedi Drew" />
        <AboutImage src="/images/wake.jpeg" alt="Mandalorian" />
        <AboutImage src="/images/mando3.jpg" alt="Mandalorian" />
        <AboutImage src="/images/sith.jpg" alt="Sith Drew" />
      </div>
      <br />
      <p className="text-center text-xl">
        A montage of my full Mandalorian build from Halloween last year
      </p>
      <br />
      <iframe
        className="mx-auto mb-16 aspect-video w-full max-w-[500px]"
        src={MANDO_VIDEO_URL}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default AboutPage;

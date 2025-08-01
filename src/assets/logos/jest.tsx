import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.3 439.9" {...props}>
    <path
      fill="#99425b"
      stroke="#fff"
      strokeWidth={20}
      d="M334.9 218.1c-.5.3-18.3-2.7-40.7-4.2-18.2-1.2-39.5-1.2-56.7 0-14 .9-32.4-6.1-34.6 2.3-8.2 31.4-26 58.7-48.5 79.9-17 16-36.4 28.1-57.4 35.6-25-12.8-36.8-41.4-26.2-66.4 8.4-19.9 18.3-41.7.1-46.7-13.2-3.6-20.5 9-25.5 22.5-9.7 25.9-28.2 52.7-33.5 84.5-5.6 33.5 0 69.1 29 89.3 67.6 46.8 140.9-29 218.2-48.1 28-6.9 58.8-5.8 83.5-20.1 18.5-10.7 30.8-28.5 34.2-48.5 5.6-32.2-11.1-64.1-41.9-80.1z"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth={20}
      d="M202.9 216.2c-8.2 31.4-26 58.7-48.5 79.9-17 16-36.4 28.1-57.4 35.6-25-12.8-36.8-41.4-26.2-66.4 8.4-19.9 18.3-41.7.1-46.7-13.2-3.6-20.5 9-25.5 22.5-9.7 25.9-28.2 52.7-33.5 84.5-5.6 33.5 0 69.1 29 89.3 67.6 46.8 140.9-29 218.2-48.1 28-6.9 58.8-5.8 83.5-20.1 18.5-10.7 30.8-28.5 34.2-48.5 5.6-32.1-11.1-64.1-41.9-80"
    />
    <path fill="#99425b" d="M264.9 91.2 319.2 202l65.1-192h-239l65 191.6z" />
    <path fill="none" stroke="#fff" strokeWidth={20} d="M264.9 91.2 319.2 202l65.1-192h-239l65 191.6z" />
    <circle cx={199} cy={216.6} r={40.9} fill="#99425b" />
    <g stroke="#fff" strokeWidth={20}>
      <circle cx={199} cy={216.6} r={40.9} fill="none" />
      <circle cx={332.4} cy={216.6} r={40.9} fill="#99425b" />
      <circle cx={332.4} cy={216.6} r={40.9} fill="none" />
    </g>
    <circle cx={65.1} cy={216.9} r={40.9} fill="#99425b" />
    <circle cx={65.1} cy={216.9} r={40.9} fill="none" stroke="#fff" strokeWidth={20} />
  </svg>
);

export default SvgComponent;

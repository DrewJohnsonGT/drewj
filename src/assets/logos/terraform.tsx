import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd">
      <path
        fill="#623ce4"
        d="m16.664 7.384 10.468 6.042v12.085L16.664 19.47z"
      />
      <path fill="#3c2aa8" d="M28.277 13.426v12.085l10.468-6.042V7.379z" />
      <path
        fill="#623ce4"
        d="M5.047.634v12.085l10.468 6.048V6.677L5.047.633zm11.617 32.244 10.463 6.048v-12.09l-10.463-6.043z"
      />
    </g>
  </svg>
);

export default SvgComponent;

import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={2169} height={2500} viewBox="0 0 832.8 959.8" {...props}>
    <path fill="#00ac69" d="m672.6 332.3 160.2-92.4v480L416.4 959.8V775.2l256.2-147.6z" />
    <path fill="#1ce783" d="M416.4 184.6 160.2 332.3 0 239.9 416.4 0l416.4 239.9-160.2 92.4z" />
    <path fill="#1d252c" d="M256.2 572.3 0 424.6V239.9l416.4 240v479.9l-160.2-92.2z" />
  </svg>
);

export default SvgComponent;

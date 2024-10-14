import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150.2" {...props}>
    <path fill="none" d="M0 .2h150v150H0V.2z" />
    <path
      d="M20.1 47.7h23.7V104h11.8v22H20.1zm109.7 51.8h-23.7V43.2H94.3v-22h35.5z"
      style={{
        fill: '#baccdb',
      }}
    />
    <path
      d="M14.6 15.8h74.9v64.3L60.7 43H14.6zm120.6 115.7H60.3V67.2l28.8 37.1h46.1"
      style={{
        fill: '#125580',
      }}
    />
  </svg>
);

export default SvgComponent;

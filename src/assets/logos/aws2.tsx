import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16" {...props}>
    <path
      fill="#f7a80d"
      d="m5.921 9.912-1.857.777 1.72.716 1.994-.716zm-2.792.971-.062 3.496 2.717 1.166v-3.63zm5.584 0-2.455.91v3.424l2.455-.971zM11.643.006l-1.87.777 1.732.716L13.5.783zM9.05 1.038v3.496l2.318.656.075-3.18zm5.185.194-2.194.91v3.436l2.194-.97zM2.86 4.927l-1.857.777 1.72.716 1.994-.716zm-2.792.97L.007 9.395l2.717 1.165V6.93zm5.584 0-2.455.911v3.424l2.455-.972zm3.19-1.1-1.856.778 1.72.716 1.994-.716zm-2.791.972L5.99 9.265l2.717 1.165V6.801zm5.584 0-2.455.91v3.424l2.455-.972zm5.85-5.763-1.857.777 1.72.716 1.994-.716zm-2.792.971-.062 3.496 2.717 1.166v-3.63zm5.584 0-2.455.91v3.424l2.455-.971z"
    />
  </svg>
);

export default SvgComponent;
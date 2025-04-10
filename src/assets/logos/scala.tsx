import * as React from 'react';
import { SVGProps, useId } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const gradientIdA = useId();
  const gradientIdB = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1538}
      height={2500}
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 256 416"
      {...props}
    >
      <defs>
        <linearGradient id={gradientIdA} x1="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient id={gradientIdB} x1="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#C40000" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientIdA})`}
        d="M0 288v-32c0-5.394 116.377-14.428 192.2-32 36.628 8.49 63.8 18.969 63.8 32v32c0 13.024-27.172 23.51-63.8 32C116.376 302.425 0 293.39 0 288"
        transform="matrix(1 0 0 -1 0 544)"
      />
      <path
        fill={`url(#${gradientIdA})`}
        d="M0 160v-32c0-5.394 116.377-14.428 192.2-32 36.628 8.49 63.8 18.969 63.8 32v32c0 13.024-27.172 23.51-63.8 32C116.376 174.425 0 165.39 0 160"
        transform="matrix(1 0 0 -1 0 288)"
      />
      <path
        fill={`url(#${gradientIdB})`}
        d="M0 224v-96c0 8 256 24 256 64v96c0-40-256-56-256-64"
        transform="matrix(1 0 0 -1 0 416)"
      />
      <path
        fill={`url(#${gradientIdB})`}
        d="M0 96V0c0 8 256 24 256 64v96c0-40-256-56-256-64"
        transform="matrix(1 0 0 -1 0 160)"
      />
      <path
        fill={`url(#${gradientIdB})`}
        d="M0 352v-96c0 8 256 24 256 64v96c0-40-256-56-256-64"
        transform="matrix(1 0 0 -1 0 672)"
      />
    </svg>
  );
};

export default SvgComponent;

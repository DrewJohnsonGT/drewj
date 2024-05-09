'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './tooltip.module.css';

const adjustHorizontalPosition = (
  initialLeft: number,
  tooltipWidth: number,
) => {
  const overflowRight = initialLeft + tooltipWidth - window.innerWidth;
  if (overflowRight > 0) {
    return initialLeft - overflowRight;
  }
  return initialLeft < 0 ? 10 : initialLeft;
};

const adjustVerticalPosition = (
  initialTop: number,
  childTop: number,
  tooltipHeight: number,
) => {
  if (initialTop + tooltipHeight > window.innerHeight + window.scrollY) {
    return childTop + window.scrollY - tooltipHeight;
  }
  return initialTop;
};

const calculatePosition = ({
  childRef,
  tooltipRef,
}: {
  childRef: React.RefObject<HTMLDivElement>;
  tooltipRef: React.RefObject<HTMLDivElement>;
}) => {
  if (!childRef.current || !tooltipRef.current) return { left: 0, top: 0 };

  const childRect = childRef.current.getBoundingClientRect();
  const tooltipRect = tooltipRef.current.getBoundingClientRect();

  const horizontalOffset = tooltipRect.width / 2 - childRect.width / 2;
  const initialLeft = childRect.left + window.scrollX - horizontalOffset;
  const initialTop = childRect.bottom + window.scrollY;

  const adjustedLeft = adjustHorizontalPosition(initialLeft, tooltipRect.width);
  const adjustedTop = adjustVerticalPosition(
    initialTop,
    childRect.top,
    tooltipRect.height,
  );

  return { left: adjustedLeft, top: adjustedTop };
};

interface TooltipProps {
  children: ReactNode;
  message: string;
}

export const Tooltip = ({ children, message }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const childRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showTooltip) {
      const { left, top } = calculatePosition({ childRef, tooltipRef });
      tooltipRef.current!.style.top = `${top}px`;
      tooltipRef.current!.style.left = `${left}px`;
    }
  }, [showTooltip]);

  const tooltipElement = showTooltip
    ? ReactDOM.createPortal(
        <div ref={tooltipRef} className={styles.tooltipBox}>
          {message}
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <div
        ref={childRef}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}>
        {children}
      </div>
      {tooltipElement}
    </>
  );
};

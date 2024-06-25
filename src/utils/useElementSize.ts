import { useEffect, useRef, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

export const useElementSize = () => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [size, setSize] = useState<Size>({ height: 0, width: 0 });

  const resizeTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        setSize({
          height: elementRef.current.offsetHeight,
          width: elementRef.current.offsetWidth,
        });
      }
    };

    const handleResizeDebounced = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(handleResize, 250);
    };

    // Initialize measurement once to set initial size
    handleResize();

    // Set up event listener for resize
    window.addEventListener('resize', handleResizeDebounced);

    return () => {
      window.removeEventListener('resize', handleResizeDebounced);
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
    };
  }, []);

  return { ref: elementRef, size };
};

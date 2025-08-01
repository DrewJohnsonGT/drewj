'use client';

import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionTemplate, useSpring } from 'motion/react';

const ProgressBarContext = createContext<ReturnType<typeof useProgress> | null>(null);

export function useProgressBar() {
  const progress = useContext(ProgressBarContext);

  if (progress === null) {
    throw new Error('Need to be inside provider');
  }

  return progress;
}

export function ProgressBarProvider({ children }: { children: ReactNode }) {
  const progress = useProgress();

  return <ProgressBarContext.Provider value={progress}>{children}</ProgressBarContext.Provider>;
}

export function ProgressBarDisplay() {
  const progress = useProgressBar();
  const width = useMotionTemplate`${progress.value}%`;

  return (
    <AnimatePresence onExitComplete={progress.reset}>
      {progress.state !== 'complete' && (
        <motion.div
          id="progress-bar"
          style={{ width }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 z-50 h-1 w-full bg-primary"
        />
      )}
    </AnimatePresence>
  );
}

function useProgress() {
  const [state, setState] = useState<'complete' | 'completing' | 'in-progress' | 'initial'>('initial');

  const value = useSpring(0, {
    damping: 25,
    mass: 0.5,
    restDelta: 0.1,
    stiffness: 300,
  });

  useInterval(
    () => {
      // If we start progress but the bar is currently complete, reset it first.
      if (value.get() === 100) {
        value.jump(0);
      }

      const current = value.get();
      const diff = current === 0 ? 15 : current < 50 ? rand(1, 10) : rand(1, 5);

      value.set(Math.min(current + diff, 99));
    },
    state === 'in-progress' ? 750 : null,
  );

  useEffect(() => {
    if (state === 'initial') {
      value.jump(0);
    } else if (state === 'completing') {
      value.set(100);
    }

    return value.on('change', (latest) => {
      if (latest === 100) {
        setState('complete');
      }
    });
  }, [value, state]);

  function reset() {
    setState('initial');
  }

  function start() {
    setState('in-progress');
  }

  function done() {
    setState((state) => (state === 'initial' || state === 'in-progress' ? 'completing' : state));
  }

  return { done, reset, start, state, value };
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      tick();

      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

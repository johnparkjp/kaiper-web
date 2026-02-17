'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
};

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduced = useReducedMotion();
  const finalDisplay = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
  const [display, setDisplay] = useState(reduced ? finalDisplay : '0');

  useEffect(() => {
    if (!isInView || reduced) return;

    const start = 0;
    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;

      setDisplay(
        decimals > 0
          ? current.toFixed(decimals)
          : Math.floor(current).toLocaleString()
      );

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, value, duration, decimals, reduced]);

  if (reduced) {
    return (
      <span ref={ref} className={className}>
        {finalDisplay}
        {suffix}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}

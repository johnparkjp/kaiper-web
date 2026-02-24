'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [isInView, setIsInView] = useState(false);
  const finalDisplay = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
  const prefersReduced = useRef(false);
  const [display, setDisplay] = useState('0');

  // Check reduced motion + IntersectionObserver
  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced.current) {
      setDisplay(finalDisplay);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: '-100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [finalDisplay]);

  // Animate counting
  useEffect(() => {
    if (!isInView || prefersReduced.current) return;

    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = end * eased;

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
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {/* Invisible placeholder to reserve width and prevent CLS */}
      <span className="invisible block h-0 overflow-hidden" aria-hidden="true">
        {finalDisplay}{suffix}
      </span>
      <span style={{ opacity: isInView || prefersReduced.current ? 1 : 0, transition: 'opacity 0.3s' }}>
        {display}{suffix}
      </span>
    </span>
  );
}

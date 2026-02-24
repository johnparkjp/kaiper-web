'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

function LineAnimation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent"
          style={{
            top: `${20 + i * 15}%`,
            left: '-10%',
            right: '-10%',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transition: `opacity 2s cubic-bezier(0.25,0.1,0.25,1) ${0.8 + i * 0.2}s, transform 2s cubic-bezier(0.25,0.1,0.25,1) ${0.8 + i * 0.2}s`,
          }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-cool-gray-50/15 to-transparent"
          style={{
            left: `${30 + i * 20}%`,
            top: '-10%',
            bottom: '-10%',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scaleY(1)' : 'scaleY(0)',
            transition: `opacity 2.5s cubic-bezier(0.25,0.1,0.25,1) ${1 + i * 0.3}s, transform 2.5s cubic-bezier(0.25,0.1,0.25,1) ${1 + i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');
  const [visible, setVisible] = useState(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced.current) {
      setVisible(true);
      return;
    }
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {!prefersReduced.current && <LineAnimation />}

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8 text-center">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s cubic-bezier(0.25,0.1,0.25,1) 0.2s, transform 0.8s cubic-bezier(0.25,0.1,0.25,1) 0.2s',
          }}
        >
          {t('headline').split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl md:text-2xl text-cool-gray-30 font-light tracking-wide"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
          }}
        >
          {t('subline')}
        </p>

        <div
          className="mt-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s',
          }}
        >
          <Button href="#product" size="lg">
            {t('cta')}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease 1.5s',
        }}
      >
        <span className="text-xs text-cool-gray-40 tracking-widest uppercase">
          {t('scroll')}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-cool-gray-40 to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}

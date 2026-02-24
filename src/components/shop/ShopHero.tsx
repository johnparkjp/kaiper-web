'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ShopHero() {
  const t = useTranslations('shop.hero');
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
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-30">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 text-center">
        <span
          className="inline-block text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase mb-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          {t('badge')}
        </span>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          {t('title')}
        </h1>
        <p
          className="text-lg text-cool-gray-30 max-w-xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}
        >
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}

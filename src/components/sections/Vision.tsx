'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

const VALUE_KEYS = ['optimize', 'synchronize', 'mobilize'] as const;

const VALUE_ICONS = {
  optimize: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="20" cy="20" r="15" />
      <path d="M15 20l3 3 7-7" />
    </svg>
  ),
  synchronize: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M10 25a10 10 0 0118-4M30 15a10 10 0 01-18 4" />
      <path d="M28 11l2 4 4-2M12 29l-2-4-4 2" />
    </svg>
  ),
  mobilize: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M20 5v30M5 20h30" />
      <path d="M20 5l5 5M20 5l-5 5M20 35l5-5M20 35l-5-5M5 20l5-5M5 20l5 5M35 20l-5-5M35 20l-5 5" />
    </svg>
  ),
};

export default function Vision() {
  const t = useTranslations('vision');
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  return (
    <section id="vision" className="py-20 lg:py-30">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Badge */}
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase mb-4">
            {t('badge')}
          </span>
        </ScrollReveal>

        {/* Big Typography Reveal */}
        <motion.div
          ref={titleRef}
          style={{ opacity, scale }}
          className="py-16 lg:py-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            {t('title').split('\n').map((line, i) => (
              <span key={i} className="block">
                {i === 0 ? (
                  <span className="text-accent-blue">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>
          <p className="text-cool-gray-30 text-lg lg:text-xl max-w-2xl">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {VALUE_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.15}>
              <div className="p-8 border border-cool-gray-50/30 rounded-2xl hover:border-accent-blue/30 transition-colors duration-300 h-full">
                <div className="text-accent-blue mb-5">
                  {VALUE_ICONS[key]}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`values.${key}.title`)}
                </h3>
                <p className="text-cool-gray-30 text-sm leading-relaxed">
                  {t(`values.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Brand Story */}
        <ScrollReveal>
          <div className="relative p-8 lg:p-12 rounded-2xl border border-cool-gray-50/20 bg-gradient-to-br from-cool-gray-50/5 to-transparent">
            <div className="absolute top-0 left-8 lg:left-12 w-px h-full bg-gradient-to-b from-accent-blue/40 via-accent-blue/10 to-transparent" />
            <div className="pl-6 lg:pl-8">
              <h3 className="text-2xl font-bold mb-4">
                {t('story.title')}
              </h3>
              <p className="text-cool-gray-30 leading-relaxed max-w-3xl">
                {t('story.description')}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

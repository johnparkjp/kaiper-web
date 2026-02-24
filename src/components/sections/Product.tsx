'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

const SPEC_KEYS = ['mode', 'battery', 'charging', 'control'] as const;
const KIT_KEYS = ['sleeves', 'hoodie', 'icePack', 'wear'] as const;

export default function Product() {
  const t = useTranslations('product');
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="product" ref={sectionRef} className="py-20 lg:py-30">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Badge + Title */}
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase mb-4">
            {t('badge')}
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-cool-gray-30 text-lg max-w-2xl mb-16">
            {t('subtitle')}
          </p>
        </ScrollReveal>

        {/* 3in1 Waist Fan Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Image placeholder with parallax */}
          <ScrollReveal>
            <motion.div
              style={{ y: parallaxY }}
              className="relative aspect-square bg-gradient-to-br from-cool-gray-50/20 to-cool-gray-50/5 rounded-3xl overflow-hidden flex items-center justify-center border border-cool-gray-50/20"
            >
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent-blue/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-accent-blue" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="32" cy="32" r="20" />
                    <circle cx="32" cy="32" r="8" />
                    <path d="M32 12v8M32 44v8M12 32h8M44 32h8" />
                  </svg>
                </div>
                <p className="text-xl font-bold">{t('fan.name')}</p>
                <p className="text-sm text-cool-gray-30 mt-2">{t('fan.tagline')}</p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Specs */}
          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                {t('fan.name')}
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-cool-gray-30 mb-8">
                {t('fan.description')}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4">
              {SPEC_KEYS.map((key, i) => (
                <ScrollReveal key={key} delay={0.2 + i * 0.1}>
                  <div className="p-5 border border-cool-gray-50/30 rounded-xl border-l-2 border-l-accent-blue/60">
                    <p className="text-xs text-cool-gray-30 uppercase tracking-wider mb-1.5 font-medium">
                      {t(`fan.specs.${key}.label`)}
                    </p>
                    <p className="text-base font-bold text-kaiper-white">
                      {t(`fan.specs.${key}.value`)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Cooling Kit Grid */}
        <ScrollReveal>
          <h3 className="text-2xl lg:text-3xl font-bold mb-2">
            {t('kit.name')}
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-cool-gray-30 mb-8">
            {t('kit.description')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {KIT_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.1}>
              <div className="group relative aspect-square bg-gradient-to-br from-cool-gray-50/15 to-cool-gray-50/5 rounded-2xl overflow-hidden border border-cool-gray-50/20 hover:border-accent-blue/30 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-cool-gray-50/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cool-gray-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold">{t(`kit.items.${key}`)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

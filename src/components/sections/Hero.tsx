'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

function LineAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent"
          style={{
            top: `${20 + i * 15}%`,
            left: '-10%',
            right: '-10%',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 2,
            delay: 0.8 + i * 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-cool-gray-50/15 to-transparent"
          style={{
            left: `${30 + i * 20}%`,
            top: '-10%',
            bottom: '-10%',
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{
            duration: 2.5,
            delay: 1 + i * 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {!reduced && <LineAnimation />}

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t('headline').split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl text-cool-gray-30 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t('subline')}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button href="#product" size="lg">
            {t('cta')}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs text-cool-gray-40 tracking-widest uppercase">
          {t('scroll')}
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-cool-gray-40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}

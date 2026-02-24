'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ShopHero() {
  const t = useTranslations('shop.hero');

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-30">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 text-center">
        <motion.span
          className="inline-block text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('badge')}
        </motion.span>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('title')}
        </motion.h1>
        <motion.p
          className="text-lg text-cool-gray-30 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('subtitle')}
        </motion.p>
      </div>
    </section>
  );
}

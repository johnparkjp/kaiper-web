'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

export default function FAQContent() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-30">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-cool-gray-30 mb-12">
            {t('subtitle')}
          </p>

          <div className="space-y-3">
            {FAQ_KEYS.map((key, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={key}
                  className="border border-cool-gray-50/30 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-cool-gray-50/5 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold pr-4">
                      {t(`items.${key}.question`)}
                    </span>
                    <motion.span
                      className="text-cool-gray-30 text-xl shrink-0"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-6 pb-6 text-cool-gray-30 leading-relaxed">
                          {t(`items.${key}.answer`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

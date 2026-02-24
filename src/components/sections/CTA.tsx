'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CTA() {
  const t = useTranslations('cta');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-30">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t('title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-cool-gray-30 text-lg mb-10">
              {t('subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 border border-accent-green/30 rounded-2xl"
              >
                <div className="text-accent-green text-2xl mb-2">&#10003;</div>
                <p className="text-kaiper-white font-semibold">Thank you!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
                <label htmlFor="cta-email" className="sr-only">
                  {t('placeholder')}
                </label>
                <input
                  id="cta-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('placeholder')}
                  required
                  aria-required="true"
                  aria-describedby="cta-privacy"
                  className="flex-1 px-5 py-3.5 bg-cool-gray-50/20 border border-cool-gray-50/30 rounded-full text-kaiper-white placeholder:text-cool-gray-40 focus:outline-none focus:border-accent-blue transition-colors"
                />
                <motion.button
                  type="submit"
                  className="px-8 py-3.5 bg-accent-blue text-kaiper-black font-semibold rounded-full hover:bg-accent-blue/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('button')}
                </motion.button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p id="cta-privacy" className="mt-4 text-xs text-cool-gray-40">
              {t('privacy')}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const SEGMENT_KEYS = ['construction', 'logistics', 'manufacturing', 'agriculture'] as const;

const SEGMENT_ICONS = {
  construction: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 28h24M8 28V14l8-8 8 8v14M14 28v-8h4v8" />
    </svg>
  ),
  logistics: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="8" width="18" height="14" rx="2" />
      <path d="M20 14h6l4 6v4h-10V14z" />
      <circle cx="9" cy="26" r="3" />
      <circle cx="25" cy="26" r="3" />
    </svg>
  ),
  manufacturing: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 28V12l8 6V12l8 6V12l8 6v10H4z" />
    </svg>
  ),
  agriculture: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M16 28V16M16 16c-4-8-12-6-12-2s8 6 12 2zM16 16c4-8 12-6 12-2s-8 6-12 2z" />
    </svg>
  ),
};

export default function Business() {
  const t = useTranslations('business');

  return (
    <section id="business" className="py-20 lg:py-30">
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

        {/* Segment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SEGMENT_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.1}>
              <div className="group p-6 border border-cool-gray-50/30 rounded-2xl hover:border-accent-blue/30 transition-all duration-300 h-full">
                <div className="text-cool-gray-30 group-hover:text-accent-blue transition-colors mb-5">
                  {SEGMENT_ICONS[key]}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`segments.${key}.title`)}
                </h3>
                <p className="text-cool-gray-40 text-sm leading-relaxed">
                  {t(`segments.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center p-10 lg:p-16 border border-cool-gray-50/20 rounded-2xl bg-gradient-to-br from-accent-blue/5 to-transparent">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              {t('cta')}
            </h3>
            <p className="text-cool-gray-30 mb-8 max-w-md mx-auto">
              {t('ctaDescription')}
            </p>
            <Button variant="primary" size="lg" href="mailto:contact@kaiper.io">
              {t('cta')}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

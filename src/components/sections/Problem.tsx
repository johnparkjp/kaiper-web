'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const STAT_KEYS = ['heatDays', 'heatstroke', 'workers'] as const;
const CARD_KEYS = ['crisis', 'vulnerability', 'gap'] as const;

const CARD_ICONS = {
  crisis: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 8v10M12 22h8" />
    </svg>
  ),
  vulnerability: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M16 4v6M16 22v6M4 16h6M22 16h6M8 8l4 4M20 20l4 4M8 24l4-4M20 12l4-4" />
    </svg>
  ),
  gap: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="4" y="4" width="10" height="10" rx="2" />
      <rect x="18" y="18" width="10" height="10" rx="2" />
      <path d="M14 9h4M9 14v4" strokeDasharray="2 2" />
    </svg>
  ),
};

export default function Problem() {
  const t = useTranslations('problem');

  return (
    <section id="problem" className="py-20 lg:py-30">
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

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          {STAT_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.15}>
              <div className="text-center p-6 border border-cool-gray-50/30 rounded-2xl">
                <div className="text-4xl lg:text-5xl font-bold text-accent-blue mb-2">
                  <AnimatedCounter
                    value={parseFloat(t(`stats.${key}.value`))}
                    suffix={t(`stats.${key}.suffix`)}
                    decimals={t(`stats.${key}.value`).includes('.') ? 1 : 0}
                  />
                </div>
                <p className="text-cool-gray-30 text-sm">
                  {t(`stats.${key}.label`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARD_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.15}>
              <div className="group p-8 border border-cool-gray-50/30 rounded-2xl hover:border-accent-blue/30 transition-colors duration-300 h-full">
                <div className="text-accent-blue mb-5">
                  {CARD_ICONS[key]}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`cards.${key}.title`)}
                </h3>
                <p className="text-cool-gray-30 text-sm leading-relaxed">
                  {t(`cards.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

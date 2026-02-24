'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

const KIT_KEYS = ['sleeves', 'hoodie', 'icePack', 'wear'] as const;

const KIT_ICONS = {
  sleeves: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 8c0-2 2-4 4-4h8c2 0 4 2 4 4v24c0 2-2 4-4 4h-8c-2 0-4-2-4-4V8z" />
      <path d="M16 12h8M16 20h8" />
    </svg>
  ),
  hoodie: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M10 16c0-6 4-12 10-12s10 6 10 12v16H10V16z" />
      <circle cx="20" cy="20" r="4" />
    </svg>
  ),
  icePack: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="8" y="6" width="24" height="28" rx="4" />
      <path d="M20 14v12M14 20h12" />
    </svg>
  ),
  wear: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14 4l-8 8v20h28V12l-8-8H14z" />
      <path d="M14 4v8H6M26 4v8h8" />
    </svg>
  ),
};

export default function KitSection() {
  const t = useTranslations('shop.kit');

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase mb-4">
            {t('badge')}
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            {t('name')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-cool-gray-30 text-lg mb-12 max-w-2xl">
            {t('description')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KIT_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.1}>
              <div className="group p-6 border border-cool-gray-50/30 rounded-2xl hover:border-accent-blue/30 hover:bg-cool-gray-50/5 transition-all duration-300 h-full">
                <div className="text-cool-gray-30 group-hover:text-accent-blue transition-colors mb-5">
                  {KIT_ICONS[key]}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`items.${key}.name`)}
                </h3>
                <p className="text-cool-gray-40 text-sm leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

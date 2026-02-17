'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

const SPEC_KEYS = ['mode', 'battery', 'charging', 'control', 'weight', 'noise'] as const;
const FEATURE_KEYS = ['versatile', 'durable', 'portable'] as const;

const FEATURE_ICONS = {
  versatile: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r="12" />
      <path d="M10 16h12M16 10v12" />
    </svg>
  ),
  durable: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 4l10 5v9c0 5.5-4.2 10.2-10 12-5.8-1.8-10-6.5-10-12V9l10-5z" />
    </svg>
  ),
  portable: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 28V8a4 4 0 014-4h8a4 4 0 014 4v20M12 4v4M20 4v4M12 24h8" />
    </svg>
  ),
};

export default function FanSection() {
  const t = useTranslations('shop.fan');

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase mb-4">
            {t('badge')}
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image Placeholder */}
          <ScrollReveal>
            <div className="relative aspect-square bg-gradient-to-br from-cool-gray-50/20 to-cool-gray-50/5 rounded-3xl overflow-hidden flex items-center justify-center border border-cool-gray-50/20">
              <div className="text-center p-8">
                <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-accent-blue/10 flex items-center justify-center">
                  <svg className="w-20 h-20 text-accent-blue" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="32" cy="32" r="20" />
                    <circle cx="32" cy="32" r="8" />
                    <path d="M32 12v8M32 44v8M12 32h8M44 32h8" />
                  </svg>
                </div>
                <p className="text-2xl font-bold">{t('name')}</p>
                <p className="text-sm text-cool-gray-30 mt-2">{t('tagline')}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                {t('name')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-cool-gray-30 text-lg mb-8 leading-relaxed">
                {t('description')}
              </p>
            </ScrollReveal>

            {/* 6 Spec Cards — 2x3 grid */}
            <div className="grid grid-cols-2 gap-3">
              {SPEC_KEYS.map((key, i) => (
                <ScrollReveal key={key} delay={0.2 + i * 0.05}>
                  <div className="p-4 border border-cool-gray-50/30 rounded-xl border-l-2 border-l-accent-blue/60">
                    <p className="text-xs text-cool-gray-30 uppercase tracking-wider mb-1 font-medium">
                      {t(`specs.${key}.label`)}
                    </p>
                    <p className="text-sm font-bold text-kaiper-white">
                      {t(`specs.${key}.value`)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {FEATURE_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.1}>
              <div className="p-8 border border-cool-gray-50/30 rounded-2xl hover:border-accent-blue/30 transition-colors duration-300">
                <div className="text-accent-blue mb-5">
                  {FEATURE_ICONS[key]}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-cool-gray-30 text-sm leading-relaxed">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

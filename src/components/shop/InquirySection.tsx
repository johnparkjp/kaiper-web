'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';

export default function InquirySection() {
  const t = useTranslations('shop.inquiry');

  return (
    <section className="py-20 lg:py-30">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative max-w-2xl mx-auto text-center p-10 lg:p-16 rounded-2xl border border-cool-gray-50/30 bg-gradient-to-br from-accent-blue/5 to-transparent">
            {/* Gradient border accent */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-blue/5 pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                {t('title')}
              </h2>
              <p className="text-cool-gray-30 mb-8 max-w-md mx-auto">
                {t('description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  {t('email')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={CONTACT_INFO.kakao}
                >
                  {t('kakao')}
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

'use client';

import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CTA() {
  const t = useTranslations('cta');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = useCallback(
    (value: string): string => {
      if (!value.trim()) return t('errorRequired');
      if (!EMAIL_REGEX.test(value)) return t('errorInvalid');
      return '';
    },
    [t]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (error) setError(validate(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate(email);
    if (validationError) {
      setError(validationError);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
      setSubmitting(false);
    }, 600);
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
              <div
                className="p-6 border border-accent-green/30 rounded-2xl animate-fade-in"
                role="status"
              >
                <div className="text-accent-green text-2xl mb-2">&#10003;</div>
                <p className="text-kaiper-white font-semibold">{t('success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
                <div className="flex flex-col sm:flex-row gap-3">
                  <label htmlFor="cta-email" className="sr-only">
                    {t('placeholder')}
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={() => { if (email) setError(validate(email)); }}
                    placeholder={t('placeholder')}
                    required
                    aria-required="true"
                    aria-invalid={error ? 'true' : undefined}
                    aria-describedby={`${error ? 'cta-error' : ''} cta-privacy`.trim()}
                    className={`flex-1 px-5 py-3.5 bg-cool-gray-50/20 border rounded-full text-kaiper-white placeholder:text-cool-gray-40 focus:outline-none transition-colors ${
                      error
                        ? 'border-accent-orange focus:border-accent-orange'
                        : 'border-cool-gray-50/30 focus:border-accent-blue'
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-8 py-3.5 bg-accent-blue text-kaiper-black font-semibold rounded-full hover:bg-accent-blue/90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? t('submitting') : t('button')}
                  </button>
                </div>
                {error && (
                  <p id="cta-error" className="text-sm text-accent-orange" role="alert">
                    {error}
                  </p>
                )}
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

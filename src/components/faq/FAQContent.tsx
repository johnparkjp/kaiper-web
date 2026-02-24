'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border border-cool-gray-50/30 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-cool-gray-50/5 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold pr-4">{question}</span>
        <span
          className="text-cool-gray-30 text-xl shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        style={{ height, opacity: isOpen ? 1 : 0 }}
        className="transition-all duration-250 overflow-hidden"
      >
        <div ref={contentRef}>
          <p className="px-6 pb-6 text-cool-gray-30 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQContent() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

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
            {FAQ_KEYS.map((key, index) => (
              <AccordionItem
                key={key}
                question={t(`items.${key}.question`)}
                answer={t(`items.${key}.answer`)}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

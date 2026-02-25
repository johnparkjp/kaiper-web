import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import FAQContent from '@/components/faq/FAQContent';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { getFAQJsonLd } from '@/lib/jsonld';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === 'ko';

  return {
    title: isKo ? '자주 묻는 질문' : 'FAQ',
    description: isKo
      ? 'Kaiper 제품과 서비스에 대해 자주 묻는 질문을 확인하세요.'
      : 'Find answers to frequently asked questions about Kaiper products and services.',
  };
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isKo = locale === 'ko';
  const t = await getTranslations('faq');

  const faqItems = (['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const).map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={getFAQJsonLd(faqItems)} />
      <Breadcrumb items={[
        { label: isKo ? '홈' : 'Home', href: '/' },
        { label: 'FAQ' },
      ]} />
      <FAQContent />
    </>
  );
}

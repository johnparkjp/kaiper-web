import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import FAQContent from '@/components/faq/FAQContent';

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

  return <FAQContent />;
}

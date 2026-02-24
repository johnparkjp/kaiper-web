import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Breadcrumb from '@/components/ui/Breadcrumb';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === 'ko';

  return {
    title: isKo ? '이용약관' : 'Terms of Service',
    description: isKo
      ? 'Kaiper 이용약관'
      : 'Kaiper Terms of Service',
  };
}

const SECTION_KEYS = ['s1', 's2', 's3', 's4', 's5', 's6'] as const;

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('terms');

  const isKo = locale === 'ko';

  return (
    <>
    <Breadcrumb items={[
      { label: isKo ? '홈' : 'Home', href: '/' },
      { label: isKo ? '이용약관' : 'Terms of Service' },
    ]} />
    <section className="min-h-screen bg-kaiper-black text-cool-gray-20 px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">
          {t('title')}
        </h1>
        <p className="text-sm text-cool-gray-40 mb-12">
          {t('lastUpdated')}
        </p>

        <div className="space-y-8 text-cool-gray-30 leading-relaxed">
          {SECTION_KEYS.map((key) => (
            <div key={key}>
              <h2 className="text-xl font-semibold text-cool-gray-10 mb-3">
                {t(`sections.${key}.title`)}
              </h2>
              <p>
                {t(`sections.${key}.content`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

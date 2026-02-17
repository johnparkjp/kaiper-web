import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === 'ko';

  return {
    title: {
      default: isKo
        ? 'KAIPER — 극한 더위를 이기는 쿨링 솔루션'
        : 'KAIPER — Cooling Solutions for Extreme Heat',
      template: '%s | KAIPER',
    },
    description: isKo
      ? 'Kaiper는 극한 더위 환경에서 인간 퍼포먼스를 보호하는 쿨링 솔루션 브랜드입니다.'
      : 'Kaiper protects human performance in extreme heat environments with advanced cooling solutions.',
    openGraph: {
      type: 'website',
      siteName: 'KAIPER',
      locale: isKo ? 'ko_KR' : 'en_US',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'ko' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="md:scroll-smooth">
      <body className="bg-kaiper-black text-kaiper-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}

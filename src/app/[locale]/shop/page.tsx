import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { setRequestLocale } from 'next-intl/server';
import ShopHero from '@/components/shop/ShopHero';
import SectionDivider from '@/components/ui/SectionDivider';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { getProductJsonLd } from '@/lib/jsonld';

const FanSection = dynamic(() => import('@/components/shop/FanSection'));
const KitSection = dynamic(() => import('@/components/shop/KitSection'));
const InquirySection = dynamic(() => import('@/components/shop/InquirySection'));

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === 'ko';

  return {
    title: isKo ? 'Shop — 제품 라인업' : 'Shop — Product Lineup',
    description: isKo
      ? 'Kaiper 3in1 Waist Fan, Cooling Kit 등 극한 더위 환경을 위한 쿨링 제품을 만나보세요.'
      : 'Discover Kaiper cooling products including the 3in1 Waist Fan and Cooling Kit for extreme heat.',
  };
}

export default async function ShopPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isKo = locale === 'ko';

  return (
    <>
      <JsonLd data={getProductJsonLd(locale)} />
      <Breadcrumb items={[
        { label: isKo ? '홈' : 'Home', href: '/' },
        { label: 'Shop' },
      ]} />
      <ShopHero />
      <SectionDivider />
      <FanSection />
      <SectionDivider />
      <KitSection />
      <SectionDivider />
      <InquirySection />
    </>
  );
}

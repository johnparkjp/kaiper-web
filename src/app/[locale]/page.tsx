import dynamic from 'next/dynamic';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import SectionDivider from '@/components/ui/SectionDivider';

const Problem = dynamic(() => import('@/components/sections/Problem'));
const Product = dynamic(() => import('@/components/sections/Product'));
const Vision = dynamic(() => import('@/components/sections/Vision'));
const Business = dynamic(() => import('@/components/sections/Business'));
const CTA = dynamic(() => import('@/components/sections/CTA'));

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <SectionDivider />
      <Problem />
      <SectionDivider />
      <Product />
      <SectionDivider />
      <Vision />
      <SectionDivider />
      <Business />
      <SectionDivider />
      <CTA />
    </>
  );
}

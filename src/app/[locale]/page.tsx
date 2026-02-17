import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Product from '@/components/sections/Product';
import Vision from '@/components/sections/Vision';
import Business from '@/components/sections/Business';
import CTA from '@/components/sections/CTA';
import SectionDivider from '@/components/ui/SectionDivider';

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

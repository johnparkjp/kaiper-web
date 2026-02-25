const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kaiper.io';

export function getOrganizationJsonLd(locale: string) {
  const isKo = locale === 'ko';
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KAIPER',
    legalName: 'SCG Solutions Co, Ltd.',
    url: BASE_URL,
    logo: `${BASE_URL}/kaiper_logo_en_white.svg`,
    description: isKo
      ? 'Kaiper는 극한 더위 환경에서 인간 퍼포먼스를 보호하는 쿨링 솔루션 브랜드입니다.'
      : 'Kaiper protects human performance in extreme heat environments with advanced cooling solutions.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@kaiper.io',
      contactType: 'customer service',
      availableLanguage: ['Korean', 'English'],
    },
    sameAs: [
      'https://www.instagram.com/kaiper.official',
    ],
  };
}

export function getWebSiteJsonLd(locale: string) {
  const isKo = locale === 'ko';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KAIPER',
    url: BASE_URL,
    description: isKo
      ? 'Kaiper는 극한 더위 환경에서 인간 퍼포먼스를 보호하는 쿨링 솔루션 브랜드입니다.'
      : 'Kaiper protects human performance in extreme heat environments with advanced cooling solutions.',
    inLanguage: isKo ? 'ko' : 'en',
  };
}

export function getProductJsonLd(locale: string) {
  const isKo = locale === 'ko';
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: '3in1 Waist Fan',
    description: isKo
      ? '허리에 장착하는 쿨링 팬. 스마트폰 충전용 보조배터리 겸용.'
      : 'Waist-mounted cooling fan that doubles as a power bank for smartphone charging.',
    brand: {
      '@type': 'Brand',
      name: 'KAIPER',
    },
    category: isKo ? '쿨링 솔루션' : 'Cooling Solutions',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Battery', value: '4,500mAh' },
      { '@type': 'PropertyValue', name: 'Charging', value: 'USB-C Fast Charging' },
      { '@type': 'PropertyValue', name: 'Weight', value: '280g' },
      { '@type': 'PropertyValue', name: 'Noise Level', value: 'Under 35dB' },
      { '@type': 'PropertyValue', name: 'Water Resistance', value: 'IP54' },
    ],
  };
}

export function getFAQJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

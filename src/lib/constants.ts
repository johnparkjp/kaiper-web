export const BRAND = {
  name: 'KAIPER',
  nameKo: '케이퍼',
  vision: 'Energy flows. Freedom follows.',
  slogan: 'Break into, Break through.',
} as const;

export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  coolGray: {
    50: '#4a4d56',
    40: '#8b8f96',
    30: '#9da1a7',
    20: '#ced0db',
    10: '#ededf5',
  },
  accent: {
    blue: '#00befa',
    green: '#1edb46',
    orange: '#ff6428',
  },
} as const;

export const NAV_LINKS = [
  { key: 'problem', href: '#problem' },
  { key: 'product', href: '#product' },
  { key: 'vision', href: '#vision' },
  { key: 'business', href: '#business' },
  { key: 'contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/kaiper.official',
  kakao: 'https://pf.kakao.com/_kaiper',
} as const;

export const CONTACT_INFO = {
  email: 'contact@kaiper.io',
  kakao: 'https://pf.kakao.com/_kaiper',
} as const;

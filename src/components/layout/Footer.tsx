'use client';

import { useTranslations } from 'next-intl';
import { BRAND, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-cool-gray-50/30 bg-kaiper-black">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-wider mb-3">
              {BRAND.name}
            </h3>
            <p className="text-sm text-cool-gray-40 leading-relaxed">
              {BRAND.vision}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-cool-gray-20 mb-4 uppercase tracking-wider">
              Social
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cool-gray-40 hover:text-accent-blue transition-colors"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cool-gray-40 hover:text-accent-blue transition-colors"
              >
                KakaoTalk
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-cool-gray-20 mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm text-cool-gray-40 hover:text-accent-blue transition-colors"
              >
                {t('terms')}
              </a>
              <a
                href="#"
                className="text-sm text-cool-gray-40 hover:text-accent-blue transition-colors"
              >
                {t('privacy')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cool-gray-50/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cool-gray-40">
            &copy; {new Date().getFullYear()} {t('company')} {t('rights')}
          </p>
          <p className="text-xs text-cool-gray-50">
            {BRAND.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}

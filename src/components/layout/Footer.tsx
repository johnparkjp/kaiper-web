'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { BRAND, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-cool-gray-50/30 bg-kaiper-black">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/kaiper_logo_en_white.svg"
              alt="KAIPER"
              width={100}
              height={27}
              className="mb-3"
            />
            <p className="text-sm text-cool-gray-40 leading-relaxed">
              {BRAND.vision}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-cool-gray-20 mb-4 uppercase tracking-wider">
              Social
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in new tab)"
                className="text-sm text-cool-gray-40 hover:text-accent-blue transition-colors py-2 inline-block"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.kakao}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KakaoTalk (opens in new tab)"
                className="text-sm text-cool-gray-40 hover:text-accent-blue transition-colors py-2 inline-block"
              >
                KakaoTalk
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-cool-gray-20 mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm text-cool-gray-40 hover:text-accent-blue transition-colors py-2 inline-block"
              >
                {t('terms')}
              </a>
              <Link
                href="/privacy"
                className="text-sm text-cool-gray-40 hover:text-accent-blue transition-colors py-2 inline-block"
              >
                {t('privacy')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cool-gray-50/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cool-gray-40">
            &copy; {new Date().getFullYear()} {t('company')} {t('rights')}
          </p>
          <p className="text-xs text-cool-gray-40">
            {BRAND.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname, Link } from '@/i18n/navigation';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

const SECTION_IDS = NAV_LINKS.map((l) => l.key);

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isHome = pathname === '/';

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen || !mobileNavRef.current) return;

    const nav = mobileNavRef.current;
    const focusableElements = nav.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Focus first element on open
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // IntersectionObserver for active section (only on home page)
  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [isHome]);

  const switchLocale = () => {
    const next = locale === 'ko' ? 'en' : 'ko';
    router.replace(pathname, { locale: next });
  };

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const renderNavLink = (link: (typeof NAV_LINKS)[number], mobile: boolean) => {
    const isActive = isHome && activeSection === link.key;
    const baseClass = mobile
      ? 'text-lg transition-colors'
      : 'relative text-sm transition-colors duration-200';
    const colorClass = isActive
      ? 'text-accent-blue'
      : mobile
        ? 'text-cool-gray-20 hover:text-kaiper-white'
        : 'text-cool-gray-30 hover:text-kaiper-white';

    if (isHome) {
      return (
        <a
          key={link.key}
          href={link.href}
          onClick={mobile ? closeMobile : undefined}
          className={`${baseClass} ${colorClass}`}
        >
          {t(link.key)}
          {!mobile && isActive ? (
            <motion.span
              layoutId="nav-dot"
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          ) : null}
        </a>
      );
    }

    return (
      <Link
        key={link.key}
        href={`/${link.href}`}
        onClick={mobile ? closeMobile : undefined}
        className={`${baseClass} ${colorClass}`}
      >
        {t(link.key)}
      </Link>
    );
  };

  const shopIsActive = pathname === '/shop';
  const shopDesktopClass = `relative text-sm transition-colors duration-200 ${
    shopIsActive ? 'text-accent-blue' : 'text-cool-gray-30 hover:text-kaiper-white'
  }`;
  const shopMobileClass = `text-lg transition-colors ${
    shopIsActive ? 'text-accent-blue' : 'text-cool-gray-20 hover:text-kaiper-white'
  }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b ${
          scrolled
            ? 'bg-[rgba(0,0,0,0.95)] border-cool-gray-50/30'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="block">
              <Image
                src="/kaiper_logo_en_white.svg"
                alt="KAIPER"
                width={120}
                height={32}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => renderNavLink(link, false))}
              <Link href="/shop" className={shopDesktopClass}>
                {t('shop')}
                {shopIsActive ? (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <button
                onClick={switchLocale}
                aria-label={locale === 'ko' ? 'Switch to English' : '한국어로 전환'}
                className="text-sm text-cool-gray-30 hover:text-kaiper-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center border border-cool-gray-50 rounded"
              >
                {locale === 'ko' ? 'EN' : 'KO'}
              </button>

              {/* Mobile menu button */}
              <button
                ref={menuButtonRef}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden relative w-11 h-11 flex items-center justify-center"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <motion.span
                  className="absolute w-5 h-0.5 bg-kaiper-white"
                  animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                />
                <motion.span
                  className="absolute w-5 h-0.5 bg-kaiper-white"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="absolute w-5 h-0.5 bg-kaiper-white"
                  animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav — rendered outside header to avoid stacking issues */}
      {mobileOpen && (
        <>
          {/* Overlay backdrop */}
          <div
            className="md:hidden fixed inset-0 top-16 z-40 bg-kaiper-black/60"
            onClick={closeMobile}
            aria-hidden="true"
          />
          <nav
            ref={mobileNavRef}
            className="md:hidden fixed inset-0 top-16 z-50 bg-kaiper-black border-t border-cool-gray-50/30 max-h-[calc(100vh-4rem)] overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => renderNavLink(link, true))}
              <Link
                href="/shop"
                onClick={closeMobile}
                className={shopMobileClass}
              >
                {t('shop')}
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

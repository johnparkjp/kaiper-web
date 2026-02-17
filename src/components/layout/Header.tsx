'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname, Link } from '@/i18n/navigation';
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

  const closeMobile = useCallback(() => setMobileOpen(false), []);

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
          {!mobile && isActive && (
            <motion.span
              layoutId="nav-dot"
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </a>
      );
    }

    // On non-home pages, hash links go back to home
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
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-kaiper-black/80 backdrop-blur-xl border-b border-cool-gray-50/30'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl lg:text-2xl font-bold tracking-wider">
            KAIPER
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => renderNavLink(link, false))}
            <Link href="/shop" className={shopDesktopClass}>
              {t('shop')}
              {shopIsActive && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={switchLocale}
              className="text-sm text-cool-gray-30 hover:text-kaiper-white transition-colors px-2 py-1 border border-cool-gray-50 rounded"
            >
              {locale === 'ko' ? 'EN' : 'KO'}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <motion.span
                className="block w-5 h-0.5 bg-kaiper-white"
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-kaiper-white"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-kaiper-white"
                animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav — full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="md:hidden fixed inset-0 top-16 bg-kaiper-black/95 backdrop-blur-xl border-t border-cool-gray-50/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

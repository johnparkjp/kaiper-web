import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const locale = useLocale();
  const isKo = locale === 'ko';

  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          {isKo ? '페이지를 찾을 수 없습니다' : 'Page Not Found'}
        </h1>
        <p className="text-cool-gray-30 text-lg mb-10 max-w-md mx-auto">
          {isKo
            ? '요청하신 페이지가 존재하지 않거나 이동되었습니다.'
            : "The page you're looking for doesn't exist or has been moved."}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 bg-accent-blue text-kaiper-black hover:bg-accent-blue/90 hover:scale-[1.02] active:scale-[0.98] px-8 py-4 text-lg"
        >
          {isKo ? '홈으로 돌아가기' : 'Back to Home'}
        </Link>
      </div>
    </section>
  );
}

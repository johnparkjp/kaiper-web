import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-cool-gray-30 text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 bg-accent-blue text-kaiper-black hover:bg-accent-blue/90 px-8 py-4 text-lg"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

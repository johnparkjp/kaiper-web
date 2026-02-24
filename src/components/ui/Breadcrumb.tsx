import { Link } from '@/i18n/navigation';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="pt-20 lg:pt-24 px-6 lg:px-8">
      <ol className="mx-auto max-w-[1280px] flex items-center gap-2 text-sm text-cool-gray-40">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && (
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 4l4 4-4 4" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-kaiper-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-cool-gray-20">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

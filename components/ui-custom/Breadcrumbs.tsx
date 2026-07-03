import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Breadcrumbs({ items, variant = 'light', className }: BreadcrumbsProps) {
  const base = variant === 'dark' ? 'text-white/60' : 'text-gray-400';
  const linkHover = variant === 'dark' ? 'hover:text-white' : 'hover:text-primary';
  const current = variant === 'dark' ? 'text-white' : 'text-dark';

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1.5 text-sm font-inter', base, className)}>
      <Link href="/" className={cn('inline-flex items-center gap-1 transition-colors', linkHover)}>
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Inicio</span>
      </Link>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            {item.href && !isLast ? (
              <Link href={item.href} className={cn('transition-colors', linkHover)}>
                {item.label}
              </Link>
            ) : (
              <span className={cn('font-semibold', current)}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

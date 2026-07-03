import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  accent?: 'primary' | 'accent';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  accent = 'primary',
  className,
}: SectionHeadingProps) {
  const dotColor = accent === 'accent' ? 'bg-accent' : 'bg-primary';
  const pillColor =
    accent === 'accent'
      ? 'bg-accent-soft text-accent-strong border-accent/20'
      : 'bg-primary/5 text-primary border-primary/10';

  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-5 text-sm font-semibold tracking-wide',
            pillColor
          )}
        >
          <span className={cn('w-2 h-2 rounded-full animate-pulse', dotColor)} />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-display font-bold text-dark leading-[1.1] tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg text-gray-500 font-inter leading-relaxed mt-4',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

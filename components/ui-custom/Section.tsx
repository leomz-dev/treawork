import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: 'default' | 'colored' | 'dark';
  containerSize?: 'default' | 'narrow' | 'wide';
}

export default function Section({
  children,
  variant = 'default',
  containerSize = 'default',
  className,
  ...props
}: SectionProps) {
  const variantClasses = {
    default: 'bg-light',
    colored: 'bg-white',
    dark: 'bg-primary text-white',
  };

  const containerSizes = {
    narrow: 'max-w-4xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
  };

  return (
    <section className={cn('py-16 md:py-24', variantClasses[variant], className)} {...props}>
      <div className={cn('mx-auto px-4 md:px-6', containerSizes[containerSize])}>
        {children}
      </div>
    </section>
  );
}

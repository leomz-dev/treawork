import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export default function Card({ children, hover = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-card p-8 border border-gray-100 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-premium hover:-translate-y-1 hover:border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

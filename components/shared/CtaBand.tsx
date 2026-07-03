import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import WaButton from '@/components/shared/WaButton';

interface CtaBandProps {
  title: ReactNode;
  subtitle: string;
  waMessage: string;
  ctaLabel: string;
  accent?: 'primary' | 'accent';
  secondary?: ReactNode;
}

export default function CtaBand({
  title,
  subtitle,
  waMessage,
  ctaLabel,
  accent = 'primary',
  secondary,
}: CtaBandProps) {
  const bg = accent === 'accent' ? 'bg-accent' : 'bg-primary';
  const shadow = accent === 'accent' ? 'shadow-coral' : 'shadow-blue';

  return (
    <section className="py-12 md:py-20 px-4">
      <div className={cn('relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden', bg, shadow)}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-white/10 animate-blob" />
        <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-black/10 animate-blob" />

        <div className="relative z-10 py-16 px-6 md:py-20 md:px-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 text-white leading-tight text-balance">
            {title}
          </h2>
          <p className="text-lg text-white/90 font-inter mb-9 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WaButton
              message={waMessage}
              label={ctaLabel}
              variant="white"
              size="large"
              className="w-full sm:w-auto"
            />
            {secondary}
          </div>
        </div>
      </div>
    </section>
  );
}

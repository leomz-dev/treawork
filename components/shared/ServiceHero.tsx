import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui-custom/Button';
import WaButton from '@/components/shared/WaButton';
import Breadcrumbs, { Crumb } from '@/components/ui-custom/Breadcrumbs';

export interface HeroCta {
  label: string;
  variant?: 'primary' | 'accent' | 'outline' | 'white';
  href?: string;
  waMessage?: string;
}

interface FloatingBadge {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

interface ServiceHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  ctas: HeroCta[];
  crumbs: Crumb[];
  accent?: 'primary' | 'accent';
  floatingBadge?: FloatingBadge;
  blobClass?: string;
  children?: ReactNode;
}

export default function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  ctas,
  crumbs,
  accent = 'primary',
  floatingBadge,
  blobClass = 'clip-blob-1',
  children,
}: ServiceHeroProps) {
  const pill =
    accent === 'accent'
      ? 'bg-accent-soft text-accent-strong border-accent/20'
      : 'bg-primary/5 text-primary border-primary/10';
  const glow = accent === 'accent' ? 'bg-accent/10' : 'bg-primary/10';

  return (
    <section className="relative overflow-hidden bg-background pt-4 md:pt-6 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className={cn('absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl animate-blob', glow)} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <Breadcrumbs items={crumbs} className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-sm font-semibold', pill)}>
              {eyebrow}
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6 leading-[1.05] tracking-tight text-balance">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-gray-500 font-inter mb-8 leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              {ctas.map((cta) =>
                cta.waMessage ? (
                  <WaButton
                    key={cta.label}
                    message={cta.waMessage}
                    label={cta.label}
                    variant={cta.variant ?? 'primary'}
                    size="large"
                    className="min-w-[190px]"
                  />
                ) : (
                  <Link key={cta.label} href={cta.href ?? '#'}>
                    <Button variant={cta.variant ?? 'outline'} size="large" className="min-w-[190px]">
                      {cta.label}
                    </Button>
                  </Link>
                )
              )}
            </div>

            {children && <div className="mt-10">{children}</div>}
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className={cn('absolute inset-4 animate-blob', accent === 'accent' ? 'bg-accent/15' : 'bg-primary/15')} />
              <div className={cn('relative w-full h-full overflow-hidden shadow-2xl bg-white', blobClass)}>
                <Image src={image} alt={imageAlt} fill className="object-cover" priority />
              </div>
              {floatingBadge && (
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className={cn('w-11 h-11 rounded-full flex items-center justify-center text-white', accent === 'accent' ? 'bg-accent' : 'bg-primary')}>
                      {floatingBadge.icon}
                    </div>
                    <div>
                      <p className="font-display font-bold text-dark text-sm">{floatingBadge.title}</p>
                      <p className="text-xs text-gray-500">{floatingBadge.subtitle}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

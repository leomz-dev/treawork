import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
}

interface FeatureGridProps {
  features: Feature[];
  accent?: 'primary' | 'accent';
  columns?: 2 | 3;
  className?: string;
}

export default function FeatureGrid({ features, accent = 'primary', columns = 3, className }: FeatureGridProps) {
  const iconWrap = accent === 'accent' ? 'bg-accent-soft text-accent-strong' : 'bg-primary/10 text-primary';
  const dot = accent === 'accent' ? 'bg-accent' : 'bg-primary';

  return (
    <div className={cn('grid grid-cols-1 gap-6', columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3', className)}>
      {features.map((f, i) => (
        <div
          key={i}
          className="group flex flex-col h-full bg-white rounded-card p-7 border border-gray-100 shadow-sm hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300"
        >
          <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110', iconWrap)}>
            <f.icon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-display font-bold text-dark mb-2.5">{f.title}</h3>
          <p className="text-gray-500 font-inter leading-relaxed">{f.description}</p>
          {f.bullets && (
            <ul className="mt-5 pt-5 border-t border-gray-100 space-y-2">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dot)} />
                  <span className="text-gray-600 font-inter text-sm">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

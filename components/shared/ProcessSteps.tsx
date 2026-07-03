import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  accent?: 'primary' | 'accent';
  layout?: 'vertical' | 'grid';
  className?: string;
}

export default function ProcessSteps({
  steps,
  accent = 'primary',
  layout = 'vertical',
  className,
}: ProcessStepsProps) {
  const numberBg = accent === 'accent' ? 'bg-accent' : 'bg-primary';
  const iconWrap = accent === 'accent' ? 'bg-accent-soft text-accent-strong' : 'bg-primary/10 text-primary';

  if (layout === 'grid') {
    return (
      <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
        {steps.map((step, index) => (
          <div key={index} className="group relative bg-white rounded-card p-6 border border-gray-100 shadow-sm hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300">
            <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center mb-5', iconWrap)}>
              <step.icon className="w-6 h-6" />
            </div>
            <span className={cn('absolute top-6 right-6 font-display font-bold text-4xl opacity-10', accent === 'accent' ? 'text-accent' : 'text-primary')}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-lg font-display font-bold text-dark mb-2">{step.title}</h3>
            <p className="text-gray-500 font-inter text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('max-w-3xl mx-auto', className)}>
      {steps.map((step, index) => (
        <div key={index} className="relative flex gap-6 pb-8 last:pb-0">
          {index < steps.length - 1 && (
            <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 to-transparent" />
          )}
          <div className="flex-shrink-0">
            <div className={cn('relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl', numberBg)}>
              {index + 1}
            </div>
          </div>
          <div className="bg-white rounded-card p-6 flex-grow shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className={cn('p-3 rounded-xl shrink-0', iconWrap)}>
                <step.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-dark mb-1.5">{step.title}</h3>
                <p className="text-gray-600 font-inter leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

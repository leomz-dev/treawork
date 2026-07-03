import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudienceFitProps {
  yesTitle?: string;
  noTitle?: string;
  yes: string[];
  no: string[];
  className?: string;
}

export default function AudienceFit({
  yesTitle = 'Es para ti si...',
  noTitle = 'Quizá no es para ti si...',
  yes,
  no,
  className,
}: AudienceFitProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto', className)}>
      <div className="relative rounded-card p-8 bg-white border-2 border-green-500/20 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-500/5" />
        <div className="relative flex items-center gap-3 mb-6">
          <div className="bg-green-500 text-white p-2 rounded-xl">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-dark">{yesTitle}</h3>
        </div>
        <ul className="relative space-y-4">
          {yes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-700 font-inter leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative rounded-card p-8 bg-white border-2 border-accent/20 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/5" />
        <div className="relative flex items-center gap-3 mb-6">
          <div className="bg-accent text-white p-2 rounded-xl">
            <X className="w-6 h-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-dark">{noTitle}</h3>
        </div>
        <ul className="relative space-y-4">
          {no.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <X className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <span className="text-gray-700 font-inter leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

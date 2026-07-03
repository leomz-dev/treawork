import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  showNumber?: boolean;
  size?: number;
  className?: string;
}

export default function StarRating({ rating, showNumber = false, size = 16, className }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            style={{ width: size, height: size }}
            className={i < Math.round(rating) ? 'text-accent fill-accent' : 'text-gray-300'}
          />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm font-semibold text-dark font-inter ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}

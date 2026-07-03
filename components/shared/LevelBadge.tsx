import { BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { nivelInfo, TutorLevel } from '@/lib/tutors';

interface LevelBadgeProps {
  nivel: TutorLevel;
  className?: string;
}

export default function LevelBadge({ nivel, className }: LevelBadgeProps) {
  const info = nivelInfo[nivel];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-inter',
        info.badgeClasses,
        className
      )}
    >
      <BadgeCheck className="w-3.5 h-3.5" />
      {info.label}
    </span>
  );
}

export function CertifiedBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-inter bg-green-50 text-green-700 border border-green-200',
        className
      )}
    >
      <BadgeCheck className="w-3.5 h-3.5" />
      Tutor Certificado
    </span>
  );
}

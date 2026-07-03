'use client';

import { MessageCircle } from 'lucide-react';
import Button from '@/components/ui-custom/Button';
import { whatsappUrl } from '@/lib/site';
import { cn } from '@/lib/utils';

interface WaButtonProps {
  message: string;
  label: string;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'white';
  size?: 'default' | 'large' | 'small';
  showIcon?: boolean;
  className?: string;
}

export default function WaButton({
  message,
  label,
  variant = 'primary',
  size = 'default',
  showIcon = true,
  className,
}: WaButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={() => window.open(whatsappUrl(message), '_blank')}
    >
      {showIcon && <MessageCircle className="w-4 h-4" />}
      {label}
    </Button>
  );
}

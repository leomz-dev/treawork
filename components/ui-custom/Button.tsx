import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'white';
  size?: 'default' | 'large' | 'small';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', loading = false, children, disabled, ...props }, ref) => {
    const baseClasses = 'font-montserrat font-semibold rounded-button transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';

    const variantClasses = {
      primary: 'bg-primary text-white hover:bg-secondary-blue hover:shadow-lg hover:shadow-primary/25',
      accent: 'bg-accent text-dark hover:bg-white hover:text-accent hover:shadow-lg hover:shadow-accent/25',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'text-primary hover:bg-primary/10',
      white: 'bg-white text-primary hover:bg-gray-50 hover:shadow-lg',
    };

    const sizeClasses = {
      small: 'px-4 py-2 text-sm',
      default: 'px-6 py-3 text-base',
      large: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;


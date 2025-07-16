import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from '~/utils/cn';

export const badgeVariants = cva(
  'inline-flex items-center rounded-md border border-border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
    variants: {
      size: {
        lg: 'px-3 py-1 text-base',
        md: 'px-2',
        sm: 'px-2 text-sm',
      },
      variant: {
        default: 'bg-card text-card-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
        primary: 'border border-primary-foreground bg-primary text-primary-foreground',
        secondary: 'bg-input-background text-foreground',
        success: 'border border-success bg-success/20 text-success',
        warning: 'border-amber-500 bg-amber-500/30',
      },
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, size, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ size, variant }), className)} {...props} />;
}

export { Badge };

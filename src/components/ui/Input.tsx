import * as React from 'react';
import { cn } from '~/utils/cn';

export const sharedInputClasses =
  'flex h-input w-full rounded-md bg-input-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground shadow-[0_0_0_1px_hsl(var(--border))] hover:shadow-[0_0_0_2px_hsl(var(--ring)/70%)] focus-visible:shadow-[0_0_0_2px_hsl(var(--ring))] focus-visible:outline-none focus-visible:ring-[6px] focus-visible:ring-ring/50 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200';

const Input: React.FC<React.ComponentProps<'input'>> = ({
  className,
  type,
  ...props
}) => (
  <input type={type} className={cn(sharedInputClasses, className)} {...props} />
);
Input.displayName = 'Input';

export { Input };

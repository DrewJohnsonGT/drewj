import * as React from 'react';
import { cn } from '~/utils/cn';

const Card: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      'flex flex-col rounded-lg border bg-card text-card-foreground',
      className,
    )}
    {...props}
  />
);

const CardHeader: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => (
  <div className={cn('flex flex-col space-y-1.5 p-4', className)} {...props} />
);

const CardTitle: React.FC<React.ComponentProps<'h3'>> = ({
  className,
  ...props
}) => (
  <h3
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
);

const CardDescription: React.FC<React.ComponentProps<'p'>> = ({
  className,
  ...props
}) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
);

const CardContent: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => <div className={cn('p-4 pt-0', className)} {...props} />;

const CardFooter: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => (
  <div
    className={cn('mt-auto flex items-center p-2 pt-0', className)}
    {...props}
  />
);

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};

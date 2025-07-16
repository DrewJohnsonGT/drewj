import * as React from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/Tooltip';
import { cn } from '~/utils/cn';

const buttonVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    compoundVariants: [
      {
        className: 'hover:text-destructive',
        color: 'destructive',
        variant: 'ghost',
      },
      {
        className: 'border-destructive bg-destructive hover:bg-destructive/90',
        color: 'destructive',
        variant: 'primary',
      },
      {
        className: 'border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive',
        color: 'destructive',
        variant: 'outline',
      },
      {
        className:
          'border-destructive bg-destructive text-destructive-foreground hover:border-destructive/90 hover:bg-destructive/90 active:border-destructive/90 active:bg-destructive/90',
        color: 'destructive',
        variant: 'primary',
      },
    ],
    defaultVariants: {
      size: 'default',
      variant: 'primary',
    },
    variants: {
      color: {
        destructive: 'border-destructive bg-destructive text-destructive-foreground',
        link: 'text-link underline-offset-4 hover:underline',
        success: 'bg-success text-success-foreground',
      },
      size: {
        default: 'h-input px-4 py-2',
        icon: 'size-input',
        lg: 'h-10 px-8',
        sm: 'h-8 px-3 text-xs',
        smallIcon: 'size-8',
      },
      variant: {
        ghost: 'border-none bg-transparent text-foreground shadow-none hover:bg-accent hover:text-accent-foreground',
        link: 'm-0 break-words p-0 text-link underline-offset-4 hover:underline',
        outline:
          'border border-border bg-outline-normal text-foreground shadow-normal hover:bg-outline-hover hover:text-accent-foreground active:bg-outline-pressed',
        primary:
          'border border-primary bg-primary-normal text-primary-foreground shadow-button hover:border-secondary hover:bg-primary-hover active:bg-primary-pressed',
        primaryOutline:
          'border border-border bg-outline-normal text-foreground shadow-normal hover:border-primary hover:bg-accent hover:bg-primary-hover hover:text-primary-foreground hover:shadow-button',
        secondary:
          'border border-border bg-secondary text-secondary-foreground shadow-normal hover:border-primary hover:bg-secondary/90 hover:text-primary',
      },
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, ButtonVariantProps {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
  tooltip?: string | React.ReactNode;
  tooltipDelay?: number;
  tooltipSide?: React.ComponentProps<typeof TooltipContent>['side'];
}

export const ButtonLoadingContent = ({
  loadingText = 'Loading...',
  size,
}: {
  loadingText?: string;
  size: ButtonVariantProps['size'];
}) => (
  <div className="flex items-center">
    <LoadingSpinner className={cn('size-4', size !== 'icon' && 'mr-2')} size="sm" />
    {size !== 'icon' && <span>{loadingText}</span>}
  </div>
);

const Button: React.FC<React.ComponentProps<'button'> & ButtonProps> = ({
  asChild = false,
  className,
  color,
  loading,
  loadingText,
  size,
  tooltip,
  tooltipDelay = 0,
  tooltipSide = 'top',
  variant,
  type = 'button',
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';
  const buttonContent = (
    <Comp
      className={cn(buttonVariants({ className, color, size, variant }))}
      disabled={props.disabled}
      type={type}
      {...props}
    >
      {loading ? <ButtonLoadingContent size={size} loadingText={loadingText} /> : props.children}
    </Comp>
  );

  return tooltip ? (
    <Tooltip delayDuration={tooltipDelay}>
      <TooltipTrigger asChild className={cn(props.disabled && 'cursor-default')}>
        <span>{buttonContent}</span>
      </TooltipTrigger>
      <TooltipContent side={tooltipSide}>{tooltip}</TooltipContent>
    </Tooltip>
  ) : (
    buttonContent
  );
};

export { Button, buttonVariants };

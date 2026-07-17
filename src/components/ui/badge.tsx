import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-gold-100 text-gold-800 dark:bg-gold-900/40 dark:text-gold-300',
        gold:
          'bg-gold-500/15 text-gold-700 border border-gold-500/30 dark:bg-gold-500/20 dark:text-gold-300',
        peacock:
          'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/40 dark:text-peacock-300',
        saffron:
          'bg-saffron-100 text-saffron-700 dark:bg-saffron-900/40 dark:text-saffron-300',
        outline:
          'border border-current text-current bg-transparent',
        secondary:
          'border-transparent bg-ink-100 text-ink-700 dark:bg-ink-700 dark:text-cream-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

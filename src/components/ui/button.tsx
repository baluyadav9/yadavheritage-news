import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-gold-500 text-ink-900 hover:bg-gold-400 shadow-gold hover:-translate-y-0.5 hover:shadow-gold-lg active:translate-y-0',
        outline:
          'border-[1.5px] border-gold-500 text-gold-500 bg-transparent hover:bg-gold-500/10 hover:-translate-y-0.5',
        ghost:
          'bg-transparent hover:bg-gold-500/10 text-gold-500',
        peacock:
          'bg-peacock-500 text-white hover:bg-peacock-400 shadow hover:-translate-y-0.5 active:translate-y-0',
        saffron:
          'bg-saffron-500 text-white hover:bg-saffron-400 shadow hover:-translate-y-0.5',
        dark:
          'bg-ink-900 text-cream-200 hover:bg-ink-800 dark:bg-cream-200 dark:text-ink-900',
        link: 'text-gold-500 underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        default: 'h-10 px-5 py-2',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

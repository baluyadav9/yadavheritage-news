import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-cream-400 dark:border-ink-600 bg-white dark:bg-ink-800 px-3 py-2 text-sm text-ink-800 dark:text-cream-200 ring-offset-background placeholder:text-ink-400 dark:placeholder:text-ink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const startValue = 0

    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3)
    }

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const current = Math.round(startValue + (target - startValue) * easedProgress)
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

import { useEffect, useRef, useState } from 'react'

/**
 * Creates a timer from now to the specified input time.
 *
 * Use to create a ticking countdown to display on ecommerce sites.
 */
export default function useCountdown(input: number | Date) {
  const now = Date.now()
  let when: number
  if (typeof input === 'number') {
    when = now + input
  } else {
    when = input.getTime()
  }
  const difference = when - now
  const [diff, setDiff] = useState<number>(difference)
  const intervalRef = useRef<number>()

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setDiff((d) => Math.max(Math.min(d - 1000, d), 0))
    }, 1000)
    return () => window.clearInterval(intervalRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (diff <= 0) {
      window.clearInterval(intervalRef.current)
    }
  }, [diff])

  const result = {
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    done: diff <= 0,
  }

  return result
}

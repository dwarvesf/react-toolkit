import { useEffect, useRef } from 'react'

/**
 * React hook that tracks previous value
 *
 * @param value the value to track
 */
export default function usePrevious<T>(value: T) {
  const valueRef = useRef<T>()

  useEffect(() => {
    valueRef.current = value
  }, [value])

  return valueRef.current as T
}

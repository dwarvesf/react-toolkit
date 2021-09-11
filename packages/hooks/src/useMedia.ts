import { isSSR } from '@dwarvesf/react-utils'
import { useCallback, useEffect, useState } from 'react'

export default function useMedia<T>(
  queries: string[],
  values: T[],
  defaultValue: T,
) {
  // Array containing a media query list for each query
  const mediaQueryLists = isSSR()
    ? []
    : queries.map((q) => window.matchMedia(q))

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches)
    return values?.[index] || defaultValue
    // only form the function once
    // eslint-disable-next-line
  }, [])

  const [value, setValue] = useState<T>(getValue)

  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue)
      mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler))
      return () =>
        mediaQueryLists.forEach((mql) =>
          mql.removeEventListener('change', handler),
        )
    },
    // ensures effect is only run on mount and unmount
    // eslint-disable-next-line
    [],
  )
  return value
}

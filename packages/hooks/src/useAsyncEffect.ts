import { useEffect } from 'react'

export default function useAsyncEffect<Data = any>(
  effect: (isMounted: () => boolean) => Data | Promise<Data>,
  destroy: null | ((result?: Data) => void),
  inputs: any[] = [],
) {
  useEffect(() => {
    let result: Data
    let mounted = true

    const maybePromise = effect(() => {
      return mounted
    })

    Promise.resolve(maybePromise).then((value) => {
      result = value
    })

    return () => {
      mounted = false

      if (typeof destroy === 'function') {
        destroy(result)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs)
}

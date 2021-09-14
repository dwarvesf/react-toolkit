import { useEffect } from 'react'

export default function useAsyncEffect<Data = any>(
  callback: (isMounted: () => boolean) => Data | Promise<Data>,
  onDestroyOrDependencies: null | ((result?: Data) => void) | any[] = [],
  dependencies: any[] = [],
) {
  let deps: any[]
  let destroy: (result?: Data) => void

  if (typeof onDestroyOrDependencies === 'function') {
    destroy = onDestroyOrDependencies
    deps = dependencies
  } else {
    deps = onDestroyOrDependencies || []
  }

  useEffect(() => {
    let result: Data
    let mounted = true

    const maybePromise = callback(() => {
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
  }, deps)
}

import { useState } from 'react'
import useAsyncEffect from './useAsyncEffect'

type Fetcher<Data> = (...args: any) => Data | Promise<Data>

export default function useFetch<Data = any, Error = any>(
  fetcher: Fetcher<Data>,
  deps: any[],
) {
  const [data, setData] = useState<Data | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const isFirstLoading = data === null && error === null
  const [isLoading, setIsLoading] = useState(true)

  useAsyncEffect(
    async () => {
      setIsLoading(true)
      try {
        const data = await fetcher()
        setData(data)
        setError(null)
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    },
    null,
    deps,
  )

  return { data, error, isFirstLoading, isLoading }
}

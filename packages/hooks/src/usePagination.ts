import { useCallback, useMemo, useState } from 'react'

type UsePaginationParamsCaseOne = {
  totalPage: number
}

type UsePaginationParamsCaseTwo = {
  data: Array<any>
}

type OneOf = UsePaginationParamsCaseOne | UsePaginationParamsCaseTwo

export type UsePaginationParams = OneOf & {
  pageSize: number
}

export type UsePaginationResult = {
  page: number
  // go to next page, optionally taking a boolean param to decide whether to go the last page immediately
  next: (toLast?: boolean) => void
  // back to previous page, optionally taking a boolean param to decide whether to go back to page 1 immediately
  back: (toFirst?: boolean) => void
  // jump to a specific page
  go: (page: number) => void
  hasNextPage: boolean
  hasPreviousPage: boolean
  totalPage: number
  pageSize: number
}

/**
 * React hook that provides method for manipulating pages
 *
 * @param pageSize Required, the page's size
 * @param data Optional if `totalPage` is present, an array of elements, this is used to calculate total page, will be ignored if `totalPage` is provided
 * @param totalPage Optional if `data` is present, if this is provided, `data` param is ignored
 */
export default function usePagination(
  params: UsePaginationParams,
): UsePaginationResult {
  const { pageSize } = params

  const totalPage =
    'totalPage' in params
      ? params.totalPage
      : Math.max(Math.ceil(params.data.length / pageSize), 1)

  const [page, setPage] = useState(1)

  const hasNextPage = useMemo(() => page + 1 <= totalPage, [page, totalPage])
  const hasPreviousPage = useMemo(() => page - 1 >= 1, [page])

  const next = useCallback(
    (toLast: boolean = false) => {
      if (hasNextPage) {
        if (toLast) {
          setPage(totalPage)
        } else {
          setPage((p) => p + 1)
        }
      }
    },
    [hasNextPage, totalPage],
  )

  const back = useCallback(
    (toFirst: boolean = false) => {
      if (hasPreviousPage) {
        if (toFirst) {
          setPage(1)
        } else {
          setPage((p) => p - 1)
        }
      }
    },
    [hasPreviousPage],
  )

  const go = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPage) {
        setPage(page)
      }
    },
    [totalPage],
  )

  return {
    page,
    pageSize,
    totalPage,
    hasNextPage,
    hasPreviousPage,
    next,
    back,
    go,
  }
}

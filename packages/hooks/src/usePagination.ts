import { useCallback, useEffect, useMemo, useState } from 'react'

export type UsePaginationParams = {
  pageSize: number
  totalPage: number
  page: number
}

export type UsePaginationResult = {
  totalPage: number
  pageSize: number
  currentPage: number
  // go to next page, optionally taking a boolean param to decide whether to go the last page immediately
  next: (toLast?: boolean) => void
  // back to previous page, optionally taking a boolean param to decide whether to go back to page 1 immediately
  back: (toFirst?: boolean) => void
  // jump to a specific page
  go: (page: number) => void
  hasNextPage: boolean
  hasPreviousPage: boolean
}

/**
 * React hook that provides method for manipulating pages
 *
 * @param pageSize Required
 * @param page Required
 * @param totalPage Required
 */
export default function usePagination(
  params: UsePaginationParams,
): UsePaginationResult {
  const { pageSize, totalPage, page: _page } = params

  const [page, setPage] = useState(_page)

  useEffect(() => {
    setPage(params.page)
  }, [params.page])

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
    currentPage: page,
    pageSize,
    totalPage,
    hasNextPage,
    hasPreviousPage,
    next,
    back,
    go,
  }
}

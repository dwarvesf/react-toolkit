import { renderHook, act } from '@testing-library/react-hooks'
import usePagination from '../usePagination'

test('usePagination runs correctly', () => {
  const { result } = renderHook(() =>
    usePagination({ pageSize: 2, totalPage: 6, page: 2 }),
  )

  expect(result.current.currentPage).toBe(2)
  expect(result.current.totalPage).toBe(6)
  expect(result.current.hasNextPage).toBe(true)
  expect(result.current.hasPreviousPage).toBe(true)

  act(() => {
    result.current.next()
  })

  expect(result.current.currentPage).toBe(3)

  act(() => {
    result.current.next()
  })

  expect(result.current.currentPage).toBe(4)
  expect(result.current.hasNextPage).toBe(true)
  expect(result.current.hasPreviousPage).toBe(true)

  act(() => {
    result.current.next(true)
  })

  expect(result.current.currentPage).toBe(6)

  act(() => {
    result.current.back(true)
  })

  expect(result.current.currentPage).toBe(1)

  act(() => {
    result.current.go(5)
  })
  expect(result.current.currentPage).toBe(5)
})

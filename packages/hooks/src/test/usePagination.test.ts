import { renderHook, act } from '@testing-library/react-hooks'
import usePagination from '../usePagination'

test('pageSize and data', () => {
  const { result } = renderHook(() =>
    usePagination({ pageSize: 2, data: [1, 2, 3, 4, 5, 6] }),
  )

  expect(result.current.page).toBe(1)
  expect(result.current.totalPage).toBe(3)
  expect(result.current.hasNextPage).toBe(true)
  expect(result.current.hasPreviousPage).toBe(false)

  act(() => {
    result.current.next()
  })

  expect(result.current.page).toBe(2)

  act(() => {
    result.current.next()
  })

  expect(result.current.page).toBe(3)
  expect(result.current.hasNextPage).toBe(false)
  expect(result.current.hasPreviousPage).toBe(true)

  act(() => {
    result.current.back(true)
  })

  expect(result.current.page).toBe(1)
})

test('pageSize and totalPage', () => {
  const { result } = renderHook(() =>
    usePagination({ pageSize: 2, totalPage: 6 }),
  )

  expect(result.current.page).toBe(1)
  expect(result.current.totalPage).toBe(6)
  expect(result.current.hasNextPage).toBe(true)
  expect(result.current.hasPreviousPage).toBe(false)

  act(() => {
    result.current.next()
  })

  expect(result.current.page).toBe(2)

  act(() => {
    result.current.next()
  })

  expect(result.current.page).toBe(3)
  expect(result.current.hasNextPage).toBe(true)
  expect(result.current.hasPreviousPage).toBe(true)

  act(() => {
    result.current.next(true)
  })

  expect(result.current.page).toBe(6)

  act(() => {
    result.current.back(true)
  })

  expect(result.current.page).toBe(1)

  act(() => {
    result.current.go(4)
  })
  expect(result.current.page).toBe(4)
})

import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import useConstant from '../useConstant'

describe('useConstant', () => {
  it('if the param is a state, it should always return the initial value', () => {
    const Component = () => {
      const [count, setCount] = useState(0)
      const constCount = useConstant(count)

      return (
        <div>
          <span data-testid="count">{count}</span>
          <span data-testid="const-count">{constCount}</span>
          <button
            data-testid="button"
            onClick={() => {
              setCount(count + 1)
            }}
          >
            Increment
          </button>
        </div>
      )
    }
    const { getByTestId } = render(<Component />)

    const count = getByTestId('count')
    const constCount = getByTestId('const-count')
    const button = getByTestId('button')

    expect(count.textContent).toBe('0')
    expect(constCount.textContent).toBe('0')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(count.textContent).toBe('2')
    expect(constCount.textContent).toBe('0')
  })

  it('if the param is a function, the function should call only one', () => {
    const spy = jest.fn()
    const Component = () => {
      const [count, setCount] = useState(0)
      const constCount = useConstant(() => {
        spy()
        return count
      })

      return (
        <div>
          <span data-testid="count">{count}</span>
          <span data-testid="const-count">{constCount}</span>
          <button
            data-testid="button"
            onClick={() => {
              setCount(count + 1)
            }}
          >
            Increment
          </button>
        </div>
      )
    }

    const { getByTestId } = render(<Component />)

    const count = getByTestId('count')
    const constCount = getByTestId('const-count')
    const button = getByTestId('button')

    expect(count.textContent).toBe('0')
    expect(constCount.textContent).toBe('0')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(count.textContent).toBe('2')
    expect(constCount.textContent).toBe('0')
    expect(spy).toBeCalledTimes(1)
  })
})

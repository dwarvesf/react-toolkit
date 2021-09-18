import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import usePrevious from '../usePrevious'

describe('usePrevious', () => {
  it('should work correctly', () => {
    function Component() {
      const [count, setCount] = useState(0)
      const prevCount = usePrevious(count)
      return (
        <div>
          <span data-testid="now">{count}</span>
          <span data-testid="before">{prevCount}</span>
          <button data-testid="button" onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
      )
    }
    const { getByTestId } = render(<Component />)

    const now = getByTestId('now')
    const before = getByTestId('before')
    const button = getByTestId('button')

    expect(now.textContent).toBe('0')
    expect(before.textContent).toBe('')

    fireEvent.click(button)

    expect(now.textContent).toBe('1')
    expect(before.textContent).toBe('0')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(now.textContent).toBe('3')
    expect(before.textContent).toBe('2')
  })
})

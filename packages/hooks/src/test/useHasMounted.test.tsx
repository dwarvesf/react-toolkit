import React from 'react'
import { render } from '@testing-library/react'
import { renderToStaticMarkup } from 'react-dom/server'
import useHasMounted from '../useHasMounted'

function Example() {
  const hasMounted = useHasMounted()
  return <div>{hasMounted ? 'mounted' : 'not mounted'}</div>
}

describe('useHasMounted', () => {
  it('exports a function', () => {
    expect(useHasMounted).toBeInstanceOf(Function)
  })

  it('returns false before mount', () => {
    const text = renderToStaticMarkup(<Example />)
    expect(text).toBe('<div>not mounted</div>')
  })

  it('returns true after mount', () => {
    const { container } = render(<Example />)
    const {textContent} = container
    expect(textContent).toBe('mounted')
  })
})

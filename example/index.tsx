import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useClipboard } from '@dwarvesf/react-hooks'

function App() {
  const { value, hasCopied, onCopy } = useClipboard('hello worldzz')
  return (
    <div data-test-id="zop">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>{value}</p>
        <button style={{ marginLeft: '5px' }} onClick={onCopy}>
          {hasCopied ? 'Copied' : 'Click to copy'}
        </button>
      </div>
      <input placeholder="Paste your copied content here" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

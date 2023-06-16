import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(prevCount => prevCount + 1)
  }

  function decrease() {
    setCount(prevCount => prevCount - 1)
  }

  function double() {
    setCount(prevCount => prevCount * 2)
  }

  function halve() {
    setCount(prevCount => prevCount / 2)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={double}>Double</button>
      <button onClick={halve}>Halve</button>
    </div>
  )
}

export default App;

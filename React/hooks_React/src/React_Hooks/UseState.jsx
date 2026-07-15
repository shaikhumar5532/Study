import { useState } from 'react'


function UseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Increase value: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase {count}
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease{count}
      </button>
    </>
  )
}

export default UseState

import React, { useState } from 'react'

const UseStateBasic = () => {
    const [count,setCount] = useState(0);

    const handleInput = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick={handleInput}>Click me to Increment</button>
    </div>
  )
}

export default UseStateBasic
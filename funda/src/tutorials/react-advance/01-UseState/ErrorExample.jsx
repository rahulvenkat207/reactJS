import React from 'react'

const ErrorExample = () => {
    let count = 0
    const handleInput = ()=>{
        count =count+1;
        console.log(count);
    }
  return (
    <div>
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick={handleInput}>Increment</button>

    </div>
  )
}

export default ErrorExample;
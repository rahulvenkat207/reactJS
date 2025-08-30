import React,{useState} from 'react'

const Rightway = () => {
    const [count,setCount] = useState(0);

    const handleInput = ()=>{
        setCount((count)=>{
            const newState = count +1;
            return newState;
        })
    }
  return (
    <div>
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick={handleInput}>Click me to Increment</button>
    </div>
  )
}

export default Rightway;
import React from 'react'
import { useState } from 'react'

function HookCounterTwo() {
    const initialCount=0;
    const[count,setCount]=useState(initialCount)
    
  return (
    <div>
      <h1>{count}</h1>
         <button onClick={()=>setCount(initialCount)}>Reset : </button>
        <button onClick={()=>setCount(count+1)}>Iecrement : </button>
        <button onClick={()=>setCount(count-1)}>Decrement : </button>
      
    </div>
  )
}

export default HookCounterTwo

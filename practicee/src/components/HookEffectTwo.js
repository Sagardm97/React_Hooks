import React from 'react'
import { useState,useEffect } from 'react'

function HookEffectTwo() {
const[count,setCount]=useState(0)

const[name,setName]=useState('')
useEffect(()=>{
    console.log("useeffect updation doc title");
document.title=(`changed to ${count}`)
},[count])


  return (
    <div>
        <input type="text" className="text"  value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>{count} times clicked</button>
      
    </div>
  )
}

export default HookEffectTwo

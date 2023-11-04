import React from 'react'
import { useState,useEffect } from 'react'

function HookEffectOne() {
const[count,setCount]=useState(0)

useEffect(()=>{
document.title=(`changed to ${count}`)
})


  return (
    <div>
        <button onClick={()=>setCount(count+1)}>{count} times clicked</button>
      
    </div>
  )
}

export default HookEffectOne

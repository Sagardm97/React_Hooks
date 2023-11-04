import React from 'react'
import { useState,useEffect } from 'react'

function MousePosition() {

    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const logMousePostion=e=>{
        console.log('mouse event called');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("useeffect called ");
        window.addEventListener('mousemove',logMousePostion)
    },[])   //we can mimic the componentDidMount by passing empty array thats it
  return (
    <div>
      setx:{x}  || sety:{y}
    </div>
  )
}

export default MousePosition

import React, { useState } from 'react'

function HookCounterFour() {
    const[items,setItems]=useState([])
    const addItem=()=>{
        setItems([...items,{
            value:Math.floor(Math.random()*100)
        }])
    }

  return (
    <div>
      <button  onClick={addItem}>add a number</button>
      <ul>
        {items.map(items=>
    <li key={items.id}>{items.value}</li>
        )}
      </ul>
    </div>
  )
}

export default HookCounterFour

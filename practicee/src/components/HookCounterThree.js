import React from 'react'
import { useState } from 'react'

function HookCounterThree() {
    const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <form >
    <input type="text" 
    className="text" 
    value={name.firstName}
    onChange={e=>setName({...name,firstName:e.target.value})}/>

     <input type="text" 
    className="text" 
    value={name.lastName}
    onChange={e=>setName({...name,lastName:e.target.value})}/>


    <h2>firstName:{name.firstName}</h2>
    <h2>lastName;{name.lastName}</h2>
    <h2>{JSON.stringify(name)}</h2>
        </form>
      
    </div>
  )
}

export default HookCounterThree

import React from 'react'
import { userContext } from './UseContext'

function componentF() {
    const user=userContext(userContext)
  return (
    <div>
        <userContext/>
      {user}
    </div>
  )
}

export default componentF

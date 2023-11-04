import React, { Component } from 'react'

class greet extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
  }
  
  render() {
    return ( this.state.isLoggedIn ?(
      <div>hello sagar</div>
    ):
        <div>helloo aishu</div>

      
    )
  }
}

export default greet

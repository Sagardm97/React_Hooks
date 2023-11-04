import React, { Component } from 'react'

export class map extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'sagar'
    }
    console.log('Lifecycle A constructor');
  }

  //
  static getDerivedStateFromProps(props,state){
console.log("getDerivedStateFromProps called");
return null
  }
  //
componentDidMount(){
  console.log("did mount called");
}
  
  render() {
    console.log("render method called");
    return (
      <div>
        render method
        
      </div>
     
    )
  }
}

export default map


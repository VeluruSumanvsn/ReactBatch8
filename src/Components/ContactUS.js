import React from "react";

class ContactUS extends React.Component {
   constructor(){
    super();
    this.state={
        value: 0
    }
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
   }
   Increment(){
    this.setState({
        value: this.state.value + 1
    })
   }
   Decrement(){
    this.setState({
        value: this.state.value -1
    })
   }
    render(){
        return(
            <div>
               <h1>This is Contact us component</h1>
               <h2>example of counter by using Class Based Component</h2>
               <h2>{this.state.value}</h2>
               <button onClick={this.Increment}>+</button>
               <button onClick={this.Decrement}>-</button>
            </div>
        )
    }
}
export default ContactUS
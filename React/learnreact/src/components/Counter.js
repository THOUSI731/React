import React,{ Component } from "react";

class Counter extends Component{
     state = {
          counter:0
     };
     onIncrement = () =>{
          this.setState({
               counter : this.state.counter + 1
          })
     };
     onDecrement = () => {
          if (this.state.counter > 0){
               this.setState({   
                    counter : this.state.counter - 1
               })
          }else{
               alert("Counter can't be zero")
          }
     }
     render(){
          return(
               <div>
                    <h2>Counter Component</h2>
                    <h4>{this.state.counter}</h4>
                    <button onClick={this.onIncrement}>+</button>
                    <button onClick={this.onDecrement}>-</button>
               </div>
          )
     }
}

export default Counter;
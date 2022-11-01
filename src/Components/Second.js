import React, { useState } from "react";

const Second = () =>{
    const[value, setValue] = useState(0);
    function Increment(){
        setValue(value + 1)
    }
    function decrement(){
        setValue(value - 1)
    }
    return(
        <div className="counter">
          <h2>example of counter by using Functional Based Component</h2>
            <h2>{value}</h2>
            <button onClick={Increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Second

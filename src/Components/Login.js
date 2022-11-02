import React, { useState } from "react";

const Login = () =>{
    const[value, setValue] = useState(0);
    function Increment(){
        setValue(value + 1)
    }
    function decrement(){
        setValue(value - 1)
    }
    return(
        <div className="counter">
          <h2>harisha page</h2>
            <h2>{value}</h2>
            <button onClick={Increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Login

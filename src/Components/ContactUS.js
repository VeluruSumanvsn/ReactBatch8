import React, { useState } from "react";

const Todo = () =>{
    const[task, setTask] = useState("");
    const[todos, setTodos] = useState([]);

    const changeHandler = (e) =>{
        setTask(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        const newTodos = [...todos, task];
        setTodos(newTodos);
        setTask("");
    }
    return(
        <React.Fragment>
            <form onSubmit={submitHandler} className="form">
                <input type="text" onChange={changeHandler} value={task}/>
                <input type="submit" value="Add"/>
            </form>
            <ul>
                {todos.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}
export default Todo;

import React, { useEffect, useState } from 'react';
import '../App.css';

const RwebDB = () => {

    const [data1, setData] = useState({
    name: '',
    age: '',
  });

  const changeHandler = e => {
    setData({ ...data1, [e.target.name]: e.target.value });
  }
  const submitHandler = e => {
    e.preventDefault(); 
   fetch('https://ravi-api-ccffa-default-rtdb.firebaseio.com/data1.json',
   {method : 'POST',
   body:JSON.stringify(data1),
   headers: {"Content-Type" : "application/json"}
}
   ).then (res => alert('Data Posted')).catch(err => console.log(err))
  }

  return (
<div>
    <div class = "Rweblogin">

        <form onSubmit={submitHandler}>
          <label >Name</label> <br />
          <input type="text" name="name" onChange={changeHandler} /><br />
          <label>Age :</label> <br />
          <input type="text" age="age" onChange={changeHandler} /><br />
          <input type="submit" value="Post data" /><br />
        </form>
    </div>
    </div>
  );
};

export default RwebDB;


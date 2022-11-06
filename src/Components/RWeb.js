import React, { useEffect, useState } from 'react';
import '../App.css';

const Rweb = () => {

    const [data1,setData1] = useState([]);
    useEffect (() => {
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json')
        .then(response => response.json())
        .then(json => setData1(json.items))
    },[])
//API URL: https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const submitHandler = e => {
    e.preventDefault(); 
    if(data.password.length<5){
        alert('provide password length >5')
    } else{
        console.log(data);
    }
  }

  return (
<div>
    <div class = "Rweblogin">

    <div>
        {data1.map((item) => <p> {item.name} </p>)}
    </div>
      <center >
        <form onSubmit={submitHandler}>
          <label style ={{color: 'blue', 'fontFamily': 'Tahoma'}}>E-mail:</label> <br />
          <input type="text" name="email" onChange={changeHandler} /><br />
          <label>Password :</label> <br />
          <input type="Password" name="password" onChange={changeHandler} /><br />
          <input type="submit" value="Login" className = 'btn btn-primary'/><br />
        </form>
      </center>
    </div>
    </div>
  );
};

export default Rweb;


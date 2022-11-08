import React, { useState } from "react";
import "../Styles/AboutUS.css";

function Dashboard() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errormessage, setErrorMessage] = useState({});
  const dummyData = [
    {
      username: "Admin",
      password: "admin",
    },
  ];
  const errorData = {
    uname: "Invalid UserName",
    pass: "Invalid Password"
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    var { uname, pass } = document.forms[0];
    const userData = dummyData.find((user) => user.username === uname.value);
    if(userData){
      if(userData.password !== pass.value){
        setErrorMessage({name:"pass", message: errorData.pass});
      }
      else{
        setIsSubmitted(true)
      }
    }
    else{
      setErrorMessage({name:"uname", message: errorData.uname});
    }
  };
  const renderMessage = (name) =>
    name === errormessage.name && (
      <div className="error">{errormessage.message}</div>
    )
  
  const renderData = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-item">
          <label>User Name</label>
          <input type="text" name="uname" required />
          {renderMessage("uname")}
        </div>
        <div className="input-item">
          <label>Password</label>
          <input type="password" name="pass" required />
          {renderMessage("pass")}
        </div>
        <div className="button-item">
          <input className="button" type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <div className="app">
      {isSubmitted ? <div>Successfull Logged In</div> : renderData}
    </div>
  );
}
export default Dashboard;

import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from '../Images/Flipkart-Logo.png'

const dummyUser = {
  id: 1,
  username: "Admin",
  password: "admin123",
};

const INITIALSTATE = { username: "", password: "" };

const Register = () => {
  
  let navigate = useNavigate();

  const [user, setUser] = useState(INITIALSTATE);
  const [error, setError] = useState(INITIALSTATE);

  const loginHandler = (event) => {
    event.preventDefault();
    if (dummyUser.username !== user.username) {
      setError((prevError) => {
        return { ...prevError, username: "Invalid Username" };
      });
    } else if (dummyUser.password !== user.password) {
      setError((prevError) => {
        return { ...prevError, password: "Invalid Password" };
      });
    } else {
      navigate("/");
    }

    if (dummyUser.username === user.username) {
      setError((prevError) => {
        return { ...prevError, username: "" };
      });
    }
    if (dummyUser.password === user.password) {
      setError((prevError) => {
        return { ...prevError, password: "" };
      });
    }
    setUser(INITIALSTATE);
  };

  const userNameHandler = (event) => {
    setUser((prevUser) => {
      return { ...prevUser, username: event.target.value };
    });
  };
  const passwordHandler = (event) => {
    setUser((prevUser) => {
      return { ...prevUser, password: event.target.value };
    });
  };

  return (
    <Fragment>
      <div className="container">
        <div>
            <img className="flipkart-logo" src={Image} alt="flipkart logo" />
        </div>
       
        <form onSubmit={(event) => loginHandler(event)}>
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(event) => userNameHandler(event)}
          />
          <p className="error">{error.username}</p>
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(event) => passwordHandler(event)}
          />
          <p className="error">{error.password}</p>
          <button className="btn">Login</button>
        </form>
        
      </div>
    </Fragment>
  );
};

export default Register;
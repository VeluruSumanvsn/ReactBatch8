import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Top_Offers1 from "../Images/Top_Offers.webp";
import Home1 from "../Images/Home.webp";
import Wheelers2 from "../Images/2-Wheelers.webp";
import Appliances1 from "../Images/Appliances.webp";
import Beauty_Toys_More1 from "../Images/Beauty_Toys_More.webp";
import Electronics1 from "../Images/Electronics.webp";
import Fashion1 from "../Images/Fashion.webp";
import Grocery1 from "../Images/Grocery.webp";
import Mobiles1 from "../Images/Mobiles.webp";
import Travel1 from "../Images/Travel.webp";
import "../HomeStyles/Home.css";
import "../HomeStyles/HomeVariables.scss";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  });
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/todos")
      .then((response) => response.json())
      .then((json) => setData1(json));
  });
  const [clicked, setClicked] = useState(0);
  function Multply() {
    setClicked((clicked + 1) * 2);
  }
  function devide() {
    setClicked((clicked + 1) / 2);
  }
  const compStyle = {
    backgroundColor: "green",
    fontSize: "12px",
  };

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };

  return (
    //     <React.Fragment>
    //     <form onSubmit={submitHandler} className="form">
    //         <input type="text" onChange={changeHandler} value={task}/>
    //         <input type="submit" value="Add"/>
    //     </form>
    //     <ul>
    //         {todos.map((item, index) =>(
    //             <li key={index}>{item}</li>
    //         ))}
    //     </ul>
    // </React.Fragment>

    <div>
      <Link to="/dashboard">Dashboard</Link>
      <div class=" search-container bg-primary text-white d-flex flex-fill w-100">
        <em>
          <h3>Flipkart</h3>
        </em>
        <em>
          <span>Explore Plus</span>
        </em>
        <input type="text" placeholder="Search.." name="search" />
        <button type="button" class="btn btn-secondary ">
          Login{" "}
        </button>
        <button type="button" class="btn btn-warning ">
          Become a Seller{" "}
        </button>
        <button type="button" class="btn btn-info">
          More{" "}
        </button>
        <button type="button" class="btn btn-success">
          Cart{" "}
        </button>
      </div>

      <div class="row m-0">
        <div class="col-md-1 rounded">
          <img className="Top_Offers" src={Top_Offers1} alt="Top_Offers" />{" "}
          Top_Offers
        </div>
        <div class="col-sm-1 rounded">
          <img className="Home" src={Home1} alt="Home" />
          Home{" "}
        </div>
        <div class="col-sm-1 rounded">
          <img className="2-Wheelers" src={Wheelers2} alt="Wheelers2" />
          2-Wheelers{" "}
        </div>
        <div class="col-sm-1">
          <img className="Appliances" src={Appliances1} alt="Appliances" />{" "}
          Appliances
        </div>
        <div class="col-sm-1">
          <img className="Electronics" src={Electronics1} alt="Electronics" />{" "}
          Electronics
        </div>
        <div class="col-sm-1">
          <img className="Fashion" src={Fashion1} alt="Fashion" /> Fashion
        </div>
        <div class="col-sm-1">
          <img className="Grocery" src={Grocery1} alt="Grocery" /> Grocery
        </div>
        <div class="col-sm-1">
          <img className="Mobiles" src={Mobiles1} alt="Mobiles" /> Mobiles
        </div>
        <div class="col-sm-1">
          <img className="Travel" src={Travel1} alt="Travel" /> Travel{" "}
        </div>
      </div>
      <div className="counting">
        <span>{clicked}</span>
        <button onClick={Multply}>
          <img className="Electronics" src={Electronics1} alt="Electronics" />{" "}
          Electronics
        </button>
        <button onClick={Multply}>
          <img className="Mobiles" src={Mobiles1} alt="Mobiles" /> Mobiles
        </button>

        <button onClick={devide}>-</button>
      </div>

      <div className="counting">
        <span>{clicked}</span>
        <button onClick={Multply}>
          <div>
            {data.length > 0 ? (
              <div className="row m-0">
                {data.map((albums) => (
                  <div className="col-md-1 w-100">
                    <span> {albums.id} ,</span>
                    <span>{albums.name} ,</span>
                    <span className="email" style={compStyle}>
                      {albums.email} ,
                    </span>
                    <span>{albums.gender} ,</span>
                    <span>{albums.status} ,</span>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </button>

        <button onClick={devide}>-</button>
      </div>

      <div>
        {data1.length > 0 ? (
          <div className="row m-0">
            {data1.map((todos) => (
              <div className="col-md-1 w-100">
                <span> {todos.id} ,</span>
                <span>{todos.user_id} ,</span>
                <span>{todos.title} ,</span>
                <span className="due_on">{todos.due_on} ,</span>
                <span className="email todos" style={compStyle}>
                  {todos.status} ,
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default Homepage;

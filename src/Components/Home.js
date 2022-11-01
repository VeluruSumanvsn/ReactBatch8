import React, { useState } from "react";
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

const Homepage = () =>{
    const[clicked, setClicked] = useState(0);
    function Multply(){
        setClicked((clicked+1)*2)
    }
    function devide(){
      setClicked((clicked+1) / 2)
    }
  return (
    <div>
      <div class=" search-container bg-primary text-white d-flex flex-fill "> 
          <em><h3 >Flipkart</h3></em> 
          <em><span>Explore Plus</span></em>
          <input  type="text" placeholder="Search.." name="search"/>
          <button type="button" class="btn btn-secondary ">Login </button>
          <button type="button" class="btn btn-warning ">Become a Seller </button>
          <button type="button" class="btn btn-info">More </button>
          <button type="button" class="btn btn-success">Cart </button>
      </div>

      <div class ="row" >
          <div class = "col-sm-1 rounded" >
          <img className = "Top_Offers" src={Top_Offers1} alt = "Top_Offers" /> Top_Offers</div> 
          <div class = "col-sm-1 rounded" >
          <img className = "Home" src={Home1} alt = "Home" />Home </div>
          <div class = "col-sm-1 rounded" >
            <img className = "2-Wheelers" src={Wheelers2} alt = "Wheelers2" />2-Wheelers </div>
          <div class = "col-sm-1" >
            <img className = "Appliances" src={Appliances1} alt = "Appliances" /> Appliances</div>
          <div class = "col-sm-1" >
            <img className = "Beauty_Toys_More" src={Beauty_Toys_More1} alt = "Beauty_Toys_More" /> Beauty_Toys_More</div>
          <div class = "col-sm-1" >
            <img className = "Electronics" src={Electronics1} alt = "Electronics" /> Electronics</div>
          <div class = "col-sm-1" >
            <img className = "Fashion" src={Fashion1} alt = "Fashion" /> Fashion</div>
          <div class = "col-sm-1" >
            <img className = "Grocery" src={Grocery1} alt = "Grocery" /> Grocery</div>
          <div class = "col-sm-1" >
            <img className = "Mobiles" src={Mobiles1} alt = "Mobiles" /> Mobiles</div>
          <div class = "col-sm-1" >
            <img className = "Travel" src={Travel1} alt = "Travel" /> Travel </div>
      </div>
      <div className="counting">
            <span>{clicked}</span>
            <button onClick={Multply}>
              <img className = "Electronics" src={Electronics1} alt = "Electronics" /> Electronics</button>
            <button onClick={Multply}>
              <img className = "Fashion" src={Fashion1} alt = "Fashion" /> Fashion</button>
            <button onClick={Multply}>
              <img className = "Grocery" src={Grocery1} alt = "Grocery" /> Grocery</button>
            <button onClick={Multply}>
              <img className = "Mobiles" src={Mobiles1} alt = "Mobiles" /> Mobiles</button>
            <button onClick={Multply}> <img className = "Travel" src={Travel1} alt = "Travel" /> Travel</button>
            
            <button onClick={devide}>-</button>
        </div>

      <div>
        <h1>Hello this is Ravi</h1>
        <h2>This is modified by Ravi header2</h2>
        <h3>This is modified by Ravi header3</h3>
        <h4> This is Modified by ravi header4</h4>
      </div>
    </div>
  );
}
export default Homepage;

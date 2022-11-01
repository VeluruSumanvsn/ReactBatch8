import React from "react";
import {Image} from '../Images/Flipkart-Logo.png';
import {Top_Offers1} from "../Images/Top_Offers.webp";


function Home() {
  //js
  return (
    <div className="bg-primary">
          <img className="flipkart-logo" src={Image} alt="flipkart logo" />
          <img className = "Top_Offers" src={Top_Offers1} alt = "Top_Offers" />
    
      <div>
        <h1>Hello vdsbvjbdsknvoikjugdskngkhion zmjcvhsvbkc</h1>
        <h2>This is modified by Ravi header2</h2>
        <h3>This is modified by Ravi header3</h3>
        <h4> This is Modified by ravi header4</h4>
      </div>
    </div>
  );
};
export default Home;

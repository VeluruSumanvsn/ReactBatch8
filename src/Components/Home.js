import React from "react";
import Image from '../Images/Flipkart-Logo.png';
import Top_Offers1 from "../Images/Top_Offers.webp";
import Home1 from "../Images/Home.webp";
import Wheelers2 from "../Images/2-Wheelers.webp";
import Appliances1 from "../Images/Appliances.webp";
import Beauty_Toys_More from "../Images/Beauty_Toys_More.webp";
import Electronics1 from "../Images/Electronics.webp";
import Fashion1 from "../Images/Fashion.webp";
import Grocery1 from "../Images/Grocery.webp";
import Mobiles1 from "../Images/Mobiles.webp";
import Travel1 from "../Images/Travel.webp";

function Home() {
  //js
  return (
    <div className="bg-primary">
          <img className="flipkart-logo" src={Image} alt="flipkart logo" />
          <img className = "Top_Offers" src={Top_Offers1} alt = "Top_Offers" />
          <img className = "Home" src={Top_Offers1} alt = "Home" />
          <div> <img className = "Wheelers2" src={Top_Offers1} alt = "Wheelers2" />
          <img className = "Appliances" src={Top_Offers1} alt = "Appliances"> </img>
          <img className = "Beauty_Toys_More" src={Top_Offers1} alt = "Beauty_Toys_More" />
          <img className = "Electronics" src={Top_Offers1} alt = "Electronics" />
          <img className = "Fashion" src={Top_Offers1} alt = "Fashion" />
          <img className = "Grocery" src={Top_Offers1} alt = "Grocery" />
          <img className = "Mobiles" src={Top_Offers1} alt = "Mobiles" />
          <img className = "Travel" src={Top_Offers1} alt = "Travel" />
      </div>
      <div>
        <h1>Hello vdsbvjbdsknvoikjugdskngkhion zmjcvhsvbkc</h1>
        <h2>This is modified by Ravi header2</h2>
        <h3>This is modified by Ravi header3</h3>
        <h4> This is Modified by ravi header4</h4>
      </div>
    </div>
  );
}
export default Home;

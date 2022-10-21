import React from "react";
import Image from '../Images/Flipkart-Logo.png'

const Header = () =>{
    return(
        <div>
            <img className="flipkart-logo" src={Image} alt="flipkart logo" />
        </div>
    )
}
export default Header
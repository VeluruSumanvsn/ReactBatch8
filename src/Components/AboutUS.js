import React, { useEffect, useState } from "react";

const AboutUS = () =>{
   const[data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) =>response.json())
        .then((json)=>setData(json))
    })
    return(
        <div>
            {data.map((i) =><h2>{i.name} {i.username}</h2>)}
        </div>
    )
}
export default AboutUS

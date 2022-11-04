import React, { useEffect, useState } from "react";
import '../Styles/AboutUS.css';
import '../Styles/style.scss';

const AboutUS = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json));
  });
  const compStyle ={
    backgroundColor: "red",
    fontSize:"10px"
  }
  return (
    <div>
      {data.length > 0 ? (
        <div className="row m-0">
          {data.map((item) => (
            <div className="col-md-3">
              <img src={item.thumbnailUrl} className="w-100"/>
              <div className="title hello" style={compStyle}>{item.title}</div>
              <div>{item.id}</div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default AboutUS;

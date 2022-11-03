import React, { useEffect, useState } from "react";

const AboutUS = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json));
  });
  return (
    <div>
      {data.length > 0 ? (
        <div className="row m-0">
          {data.map((item) => (
            <div className="col-md-4">
              <img src={item.thumbnailUrl} className="w-100"/>
              <div>{item.title}</div>
              <div>{item.id}</div>
            </div>
          ))}
        </div>) : (<div></div>
)}
    </div>
  );
};
export default AboutUS;

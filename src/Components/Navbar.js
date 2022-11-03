import React, { useContext } from "react";
import { store } from "../App";
const Navbar = () => {
  const [data, setData] = useContext(store);
  return (
    <div className="navbar">
      <h2>{data}</h2>
    </div>
  );
};
export default Navbar;

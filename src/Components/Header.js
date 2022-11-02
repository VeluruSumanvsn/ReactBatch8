import React from "react";

const Header = () => {
  return (
    <div>
      <form>
        <label>User Name</label>
        <input type="text" placeholder="Username"/>
        <label>Password</label>
        <input type="password" placeholder="Password"/>
        <input type="button" value="submit" />
      </form>
    </div>
  );
};
export default Header;

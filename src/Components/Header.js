import React from "react";

const Header = () => {
  return (
    <div>
      <form>
        <label>User Name</label>
        <input type="text" placeholder="Username"/>
        <label>Password</label>
        <input type="password" placeholder="Password"/>
        <label>Re-Password</label>
        <input type="password" placeholder="Username"/>
        <input type="button" value="submit" />
      </form>

    </div>
  );
};
export default Header;

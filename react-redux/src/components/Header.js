import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>React-Redux API</h1>
      </div>
      <div className="links-container">
        <NavLink to="/">GitHub User API</NavLink>
        <NavLink to="/trk">TRONALD and KANYE</NavLink>
      </div>
    </header>
  );
};

export default Header;

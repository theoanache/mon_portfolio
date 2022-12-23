import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="NavBar">
        <nav className="Nav">
          <ul className="Menu">
            <li>
              <NavLink to="/" activeClassName="Home">
                <font color="#F3BD1D">01</font>&nbsp; A propos
              </NavLink>
              <div className="Ligne"></div>
            </li>
            <div></div>
            <li>
              <a href="#Projects" className="Projects">
                <font color="#F3BD1D">02</font>&nbsp; Projets
              </a>
              {/* <NavLink to="/" activeClassName="Projects">
                <font color="#F3BD1D">02</font>&nbsp; Projets
              </NavLink> */}
              <div className="Ligne"></div>
            </li>
            <div></div>
            <li>
              <a href="#Contact" ClassName="Contact">
                <font color="#F3BD1D">03</font>&nbsp; Contact{" "}
              </a>
              <div className="Ligne"></div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

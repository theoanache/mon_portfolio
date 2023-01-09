import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
    return (
      <div className="pagesError">
        <h1 className="error404">ERROR 404</h1>
        <p>cette page n'existe pas !</p>
        <NavLink to="/">
          <button type="button" className="Button">Return to Home</button>
        </NavLink>
      </div>
    );
};

export default Error;
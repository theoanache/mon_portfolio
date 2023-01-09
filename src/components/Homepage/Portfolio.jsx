import React from "react";
import Book from "../../assets/portfolio_motivation.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <img className="portfolio" src={Book} alt="portfolio anache théo" />
    </div>
  );
};

export default Portfolio;

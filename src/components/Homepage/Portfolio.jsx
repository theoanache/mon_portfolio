import React from 'react';
import Book from "../../assets/Book-motivation.png";
import './Portfolio.css';

const Portfolio = () => {

    return (
      <div className='portfolioContainer'>
        <img className="portfolio" src={Book} alt="portfolio anache théo" />
      </div>
    );
};

export default Portfolio;
import React from "react";
import cv from "../../assets/CV-AnacheTheook.jpg";
import "./Datacv.css";

const Datacv = () => {
  return (
    <div className="cvContainer">
      <img className="cv" src={cv} alt="cv anache theo" />
    </div>
  );
};

export default Datacv;

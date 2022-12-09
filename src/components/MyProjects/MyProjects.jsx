import React from "react";
import "./MyProjects.css";
import { useParams } from "react-router-dom/dist";
import Projets from "../Homepage/Tools/Data";
import Navbar from "../Navbar";

const MyProjects = () => {
  const { id } = useParams();

  return (
    <div className="Navbar">
      <Navbar />
      <div className="PageProjects">
        <div className="background"></div>
        <div className="LeftPart">
          <h2> {Projets[id].title}</h2>
          <p> {Projets[id].description}</p>
          <div className="LogicielLiens">
            <div className="LogicielsPart">
              <h2> Logiciels </h2>
              <div className="Logiciels">
                <img
                  className="Logiciel"
                  src={Projets[id].logiciel1}
                  alt="Logiciel1"
                />
              </div>
            </div>
            <div className="LogicielsPart">
              <h2> Liens </h2>
              <div className="Logiciels">
                <img className="Logiciel" src={Projets[id].Link1} alt="Link1" />
              </div>
            </div>
          </div>
        </div>
        <div className="RightPart">
          <img
            className="ImgProjet"
            src={Projets[id].img}
            alt={Projets[id].title}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;

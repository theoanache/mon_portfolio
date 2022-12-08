import React from "react";
import "./MyProjects.css";

const MyProjects = () => {
    const Projet = [
      {
        id:1,
        title: "Wild Trattoria",
        description: "blablabla",
        logiciel1: "JS",
        logiciel2: "figma",
        logiciel3: "null",
        Link1: "github",
        Links2: "web",
      }
    ];
    
    return (
      <div className="PageProjects">
        <div className="Left">
          <h2 className="ProjetTitle"> {Projet.title}</h2>
          <p>
            {Projet.description}
          </p>
          <div className="LogicielsLinks">
            <div className="Logiciels">
              <h2>Logiciels</h2>
              <div className="PictoLogiciel">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            <div className="Links">
              <h2>Liens</h2>
              <div className="PictoLinks">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Rigth">
          <div>image project</div>
        </div>
      </div>
    );
};

export default MyProjects;
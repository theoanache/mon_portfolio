import React from "react";
import "./MyProjects.css";

const MyProjects = () => {
    const Projet = [
      {
        id: 1,
        title: "Wild Trattoria",
        img: "../../assets/Projet_wilda-trattoria.jpg",
        description: "blablabla",
        logiciel1: "../../assets/JS.png",
        logiciel2: "figma",
        logiciel3: "null",
        Link1: "../../assets/3D-stitch.jpg",
        Links2: "web",
      },
      {
        id: 2,
        title: "Wild Trattoria",
        img: "../../assets/Projet_wilda-trattoria.jpg",
        description: "blablabla",
        logiciel1: "../../assets/JS.png",
        logiciel2: "figma",
        logiciel3: "null",
        Link1: "../../assets/3D-stitch.jpg",
        Links2: "web",
      },
    ];
    
    return (
      <div className="PageProjects">
        <div className="Left">
          <h2 className="ProjetTitle"> {Projet[0].title}</h2>
          <p>{Projet[0].description}</p>
          <div className="LogicielsLinks">
            <div className="Logiciels">
              <h2>Logiciels</h2>
              <div className="PictoLogiciel">
                <img src="../../assets/JS.png" alt={Projet[0].title} />
                <img src="" alt="" />
              </div>
            </div>
            <div className="Links">
              <h2>Liens</h2>
              <div className="PictoLinks">
                <img src={Projet[0].Link1} alt="" />
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
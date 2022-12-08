import React from "react";
import "./Projects.css";
import { NavLink } from "react-router-dom";
import projet1 from "../../assets/Projet_wilda-trattoria.jpg";
import projet2 from "../../assets/carte-visite-lupa.jpg";
import projet3 from "../../assets/logo-enah-consulting.jpg";
import projet4 from "../../assets/casque-motoblouz.jpg";
import projet5 from "../../assets/roll-up-acucar.jpg";
import projet6 from "../../assets/affiche-kizomba-mayotte.jpg";
import projet7 from "../../assets/logo-bachata-loca.jpg";
import projet8 from "../../assets/Projet_3D-escalator.jpg";
import projet9 from "../../assets/ensemble-site-wild-festival.jpg";
import projet10 from "../../assets/anim-meca.jpg";
import projet11 from "../../assets/3D-stitch.jpg";
import projet12 from "../../assets/reversal.jpg";

const Projects = () => {


  return (
    <div id="Projects" className="container">
      <div className="ContainerChildren">
        <div className="TextExemple">
          <p>
            Voici quelques exemples de projets réalisés, n’hésitez pas à aller les
            voir
          </p>
          <NavLink to="/portfolio" target="_blank">
            <button type="button" className="ButtonVoirPlus">
              Voir le book
            </button>
          </NavLink>
        </div>
        <div className="ProjectsFlex">
          <img className="ImgProject" src={projet1} alt={projet1} />
          <img className="ImgProject" src={projet2} alt={projet2} />
          <img className="ImgProject" src={projet3} alt={projet3} />
          <img className="ImgProject" src={projet4} alt={projet4} />
          <img className="ImgProject" src={projet5} alt={projet5} />
          <img className="ImgProject" src={projet6} alt={projet6} />
          <img className="ImgProject" src={projet7} alt={projet7} />
          <img className="ImgProject" src={projet8} alt={projet8} />
          <img className="ImgProject" src={projet9} alt={projet9} />
          <img className="ImgProject" src={projet10} alt={projet10} />
          <img className="ImgProject" src={projet11} alt={projet11} />
          <img className="ImgProject" src={projet12} alt={projet12} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

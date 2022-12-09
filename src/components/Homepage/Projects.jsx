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
import Projet from "./Tools/Data";

const Projects = () => {
  return (
    <div id="Projects" className="container">
      <div className="ContainerChildren">
        <div className="TextExemple">
          <p>
            Voici quelques exemples de projets réalisés, n’hésitez pas à aller
            les voir en cliquant sur le projet de votre choix
          </p>
          <NavLink to="/portfolio" target="_blank">
            <button type="button" className="ButtonVoirPlus">
              Voir le book
            </button>
          </NavLink>
        </div>
        <div className="ProjectsFlex">
          {Projet.map((element) => (
            <NavLink to={`/projet/${element.id - 1}`}>
              <img
                className="ImgProject"
                src={element.img}
                alt={element.title}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

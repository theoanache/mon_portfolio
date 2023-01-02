import React from "react";
import "./Projects.css";
import { NavLink } from "react-router-dom";
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

import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div id="Top">
      <div className="Container">
        <div className="About">
          <h1>Bonjour,</h1>
          <h1>
            Je suis <font color="#F3BD1D">Théo</font> Anache,
          </h1>
          <h1>Développeur Full-Stack</h1>
        </div>
      </div>
      <div className="Spline">
        <iframe
          src="https://my.spline.design/legocopy-0fd63347bea07f720753dc079b355160/"
          frameborder="0"
          width="100%"
          height="100%"
          title="lego3D"
        ></iframe>
      </div>
      <div className="Scroll"></div>
      <div className="APropos">
        <h2> A Propos</h2>
        <p id="Description">
          Bonjour ! Aprés avoir expérimenté plusieurs types de métiers, j’ai
          décidé d’entreprendre une reconversion professionnelle dans un domaine
          alliant créativité et informatique: le Développement Web. Actuellement
          en formation développeur full-stack à la Wild Code School de Bordeaux
          depuis Septembre 2022, je recherche un stage/emploi en entreprise à
          partir de février 2023.
        </p>

        <NavLink to="/cv" target="_blank">
          <button type="button" className="ButtonCv">
            Voir mon CV
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;

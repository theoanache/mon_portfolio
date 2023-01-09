import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import ensemble from "../assets/ensemble-projets.png";

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
      <div className="ContainerSkills">
        <div className="SkillsText">
          <h2>
            <font color="#F3BD1D">Compétences</font> et logiciels
          </h2>
          <p>
            Etant attiré par l'univers 3D, c'est avec évidence que j'ai cherchée
            à allier mes connaissances obtenues au sein de l'école Pôle 3D avec
            le développement web. Vous trouvez un aperçu des différents
            logiciels que j'ai pu utiliser.
          </p>
          <h3>Soft Skills</h3>
          <ul>
            <li> Graphisme : Photoshop, illustrator </li>
            <li> Systèmes : Git, Github, Windows, Mac </li>
            <li> 3D : blender, splines </li>
            <li> Autres : Figma, trello </li>
          </ul>
        </div>
        <div className="SkillsAnimation">
          <iframe
            src="https://my.spline.design/skills-5ea1bd3ba43f5fb28f3955b7d6ae02a5/"
            frameborder="0"
            width="100%"
            height="100%"
            title="skillsMap"
          ></iframe>
        </div>
      </div>
      <div className="illustration">
        <div className="Macbook">
          <img className="Macbook" src={ensemble} alt="illustration-projet" />
        </div>
        <div className="SoftSkills">
          <h2> Plateforme Serenity</h2>
          <p>
            Projet Wild Code School 3 en cours - En équipe. Création d'une
            plate-forme santé.Le projet sera réalisé en 2,5 mois en utilisant la
            méthode Agile SCRUM. Une présentation du projet sera faite au terme
            des 2,5 mois devant un jury, des entreprises, ainsi que les
            différentes personnes de la Wild Code School de Bordeaux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

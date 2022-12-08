import React from "react";
import "./Skills.css";
import macbook from "../../assets/MacBook-Pro-16-recadrage.png";
import soft from "../assets/picto-soft_skills.jpg.png";

const Skills = () => {
  return (
    <div>
      <div className="ContainerSkills">
        <div className="SkillsText">
          <h2>
            <font color="#F3BD1D">Compétences</font> et logiciels
          </h2>
          <p>
            Etant attiré par l'univers 3D, c'est avec évidence que j'ai cherchée
            à allier mes connaissances obtenues au sein de l'école Pôle 3D avec
            le développement web. Vous trouver un aperçu des différents
            logiciels que j'ai pu utiliser.
          </p>
        </div>
        <div className="SkillsAnimation">
          <iframe
            src="https://my.spline.design/skills-5ea1bd3ba43f5fb28f3955b7d6ae02a5/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div className="cacheButton"></div>
      </div>
      <div className="illustration">
        <div className="Macbook">
          <img className="Macbook" src={macbook} alt="illustration-projet" />
        </div>
        <div className="SoftSkills">
          <img width="40px" src={soft} alt="picto1" />
          <h3>Soft Skills</h3>
          <ul>
            <li> Graphisme : Photoshop, illustrator </li>
            <li> Systèmes : Git, Github, Windows </li>
            <li> 3D : blender, splines </li>
            <li> Autres : Figma, trello </li>
          </ul>
          <img width="40px" src={soft} alt="picto2" />
          <h2> Savoir-être</h2>
          <ul>
            <li> Adaptable </li>
            <li> Organisé </li>
            <li> Créatif </li>
            <li> Rigueur </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import "./Skills.css";
import ensemble from "../assets/ensemble-projets.png";

const Skills = () => {
  return (
    <div>
      <div className="ContainerSkill">
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
            Projet Wild Code School 3 en cours - En équipe. Création d'une plate-forme santé.Le
            projet sera réalisé en 2,5 mois en utilisant la méthode Agile SCRUM.
            Une présentation du projet sera faite au terme des 2,5 mois devant un jury, des entreprises, ainsi que les différentes personnes de la Wild Code School de Bordeaux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

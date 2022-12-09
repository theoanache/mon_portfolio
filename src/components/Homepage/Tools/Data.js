import JS from "./assets/JS.png";
import Github from "./assets/github-white.png";
import Linkedin from "./assets/linkedin.png";
import Lupa from "./assets/carte-visite-lupa.jpg";
import Photoshop from "./assets/Adobe-Photoshop-Logo.png";
import Illustrator from "./assets/Illustrator-Logo.png";
import CSS from "./assets/CSS3_logo.png";
import HTML from "./assets/html5-logo.png";
import React from "./assets/React-icon.png";
import Figma from "./assets/figma-logo.png";
import After from "./assets/Adobe_After_Effects_CC_icon.svg.png";
import Autodesk from "./assets/autodesk-3ds-max-small-social-400.png";
import Wilda from "./assets/Projet_wilda-trattoria.jpg";
import Wild_festival from "./assets/ensemble-site-wild-festival.jpg";
import Affiche_kizomba from "./assets/affiche-kizomba-mayotte.jpg";
import Anim_meca from "./assets/anim-meca.jpg";
import Casque from "./assets/casque-motoblouz.jpg";
import BachataLoca from "./assets/logo-bachata-loca.jpg";

const Projets = [
  {
    id: 1,
    title: "Wilda Trattoria",
    img: Wilda,
    description:
      "Projet Wild Code School - 2 semaines - En équipe. Création d'un site vitrine pour le restaurant Wilda Trattoria. Le projet a été réalisé en deux semaines, dans un premier temps, création de la maquette en wireframe, création de l'architecture du projet, initialisation du projet du GIT/GITHUB répartition des taches puis lancement de la phase de développement en HTML/CSS.",
    logiciel1: HTML,
    logiciel2: CSS,
    logiciel3: JS,
    Logiciel4: Figma,
    Logiciel5: false,
    Logiciel6: false,
    Link1: Github,
    Link2: Linkedin,
    Link3: false,
  },
  {
    id: 2,
    title: "Lupa",
    img: Lupa,
    description:
      "Création charte graphique et logo pour une entreprise de création de bijoux fait main",
    logiciel1: Photoshop,
    logiciel2: Illustrator,
    logiciel3: false,
    Logiciel4: false,
    Logiciel5: false,
    Logiciel6: false,
    Link1: false,
    Links2: false,
    Link3: false,
  },
  {
    id: 3,
    title: "Wild Festival",
    img: Wild_festival,
    description:
      "Création charte graphique et logo pour une entreprise de création de bijoux fait main",
    logiciel1: HTML,
    logiciel2: CSS,
    logiciel3: JS,
    Logiciel4: React,
    Logiciel5: Figma,
    Logiciel6: Photoshop,
    Link1: Github,
    Links2: false,
    Link3: false,
  },
  {
    id: 4,
    title: "Flyer Kizomba Mayotte",
    img: Affiche_kizomba,
    description: "Flyer réalisé pour une soirée danse à mayotte.",
    logiciel1: Photoshop,
    logiciel2: false,
    logiciel3: false,
    Logiciel4: false,
    Logiciel5: false,
    Logiciel6: false,
    Link1: false,
    Links2: false,
    Link3: false,
  },
  {
    id: 5,
    title: "Animation mécanique",
    img: Anim_meca,
    description:
      "Projet full 3D réalisé sur 3DS Max avec le moteur de rendu Vray, modélisation, texture, rendu.",
    logiciel1: Autodesk,
    logiciel2: After,
    logiciel3: false,
    Logiciel4: false,
    Logiciel5: false,
    Logiciel6: false,
    Link1: false,
    Links2: false,
    Link3: false,
  },
  {
    id: 6,
    title: "Pimp My Helmet",
    img: Casque,
    description:
      "Création charte graphique et logo pour une entreprise de création de bijoux fait main",
    logiciel1: Photoshop,
    logiciel2: false,
    logiciel3: false,
    Logiciel4: false,
    Logiciel5: false,
    Logiciel6: false,
    Link1: false,
    Links2: false,
    Link3: false,
  },
  {
    id: 7,
    title: "Logo Bachata Loca",
    img: BachataLoca,
    description:
      "Création charte graphique et logo pour une association de danse Latine à Bordeaux",
    logiciel1: Photoshop,
    logiciel2: Illustrator,
    logiciel3: false,
    Logiciel4: false,
    Logiciel5: false,
    Logiciel6: false,
    Link1: false,
    Links2: false,
    Link3: false,
  },
  {
    id: 8,
    title: "Wild Festival",
    img: Wild_festival,
    description:
      "Création charte graphique et logo pour une entreprise de création de bijoux fait main",
    logiciel1: HTML,
    logiciel2: CSS,
    logiciel3: JS,
    Logiciel4: React,
    Logiciel5: Figma,
    Logiciel6: Photoshop,
    Link1: Github,
    Links2: false,
    Link3: false,
  },
  {
    id: 9,
    title: "Wild Festival",
    img: Wild_festival,
    description:
      "Création charte graphique et logo pour une entreprise de création de bijoux fait main",
    logiciel1: HTML,
    logiciel2: CSS,
    logiciel3: JS,
    Logiciel4: React,
    Logiciel5: Figma,
    Logiciel6: Photoshop,
    Link1: Github,
    Links2: false,
    Link3: false,
  },
  {
    id: 10,
    title: "Wild Festival",
    img: Wild_festival,
    description:
      "Création charte graphique et logo pour une entreprise de création de bijoux fait main",
    logiciel1: HTML,
    logiciel2: CSS,
    logiciel3: JS,
    Logiciel4: React,
    Logiciel5: Figma,
    Logiciel6: Photoshop,
    Link1: Github,
    Links2: false,
    Link3: false,
  },
  {
    id: 11,
    title: "Wild Festival",
    img: Wild_festival,
    description:
      "Création charte graphique et logo pour une entreprise de création de bijoux fait main",
    logiciel1: HTML,
    logiciel2: CSS,
    logiciel3: JS,
    Logiciel4: React,
    Logiciel5: Figma,
    Logiciel6: Photoshop,
    Link1: Github,
    Links2: false,
    Link3: false,
  },
  {
    id: 12,
    title: "Wild Festival",
    img: Wild_festival,
    description:
      "Création charte graphique et logo pour une entreprise de création de bijoux fait main",
    logiciel1: HTML,
    logiciel2: CSS,
    logiciel3: JS,
    Logiciel4: React,
    Logiciel5: Figma,
    Logiciel6: Photoshop,
    Link1: Github,
    Links2: false,
    Link3: false,
  },
];

export default Projets;

import JS from "./assets/JS.png";
import Github from "./assets/github-white.png";
import Photoshop from "./assets/Adobe-Photoshop-Logo.png";
import Illustrator from "./assets/Illustrator-Logo.png";
import CSS from "./assets/CSS3_logo.png";
import HTML from "./assets/html5-logo.png";
import React from "./assets/React-icon.png";
import Figma from "./assets/figma-logo.png";
import After from "./assets/Adobe_After_Effects_CC_icon.svg.png";
import Autodesk from "./assets/autodesk-3ds-max-small-social-400.png";
import Spline from "./assets/spline3d.png";
import Internet from "./assets/internet-logo-white.png";
import Youtube from "./assets/Youtube_logo.png";
import Wilda from "./assets/Projet_wilda-trattoria.jpg";
import Wild_festival from "./assets/wild-festival.jpg";
import Affiche_kizomba from "./assets/affiche-kizomba-mayotte.jpg";
import Anim_meca from "./assets/anim-meca.jpg";
import Casque from "./assets/casque-motoblouz.jpg";
import BachataLoca from "./assets/logo-bachata-loca.jpg";
import TravelMito from "./assets/hackathon-travelmito.png.jpg";
import Escalator from "./assets/Projet_3D-escalator.jpg";
import Casquette from "./assets/casquette_adrenaline.jpg";
import Acucar from "./assets/roll-up-acucar.jpg";
import Enah from "./assets/logo-enah-consulting.jpg";
import Reversal from "./assets/reversal.jpg";

const Projets = [
  {
    id: 1,
    title: "Hackathon Travel Mito",
    img: TravelMito,
    description:
      "Théme voyage. Application liant la 3D au web.Bienvenue sur TravelMito, le site qui livre clé en main le kit complet du faux voyage: fausse carte postale, faux selfie, faux e-billet d'avion...",
    logiciels: [
      { log: HTML },
      { log: CSS },
      { log: JS },
      { log: Spline },
      { log: Photoshop },
    ],
    Links: [
      {
        Link: Github,
        Linka: "https://github.com/wild-hackaton-voyage/travelmito",
      },
      {
        Link: Internet,
        Linka:
          "https://mbirepinte-github-io-travel-mito-lfzviz2sc-mbirepinte.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    title: "Wild Festival",
    img: Wild_festival,
    description:
      "Projet Wild Code School - 2 mois - En équipe. Création d'un site d'évènementiel de festivals et artistes à partir d'un API rest.Le projet a été réalisé en 2 mois avec un client fictif en utilisant la méthode Agile SCRUM. Après avoir réalisé les maquettes, notre backlog, nous avons commencer à crée notre application en React. Chaque semaine nous avons fait une présentation de notre sprint aux clients.Une présentation du projet a été faite au terme des 2 mois.",
    logiciels: [
      { log: HTML },
      { log: CSS },
      { log: JS },
      { log: React },
      { log: Figma },
      { log: Photoshop },
    ],
    Links: [
      {
        Link: Github,
        Linka:
          "https://github.com/WildCodeSchool/2022-09-JS-BDX-P2-Wild-Festival",
      },
    ],
  },
  {
    id: 3,
    title: "Wilda Trattoria",
    img: Wilda,
    description:
      "Projet Wild Code School - 2 semaines - En équipe. Création d'un site vitrine pour le restaurant Wilda Trattoria. Le projet a été réalisé en deux semaines, dans un premier temps, création de la maquette en wireframe, création de l'architecture du projet, initialisation du projet du GIT/GITHUB répartition des taches puis lancement de la phase de développement en HTML/CSS. Une présentation du projet a été faite au terme des 2 semaines.",
    logiciels: [{ log: HTML }, { log: CSS }, { log: JS }, { log: Figma }],
    Links: [
      {
        Link: Github,
        Linka: "https://github.com/Wild-Restaurant/Wilda-Trattoria",
      },
      { Link: Internet, Linka: "https://wilda-trattoria.netlify.app/" },
    ],
  },
  {
    id: 4,
    title: "Logo Pyrénées Adrenaline",
    img: Casquette,
    description:
      "Logo pour une entreprise qui propose des vols en paramoteur aux particuliers en quête de sensation forte.",
    logiciels: [{ log: Photoshop }],
    Links: [],
  },
  {
    id: 5,
    title: "Flyer Kizomba Mayotte",
    img: Affiche_kizomba,
    description: "Flyer réalisé pour une soirée danse à mayotte.",
    logiciels: [{ log: Photoshop }],
    Links: [],
  },
  {
    id: 6,
    title: "Animation mécanique",
    img: Anim_meca,
    description:
      "Projet full 3D réalisé sur 3DS Max avec le moteur de rendu Vray, modélisation, texture, rendu.",
    logiciels: [{ log: Autodesk }, { log: After }],
    Links: [
      { Link: Youtube, Linka: "https://www.youtube.com/watch?v=on1RtOJn2Cc" },
    ],
  },
  {
    id: 7,
    title: "Escalator 3D",
    img: Escalator,
    description:
      "Modélisation, animation, lighting, rendu d'un escalator en full 3D réaliser avec 3DSMax dans le cadre d'un projet de groupe pour le court métrage Reversal",
    logiciels: [{ log: Autodesk }, { log: After }],
    Links: [
      { Link: Youtube, Linka: "https://www.youtube.com/watch?v=YJoM2v5xF1c" },
    ],
  },
  {
    id: 8,
    title: "Logo Bachata Loca",
    img: BachataLoca,
    description:
      "Création charte graphique et logo pour une association de danse Latine à Bordeaux",
    logiciels: [{ log: Photoshop }, { log: Illustrator }],
    Links: [],
  },
  {
    id: 9,
    title: "Açucar",
    img: Acucar,
    description:
      "Création charte graphique et logo pour un festival de Danse latine sur Bordeaux organisé par l'association DKB",
    logiciels: [{ log: Photoshop }],
    Links: [],
  },
  {
    id: 10,
    title: "Enah Consulting",
    img: Enah,
    description:
      "Consultant en management d’entreprise, missions de conseils en organisations et managements.",
    logiciels: [{ log: Photoshop }],
    Links: [],
  },
  {
    id: 11,
    title: "Pimp My Helmet",
    img: Casque,
    description:
      "Concours Organisé par Motoblouz, création d’un design pour un casque intégral",
    logiciels: [{ log: Photoshop }],
    Links: [],
  },
  {
    id: 12,
    title: "Court métrage Reversal",
    img: Reversal,
    description:
      "Court métrage réalisé en équipe sur 9 mois dans le cadre de notre projet de fin d'étude",
    logiciels: [{ log: Autodesk }, { log: After }, { log: Photoshop }],
    Links: [
      { Link: Youtube, Linka: "https://www.youtube.com/watch?v=YJoM2v5xF1c" },
    ],
  },
];

export default Projets;

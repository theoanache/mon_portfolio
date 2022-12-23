import React from "react";
import { NavLink } from "react-router-dom";
import "./MyProjects.css";
import { useParams } from "react-router-dom/dist";
import Projets from "../Homepage/Tools/Data";
import Navbar from "../Navbar";

const MyProjects = () => {
  const { id } = useParams();

  console.log(Projets[id])
  return (
    <div>
      <div className="Navbar">
        <nav className="Nav">
          <ul className="Menu">
            <li>
              <NavLink to="/" activeClassName="Home">
                <font color="#F3BD1D">01</font>&nbsp; Retour
              </NavLink>
              <div className="Ligne"></div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="PageProjects">
        <div className="background"></div>
        <div className="LeftPart">
          <h2> {Projets[id].title}</h2>
          <p className="Description"> {Projets[id].description}</p>
          <div className="LogicielLiens">
            <div className="LogicielsPart">
              <h2> Logiciels </h2>
              <div className="Logiciels">
                {Projets[id].logiciels.map((element) => (
                  <img className="Logiciel" src={element.log} alt="Logiciel1" />
                ))}
              </div>
            </div>
            <div className="LogicielsPart">
              <h2> Liens </h2>
              <div className="Logiciels">
                {Projets[id].Links.map((element) => (
                  <a href={element.Linka}>
                    <img className="Logiciel" src={element.Link} alt="Link1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="RightPart">
          <img
            className="ImgProjet"
            src={Projets[id].img}
            alt={Projets[id].title}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;

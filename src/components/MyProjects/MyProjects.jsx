import React from "react";
import { NavLink } from "react-router-dom";
import "./MyProjects.css";
import { useNavigate, useParams } from "react-router-dom/dist";
import Projets from "../Homepage/Tools/Data";

const MyProjects = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const changeProjet = (where, id) => {
    if (Number(id) === 0 && where === "back") {
      return;
    }
    where === "next"
      ? navigate(`/projet/${Number(id) + 1}`)
      : navigate(`/projet/${id - 1}`);
  };

  console.log(Projets[id]);
  return (
    <div className="Container_One_Project">
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
      <div className="ContenerProjet">
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
                    <img
                      className="Logiciel"
                      src={element.log}
                      alt="Logiciel1"
                    />
                  ))}
                </div>
              </div>
              <div className="LogicielsPart">
                <h2> Liens </h2>
                <div className="Logiciels">
                  {Projets[id].Links.map((element) => (
                    <a href={element.Linka}>
                      <img
                        className="Logiciel"
                        src={element.Link}
                        alt="Link1"
                      />
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
      <div className="Container_button">
        <button
          type="button"
          className="Button"
          onClick={() => changeProjet("back", id)}
        >
          Pr??cedent
        </button>
        <button
          type="button"
          className="Button"
          onClick={() => changeProjet("next", id)}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default MyProjects;

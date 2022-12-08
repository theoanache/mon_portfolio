import React from "react";
import "./Contact.css";
import Github from "../assets/github-white.png";
import Linkedin from "../assets/linkedin.png";

const Contact = () => {
  return (
    <div id="Contact" className="ContainerContact">
      <div className="TextContactMe">
        <div>
          <h3 className="PrenonsContact"> Prenons contact ! </h3>
          <h3>Contactez moi par mail ou sur les réseaux sociaux !</h3>
        </div>
        {/* <div className="Logo">
          <img src={Logo} alt="logo" />
        </div> */}
        <div className="SocialNetwork">
          <img src={Github} alt="Github" />
          <img src={Linkedin} alt="Linkedin" />
        </div>
      </div>
      <div className="Input">
        <div className="Name">
          <span> Nom</span>
          <input type="text" required="required" />
        </div>
        <br />
        <div className="Mail">
          <span> Mail</span>
          <input type="text" required="required" />
        </div>
        <br />
        <div className="Message">
          <span> Message</span>
          <input type="text" required="required" />
        </div>
        <div className="ContainerButton">
          <button type="button" className="ButtonEnvoyer">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

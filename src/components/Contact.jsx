import React from "react";
import "./Contact.css";
import Github from "../assets/picto-github.png";
import Linkedin from "../assets/picto-linkedin.png";
import Mail from "../assets/picto-mail.png";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div id="Contact" className="ContainerContact">
        <div className="TextContactMe">
          <div>
            <h3 className="PrenonsContact"> Prenons contact ! </h3>
            <h3>
              Si vous avez des questions ou si vous souhaitez simplement dire
              bonjour, n'hésitez pas à me contacter. Voici mes pages sociales
              ainsi que mon email:
            </h3>
          </div>
        </div>
        <div className="SocialNetwork">
          <a href="https://github.com/theoanache">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/theoanache/">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="mailto:theoo.anache@gmail.com">
            <img src={Mail} alt="Mail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

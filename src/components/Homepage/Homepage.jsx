import React from "react";
import Contact from "../Contact";
import Navbar from "../Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";


const Homepage = () => {


  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Homepage;

import React from "react";
import Contact from "../Contact";
import Loader from "../Loader";
import Navbar from "../Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";


const Homepage = () => {


  return (
    <div>
      <Loader />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Homepage;

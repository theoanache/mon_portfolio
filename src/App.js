import "./App.css";
import "./assets/fonts/Montserrat-VariableFont_wght.ttf";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import MyProjects from "./components/MyProjects/MyProjects";
import Datacv from "./components/Homepage/Datacv";
import Portfolio from "./components/Homepage/Portfolio";
import Error from "./components/Error.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projet/:id" element={<MyProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Datacv />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

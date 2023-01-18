import React, { useEffect } from "react";
import Myself from "./components/Myself";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * @author
 * @function App
 **/

const App = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Myself />
      <Skills />
      {/* <Experience /> */}
      <Qualification />
      <Projects />
      <Footer />
      <ScrollUp/>
    </div>
  );
};

export default App;

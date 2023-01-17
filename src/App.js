import React, { useEffect } from "react";
import Myself from "./components/Myself";
import Specializing from "./components/Specializing";
import Experience from "./components/Experience";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Footer from "./components/Footer";
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
      <Specializing />
      <Experience />
      <LatestProjects />
      <Qualification />
      <Footer />
    </div>
  );
};

export default App;

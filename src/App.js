import React, { useEffect } from "react";
import Header from "./components/Header";
import Myself from "./components/Myself";
import Specializing from "./components/Specializing";
import Expertise from "./components/Expertise";
import LatestProjects from "./components/LatestProjects";
// import Qualification from "./components/Qualification";
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
      <Header />
      <Myself />
      <Specializing />
      <Expertise />
      <LatestProjects />
      {/* <Qualification /> */}
      <Footer />
    </div>
  );
};

export default App;

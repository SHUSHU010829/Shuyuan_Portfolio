import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import AboutImg from "../../assets/images/about.png";
import Resume from "../../assets/ResumeENG.pdf";
import Info from './info';
import "./style.css";

/**
 * @author
 * @function Expertise
 **/

const percentage = 70;

const About = (props) => {
  return (
    <div className="full_container" style={{ marginTop: "50px", padding: "50px 0" }}>
      <div>
        <MediumHeading text="About Me" />
        <SmallHeading text="My introduction" />
      </div>
      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />
        <div className="about_data">
          {/* <Info />  */}
          <p className="about_description font-16 grey">
            I can be committed and persistent in everything I want to explore and learn through every project I was interested in.
            When I first entered college, I had almost no experience in the field of development and design,
            but since I started learning these skills in my club,
            I have been able to prepare several hours of highly satisfying courses for my student in club courses.
            I hope to increase my experience and different kinds of knowledge through the internship.
          </p>
          <a download="" href={Resume}><button className="simple_button">Go to my Blog</button></a>
        </div>
      </div>
    </div>
  );
};

export default About;

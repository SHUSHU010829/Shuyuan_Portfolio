import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import AboutImg from "../../assets/images/about.png";
import Resume from "../../assets/ResumeENG.pdf";
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
        <SmallHeading text="Who am I?" />
      </div>
      <div className="about_container container grid">
        <div className="about_img_box">
          <img src={AboutImg} alt="" />
          <div className="about_img_box_content">
            <h3 className="about_img_name">Shuyuan</h3>
            <span className="about_img_post">Nice to meet you!</span>
          </div>
        </div>
        <div className="about_data">
          {/* <Info />  */}
          <p className="about_description">
            Hello! I'm Shuyuan, a Software Engineer based in <span className="about_description_emphasis">Taiwan</span> who will graduate from <span><a href="https://www.fcu.edu.tw/" target="_blank" className="about_description_link">▸ Feng Chia University</a></span> with a degree in Information Engineering.
            Currently working as an intern at <span><a href="https://www.softmobile.com.tw/" target="_blank" className="about_description_link">▸ Softmobile Technology Corporation</a></span>.
            <br />I have a passion for all things technology and design, from <span className="about_description_emphasis">software engineering</span> to <span className="about_description_emphasis">UI/UX</span>.
            <br />You can view more my portfolio on my <span><a href="https://www.behance.net/annie55063bf69" target="_blank" className="about_description_link">▸ Behance</a></span> page, or Check my <span><a href="https://github.com/FOR-Shu" target="_blank" className="about_description_link">▸ Github</a></span> for some cool things.
            <br />My work includes designing the application and web UI interface, and developing it！
          </p>
          {/* <a download="" href={Resume}><button className="simple_button">Go to my Blog</button></a> */}
        </div>
      </div>
    </div>
  );
};

export default About;

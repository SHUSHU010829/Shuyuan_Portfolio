import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";
import "./style.css";

/**
 * @author
 * @function Specializing
 **/

const Specializing = (props) => {

  return (
    <div className="container" data-aos="fade-up">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I can do" />
        <MediumHeading text="Skills" />
        <div className="skill-box">
          <span className="title">HTML/CSS/SCSS</span>
          <div className="skill-bar">
            <span className="skill-per html">
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">JavaScript/ReactJS</span>
          <div className="skill-bar">
            <span className="skill-per js">
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">React Native</span>
          <div className="skill-bar">
            <span className="skill-per reactnative">
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Flutter</span>
          <div className="skill-bar">
            <span className="skill-per flutter">
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Swift UI</span>
          <div className="skill-bar">
            <span className="skill-per swift">
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">MongoDB</span>
          <div className="skill-bar">
            <span className="skill-per mongodb">
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">FIGMA</span>
          <div className="skill-bar">
            <span className="skill-per figma">
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Adobe PS/AI/XD</span>
          <div className="skill-bar">
            <span className="skill-per adobe">
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Specializing;

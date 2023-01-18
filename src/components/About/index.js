import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import "./style.css";

/**
 * @author
 * @function Expertise
 **/

const percentage = 70;

const About = (props) => {
  return (
    <div className="container" style={{ marginTop: "50px", padding: "50px 0" }}>
      <div>
        <MediumHeading text="About Me" />
        <SmallHeading text="My introduction" />
      </div>
      <Card
        style={{
          padding: "30px",
          width: "320px",
          margin: "100px auto",
          position: "relative",
          zIndex: 1,
        }}
        data-aos="flip-up"
      >
        <div className="flexRow align-center">
          <div style={{ width: "80px", height: "80px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: colors.primaryColor,
                pathColor: colors.primaryColor,
              })}
            />
          </div>
          <h2 className="textColor mlr-10">Development</h2>
        </div>
        <p className="grey mtb-10 font-12">
          blablablablabla
        </p>
      </Card>
    </div>
  );
};

export default About;

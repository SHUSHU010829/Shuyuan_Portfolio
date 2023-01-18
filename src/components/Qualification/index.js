import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import { FaCalendar } from "react-icons/fa";

import "./style.css";

/**
 * @author
 * @function Qualification
 **/

const Qualification = (props) => {
  return (
    <div className="container qalification_container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualifications" />
      <MediumHeading text={"My Personal Journey"} />
      <Tile
        title="SoftMobile Technology Corporation"
        mediumTitle="Frontend Intern"
        desc="2022.07-Present"
      />
      <Tile
        title="FCU iOSClub"
        mediumTitle="Vice Director & Word Processing"
        desc="2020-2022"
      />
    </div>
  );
};

export default Qualification;

import React from "react";
import { FaCalendar } from "react-icons/fa";

/**
 * @author
 * @function Tile
 **/

const Tile = ({ title, mediumTitle, desc }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="mtb-10"
      style={{ background: "#fff", padding: "20px", margin: "20px" }}
    >
      <p className="primaryColor font-14 bold-500 mtb-10 uppercase">{title}</p>
      <p className="textColor font-14 bold-600 mtb-10 uppercase">
        {mediumTitle}
      </p>
      <div className="font-12 mtb-10 grey">
        <FaCalendar size={12} /> {desc}
      </div>
    </div>
  );
};

export default Tile;

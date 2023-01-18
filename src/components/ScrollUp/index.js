import React from "react";
import Button from "../UI/Button";
import "./style.css";
import { FaArrowUp } from "react-icons/fa";

/**
 * @author
 * @function ScrollUp
 **/

const ScrollUp = (props) => {

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 500) scrollUp.classList.add("show_scroll");
    else scrollUp.classList.remove("show_scroll");
  })


  return (
    <a className="scrollup" onClick={topFunction}>
      <FaArrowUp className="scrollup_icon" />
    </a>
  );
};

export default ScrollUp;

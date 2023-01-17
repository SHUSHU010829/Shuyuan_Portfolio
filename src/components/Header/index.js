import React from "react";
import "./style.css";
import me from "../../assets/images/me.png";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav>
        <input type='checkbox' id='check' />
        <label for='check'>
          <i class='fa fa-bars' id='btn'></i>
          <i class='fa fa-times' id='cancel'></i>
        </label>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolios</a></li>
          <li><a href="#">Blog</a></li>
          <li> <a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

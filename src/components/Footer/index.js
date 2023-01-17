import React from "react";
import SocialConnect from "../UI/SocialConnect";
import "./style.css";
// import conversation from "../../assets/images/conversation.png";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div className="container">
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "50px 0" }}
      >
        <div className="mtb-10">
          <SocialConnect />
        </div>
        <div className="footerMenus mtb-10">
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolios</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        {/* <div className="conversationContainer primaryBgColor mtb-10">
          <img src={conversation} alt="" />
        </div> */}
      </div>
      {/* <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Dave Gandy - Flaticon</a> */}
    </div>
  );
};

export default Footer;
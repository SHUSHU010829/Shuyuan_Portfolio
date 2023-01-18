import React from "react";
import Button from "../UI/Button";
import "./style.css";
import { FaGithub, FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div>
      <div className="">
        <footer className="footer">
          <div className="footer_container">
            <h1 className="footer_title">Shuyuan</h1>
            <div className="footer_social">
              <a className="footer_social-link" href="#" target="_blank">
                <FaFacebookSquare/>
              </a>
              <a className="footer_social-link" href="#" target="_blank">
                <FaInstagram/>
              </a>
              <a className="footer_social-link" href="#" target="_blank">
                <FaGithub/>
              </a>
              <a className="footer_social-link" href="#" target="_blank">
                <FaLinkedin/>
              </a>
            </div>
            <span className="footer_copy">&#169; ShuyuanChaung. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
    // <div className="container">
    //   <div
    //     className="flexRow flexCol justify-sb align-center"
    //     style={{ margin: "50px 0" }}
    //   >
    //     <div className="flexRow">
    //       <div className="mtb-10">
    //         <SocialConnect />
    //       </div>
    //     </div>
    //     {/* <div className="conversationContainer primaryBgColor mtb-10">
    //       <img src={conversation} alt="" />
    //     </div> */}
    //   </div>
    //   {/* <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Dave Gandy - Flaticon</a> */}
    // </div>
  );
};

export default Footer;

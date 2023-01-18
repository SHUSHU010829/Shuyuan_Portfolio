import React from "react";
import Button from "../UI/Button";
import "./style.css";
import { FaGithub, FaBehance, FaLinkedinIn,FaPencilAlt } from "react-icons/fa";

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
              <a className="footer_social-link" href="https://forshu.com/" target="_blank">
                <FaPencilAlt/>
              </a>
              <a className="footer_social-link" href="https://www.behance.net/annie55063bf69" target="_blank">
                <FaBehance/>
              </a>
              <a className="footer_social-link" href="https://github.com/FOR-Shu" target="_blank">
                <FaGithub/>
              </a>
              <a className="footer_social-link" href="https://www.linkedin.com/in/shuyuanchuang/" target="_blank">
                <FaLinkedinIn/>
              </a>
            </div>
            <span className="footer_copy">Built by ShuyuanChaung</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

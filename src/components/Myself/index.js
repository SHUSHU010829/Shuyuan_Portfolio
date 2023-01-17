import { React, useState } from "react";
import Button from "../UI/Button";
import "./style.css";
import me from "../../assets/images/me.png";
import { FaMapMarkerAlt } from 'react-icons/fa';

/**
 * @author
 * @function Myself
 **/

const Myself = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {/* ------- Nav ---------*/}
      <nav className="navbarItems">
        <h1 className="navbar-logo">Shuyuan</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li><a href="#" className="nav-links">About</a></li>
          <li><a href="#" className="nav-links">Project</a></li>
          <li><a href="#" className="nav-links">Blog</a></li>
          <li> <a href="#" className="nav-links">Contact</a></li>
          <li> <a href="#" className="nav-links-mobile">My Resume</a></li>
          <button>My Resume</button>
        </ul>
      </nav>
      {/* ------- Self ---------*/}
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="flexRow flexCol justify-sb align-center">
          <div data-aos="fade-right">
            <p className="uppercase bold-500 textColor ls-1 mtb-10">
              <span className="primaryColor">Hello,</span> I am Shuyuan Chuang
            </p>
            <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
            <p className="font-12 grey mtb-10">Frontend Developer & UI Designer for Web and Apps.</p>
            <div className="flexRow" style={{ margin: "30px 0" }}>
              <div>
                <Button label="Contact Me" />
              </div>
              <div className="mlr-10">
                <Button label="Download Resume" inverse={true} />
              </div>
            </div>
          </div>
          {/* ------- logo pic ---------*/}
          <div data-aos="fade-left">
            <div className="meRightImgContainer">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Myself;

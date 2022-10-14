import React from "react";
// import me from "../../assets/images/me-right.png";
import Button from "../UI/Button";
import "./style.css";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <>
      <div className="footerMenus mtb-10">
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolios</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="flexRow flexCol justify-sb align-center">
          <div data-aos="fade-right">
            <p className="uppercase bold-500 textColor ls-1 mtb-10">
              <span className="primaryColor">Hello,</span> I am Shuyuan Chuang
            </p>
            <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
            <p className="font-12 grey mtb-10">Frontend Developer for Web and Apps.</p>
            <div className="flexRow" style={{ margin: "30px 0" }}>
              <div>
                <Button label="Hire Me" />
              </div>
              <div className="mlr-10">
                <Button label="Download CV" inverse={true} />
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="meRightImgContainer">
              {/* <img src={me} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Hero;

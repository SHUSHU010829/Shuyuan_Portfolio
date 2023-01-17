import React from "react";
import Button from "../UI/Button";
import "./style.css";
import me from "../../assets/images/me.png";

/**
 * @author
 * @function Myself
 **/



const Myself = (props) => {

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="container" style={{ marginTop: "200px" }}>
        <div className="flexRow flexCol justify-sb align-center">
          <div data-aos="fade-right">
            <p className="uppercase bold-500 textColor ls-1 mtb-10">
              <span className="primaryColor">Hello,</span> I am Shuyuan Chuang
            </p>
            <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
            <p className="font-12 grey mtb-10">Frontend Developer for Web and Apps.</p>
            
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

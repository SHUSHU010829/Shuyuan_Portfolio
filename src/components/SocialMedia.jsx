import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";
import { TbBrandBlogger } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";

const SocialMedia = () => (
  <div className="app__social">
    <p className="p-text-sm">Resume</p>
    <a
      href="https://drive.google.com/drive/folders/1LooJVB79MxyRvNuEwRXf8ld_apYJP6PT?usp=share_link"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <HiDownload />
      </div>
    </a>
    <a href="https://forshu.com/" target="_blank" rel="noreferrer">
      <div>
        <TbBrandBlogger />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/shuyuanchuang/"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <FaLinkedinIn />
      </div>
    </a>
    <a href="https://github.com/FOR-Shu" target="_blank" rel="noreferrer">
      <div>
        <FaGithub />
      </div>
    </a>
    <a
      href="https://www.behance.net/annie55063bf69"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsBehance size={5}/>
      </div>
    </a>
  </div>
);

export default SocialMedia;

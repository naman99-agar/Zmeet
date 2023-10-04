import React from "react";
import { githubIcon } from "../assets";

const Footer = () => {
  return (
    <div className="h-14 flex justify-center items-center bg-[#DBFFF6] mt-[4rem]">
      <img src={githubIcon} className="h-7 mr-2" />| Made with ❤️
    </div>
  );
};

export default Footer;

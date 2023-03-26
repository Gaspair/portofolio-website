import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <FaLinkedin />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
}

export default SocialMedia;

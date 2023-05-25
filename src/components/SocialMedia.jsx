import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a target="_blank" href="https://github.com/Gaspair">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/dragos-iulian-baluta-9209b6256/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;

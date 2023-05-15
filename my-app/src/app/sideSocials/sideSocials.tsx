import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




export default function SideSocials() {
  return (
    <div className="fixed bottom-0 z-10 text-center ml-6 w-16">
      <div className="mb-1">
        <a href="mailto: desmondgilmour@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="social-icon mb-1 cursor-pointer text-white hover:text-blue-500 transform hover:-translate-y-1 transition-all" />
        </a>
      </div>
      <div className="mb-1">
        <a href="https://stackoverflow.com/users/12100881/desmond-gilmour">
        <FontAwesomeIcon icon={faStackOverflow} className="social-icon mb-1 cursor-pointer text-white hover:text-blue-500 transform hover:-translate-y-1 transition-all" />
        </a>
      </div>
      <div className="mb-1">
        <a href="https://github.com/dessygil">
        <FontAwesomeIcon icon={faGithub} className="social-icon mb-1 cursor-pointer text-white hover:text-blue-500 transform hover:-translate-y-1 transition-all" />
        </a>
      </div>
      <div className="mb-1">
        <a href="https://www.linkedin.com/in/desmond-gilmour-886b3a128/">
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon mb-1 cursor-pointer text-white hover:text-blue-500 transform hover:-translate-y-1 transition-all" />
        </a>
      </div>
      <div className="border-l-4 border-white h-24 inline-block"></div>
    </div>
  );
}

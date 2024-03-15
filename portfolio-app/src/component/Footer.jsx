import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faCodeBranch,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white py-8 lg:py-12 h-[240px]">
      <div className="lg:w-1/2 px-5 lg:px-4  ">
        <h1 className="font-extrabold text-2xl my-4 uppercase tracking-wide">
          Ashutosh Raosaheb Mahale
        </h1>
        <p className="font-thin">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>
      <div className="lg:w-1/2 px-5 lg:px-0">
        <h1 className="font-extrabold text-2xl my-4 uppercase tracking-widest text-center">
          Social
        </h1>
        <ul className="flex justify-center lg:justify-center text-md">
          <li className="mx-2 lg:mx-4 hover:cursor-grab">
            <FontAwesomeIcon icon={faLink} />{" "}
            <a
              href="https://www.linkedin.com/in/ashutosh-mahale4470/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="mx-2 lg:mx-4 hover:cursor-grab">
            <FontAwesomeIcon icon={faCodeBranch} />{" "}
            <a
              href="https://github.com/ashutosh4470"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="mx-2 lg:mx-4 hover:cursor-grab">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:mahaleashutosh2000@gmail.com">Email</a>
          </li>
          <li className="mx-2 lg:mx-4 hover:cursor-grab">
            <FontAwesomeIcon icon={faMobileAlt} /> Mobile
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

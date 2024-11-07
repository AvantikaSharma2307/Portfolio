import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillContacts,
  AiTwotoneCustomerService,
} from "react-icons/ai";

const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={` w-full fixed z-50 transition-all duration-300 ${
        navColour ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-4 md:py-4">
        <Link to="/" className="flex items-center">
          {/* Add your logo or title here */}
        </Link>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        <div
          className={`${
            expanded ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-white text-lg">
            <li>
              <NavLink
                to="/"
                className="flex items-center hover:text-gray-400 relative group"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineHome className="mr-1" /> Home
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center hover:text-gray-400 relative group"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineUser className="mr-1" /> About
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="flex items-center hover:text-gray-400 relative group"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className="mr-1" /> Projects
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="flex items-center hover:text-gray-400 relative group"
                onClick={() => setExpanded(false)}
              >
                <AiTwotoneCustomerService className="mr-1" /> Services
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <Link
                to="/resume"
                className="flex items-center hover:text-gray-400 relative group"
                onClick={() => setExpanded(false)}
              >
                <CgFileDocument className="mr-1" /> Resume
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center hover:text-gray-400 relative group"
                onClick={() => setExpanded(false)}
              >
                < AiFillContacts className="mr-1" /> Contact
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AvantikaSharma2307"
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-3 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors"
              >
                <CgGitFork className="mr-1" />
                <AiFillStar className="ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

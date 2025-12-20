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
  AiOutlineAudit
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

  useEffect(() => {
  document.body.style.overflow = expanded ? "hidden" : "auto";
}, [expanded]);


  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${navColour ? "bg-black shadow-md" : "bg-transparent"}`}>

      <div className="container mx-auto px-4 flex items-center justify-between py-4 md:py-4">
        <Link to="/" className="flex items-center">
          {/* Add your logo or title here */}
           <div className="w-8 h-8 mx-auto bg-gradient-to-br from-cyan-600 to-purple-700 rounded-2xl flex items-center justify-center text-sm font-bold shadow-2xl">
                    AS
                  </div>
        </Link>
        <button
  className="relative z-50 text-white md:hidden focus:outline-none"
  onClick={() => setExpanded(!expanded)}
  aria-label="Toggle menu"
>
  {expanded ? (
    <span className="text-5xl font-light leading-none">&times;</span>
  ) : (
    <>
      <span className="block w-6 h-0.5 bg-white mb-1"></span>
      <span className="block w-6 h-0.5 bg-white mb-1"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
    </>
  )}
</button>

       <div
  className={`
    ${expanded ? "fixed inset-0 bg-black/95 backdrop-blur-md" : "hidden"}
    flex items-center justify-center
    md:flex md:static md:bg-transparent md:backdrop-blur-0
    md:items-center md:w-auto
  `}
>

         <ul className="
  flex flex-col items-center justify-center gap-6
  text-white text-2xl
  md:flex-row md:space-x-8 md:gap-0 md:text-lg
">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center hover:text-gray-400 relative group ${isActive ? "text-gray-400" : ""}`
                }
                onClick={() => setExpanded(false)}
              >
                <AiOutlineHome className="mr-1" /> Home
                <span className="hidden md:block absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>

              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center hover:text-gray-400 relative group ${isActive ? "text-gray-400" : ""}`
                }
                onClick={() => setExpanded(false)}
              >
                <AiOutlineUser className="mr-1" /> About
                <span className="hidden md:block absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `flex items-center hover:text-gray-400 relative group ${isActive ? "text-gray-400" : ""}`
                }
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className="mr-1" /> Projects
                <span className="hidden md:block absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center hover:text-gray-400 relative group ${isActive ? "text-gray-400" : ""}`
                }
                onClick={() => setExpanded(false)}
              >
                <AiTwotoneCustomerService className="mr-1" /> Services
                <span className="hidden md:block absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>

              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  `flex items-center hover:text-gray-400 relative group ${isActive ? "text-gray-400" : ""}`
                }
                onClick={() => setExpanded(false)}
              >
                <AiOutlineAudit className="mr-1" /> Experience
              <span className="hidden md:block absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>

              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `flex items-center hover:text-gray-400 relative group ${isActive ? "text-gray-400" : ""}`
                }
                onClick={() => setExpanded(false)}
              >
                <CgFileDocument className="mr-1" /> Resume
                <span className="hidden md:block absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>

              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center hover:text-gray-400 relative group ${isActive ? "text-gray-400" : ""}`
                }
                onClick={() => setExpanded(false)}
              >
                <AiFillContacts className="mr-1" /> Contact
               <span className="hidden md:block absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>

              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://github.com/AvantikaSharma2307"
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-3 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors"
              >
                <CgGitFork className="mr-1" />
                <AiFillStar className="ml-1" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

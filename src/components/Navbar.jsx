import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full z-20 bg-black relative flex justify-between items-center py-4 px-8 max-w-7xl mx-auto">
      <div>
        <Link to="/">
          <img className="w-10 h-10 mt-3 ml-4" src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="flex gap-6 pt-3">
        {navLinks.map((link) => (
          <li
            className="text-xl font-[400] cursor-pointer p-1"
            key={link.id}
            onClick={link.handleClick}
          >
            <Link to={`${link.id}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

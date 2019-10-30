import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function hangleChange() {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="Resorts Logo" />
          </Link>
          <button type="button" className="nav-btn" onClick={hangleChange}>
            <FaAlignRight className="nan-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
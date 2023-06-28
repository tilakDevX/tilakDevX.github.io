import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCode } from "@fortawesome/free-solid-svg-icons";
import DownloadBtn from "../SubComponents/DownloadBtn";

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="nav-menu"  className={`navStyle ${isMenuOpen ? "menuOpen" : ""}`}>
      <div>
        <Link to="/" className="aStyle logo" >
          <FontAwesomeIcon icon={faCode} /> 
        </Link>
      </div>

      <div  className={`menuItems ${isMenuOpen ? "open" : ""}`}>
        <NavLink  to="/"  className="nav-link home aStyle" >
          HOME
        </NavLink>
        <NavLink to="/about"   className="nav-link about aStyle"   >
          ABOUT
        </NavLink>
        <NavLink to="/skills"  className="nav-link skills aStyle"  >
          SKILLS
        </NavLink>
        <NavLink to="/project"  className="nav-link projects aStyle"  >
          PROJECT
        </NavLink>
        <NavLink to="/contact"  className="nav-link contact aStyle"  >
          CONTACT
        </NavLink>
        <DownloadBtn />
      </div>

      <button className="toggleButton" onClick={handleToggleMenu}>
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </header>
  );
}

export default Navbar;

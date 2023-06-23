import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCode } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header  className={`navStyle ${isMenuOpen ? "menuOpen" : ""}`}>
      <div>
        <Link to="/" className="aStyle logo" >
          <FontAwesomeIcon icon={faCode} />{" "}
        </Link>
      </div>

      <div id="nav-menu" className={`menuItems ${isMenuOpen ? "open" : ""}`}>
        <NavLink  to="/" id="home" className="aStyle" >
          HOME
        </NavLink>
        <NavLink to="/about" id="about" class="about section" className="aStyle"  >
          ABOUT
        </NavLink>
        <NavLink to="/skills" id="skills" className="aStyle"  >
          SKILLS
        </NavLink>
        <NavLink to="/project" id="projects" className="aStyle"  >
          PROJECT
        </NavLink>
        <NavLink to="/contact" id="contact" className="aStyle"  >
          CONTACT
        </NavLink>
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

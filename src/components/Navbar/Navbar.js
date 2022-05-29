import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Mumbai Tourism
            <i className="fa-solid fa-map-location-dot"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/historical"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Historical
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/activities"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/must-see"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Must-See
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/log-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>{" "}
          </ul>

          {button && <button buttonStyle="btn--outline">SIGN UP</button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

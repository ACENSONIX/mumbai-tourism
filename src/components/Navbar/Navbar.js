import React, { useState, useEffect } from "react";
// The below line is added by VIKRAM SINGH
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore'
import { auth , db } from '../../firebase-config';
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user, setUser] = useState({});
  const [display, setDisplay] = useState("");
  const userCollectionRef = collection(db, "User");
  const [name,setName] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser != null) {
        const data = getDocs(userCollectionRef).then(()=>{setName(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })))}).catch((error)=>{console.log(error)});
        setDisplay(true)
      }
      else {
        setDisplay(false)
      }
    })
  }, []);
  const logout = async () => {
    await signOut(auth)

  }
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
  let email = user?.email;
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

          {/* {button && <button buttonStyle="btn--outline">SIGN UP</button>} */}
        </div>
        {display ?<span style={{ color: "white" }}>{email.substr(0,email.lastIndexOf('@'))}</span>:""}
        {display ? <button onClick={logout} style={{ color: "white" }}>Signout</button> : ""}
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { Button } from "../Button/Button";
import "./HeroSection.css";
// The below two line is added by Vikram Singh 
// Here I am trying to make the display none of the button after signup or login
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
function HeroSection() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        setDisplay(false)
      }
      else {
        setDisplay(true)
      }
    })
  }, []);
  return (
    <div className="hero-container">
      <img src="Assets/Images/2.jpg" alt="" />
      <h1>EXPLORE MUMBAI</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        {display ? <Button onClick={() => { navigate('/sign-up') }}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SIGN UP
        </Button> : ""}
        {display ? <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => { navigate('/log-in') }}
        >
          LOG IN <i className="far fa-play-circle" />
        </Button> : ""}
      </div>
    </div>
  );
}

export default HeroSection;

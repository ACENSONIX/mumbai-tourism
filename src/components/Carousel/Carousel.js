// import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
const Slider = (props) => {
  return (
    <>
      <Carousel className="slider-container">
        <div>
          <img src={props.img1} />
        </div>
        <div>
          <img src={props.img2} />
        </div>
        <div>
          <img src={props.img3} />
        </div>
      </Carousel>
      <p>{props.text}</p>
    </>
  );
};
export default Slider;

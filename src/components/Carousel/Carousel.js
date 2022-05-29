// import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
const Slider = () => {
  return (
    <Carousel className="slider-container">
      <div>
        <img src="Assets/Slider/Home/1.jpg" />
        <p className="legend">Gate Way Of India</p>
      </div>
      <div>
        <img src="Assets/Slider/Home/2.jpg" />
        <p className="legend">Juhu Beach</p>
      </div>
      <div>
        <img src="Assets/Slider/Home/3.jpg" />
        <p className="legend">Gorai Beach</p>
      </div>
      <div>
        <img src="Assets/Slider/Home/4.jpg" />
        <p className="legend">Elephanta Caves</p>
      </div>
      <div>
        <img src="Assets/Slider/Home/5.jpg" />
        <p className="legend">Brij Dham</p>
      </div>
    </Carousel>
  );
};
export default Slider;

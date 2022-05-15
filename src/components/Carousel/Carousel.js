import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
    return (
        <Carousel>
            <div>
                <img src="Assets/Slider/Slider-Dummy-Image-1.jpeg" />
                <p className="legend">Gate Way Of India</p>
            </div>
            <div>
                <img src="Assets/Slider/Slider-Dummy-Image-2.jpeg" />
                <p className="legend">Juhu Beach</p>
            </div>
            <div>
                <img src="Assets/Slider/Slider-Dummy-Image-3.jpeg" />
                <p className="legend">Gorai Beach</p>
            </div>
            <div>
                <img src="Assets/Slider/Slider-Dummy-Image-4.jpeg" />
                <p className="legend">Elephanta Caves</p>
            </div>
            <div>
                <img src="Assets/Slider/Slider-Dummy-Image-5.jpeg" />
                <p className="legend">Brij Dham</p>
            </div>
        </Carousel>
    );
};
export default Slider;
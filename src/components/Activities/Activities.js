import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../Cards/CardItem";
const Activities = () => {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="Assets/Images/3.jpg"
                text="Read More About Mumbaizoo"
                label="Adventure"
                path="/activities-mumbai-zoo"
              />
              <CardItem
                src="Assets/Images/1.jpg"
                text="Activities to do - Mumbai has many exciting activities in nature"
                label="Adventure"
                path="/activities-sanjay-gandhi-national-park"
              />
              <CardItem
                src="Assets/Images/7.jpg"
                text="Mumbai's fun theme park"
                label="Fun"
                path="/activities-essel-world"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Activities;

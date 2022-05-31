import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="Assets/Images/3.jpg"
              text="Historical Landmarks - Visit Mumbai's landmarks of historical significance"
              label="Adventure"
              path="/historical"
            />
            <CardItem
              src="Assets/Images/1.jpg"
              text="Activities to do - Mumbai has many exciting activities in nature"
              label="Luxury"
              path="/activities"
            />
            <CardItem
              src="Assets/Images/7.jpg"
              text="Must-See Places - Check out Mumbai's most iconic sceneries"
              label="Luxury"
              path="/must-see"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

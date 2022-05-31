import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../Cards/CardItem";

const Mustsee = () => {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="Assets/Images/3.jpg"
                text="Worli Sea Link"
                label="Nightlife"
                path="/mustsee-worli-sea-link"
              />
              <CardItem
                src="Assets/Images/1.jpg"
                text="Marine-drive"
                label="must-see"
                path="/mustsee-marine-drive"
              />
              <CardItem
                src="Assets/Images/7.jpg"
                text="Goregaon Film City"
                label="must-see"
                path="/mustsee-film-city"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mustsee;

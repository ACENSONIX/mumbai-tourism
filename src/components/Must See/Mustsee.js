import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../Cards/CardItem";
import Info from "../Info/Info";
const Mustsee = () => {
  return (
    <>
      <Info
        heading="MUST-SEE PLACES"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim blanditiis debitis accusantium vitae totam recusandae, delectus a quo, labore fuga, earum laborum maxime fugiat! Delectus unde iste minus aperiam!"
        img="https://picsum.photos/200/200"
      />
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
